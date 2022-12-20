import { IWallet, Contract as _Contract, TransactionReceipt, Event, TransactionOptions } from "@ijstech/eth-contract";
export declare class Owned extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(options?: TransactionOptions): Promise<string>;
    parseOwnershipTransferRequestedEvent(receipt: TransactionReceipt): Owned.OwnershipTransferRequestedEvent[];
    decodeOwnershipTransferRequestedEvent(event: Event): Owned.OwnershipTransferRequestedEvent;
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): Owned.OwnershipTransferredEvent[];
    decodeOwnershipTransferredEvent(event: Event): Owned.OwnershipTransferredEvent;
    acceptOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    owner: {
        (options?: TransactionOptions): Promise<string>;
    };
    transferOwnership: {
        (to: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (to: string, options?: TransactionOptions) => Promise<void>;
    };
    private assign;
}
export declare module Owned {
    interface OwnershipTransferRequestedEvent {
        from: string;
        to: string;
        _event: Event;
    }
    interface OwnershipTransferredEvent {
        from: string;
        to: string;
        _event: Event;
    }
}
