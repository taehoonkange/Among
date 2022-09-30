pragma solidity >=0.4.22 <0.9.0;

/* is ERC165 */ 
interface ERC721 {
  event Transfer(
    address indexed _from, 
    address indexed _to, 
    uint256 indexed _tokenId
  );
  event Approval(
    address indexed _owner, 
    address indexed _approved, 
    uint256 indexed _tokenId
  );
  event ApprovalForAll(
    address indexed _owner, 
    address indexed _operator, 
    bool _approved
  );

  function balanceOf(address _owner) public view returns (uint256);

  function ownerOf(uint256 _tokenId) public view returns (address);

  function safeTransferFrom(
    address _from, 
    address _to, 
    uint256 _tokenId, 
    bytes data
  ) public;

  function safeTransferFrom(
    address _from, 
    address _to, 
    uint256 _tokenId
  ) public;

  function transferFrom(
    address _from, 
    address _to, 
    uint256 _tokenId
  ) public;

  function approve(address _approved, uint256 _tokenId) public;

  function setApprovalForAll(address _operator, bool _approved) public;

  function getApproved(uint256 _tokenId) public view returns (address);

  function isApprovedForAll(
    address _owner, 
    address _operator
  ) public view returns (bool);
}

contract ERC721Implementation is ERC721 {
  mapping(uint256 => address) tokenOwner;
  mapping(address => uint256) ownedTokenCount;

  function mint(address _to, uint256 _tokenId) public {
    tokenOwner[_tokenId] = _to;
    ownedTokenCount[_to] += 1;
  }

  function balanceOf(address _owner) public view returns (uint256) {
    return ownedTokenCount[_owner];
  }

  function ownerOf(uint256 _tokenId) public view returns (address) {
	  return tokenOwner[_tokenId];
  }

  function transferFrom(
    address _from,
    address _to,
    uint256 _tokenId
  ) public {
    address owner = ownerOf(_tokenId);
      require(msg.sender == owner);
      require(_from != address(0));
      require(_to != address(0));

      ownedTokenCount[_from] -= 1;
      tokenOwner[_tokenId] = address(0);

      ownedTokenCount[_to] += 1;
      tokenOwner[_tokenId] = _to;
    }

}