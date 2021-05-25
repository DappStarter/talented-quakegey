require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remind concert gesture forest flush slide'; 
let testAccounts = [
"0xa9781dee329028efd08531f09447edb6c247b7b5f49f1783d3b76b2a46181acb",
"0x20f81b8bd91a70a3063ed541323b9fc667b378c7a1c7933491b1e0190e419576",
"0xf605e44751dd2b9847333995eb33e8e92e0d0ef827dc4ac81831600bc3a97701",
"0xb410de68d4b783ddb64a08ca55a5a77eb07aaed8552b8b8e5ad9c3a44c3c96f0",
"0x938d829feb50cd70f966a7ec7028ae6bfeeefdc4294fceb8e78675ffce2630c9",
"0x6bcaf68984ea75138ebf0e3b298d52dcb9027ed7d84512170d3e87a78beba93d",
"0x9b5f774d15a70fd31649be4423e9caf307f47e26cec50293c163107531a0381a",
"0xae9991fe07065c3b48c34c994f0015372466b996c1ef22a05f758591e242bdf4",
"0x16d54626c1e3d4a2617a48b628b41440b02d26f817751906505a1c4fcaa62216",
"0x2c5fe66f8266426b97b64de5eae11e5e0bc3484234f62473f6292b015bd4d0f9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
