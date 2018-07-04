const NFTActionHouse = artifacts.require("NFTActionHouse");
const SampleNFT = artifacts.require("SampleNFT");

const { assertRevert } = require('./helpers/assertThrow');
const { evmMine } = require('./helpers/evmMine');

contract('NFTActionHouse', (accounts) => {

  let sampleNFT, actionHouseNFT;

  const Owner = accounts[0];
  const Bob = accounts[1];
  const Carol = accounts[2];
  const David = accounts[3];

  beforeEach(async () => {
    actionHouseNFT = await NFTActionHouse.new();
    sampleNFT = await SampleNFT.new('Sample', 'SNFT');

    for(let i = 0; i < 5; i ++) {
      sampleNFT.mint(Bob);
    }

    for(let i = 0; i < 5; i ++) {
      sampleNFT.mint(Carol);
    }
    
  });

  it.skip('Should add NFT token', async () => {

  });

  it.skip('Should not add NFT token if its not the owner of it', async () => {

  });

  context('With added NFTs', async () => {
    it.skip('Should edit NFT', async () => {

    });
    it.skip('Should not be able to edit NFT if its not the owner of it', async () => {

    });
    it.skip('Should remove NFT', async () => {

    });

    it.skip('Should not be able to remove NFT if its not the owner of it', async () => {

    });

    it.skip('Should buy NFT', async () => {

    });

    it.skip('Should not be able to buy it with less wei sended than actual value of NFT', async () => {

    });

    it.skip('Should get the NFTs offered by a user', async () => {

    });

    it.skip('Should get who is offering an NFT', async () => {

    });

    context('With bought NFTs', async () => {



    });

  });

});
