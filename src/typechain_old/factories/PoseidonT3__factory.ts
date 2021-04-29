/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { PoseidonT3 } from "../PoseidonT3";

export class PoseidonT3__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PoseidonT3> {
    return super.deploy(overrides || {}) as Promise<PoseidonT3>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PoseidonT3 {
    return super.attach(address) as PoseidonT3;
  }
  connect(signer: Signer): PoseidonT3__factory {
    return super.connect(signer) as PoseidonT3__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoseidonT3 {
    return new Contract(address, _abi, signerOrProvider) as PoseidonT3;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "input",
        type: "uint256[2]",
      },
    ],
    name: "poseidon",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60ce610025600b82828239805160001a60731461001857fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c806329a5f2f6146038575b600080fd5b608060048036036040811015604c57600080fd5b6040805180820182529183019291818301918390600290839083908082843760009201919091525091945060929350505050565b60408051918252519081900360200190f35b5060009056fea2646970667358221220a33551dfad43c5bf8684c1d8382a740a1f28d2eb9ab30b2d4f2d7e2cdf38481764736f6c634300060c0033";
