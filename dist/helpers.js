"use strict";
exports.__esModule = true;
exports.addChains = exports.getCode = exports.codeMap = exports.parameters = void 0;
exports.parameters = {
    chainIDMap: {
        1: '0x1',
        3: '0x3',
        4: '0x4',
        5: '0x5',
        42: '0x2a',
        128: '0x80',
        256: '0x100',
        69: 69,
        24: 24,
        25: '0x19',
        56: '0x38',
        97: '0x61',
        137: '0x89',
        338: '0x152',
        80001: '0x13881',
        43113: '0xa869',
        43114: '0xa86a',
        42220: '0xa4ec',
        44787: '0xaef3',
        250: '0xfa',
        4002: '0xfa2',
        2001: '0x7d1',
        200101: '0x30da5',
        42161: '0xa4b1',
        421613: '0x66eed'
    },
    chainsMap: {
        '0x1': {
            name: 'mainnet',
            chainID: 1
        },
        '0x3': {
            name: 'ropsten',
            chainID: 3
        },
        '0x4': {
            name: 'rinkeby',
            chainID: 4
        },
        '0x5': {
            name: 'goerli',
            chainID: 5
        },
        '0x2a': {
            name: 'kovan',
            chainID: 42
        },
        '0x80': {
            name: 'heco',
            chainID: 128
        },
        '0x100': {
            name: 'heco-testnet',
            chainID: 256
        },
        69: {
            name: 'KardiachainTestnet',
            chainID: 69
        },
        24: {
            name: 'Kardiachain',
            chainID: 24
        },
        '0x19': {
            name: 'cronos-mainnet',
            chainID: 25
        },
        '0x38': {
            name: 'binance',
            chainID: 56
        },
        '0x61': {
            name: 'binance-testnet',
            chainID: 97
        },
        '0x89': {
            name: 'polygon',
            chainID: 137
        },
        '0x152': {
            name: 'cronos-testnet',
            chainID: 338
        },
        '0x13881': {
            name: 'polygon-testnet',
            chainID: 80001
        },
        '0xa86a': {
            name: 'avalanche',
            chainID: 43114
        },
        '0xa869': {
            name: 'avalanche-testnet',
            chainID: 43113
        },
        '0xa4ec': {
            name: 'celo',
            chainID: 42220
        },
        '0xaef3': {
            name: 'celo-testnet',
            chainID: 44787
        },
        '0xfa': {
            name: 'fantom-opera',
            chainID: 250
        },
        '0xfa2': {
            name: 'fantom-testnet',
            chainID: 4002
        },
        '0x7d1': {
            name: 'Milkomeda C1 Mainnet',
            chainID: 2001
        },
        '0x30da5': {
            name: 'Milkomeda C1 Testnet',
            chainID: 200101
        },
        '0xa4b1': {
            name: 'Arbitrum One',
            chainID: 42161
        },
        '0x66eed': {
            name: 'Arbitrum Goerli Testnet',
            chainID: 421613
        }
    }
};
exports.codeMap = {
    1: {
        type: 'Success',
        name: 'Provider connected'
    },
    2: {
        type: 'Error',
        name: 'Provider not found'
    },
    3: {
        type: 'Error',
        name: 'Not authorized'
    },
    4: {
        type: 'Error',
        name: 'Chain not selected or not equal to settings chain'
    },
    5: {
        type: 'Error',
        name: 'Qr code modal are closed'
    },
    6: {
        type: 'Error',
        name: 'Wallet disconnected'
    },
    7: {
        type: 'Error',
        name: 'Cant getting user address'
    }
};
exports.getCode = function (code) { return exports.codeMap[code]; };
exports.addChains = function (chains) {
    chains.map(function (chain) {
        var name = chain.name, chainID = chain.chainID, hex = chain.hex;
        exports.parameters.chainIDMap[chainID] = hex;
        exports.parameters.chainsMap[hex] = { name: name, chainID: chainID };
    });
    return exports.parameters;
};
