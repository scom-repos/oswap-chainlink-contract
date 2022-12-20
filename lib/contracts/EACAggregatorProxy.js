"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EACAggregatorProxy = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const EACAggregatorProxy_json_1 = __importDefault(require("./EACAggregatorProxy.json"));
class EACAggregatorProxy extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, EACAggregatorProxy_json_1.default.abi, EACAggregatorProxy_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.aggregator, params.accessController], options);
    }
    parseAnswerUpdatedEvent(receipt) {
        return this.parseEvents(receipt, "AnswerUpdated").map(e => this.decodeAnswerUpdatedEvent(e));
    }
    decodeAnswerUpdatedEvent(event) {
        let result = event.data;
        return {
            current: new eth_contract_1.BigNumber(result.current),
            roundId: new eth_contract_1.BigNumber(result.roundId),
            updatedAt: new eth_contract_1.BigNumber(result.updatedAt),
            _event: event
        };
    }
    parseNewRoundEvent(receipt) {
        return this.parseEvents(receipt, "NewRound").map(e => this.decodeNewRoundEvent(e));
    }
    decodeNewRoundEvent(event) {
        let result = event.data;
        return {
            roundId: new eth_contract_1.BigNumber(result.roundId),
            startedBy: result.startedBy,
            startedAt: new eth_contract_1.BigNumber(result.startedAt),
            _event: event
        };
    }
    parseOwnershipTransferRequestedEvent(receipt) {
        return this.parseEvents(receipt, "OwnershipTransferRequested").map(e => this.decodeOwnershipTransferRequestedEvent(e));
    }
    decodeOwnershipTransferRequestedEvent(event) {
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            _event: event
        };
    }
    parseOwnershipTransferredEvent(receipt) {
        return this.parseEvents(receipt, "OwnershipTransferred").map(e => this.decodeOwnershipTransferredEvent(e));
    }
    decodeOwnershipTransferredEvent(event) {
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            _event: event
        };
    }
    assign() {
        let accessController_call = async (options) => {
            let result = await this.call('accessController', [], options);
            return result;
        };
        this.accessController = accessController_call;
        let aggregator_call = async (options) => {
            let result = await this.call('aggregator', [], options);
            return result;
        };
        this.aggregator = aggregator_call;
        let decimals_call = async (options) => {
            let result = await this.call('decimals', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.decimals = decimals_call;
        let description_call = async (options) => {
            let result = await this.call('description', [], options);
            return result;
        };
        this.description = description_call;
        let getAnswer_call = async (roundId, options) => {
            let result = await this.call('getAnswer', [this.wallet.utils.toString(roundId)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getAnswer = getAnswer_call;
        let getRoundData_call = async (roundId, options) => {
            let result = await this.call('getRoundData', [this.wallet.utils.toString(roundId)], options);
            return {
                roundId: new eth_contract_1.BigNumber(result.roundId),
                answer: new eth_contract_1.BigNumber(result.answer),
                startedAt: new eth_contract_1.BigNumber(result.startedAt),
                updatedAt: new eth_contract_1.BigNumber(result.updatedAt),
                answeredInRound: new eth_contract_1.BigNumber(result.answeredInRound)
            };
        };
        this.getRoundData = getRoundData_call;
        let getTimestamp_call = async (roundId, options) => {
            let result = await this.call('getTimestamp', [this.wallet.utils.toString(roundId)], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getTimestamp = getTimestamp_call;
        let latestAnswer_call = async (options) => {
            let result = await this.call('latestAnswer', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.latestAnswer = latestAnswer_call;
        let latestRound_call = async (options) => {
            let result = await this.call('latestRound', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.latestRound = latestRound_call;
        let latestRoundData_call = async (options) => {
            let result = await this.call('latestRoundData', [], options);
            return {
                roundId: new eth_contract_1.BigNumber(result.roundId),
                answer: new eth_contract_1.BigNumber(result.answer),
                startedAt: new eth_contract_1.BigNumber(result.startedAt),
                updatedAt: new eth_contract_1.BigNumber(result.updatedAt),
                answeredInRound: new eth_contract_1.BigNumber(result.answeredInRound)
            };
        };
        this.latestRoundData = latestRoundData_call;
        let latestTimestamp_call = async (options) => {
            let result = await this.call('latestTimestamp', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.latestTimestamp = latestTimestamp_call;
        let owner_call = async (options) => {
            let result = await this.call('owner', [], options);
            return result;
        };
        this.owner = owner_call;
        let phaseAggregators_call = async (param1, options) => {
            let result = await this.call('phaseAggregators', [this.wallet.utils.toString(param1)], options);
            return result;
        };
        this.phaseAggregators = phaseAggregators_call;
        let phaseId_call = async (options) => {
            let result = await this.call('phaseId', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.phaseId = phaseId_call;
        let proposedAggregator_call = async (options) => {
            let result = await this.call('proposedAggregator', [], options);
            return result;
        };
        this.proposedAggregator = proposedAggregator_call;
        let proposedGetRoundData_call = async (roundId, options) => {
            let result = await this.call('proposedGetRoundData', [this.wallet.utils.toString(roundId)], options);
            return {
                roundId: new eth_contract_1.BigNumber(result.roundId),
                answer: new eth_contract_1.BigNumber(result.answer),
                startedAt: new eth_contract_1.BigNumber(result.startedAt),
                updatedAt: new eth_contract_1.BigNumber(result.updatedAt),
                answeredInRound: new eth_contract_1.BigNumber(result.answeredInRound)
            };
        };
        this.proposedGetRoundData = proposedGetRoundData_call;
        let proposedLatestRoundData_call = async (options) => {
            let result = await this.call('proposedLatestRoundData', [], options);
            return {
                roundId: new eth_contract_1.BigNumber(result.roundId),
                answer: new eth_contract_1.BigNumber(result.answer),
                startedAt: new eth_contract_1.BigNumber(result.startedAt),
                updatedAt: new eth_contract_1.BigNumber(result.updatedAt),
                answeredInRound: new eth_contract_1.BigNumber(result.answeredInRound)
            };
        };
        this.proposedLatestRoundData = proposedLatestRoundData_call;
        let version_call = async (options) => {
            let result = await this.call('version', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.version = version_call;
        let acceptOwnership_send = async (options) => {
            let result = await this.send('acceptOwnership', [], options);
            return result;
        };
        let acceptOwnership_call = async (options) => {
            let result = await this.call('acceptOwnership', [], options);
            return;
        };
        this.acceptOwnership = Object.assign(acceptOwnership_send, {
            call: acceptOwnership_call
        });
        let confirmAggregator_send = async (aggregator, options) => {
            let result = await this.send('confirmAggregator', [aggregator], options);
            return result;
        };
        let confirmAggregator_call = async (aggregator, options) => {
            let result = await this.call('confirmAggregator', [aggregator], options);
            return;
        };
        this.confirmAggregator = Object.assign(confirmAggregator_send, {
            call: confirmAggregator_call
        });
        let proposeAggregator_send = async (aggregator, options) => {
            let result = await this.send('proposeAggregator', [aggregator], options);
            return result;
        };
        let proposeAggregator_call = async (aggregator, options) => {
            let result = await this.call('proposeAggregator', [aggregator], options);
            return;
        };
        this.proposeAggregator = Object.assign(proposeAggregator_send, {
            call: proposeAggregator_call
        });
        let setController_send = async (accessController, options) => {
            let result = await this.send('setController', [accessController], options);
            return result;
        };
        let setController_call = async (accessController, options) => {
            let result = await this.call('setController', [accessController], options);
            return;
        };
        this.setController = Object.assign(setController_send, {
            call: setController_call
        });
        let transferOwnership_send = async (to, options) => {
            let result = await this.send('transferOwnership', [to], options);
            return result;
        };
        let transferOwnership_call = async (to, options) => {
            let result = await this.call('transferOwnership', [to], options);
            return;
        };
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call: transferOwnership_call
        });
    }
}
exports.EACAggregatorProxy = EACAggregatorProxy;
EACAggregatorProxy._abi = EACAggregatorProxy_json_1.default.abi;
