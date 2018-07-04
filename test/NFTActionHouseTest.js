const NFTActionHouse = artifacts.require("NFTActionHouse");
const SampleNFT = artifacts.require("SampleNFT");

const { assertRevert } = require('./helpers/assertThrow');
const { evmMine } = require('./helpers/evmMine');

contract('NFTActionHouse', (accounts) => {

  let sampleNFT, actionHouseNFT;

  const ether = 10 ** 18;

  const Owner = accounts[0];
  const Bob = accounts[1];
  const Carol = accounts[2];
  const David = accounts[3];

  beforeEach(async () => {
    actionHouseNFT = await NFTActionHouse.new();
    sampleNFT = await SampleNFT.new('Sample', 'SNFT');

    for(let i = 0; i < 5; i ++) {
      await sampleNFT.mint(Bob);
    }

    for(let i = 0; i < 5; i ++) {
      await sampleNFT.mint(Carol);
    }
  });

  it.skip('Should add NFT token', async () => {
    const tokenId = 1;
    const tokenPrice = 1;
    await actionHouseNFT.addNFT(sampleNFT.address, tokenId, tokenPrice * ether, { from: Bob });
  });

  it.skip('Should not add NFT token if its not the owner of it', async () => {
    const tokenId = 1;
    const tokenPrice = 1;
    await assertRevert(async () => {
      await actionHouseNFT.addNFT(sampleNFT.address, tokenId, tokenPrice * ether, { from: Carol });
    });
  });

  context('With added NFTs', async () => {

    beforeEach(async () => {
      const tokenId = 1;
      const tokenPrice = 1;
      await actionHouseNFT.addNFT(sampleNFT.address, tokenId, tokenPrice * ether, { from: Bob });
    });

    it.skip('Should edit NFT', async () => {
      const tokenId = 1;
      const tokenPrice = 2;
      await actionHouseNFT.editNFT(sampleNFT.address, tokenId, tokenPrice * ether, { from: Bob });
    });

    it.skip('Should not be able to edit NFT if its not the owner of it', async () => {
      const tokenId = 1;
      const tokenPrice = 2;
      await assertRevert(async () => {
        await actionHouseNFT.editNFT(sampleNFT.address, tokenId, tokenPrice * ether, { from: Carol });
      });
    });

    it.skip('Should remove NFT', async () => {
      const tokenId = 1;
      await actionHouseNFT.removeNFT(sampleNFT.address, tokenId, { from: Bob });
    });

    it.skip('Should not be able to remove NFT if its not the owner of it', async () => {
      const tokenId = 1;
      await assertRevert(async () => {
        await actionHouseNFT.editNFT(sampleNFT.address, tokenId, { from: Carol });
      });
    });

    it.skip('Should get tokens offered by user', async () => {

    });

    it.skip('Should get who is offering the token', async () => {
      // for offeredBy function
    });

    it.skip('Should get the token price', async () => {

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
      beforeEach(async () => {
        const tokenId = 1;
        const tokenPrice = 1;
        await actionHouseNFT.buyNFT(sampleNFT.address, tokenId, { from: David, value: tokenPrice });
      });

      it.skip('Should be able to withdraw funds', async () => {

      });

      it.skip('Should keep track of the total amount of wei sold on aciton house', async () => {

      });

      it.skip('Should keep track of amount of wei raised by a user', async () => {

      });

    });

  });

});
