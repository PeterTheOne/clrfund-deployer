/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface FundingRoundFactoryInterface extends ethers.utils.Interface {
  functions: {
    "addFundingSource(address)": FunctionFragment;
    "cancelCurrentRound()": FunctionFragment;
    "coordinator()": FunctionFragment;
    "coordinatorPubKey()": FunctionFragment;
    "coordinatorQuit()": FunctionFragment;
    "deployNewRound()": FunctionFragment;
    "getCurrentRound()": FunctionFragment;
    "getMatchingFunds(address)": FunctionFragment;
    "maciFactory()": FunctionFragment;
    "nativeToken()": FunctionFragment;
    "owner()": FunctionFragment;
    "recipientRegistry()": FunctionFragment;
    "removeFundingSource(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setCoordinator(address,tuple)": FunctionFragment;
    "setMaciParameters(uint8,uint8,uint8,uint8,uint8,address,address,uint256,uint256)": FunctionFragment;
    "setRecipientRegistry(address)": FunctionFragment;
    "setToken(address)": FunctionFragment;
    "setUserRegistry(address)": FunctionFragment;
    "transferMatchingFunds(uint256,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "userRegistry()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addFundingSource",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelCurrentRound",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "coordinator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "coordinatorPubKey",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "coordinatorQuit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deployNewRound",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentRound",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMatchingFunds",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "maciFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nativeToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recipientRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeFundingSource",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setCoordinator",
    values: [string, { x: BigNumberish; y: BigNumberish }]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaciParameters",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      string,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setRecipientRegistry",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setToken", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setUserRegistry",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferMatchingFunds",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "userRegistry",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addFundingSource",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelCurrentRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "coordinator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "coordinatorPubKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "coordinatorQuit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployNewRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMatchingFunds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maciFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nativeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recipientRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeFundingSource",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCoordinator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaciParameters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRecipientRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setUserRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferMatchingFunds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userRegistry",
    data: BytesLike
  ): Result;

  events: {
    "CoordinatorChanged(address)": EventFragment;
    "FundingSourceAdded(address)": EventFragment;
    "FundingSourceRemoved(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RoundFinalized(address)": EventFragment;
    "RoundStarted(address)": EventFragment;
    "TokenChanged(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CoordinatorChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FundingSourceAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FundingSourceRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoundFinalized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoundStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenChanged"): EventFragment;
}

