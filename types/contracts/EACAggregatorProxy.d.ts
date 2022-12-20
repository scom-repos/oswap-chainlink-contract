import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IDeployParams {
    aggregator: string;
    accessController: string;
}
export declare class EACAggregatorProxy extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
    parseAnswerUpdatedEvent(receipt: TransactionReceipt): EACAggregatorProxy.AnswerUpdatedEvent[];
    decodeAnswerUpdatedEvent(event: Event): EACAggregatorProxy.AnswerUpdatedEvent;
    parseNewRoundEvent(receipt: TransactionReceipt): EACAggregatorProxy.NewRoundEvent[];
    decodeNewRoundEvent(event: Event): EACAggregatorProxy.NewRoundEvent;
    parseOwnershipTransferRequestedEvent(receipt: TransactionReceipt): EACAggregatorProxy.OwnershipTransferRequestedEvent[];
    decodeOwnershipTransferRequestedEvent(event: Event): EACAggregatorProxy.OwnershipTransferRequestedEvent;
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): EACAggregatorProxy.OwnershipTransferredEvent[];
    decodeOwnershipTransferredEvent(event: Event): EACAggregatorProxy.OwnershipTransferredEvent;
    acceptOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    accessController: {
        (options?: TransactionOptions): Promise<string>;
    };
    aggregator: {
        (options?: TransactionOptions): Promise<string>;
    };
    confirmAggregator: {
        (aggregator: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (aggregator: string, options?: TransactionOptions) => Promise<void>;
    };
    decimals: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    description: {
        (options?: TransactionOptions): Promise<string>;
    };
    getAnswer: {
        (roundId: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    getRoundData: {
        (roundId: number | BigNumber, options?: TransactionOptions): Promise<{
            roundId: BigNumber;
            answer: BigNumber;
            startedAt: BigNumber;
            updatedAt: BigNumber;
            answeredInRound: BigNumber;
        }>;
    };
    getTimestamp: {
        (roundId: number | BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    };
    latestAnswer: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    latestRound: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    latestRoundData: {
        (options?: TransactionOptions): Promise<{
            roundId: BigNumber;
            answer: BigNumber;
            startedAt: BigNumber;
            updatedAt: BigNumber;
            answeredInRound: BigNumber;
        }>;
    };
    latestTimestamp: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    owner: {
        (options?: TransactionOptions): Promise<string>;
    };
    phaseAggregators: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    phaseId: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    proposeAggregator: {
        (aggregator: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (aggregator: string, options?: TransactionOptions) => Promise<void>;
    };
    proposedAggregator: {
        (options?: TransactionOptions): Promise<string>;
    };
    proposedGetRoundData: {
        (roundId: number | BigNumber, options?: TransactionOptions): Promise<{
            roundId: BigNumber;
            answer: BigNumber;
            startedAt: BigNumber;
            updatedAt: BigNumber;
            answeredInRound: BigNumber;
        }>;
    };
    proposedLatestRoundData: {
        (options?: TransactionOptions): Promise<{
            roundId: BigNumber;
            answer: BigNumber;
            startedAt: BigNumber;
            updatedAt: BigNumber;
            answeredInRound: BigNumber;
        }>;
    };
    setController: {
        (accessController: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (accessController: string, options?: TransactionOptions) => Promise<void>;
    };
    transferOwnership: {
        (to: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (to: string, options?: TransactionOptions) => Promise<void>;
    };
    version: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    private assign;
}
export declare module EACAggregatorProxy {
    interface AnswerUpdatedEvent {
        current: BigNumber;
        roundId: BigNumber;
        updatedAt: BigNumber;
        _event: Event;
    }
    interface NewRoundEvent {
        roundId: BigNumber;
        startedBy: string;
        startedAt: BigNumber;
        _event: Event;
    }
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
