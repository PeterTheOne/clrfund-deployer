import { BigInt, log, store } from "@graphprotocol/graph-ts";
import { BrightIdUserRegistry as BrightIdUserRegistryContract } from "../generated/BrightIdUserRegistry/BrightIdUserRegistry";
import {
  Contribution,
  ContributionWithdrawn,
  FundsClaimed,
  OwnershipTransferred,
  TallyPublished,
  RegisterCall,
  FundingRound as FundingRoundContract,
} from "../generated/FundingRoundFactory/FundingRound";
import { OptimisticRecipientRegistry as RecipientRegistryContract } from "../generated/OptimisticRecipientRegistry/OptimisticRecipientRegistry";

import {
  Recipient,
  Contributor,
  Contribution as FundingRoundContribution,
  Donation,
  FundingRound,
} from "../generated/schema";
// The following functions can then be called on this contract to access
// state variables and other data:
//
// - contract.contributorCount(...)
// - contract.coordinator(...)
// - contract.getAllocatedAmount(...)
// - contract.getVoiceCredits(...)
// - contract.isCancelled(...)
// - contract.isFinalized(...)
// - contract.maci(...)
// - contract.matchingPoolSize(...)
// - contract.nativeToken(...)
// - contract.owner(...)
// - contract.recipientRegistry(...)
// - contract.tallyHash(...)
// - contract.totalSpent(...)
// - contract.totalVotes(...)
// - contract.userRegistry(...)
// - contract.voiceCreditFactor(...)

export function handleContribution(event: Contribution): void {
  log.info("handleContribution", []);

  let fundingRoundId = event.address.toHexString();
  let fundingRound = FundingRound.load(fundingRoundId);
  if (fundingRound == null) {
    log.error("Error: handleContribution failed", []);
    return;
  }

  let timestamp = event.block.timestamp.toString();

  let fundingRoundContract = FundingRoundContract.bind(event.address);
  let voiceCreditFactor = fundingRoundContract.voiceCreditFactor();
  let contributorRegistryAddress = fundingRoundContract.userRegistry();
  let contributorRegistryId = contributorRegistryAddress.toHexString();

  let brightIdUserRegistryContract = BrightIdUserRegistryContract.bind(contributorRegistryAddress);

  //DONE: Retroactively register here as there are no events emitted in registration function
  let contributorAddress = event.params._sender;
  let contributorId = contributorAddress.toHexString();
  let contributor = Contributor.load(contributorId);
  let contributionId = fundingRoundId.concat("-contribution-").concat(contributorId);

  //NOTE: If the contracts aren't being tracked initialize them
  if (contributor == null) {
    let contributor = new Contributor(contributorId);

    let _fundingRounds = [fundingRoundId] as string[];
    contributor.fundingRounds = _fundingRounds;

    contributor.contributorRegistry = contributorRegistryId;
    contributor.verified = true;
    contributor.contributorAddress = contributorAddress;
    contributor.verifiedTimeStamp = brightIdUserRegistryContract.verifications(contributorAddress).value0.toString();

    contributor.save();
  } else {
    let fundingRounds = contributor.fundingRounds;
    if (fundingRounds) {
      fundingRounds.push(fundingRoundId);
      contributor.fundingRounds = fundingRounds;
    } else {
      let _fundingRounds = [fundingRoundId] as string[];
      contributor.fundingRounds = _fundingRounds;
    }

    contributor.contributorRegistry = contributorRegistryId;
    contributor.verified = true;
    contributor.contributorAddress = contributorAddress;
    contributor.verifiedTimeStamp = brightIdUserRegistryContract.verifications(contributorAddress).value0.toString();

    contributor.save();
  }

  //NOTE: Contributions are deleted from DB table if they are withdrawn
  let contribution = new FundingRoundContribution(contributionId);
  contribution.contributor = contributorId;
  contribution.fundingRound = fundingRoundId;
  contribution.amount = event.params._amount;
  contribution.voiceCredits = event.params._amount.div(voiceCreditFactor);
  contribution.createdAt = timestamp;

  //NOTE: Update Funding Round
  fundingRound.contributorCount = fundingRound.contributorCount.plus(BigInt.fromI32(1));
  fundingRound.lastUpdatedAt = timestamp;

  contribution.save();
  fundingRound.save();
}

