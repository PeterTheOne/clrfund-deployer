import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRemoveRecipient } from "../../hooks/OptimisticRecipientRegistry/";
import { TransactionReceipt } from "../../hooks/OptimisticRecipientRegistry/utils";
import { Web3Form } from "../Web3Form";
import { useLocation } from "react-router-dom";
/**
 * @class
 * @classdesc - component for removeRecipient method
 **/
export const RemoveRecipientForm = (props: any) => {
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const [txError, setTxError] = useState<boolean | string>(false);
  const [txLink, setTxLink] = useState<string>("");
  const [txReceipt, setTxReceipt] = useState<null | TransactionReceipt>(null);
  const { register, handleSubmit, errors } = useForm();
  const [contractAddress, setContractAddress] = useState<string>("0x3e5ed8ec264930d9826cbcda194bcd2850e0dc50");

  let { search: params } = useLocation();
  useEffect(() => {
    const query = new URLSearchParams(params);
    const contractAddress = query.get("contract");
    setContractAddress(contractAddress ? contractAddress : "0x3e5ed8ec264930d9826cbcda194bcd2850e0dc50");
  }, [params]);

  const { validator, handleRemoveRecipient, getReceipt, error } = useRemoveRecipient(contractAddress);

  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");

      setTxLoading(true);
      if (validator.checkArgs == null || handleRemoveRecipient.send == null || getReceipt.waitTwoBlocks == null)
        throw error ? error : handleRemoveRecipient.error;

      const ok = await validator.checkArgs(data._recipientId);
      if (!ok) throw Error("Failed smartcontract requirements");

      const tx = await handleRemoveRecipient.send(data._recipientId);
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
      <Web3Form.Title>RemoveRecipient</Web3Form.Title>
      <Web3Form.Heading detail="These changes will take effect on the next voting round. Voting rounds that have already started or been deployed will not be affected.">
        Set RemoveRecipient
      </Web3Form.Heading>
      <Web3Form.Detail>*THIS TOOL IS IN BETA USE AT YOUR OWN RISK</Web3Form.Detail>

      <Web3Form.Input
        name="_recipientId"
        label="_recipientId"
        placeholder="Bytes32"
        ref={register(Web3Form.registerBytes32)}
        errors={errors}
      />
      <Web3Form.Submit loading={txLoading}>RemoveRecipient</Web3Form.Submit>
      <Web3Form.Error error={txError} />
      <Web3Form.ExplorerLink url={txLink} />
      <Web3Form.Receipt receipt={txReceipt} />
    </Web3Form.Form>
  );
};

export default RemoveRecipientForm;
