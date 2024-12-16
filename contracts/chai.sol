// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract Chai {
    
    struct Memo {
        string name;
        string message;
        uint timestamp;
        address from;
    }

    Memo[] memos;
    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function buyChai(string calldata _name, string calldata _message) external payable{
        require(msg.value>0, "Please pay more than 0 ether");
        owner.transfer(msg.value);
        memos.push(Memo(_name, _message, block.timestamp, msg.sender));
    }

    function getMemos() public view returns(Memo[] memory){
        return memos;
    }
}
