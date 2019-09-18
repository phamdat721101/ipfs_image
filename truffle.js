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
      gas: 4700000,
			gasPrice: 100000000000,
      provider: new HDWalletProvider(
          'adapt tower lens embrace case picture result theme mail again spring chimney',
          'https://ropsten.infura.io/v3/d76d1fc6e9744bc183135da75b033a20'          
        ),
      network_id: 3,     
    },
    kovan: {
      provider:new HDWalletProvider(
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
