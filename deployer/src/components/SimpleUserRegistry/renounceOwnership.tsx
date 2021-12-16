import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRenounceOwnership } from "../../hooks/SimpleUserRegistry/";
import { TransactionReceipt } from "../../hooks/SimpleUserRegistry/utils";
import { Web3Form } from "../Web3Form";
import { useLocation } from "react-router-dom";
/**
 * @class
 * @classdesc - component for renounceOwnership method
 **/
export const RenounceOwnershipForm = (props: any) => {
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const [txError, setTxError] = useState<boolean | string>(false);
  const [txLink, setTxLink] = useState<string>("");
  const [txReceipt, setTxReceipt] = useState<null | TransactionReceipt>(null);
  const { handleSubmit } = useForm();
  const [contractAddress, setContractAddress] = useState<string>("0x0dA71825182944234F45755989a8C96Ac1343E07");

  let { search: params } = useLocation();
  useEffect(() => {
    const query = new URLSearchParams(params);
    const contractAddress = query.get("contract");
    setContractAddress(contractAddress ? contractAddress : "0x0dA71825182944234F45755989a8C96Ac1343E07");
  }, [params]);

  const { validator, handleRenounceOwnership, getReceipt, error } = useRenounceOwnership(contractAddress);

  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");

      setTxLoading(true);
      if (validator.checkArgs == null || handleRenounceOwnership.send == null || getReceipt.waitTwoBlocks == null)
        throw error ? error : handleRenounceOwnership.error;

      const ok = await validator.checkArgs();
      if (!ok) throw Error("Failed smartcontract requirements");

      const tx = await handleRenounceOwnership.send();
      setTxLink("https://blockscout.com/xdai/mainnet/tx/" + tx.hash);

      const { receipt, error: getReceiptError } = await getReceipt.waitTwoBlocks(tx.hash);
      if (getReceiptError) throw getReceiptError;

      setTxReceipt(receipt);
      setTxLoading(false);
    } catch (e) {
      console.log(e);
      setTxError(e && e.message ? e.message : "unexpected error");
      setTxLoading(false);
    }
  };

  return (
    <Web3Form.Form onSubmit={handleSubmit(onSubmit)}>
      <Web3Form.Title>RenounceOwnership</Web3Form.Title>
      <Web3Form.Heading detail="These changes will take effect on the next voting round. Voting rounds that have already started or been deployed will not be affected.">
        Set RenounceOwnership
      </Web3Form.Heading>
      <Web3Form.Detail>*THIS TOOL IS IN BETA USE AT YOUR OWN RISK</Web3Form.Detail>

      <Web3Form.Submit loading={txLoading}>RenounceOwnership</Web3Form.Submit>
      <Web3Form.Error error={txError} />
      <Web3Form.ExplorerLink url={txLink} />
      <Web3Form.Receipt receipt={txReceipt} />
    </Web3Form.Form>
  );
};

export default RenounceOwnershipForm;
