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
    const tokenPrice = 1 * ether;
    await actionHouseNFT.addNFT(sampleNFT.address, tokenId, tokenPrice, { from: Bob });
  });

  it.skip('Should not add NFT token if its not the owner of it', async () => {
    const tokenId = 1;
    const tokenPrice = 1 * ether;
    await assertRevert(async () => {
      await actionHouseNFT.addNFT(sampleNFT.address, tokenId, tokenPrice, { from: Carol });
    });
  });

  context('With added NFTs', async () => {

    beforeEach(async () => {
      const tokenId = 1;
      const tokenPrice = 1 * ether;
      await actionHouseNFT.addNFT(sampleNFT.address, tokenId, tokenPrice, { from: Bob });
    });

    it.skip('Should edit NFT', async () => {
      const tokenId = 1;
      const tokenPrice = 2;
      await actionHouseNFT.editNFT(sampleNFT.address, tokenId, tokenPrice, { from: Bob });
    });

    it.skip('Should not be able to edit NFT if its not the owner of it', async () => {
      const tokenId = 1;
      const tokenPrice = 2;
      await assertRevert(async () => {
        await actionHouseNFT.editNFT(sampleNFT.address, tokenId, tokenPrice, { from: Carol });
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
      const tokenId = 1;
      const tokensOfferedByUser = await actionHouseNFT.offeredByUser(Bob);
      assert.equal([tokenId].toString(), tokensOfferedByUser.toString(), 'Tokens offered by user are wrong');
    });

    it.skip('Should get who is offering the token', async () => {
      const tokenId = 1;
      const offeredBy = await actionHouseNFT.offeredBy(sampleNFT.address, tokenId);
      assert.equal(Bob, offeredBy, 'The owner should be Bob, dude wtf.');
    });

    it.skip('Should get the token price', async () => {
      const tokenId = 1;
      const tokenPrice = 1 * ether;
      const tokenPriceOnContract = await actionHouseNFT.tokenPrice(sampleNFT.address, tokenId);
      assert.equal(tokenId, tokenPriceOnContract, 'The price should be 1 ether, dude wtf.');
    });

    it.skip('Should buy NFT', async () => {
      const tokenId = 1;
      const tokenPrice = 1 * ether;
      await actionHouseNFT.buyNFT(sampleNFT.address, tokenId, { from: David, value: tokenPrice });
    });

    it.skip('Should not be able to buy it with less wei sended than actual value of NFT', async () => {
      const tokenId = 1;
      const tokenPrice = 0.5 * ether;
      await assertRevert(async () => {
        await actionHouseNFT.buyNFT(sampleNFT.address, tokenId, { from: David, value: tokenPrice });
      });
    });

    context('With bought NFTs', async () => {
      beforeEach(async () => {
        const tokenId = 1;
        const tokenPrice = 1 * ether;
        await actionHouseNFT.buyNFT(sampleNFT.address, tokenId, { from: David, value: tokenPrice });
      });

      it.skip('Should be able to withdraw funds', async () => {
        const actualBobBalance = await web3.eth.getBalance(Bob);
        await actionHouseNFT.withdrawFunds();
        const newBobBalance = await web3.eth.getBalance(Bob);
        assert.equal(actualBobBalance.plus(1).equals(newBobBalance), true, 'Bob didnt whitdraw the funds he should have.');
      });

      it.skip('Should keep track of the total amount of wei sold on aciton house', async () => {
        const weiSold = await actionHouseNFT.totalSold();
        assert.equal(weiSold, 1, 'Total amount of wei sold its not what its supposed to be. Get ur game on, bruh.');
      });

      it.skip('Should keep track of amount of wei raised by a user', async () => {
        const weiRaisedByUser = await actionHouseNFT.raisedByUser(Bob);
        assert.equal(weiRaisedByUser, 1, 'The wei raised by user its not what its supposed to be.');
      });
    });
  });
});
