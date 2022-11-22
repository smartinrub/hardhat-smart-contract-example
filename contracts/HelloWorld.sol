// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract HelloWorld {
    string from;

    function helloWorld() public view returns (string memory) {
        if (bytes(from).length == 0) {
            return "Hello World!";
        }

        return string(abi.encodePacked("Hello World from ", from, "!"));
    }

    function updateFrom(string memory _from) public {
        from = _from;
    }
}
