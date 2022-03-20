// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Comments{

    struct Comment{
        uint32 id;
        string topic;
        address creator_address;
        string message;
        uint256 created_at;
    }

    //notify that a comment was added
    event CommentAdded(Comment comment);

    function getComments(string calldata topic) public view returns(Comment[] memory){
        
    }

    function addComment(string calldata topic, string calldata message) public{

    }
}
