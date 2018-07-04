pragma solidity ^0.4.23;

interface NFTActionHouseInterface {

  function addNFT(address _nftContract, uint256 _nft, uint256 _price); // Must set approval on _nftContract
  function editNFT(address _nftContract, uint256 _nft, uint256 _price);
  function removeNFT(address _nftContract, uint256 _nft);
  function buyNFT(address _nftContract, uint256 _nft, uint256 _price) payable;
  function withdrawFunds();

  function totalSold() external view returns(uint256 _wei);
  function tokenPrice(address _nftContract, uint256 _nft) external view returns(uint256 _wei);
  function raisedByUser(address _user) external view returns(uint256 _wei);
  function offeredByUser(address _user) external view returns(uint256[] _nfts);
  function offeredBy(address _nftContract, uint256 _nft) external view returns(address _user);

  // Advanced
  function setCommision(uint256 _percent); // Only Owner
  function getCommision() external view returns (uint256 _commision);

}
