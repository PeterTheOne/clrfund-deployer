import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDeployMaci } from "../../hooks/MACIFactory/";
import { TransactionReceipt } from "../../hooks/MACIFactory/utils";
import { Web3Form } from "../Web3Form";
import { useLocation } from "react-router-dom";
/**
 * @class
 * @classdesc - component for deployMaci method
 **/
export const DeployMaciForm = (props: any) => {
  const [txLoading, setTxLoading] = useState<boolean>(false);
  const [txError, setTxError] = useState<boolean | string>(false);
  const [txLink, setTxLink] = useState<string>("");
  const [txReceipt, setTxReceipt] = useState<null | TransactionReceipt>(null);
  const { register, handleSubmit, errors } = useForm();
  const [contractAddress, setContractAddress] = useState<string>("0x9eb02e4c2b87ff891a472ab0b05d9e7637524484");

  let { search: params } = useLocation();
  useEffect(() => {
    const query = new URLSearchParams(params);
    const contractAddress = query.get("contract");
    setContractAddress(contractAddress ? contractAddress : "0x9eb02e4c2b87ff891a472ab0b05d9e7637524484");
  }, [params]);

  const { validator, handleDeployMaci, getReceipt, error } = useDeployMaci(contractAddress);

  const onSubmit = async (data) => {
    try {
      setTxLink("");
      setTxError("");

      setTxLoading(true);
      if (validator.checkArgs == null || handleDeployMaci.send == null || getReceipt.waitTwoBlocks == null)
        throw error ? error : handleDeployMaci.error;

      const ok = await validator.checkArgs(
        data._signUpGatekeeper,
        data._initialVoiceCreditProxy,
        data._coordinator,
        data._coordinatorPubKey
      );
      if (!ok) throw Error("Failed smartcontract requirements");

      const tx = await handleDeployMaci.send(
        data._signUpGatekeeper,
        data._initialVoiceCreditProxy,
        data._coordinator,
        data._coordinatorPubKey
      );
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
      <Web3Form.Title>DeployMaci</Web3Form.Title>
      <Web3Form.Heading detail="These changes will take effect on the next voting round. Voting rounds that have already started or been deployed will not be affected.">
        Set DeployMaci
      </Web3Form.Heading>
      <Web3Form.Detail>*THIS TOOL IS IN BETA USE AT YOUR OWN RISK</Web3Form.Detail>

      <Web3Form.Input
        name="_signUpGatekeeper"
        label="_signUpGatekeeper"
        placeholder="Address"
        ref={register(Web3Form.registerAddress)}
        errors={errors}
      />
      <Web3Form.Input
        name="_initialVoiceCreditProxy"
        label="_initialVoiceCreditProxy"
        placeholder="Address"
        ref={register(Web3Form.registerAddress)}
        errors={errors}
      />
      <Web3Form.Input
        name="_coordinator"
        label="_coordinator"
        placeholder="Address"
        ref={register(Web3Form.registerAddress)}
        errors={errors}
      />
      <Web3Form.Input
        name="_coordinatorPubKey"
        label="_coordinatorPubKey"
        placeholder="Tuple"
        ref={register(Web3Form.registerString)}
        errors={errors}
      />
      <Web3Form.Submit loading={txLoading}>DeployMaci</Web3Form.Submit>
      <Web3Form.Error error={txError} />
      <Web3Form.ExplorerLink url={txLink} />
      <Web3Form.Receipt receipt={txReceipt} />
    </Web3Form.Form>
  );
};

export default DeployMaciForm;
