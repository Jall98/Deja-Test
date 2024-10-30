// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LandRegistry {
    struct Property {
        uint256 id;
        address owner;
        string location;
        string description;
    }

    mapping(uint256 => Property) public properties;
    uint256 public propertyCount;

    event PropertyRegistered(uint256 id, address owner);

    function registerProperty(string memory _location, string memory _description) public {
        propertyCount++;
        properties[propertyCount] = Property(propertyCount, msg.sender, _location, _description);
        emit PropertyRegistered(propertyCount, msg.sender);
    }

    function getProperty(uint256 _id) public view returns (Property memory) {
        require(_id > 0 && _id <= propertyCount, "Property does not exist");
        return properties[_id];
    }
}