export class FundingRoundFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: FundingRoundFactoryInterface;

  functions: {
    addFundingSource(
      _source: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addFundingSource(address)"(
      _source: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cancelCurrentRound(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "cancelCurrentRound()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    coordinator(overrides?: CallOverrides): Promise<[string]>;

    "coordinator()"(overrides?: CallOverrides): Promise<[string]>;

    coordinatorPubKey(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { x: BigNumber; y: BigNumber }>;

    "coordinatorPubKey()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { x: BigNumber; y: BigNumber }>;

    coordinatorQuit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "coordinatorQuit()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deployNewRound(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "deployNewRound()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getCurrentRound(
      overrides?: CallOverrides
    ): Promise<[string] & { _currentRound: string }>;

    "getCurrentRound()"(
      overrides?: CallOverrides
    ): Promise<[string] & { _currentRound: string }>;

    getMatchingFunds(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getMatchingFunds(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    maciFactory(overrides?: CallOverrides): Promise<[string]>;

    "maciFactory()"(overrides?: CallOverrides): Promise<[string]>;

    nativeToken(overrides?: CallOverrides): Promise<[string]>;

    "nativeToken()"(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    recipientRegistry(overrides?: CallOverrides): Promise<[string]>;

    "recipientRegistry()"(overrides?: CallOverrides): Promise<[string]>;

    removeFundingSource(
      _source: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "removeFundingSource(address)"(
      _source: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCoordinator(
      _coordinator: string,
      _coordinatorPubKey: { x: BigNumberish; y: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setCoordinator(address,(uint256,uint256))"(
      _coordinator: string,
      _coordinatorPubKey: { x: BigNumberish; y: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMaciParameters(
      _stateTreeDepth: BigNumberish,
      _messageTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      _tallyBatchSize: BigNumberish,
      _messageBatchSize: BigNumberish,
      _batchUstVerifier: string,
      _qvtVerifier: string,
      _signUpDuration: BigNumberish,
      _votingDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setMaciParameters(uint8,uint8,uint8,uint8,uint8,address,address,uint256,uint256)"(
      _stateTreeDepth: BigNumberish,
      _messageTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      _tallyBatchSize: BigNumberish,
      _messageBatchSize: BigNumberish,
      _batchUstVerifier: string,
      _qvtVerifier: string,
      _signUpDuration: BigNumberish,
      _votingDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRecipientRegistry(
      _recipientRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setRecipientRegistry(address)"(
      _recipientRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setToken(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setToken(address)"(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUserRegistry(
      _userRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setUserRegistry(address)"(
      _userRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferMatchingFunds(
      _totalSpent: BigNumberish,
      _totalSpentSalt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferMatchingFunds(uint256,uint256)"(
      _totalSpent: BigNumberish,
      _totalSpentSalt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userRegistry(overrides?: CallOverrides): Promise<[string]>;

    "userRegistry()"(overrides?: CallOverrides): Promise<[string]>;
  };

  addFundingSource(
    _source: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addFundingSource(address)"(
    _source: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cancelCurrentRound(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "cancelCurrentRound()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  coordinator(overrides?: CallOverrides): Promise<string>;

  "coordinator()"(overrides?: CallOverrides): Promise<string>;

  coordinatorPubKey(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { x: BigNumber; y: BigNumber }>;

  "coordinatorPubKey()"(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { x: BigNumber; y: BigNumber }>;

  coordinatorQuit(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "coordinatorQuit()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deployNewRound(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "deployNewRound()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getCurrentRound(overrides?: CallOverrides): Promise<string>;

  "getCurrentRound()"(overrides?: CallOverrides): Promise<string>;

  getMatchingFunds(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getMatchingFunds(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  maciFactory(overrides?: CallOverrides): Promise<string>;

  "maciFactory()"(overrides?: CallOverrides): Promise<string>;

  nativeToken(overrides?: CallOverrides): Promise<string>;

  "nativeToken()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  recipientRegistry(overrides?: CallOverrides): Promise<string>;

  "recipientRegistry()"(overrides?: CallOverrides): Promise<string>;

  removeFundingSource(
    _source: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "removeFundingSource(address)"(
    _source: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCoordinator(
    _coordinator: string,
    _coordinatorPubKey: { x: BigNumberish; y: BigNumberish },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setCoordinator(address,(uint256,uint256))"(
    _coordinator: string,
    _coordinatorPubKey: { x: BigNumberish; y: BigNumberish },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMaciParameters(
    _stateTreeDepth: BigNumberish,
    _messageTreeDepth: BigNumberish,
    _voteOptionTreeDepth: BigNumberish,
    _tallyBatchSize: BigNumberish,
    _messageBatchSize: BigNumberish,
    _batchUstVerifier: string,
    _qvtVerifier: string,
    _signUpDuration: BigNumberish,
    _votingDuration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setMaciParameters(uint8,uint8,uint8,uint8,uint8,address,address,uint256,uint256)"(
    _stateTreeDepth: BigNumberish,
    _messageTreeDepth: BigNumberish,
    _voteOptionTreeDepth: BigNumberish,
    _tallyBatchSize: BigNumberish,
    _messageBatchSize: BigNumberish,
    _batchUstVerifier: string,
    _qvtVerifier: string,
    _signUpDuration: BigNumberish,
    _votingDuration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRecipientRegistry(
    _recipientRegistry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setRecipientRegistry(address)"(
    _recipientRegistry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setToken(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setToken(address)"(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUserRegistry(
    _userRegistry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setUserRegistry(address)"(
    _userRegistry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferMatchingFunds(
    _totalSpent: BigNumberish,
    _totalSpentSalt: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferMatchingFunds(uint256,uint256)"(
    _totalSpent: BigNumberish,
    _totalSpentSalt: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userRegistry(overrides?: CallOverrides): Promise<string>;

  "userRegistry()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    addFundingSource(_source: string, overrides?: CallOverrides): Promise<void>;

    "addFundingSource(address)"(
      _source: string,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelCurrentRound(overrides?: CallOverrides): Promise<void>;

    "cancelCurrentRound()"(overrides?: CallOverrides): Promise<void>;

    coordinator(overrides?: CallOverrides): Promise<string>;

    "coordinator()"(overrides?: CallOverrides): Promise<string>;

    coordinatorPubKey(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { x: BigNumber; y: BigNumber }>;

    "coordinatorPubKey()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { x: BigNumber; y: BigNumber }>;

    coordinatorQuit(overrides?: CallOverrides): Promise<void>;

    "coordinatorQuit()"(overrides?: CallOverrides): Promise<void>;

    deployNewRound(overrides?: CallOverrides): Promise<void>;

    "deployNewRound()"(overrides?: CallOverrides): Promise<void>;

    getCurrentRound(overrides?: CallOverrides): Promise<string>;

    "getCurrentRound()"(overrides?: CallOverrides): Promise<string>;

    getMatchingFunds(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getMatchingFunds(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maciFactory(overrides?: CallOverrides): Promise<string>;

    "maciFactory()"(overrides?: CallOverrides): Promise<string>;

    nativeToken(overrides?: CallOverrides): Promise<string>;

    "nativeToken()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    recipientRegistry(overrides?: CallOverrides): Promise<string>;

    "recipientRegistry()"(overrides?: CallOverrides): Promise<string>;

    removeFundingSource(
      _source: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "removeFundingSource(address)"(
      _source: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    setCoordinator(
      _coordinator: string,
      _coordinatorPubKey: { x: BigNumberish; y: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;

    "setCoordinator(address,(uint256,uint256))"(
      _coordinator: string,
      _coordinatorPubKey: { x: BigNumberish; y: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;

    setMaciParameters(
      _stateTreeDepth: BigNumberish,
      _messageTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      _tallyBatchSize: BigNumberish,
      _messageBatchSize: BigNumberish,
      _batchUstVerifier: string,
      _qvtVerifier: string,
      _signUpDuration: BigNumberish,
      _votingDuration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setMaciParameters(uint8,uint8,uint8,uint8,uint8,address,address,uint256,uint256)"(
      _stateTreeDepth: BigNumberish,
      _messageTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      _tallyBatchSize: BigNumberish,
      _messageBatchSize: BigNumberish,
      _batchUstVerifier: string,
      _qvtVerifier: string,
      _signUpDuration: BigNumberish,
      _votingDuration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setRecipientRegistry(
      _recipientRegistry: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setRecipientRegistry(address)"(
      _recipientRegistry: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setToken(_token: string, overrides?: CallOverrides): Promise<void>;

    "setToken(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setUserRegistry(
      _userRegistry: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setUserRegistry(address)"(
      _userRegistry: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferMatchingFunds(
      _totalSpent: BigNumberish,
      _totalSpentSalt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferMatchingFunds(uint256,uint256)"(
      _totalSpent: BigNumberish,
      _totalSpentSalt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    userRegistry(overrides?: CallOverrides): Promise<string>;

    "userRegistry()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    CoordinatorChanged(
      _coordinator: null
    ): TypedEventFilter<[string], { _coordinator: string }>;

    FundingSourceAdded(
      _source: null
    ): TypedEventFilter<[string], { _source: string }>;

    FundingSourceRemoved(
      _source: null
    ): TypedEventFilter<[string], { _source: string }>;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    RoundFinalized(
      _round: null
    ): TypedEventFilter<[string], { _round: string }>;

    RoundStarted(_round: null): TypedEventFilter<[string], { _round: string }>;

    TokenChanged(_token: null): TypedEventFilter<[string], { _token: string }>;
  };

  estimateGas: {
    addFundingSource(
      _source: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addFundingSource(address)"(
      _source: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cancelCurrentRound(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "cancelCurrentRound()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    coordinator(overrides?: CallOverrides): Promise<BigNumber>;

    "coordinator()"(overrides?: CallOverrides): Promise<BigNumber>;

    coordinatorPubKey(overrides?: CallOverrides): Promise<BigNumber>;

    "coordinatorPubKey()"(overrides?: CallOverrides): Promise<BigNumber>;

    coordinatorQuit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "coordinatorQuit()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deployNewRound(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "deployNewRound()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getCurrentRound(overrides?: CallOverrides): Promise<BigNumber>;

    "getCurrentRound()"(overrides?: CallOverrides): Promise<BigNumber>;

    getMatchingFunds(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getMatchingFunds(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maciFactory(overrides?: CallOverrides): Promise<BigNumber>;

    "maciFactory()"(overrides?: CallOverrides): Promise<BigNumber>;

    nativeToken(overrides?: CallOverrides): Promise<BigNumber>;

    "nativeToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    recipientRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    "recipientRegistry()"(overrides?: CallOverrides): Promise<BigNumber>;

    removeFundingSource(
      _source: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "removeFundingSource(address)"(
      _source: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCoordinator(
      _coordinator: string,
      _coordinatorPubKey: { x: BigNumberish; y: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setCoordinator(address,(uint256,uint256))"(
      _coordinator: string,
      _coordinatorPubKey: { x: BigNumberish; y: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMaciParameters(
      _stateTreeDepth: BigNumberish,
      _messageTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      _tallyBatchSize: BigNumberish,
      _messageBatchSize: BigNumberish,
      _batchUstVerifier: string,
      _qvtVerifier: string,
      _signUpDuration: BigNumberish,
      _votingDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setMaciParameters(uint8,uint8,uint8,uint8,uint8,address,address,uint256,uint256)"(
      _stateTreeDepth: BigNumberish,
      _messageTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      _tallyBatchSize: BigNumberish,
      _messageBatchSize: BigNumberish,
      _batchUstVerifier: string,
      _qvtVerifier: string,
      _signUpDuration: BigNumberish,
      _votingDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRecipientRegistry(
      _recipientRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setRecipientRegistry(address)"(
      _recipientRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setToken(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setToken(address)"(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUserRegistry(
      _userRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setUserRegistry(address)"(
      _userRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferMatchingFunds(
      _totalSpent: BigNumberish,
      _totalSpentSalt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferMatchingFunds(uint256,uint256)"(
      _totalSpent: BigNumberish,
      _totalSpentSalt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    "userRegistry()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addFundingSource(
      _source: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addFundingSource(address)"(
      _source: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cancelCurrentRound(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "cancelCurrentRound()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    coordinator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "coordinator()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    coordinatorPubKey(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "coordinatorPubKey()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    coordinatorQuit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "coordinatorQuit()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deployNewRound(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "deployNewRound()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getCurrentRound(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getCurrentRound()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMatchingFunds(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getMatchingFunds(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maciFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "maciFactory()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nativeToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nativeToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recipientRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "recipientRegistry()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeFundingSource(
      _source: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "removeFundingSource(address)"(
      _source: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCoordinator(
      _coordinator: string,
      _coordinatorPubKey: { x: BigNumberish; y: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setCoordinator(address,(uint256,uint256))"(
      _coordinator: string,
      _coordinatorPubKey: { x: BigNumberish; y: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMaciParameters(
      _stateTreeDepth: BigNumberish,
      _messageTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      _tallyBatchSize: BigNumberish,
      _messageBatchSize: BigNumberish,
      _batchUstVerifier: string,
      _qvtVerifier: string,
      _signUpDuration: BigNumberish,
      _votingDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setMaciParameters(uint8,uint8,uint8,uint8,uint8,address,address,uint256,uint256)"(
      _stateTreeDepth: BigNumberish,
      _messageTreeDepth: BigNumberish,
      _voteOptionTreeDepth: BigNumberish,
      _tallyBatchSize: BigNumberish,
      _messageBatchSize: BigNumberish,
      _batchUstVerifier: string,
      _qvtVerifier: string,
      _signUpDuration: BigNumberish,
      _votingDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRecipientRegistry(
      _recipientRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setRecipientRegistry(address)"(
      _recipientRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setToken(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setToken(address)"(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUserRegistry(
      _userRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setUserRegistry(address)"(
      _userRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferMatchingFunds(
      _totalSpent: BigNumberish,
      _totalSpentSalt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferMatchingFunds(uint256,uint256)"(
      _totalSpent: BigNumberish,
      _totalSpentSalt: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "userRegistry()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
