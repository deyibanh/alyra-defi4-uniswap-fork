const path = require("path");
// const HDWalletProvider = require('@truffle/hdwallet-provider');
// require('dotenv').config();

module.exports = {
    // contracts_build_directory: path.join(__dirname, "client/src/contracts"),
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545, // Ganache UI: 7545, Ganache CLI: 8545
            network_id: "*",
        },
        // ropsten: {
        //     provider: function() {
        //         return new HDWalletProvider(`${process.env.MNEMONIC}`, `https://ropsten.infura.io/v3/${process.env.INFURA_ID}`)
        //     },
        //     network_id: 3,
        //     // from: "0x726D6942c813967A26E65d1ddA4Ee4eF6462BbC0"
        // }
    },
    mocha: {
        // timeout: 100000
    },
    compilers: {
        solc: {
            version: "0.8.10",
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 25500
                }
            }
        }
    }
};
