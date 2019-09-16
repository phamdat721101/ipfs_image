const HDWalletProvider = require('truffle-hdwallet-provider')

require('dotenv').config() // Store key/value from '.env' to process.env

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // Match any network id
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          'adapt tower lens embrace case picture result theme mail again spring chimney',
          'https://ropsten.infura.io/v3/99bafb9250824fadb73e8576c3b5bc67'
        ),
      network_id: 3,     
    },
    kovan: {
      provider: () =>
        new HDWalletProvider(
          process.env.MNENOMIC,
          'https://kovan.infura.io/' + process.env.INFURA_API_KEY
        ),
      network_id: 42,
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          process.env.MNENOMIC,
          'https://rinkeby.infura.io/' + process.env.INFURA_API_KEY
        ),
      network_id: 4,
    },
    // main ethereum network(mainnet)
    main: {
      provider: () =>
        new HDWalletProvider(
          process.env.MNENOMIC,
          'https://mainnet.infura.io/' + process.env.INFURA_API_KEY
        ),
      network_id: 1,
    },
  },
  mocha: {
    useColors: true,
  },
}
