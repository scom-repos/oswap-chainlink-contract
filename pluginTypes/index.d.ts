/// <amd-module name="@scom/oswap-chainlink-contract/contracts/AggregatorProxy.json.ts" />
declare module "@scom/oswap-chainlink-contract/contracts/AggregatorProxy.json.ts" {
    const _default: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default;
}
/// <amd-module name="@scom/oswap-chainlink-contract/contracts/AggregatorProxy.ts" />
declare module "@scom/oswap-chainlink-contract/contracts/AggregatorProxy.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export class AggregatorProxy extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(aggregator: string, options?: TransactionOptions): Promise<string>;
        parseAnswerUpdatedEvent(receipt: TransactionReceipt): AggregatorProxy.AnswerUpdatedEvent[];
        decodeAnswerUpdatedEvent(event: Event): AggregatorProxy.AnswerUpdatedEvent;
        parseNewRoundEvent(receipt: TransactionReceipt): AggregatorProxy.NewRoundEvent[];
        decodeNewRoundEvent(event: Event): AggregatorProxy.NewRoundEvent;
        parseOwnershipTransferRequestedEvent(receipt: TransactionReceipt): AggregatorProxy.OwnershipTransferRequestedEvent[];
        decodeOwnershipTransferRequestedEvent(event: Event): AggregatorProxy.OwnershipTransferRequestedEvent;
        parseOwnershipTransferredEvent(receipt: TransactionReceipt): AggregatorProxy.OwnershipTransferredEvent[];
        decodeOwnershipTransferredEvent(event: Event): AggregatorProxy.OwnershipTransferredEvent;
        acceptOwnership: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
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
        transferOwnership: {
            (to: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (to: string, options?: TransactionOptions) => Promise<void>;
        };
        version: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        private assign;
    }
    export module AggregatorProxy {
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
}
/// <amd-module name="@scom/oswap-chainlink-contract/contracts/EACAggregatorProxy.json.ts" />
declare module "@scom/oswap-chainlink-contract/contracts/EACAggregatorProxy.json.ts" {
    const _default_1: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_1;
}
/// <amd-module name="@scom/oswap-chainlink-contract/contracts/EACAggregatorProxy.ts" />
declare module "@scom/oswap-chainlink-contract/contracts/EACAggregatorProxy.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        aggregator: string;
        accessController: string;
    }
    export class EACAggregatorProxy extends _Contract {
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
    export module EACAggregatorProxy {
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
}
/// <amd-module name="@scom/oswap-chainlink-contract/contracts/Owned.json.ts" />
declare module "@scom/oswap-chainlink-contract/contracts/Owned.json.ts" {
    const _default_2: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: any[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_2;
}
/// <amd-module name="@scom/oswap-chainlink-contract/contracts/Owned.ts" />
declare module "@scom/oswap-chainlink-contract/contracts/Owned.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, Event, TransactionOptions } from "@ijstech/eth-contract";
    export class Owned extends _Contract {
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
    export module Owned {
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
}
/// <amd-module name="@scom/oswap-chainlink-contract/contracts/index.ts" />
declare module "@scom/oswap-chainlink-contract/contracts/index.ts" {
    export { AggregatorProxy } from "@scom/oswap-chainlink-contract/contracts/AggregatorProxy.ts";
    export { EACAggregatorProxy } from "@scom/oswap-chainlink-contract/contracts/EACAggregatorProxy.ts";
    export { Owned } from "@scom/oswap-chainlink-contract/contracts/Owned.ts";
}
/// <amd-module name="@scom/oswap-chainlink-contract" />
declare module "@scom/oswap-chainlink-contract" {
    export * as Contracts from "@scom/oswap-chainlink-contract/contracts/index.ts";
}
