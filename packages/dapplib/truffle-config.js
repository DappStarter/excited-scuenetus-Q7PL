require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth snow huge grace industry fringe twenty'; 
let testAccounts = [
"0x3243dffa1bd00efd2f167c27384662c22fc9b35eb64bb9902eb55fe5326bb757",
"0x08917d0a0431b68a48d285e08a30fc70a2de7512a6907040b8ab6134a4919e20",
"0x3b470b2f5e120b58eaa200af3e07497ecc019bd8dd58ad04ac9db3ab59703612",
"0xc2088fbccd09d6e679b84a2a471512bb7878eed7b3bcfaa4f11d188ba71b80e2",
"0x131c3ddb1ed49cd0d701aa59907c31f2a94eaddb9d2d4d3e20cd6a23e834d527",
"0xf7f56e555ea79479a75925e8ef4a54c1c0895854ea6a64c2155e917224cfb740",
"0x83eca121f37777e01110ec47d64e97a1bf0a8961b5fd97ce7faa8128dae6318a",
"0xa32ae81d631bb2b143905263b4261866bb8534fd9aacb2a5ec2d84376af176f4",
"0x6429be2571042d2331b8858677e10b16ce3741788ca9c1657bf3c502cb2f6995",
"0x884ccfa8c44170b2c55d9d6a0439385c16413f26838524b6c935d11512a0f247"
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
            version: '^0.8.0'
        }
    }
};

