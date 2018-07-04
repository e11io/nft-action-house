const NFTActionHouse = artifacts.require('NFTActionHouse');

module.exports = function(deployer) {

  deployer.deploy([
    NFTActionHouse,
    // TODO add mock NFT contract
  ]).then(async () => {
    let nftActionHouse = await NFTActionHouse.deployed();
    console.log(nftActionHouse.address);
  });

};