export function handleContributionWithdrawn(event: ContributionWithdrawn): void {
  log.info("handleContributionWithdrawn", []);
  let fundingRoundId = event.address.toHexString();
  let contributorId = event.params._contributor.toHexString();
  let contributionId = fundingRoundId.concat("-contribution-").concat(contributorId);
  let timestamp = event.block.timestamp.toString();

  store.remove("Contribution", contributionId);

  let fundingRound = FundingRound.load(fundingRoundId);
  if (fundingRound == null) {
    log.error("Error: handleContributionWithdrawn failed", []);
    return;
  }
  fundingRound.contributorCount = fundingRound.contributorCount.minus(BigInt.fromI32(1));
  fundingRound.lastUpdatedAt = timestamp;
}

export function handleFundsClaimed(event: FundsClaimed): void {
  log.info("handleFundsClaimed", []);

  let fundingRoundId = event.address.toHexString();
  let fundingRound = FundingRound.load(fundingRoundId);
  if (fundingRound == null) {
    log.error("Error: handleContribution failed", []);
    return;
  }

  let timestamp = event.block.timestamp.toString();

  let fundingRoundContract = FundingRoundContract.bind(event.address);
  let voiceCreditFactor = fundingRoundContract.voiceCreditFactor();
  let recipientRegistryAddress = fundingRoundContract.recipientRegistry();
  let recipientRegistryId = recipientRegistryAddress.toHexString();

  let recipientRegistryContract = RecipientRegistryContract.bind(recipientRegistryAddress);

  //DONE: Retroactively register here as there are no events emitted in registration function
  let recipientAddress = event.params._recipient;
  let recipientId = recipientAddress.toHexString();
  let recipient = Recipient.load(recipientId);
  let donationId = fundingRoundId.concat("-contribution-").concat(recipientId);

  //NOTE: If the contracts aren't being tracked initialize them
  if (recipient == null) {
    let recipient = new Recipient(recipientId);

    let _fundingRounds = [fundingRoundId] as string[];
    recipient.fundingRounds = _fundingRounds;

    recipient.recipientRegistry = recipientRegistryId;
    recipient.verified = true;
    recipient.voteOptionIndex = event.params._voteOptionIndex;

    recipient.save();

    //NOTE: Update Funding Round recipientCount
  } else {
    let fundingRounds = recipient.fundingRounds;
    if (fundingRounds) {
      fundingRounds.push(fundingRoundId);
      recipient.fundingRounds = fundingRounds;
    } else {
      let _fundingRounds = [fundingRoundId] as string[];
      recipient.fundingRounds = _fundingRounds;
    }

    recipient.recipientRegistry = recipientRegistryId;
    recipient.verified = true;
    recipient.voteOptionIndex = event.params._voteOptionIndex;

    recipient.save();
  }

  let donation = new Donation(donationId);
  donation.fundingRound = fundingRoundId;
  donation.recipient = recipientId;
  donation.amount = event.params._amount;
  donation.voteOptionIndex = event.params._voteOptionIndex;
  donation.createdAt = timestamp;

  fundingRound.recipientCount = fundingRound.recipientCount.plus(BigInt.fromI32(1));
  fundingRound.lastUpdatedAt = timestamp;

  donation.save();
  fundingRound.save();
}

export function handleTallyPublished(event: TallyPublished): void {
  log.info("handleTallyPublished", []);
  let fundingRoundId = event.address.toHexString();
  let timestamp = event.block.timestamp.toString();

  let fundingRound = FundingRound.load(fundingRoundId);
  if (fundingRound == null) {
    log.error("Error: handleTallyPublished failed", []);
    return;
  }
  fundingRound.tallyHash = event.params._tallyHash;
  fundingRound.lastUpdatedAt = timestamp;
}

//TODO: Need library to decode ABI in subgraph, or an additional event fired here.
//NOTE: Contributors must first be verified in the Registry contract before they can register for a particular funding round
export function handleRegister(call: RegisterCall): void {
  log.info("handleRegister" + call.inputs._data.toString(), []);
  // let fundingRoundId = call.to.toHexString();
  // let timestamp = call.block.timestamp.toString();
}
export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  log.info("handleOwnershipTransferred- Funding Round", []);
}
