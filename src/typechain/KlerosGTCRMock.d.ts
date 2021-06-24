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
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface KlerosGTCRMockInterface extends ethers.utils.Interface {
  functions: {
    "addItem(bytes)": FunctionFragment;
    "getItemInfo(bytes32)": FunctionFragment;
    "itemIDtoIndex(bytes32)": FunctionFragment;
    "itemList(uint256)": FunctionFragment;
    "items(bytes32)": FunctionFragment;
    "owner()": FunctionFragment;
    "removeItem(bytes32)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "addItem", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "getItemInfo",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "itemIDtoIndex",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "itemList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "items", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeItem",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "addItem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getItemInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "itemIDtoIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "itemList", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "items", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "removeItem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "ItemStatusChange(bytes32,uint256,uint256,bool,bool)": EventFragment;
    "ItemSubmitted(bytes32,address,uint256,bytes)": EventFragment;
    "MetaEvidence(uint256,string)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ItemStatusChange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ItemSubmitted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MetaEvidence"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class KlerosGTCRMock extends Contract {
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

  interface: KlerosGTCRMockInterface;

  functions: {
    addItem(
      _item: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "addItem(bytes)"(
      _item: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    getItemInfo(
      _itemID: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, number, BigNumber] & {
        data: string;
        status: number;
        numberOfRequests: BigNumber;
      }
    >;

    "getItemInfo(bytes32)"(
      _itemID: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, number, BigNumber] & {
        data: string;
        status: number;
        numberOfRequests: BigNumber;
      }
    >;

    itemIDtoIndex(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "itemIDtoIndex(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    itemList(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    "itemList(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    items(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, number] & { data: string; status: number }>;

    "items(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, number] & { data: string; status: number }>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    removeItem(
      _itemID: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "removeItem(bytes32)"(
      _itemID: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  addItem(
    _item: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "addItem(bytes)"(
    _item: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  getItemInfo(
    _itemID: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, number, BigNumber] & {
      data: string;
      status: number;
      numberOfRequests: BigNumber;
    }
  >;

  "getItemInfo(bytes32)"(
    _itemID: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, number, BigNumber] & {
      data: string;
      status: number;
      numberOfRequests: BigNumber;
    }
  >;

  itemIDtoIndex(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  "itemIDtoIndex(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  itemList(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "itemList(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  items(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, number] & { data: string; status: number }>;

  "items(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, number] & { data: string; status: number }>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  removeItem(
    _itemID: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "removeItem(bytes32)"(
    _itemID: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    addItem(_item: BytesLike, overrides?: CallOverrides): Promise<void>;

    "addItem(bytes)"(
      _item: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    getItemInfo(
      _itemID: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, number, BigNumber] & {
        data: string;
        status: number;
        numberOfRequests: BigNumber;
      }
    >;

    "getItemInfo(bytes32)"(
      _itemID: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, number, BigNumber] & {
        data: string;
        status: number;
        numberOfRequests: BigNumber;
      }
    >;

    itemIDtoIndex(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "itemIDtoIndex(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    itemList(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "itemList(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    items(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, number] & { data: string; status: number }>;

    "items(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, number] & { data: string; status: number }>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    removeItem(_itemID: BytesLike, overrides?: CallOverrides): Promise<void>;

    "removeItem(bytes32)"(
      _itemID: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    ItemStatusChange(
      _itemID: BytesLike | null,
      _requestIndex: BigNumberish | null,
      _roundIndex: BigNumberish | null,
      _disputed: null,
      _resolved: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, boolean, boolean],
      {
        _itemID: string;
        _requestIndex: BigNumber;
        _roundIndex: BigNumber;
        _disputed: boolean;
        _resolved: boolean;
      }
    >;

    ItemSubmitted(
      _itemID: BytesLike | null,
      _submitter: string | null,
      _evidenceGroupID: BigNumberish | null,
      _data: null
    ): TypedEventFilter<
      [string, string, BigNumber, string],
      {
        _itemID: string;
        _submitter: string;
        _evidenceGroupID: BigNumber;
        _data: string;
      }
    >;

    MetaEvidence(
      _metaEvidenceID: BigNumberish | null,
      _evidence: null
    ): TypedEventFilter<
      [BigNumber, string],
      { _metaEvidenceID: BigNumber; _evidence: string }
    >;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    addItem(_item: BytesLike, overrides?: PayableOverrides): Promise<BigNumber>;

    "addItem(bytes)"(
      _item: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    getItemInfo(
      _itemID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getItemInfo(bytes32)"(
      _itemID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    itemIDtoIndex(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "itemIDtoIndex(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    itemList(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "itemList(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    items(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "items(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    removeItem(
      _itemID: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "removeItem(bytes32)"(
      _itemID: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addItem(
      _item: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "addItem(bytes)"(
      _item: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    getItemInfo(
      _itemID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getItemInfo(bytes32)"(
      _itemID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    itemIDtoIndex(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "itemIDtoIndex(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    itemList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "itemList(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    items(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "items(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeItem(
      _itemID: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "removeItem(bytes32)"(
      _itemID: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
