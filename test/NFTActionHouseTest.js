const NFTActionHouse = artifacts.require("NFTActionHouse");

const { assertRevert } = require('./helpers/assertThrow');
const { evmMine } = require('./helpers/evmMine');

contract('NFTActionHouse', (accounts) => {

  it('Should add NFT token', async () => {

  });

  it('Should not add NFT token if its not the owner of it', async () => {

  });

  context('With added NFTs', async () => {
    it('Should edit NFT', async () => {

    });
    it('Should not be able to edit NFT if its not the owner of it', async () => {

    });
    it('Should remove NFT', async () => {

    });

    it('Should not be able to remove NFT if its not the owner of it', async () => {

    });

    it('Should buy NFT', async () => {

    });

    it('Should not be able to buy it with less wei sended than actual value of NFT', async () => {

    });

    it('Should get the NFTs offered by a user', async () => {

    });

    it('Should get who is offering an NFT', async () => {

    });

    context('With bought NFTs', async () => {

      

    });

  });

});
