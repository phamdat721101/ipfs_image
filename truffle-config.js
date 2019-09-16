/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  ropsten: {
    provider: () =>
      new HDWalletProvider(
        'adapt tower lens embrace case picture result theme mail again spring chimney',
        'https://ropsten.infura.io/v3/99bafb9250824fadb73e8576c3b5bc67'
      ),
    network_id: 3   
  },
};
