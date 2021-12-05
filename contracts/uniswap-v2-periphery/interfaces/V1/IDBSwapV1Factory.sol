// SPDX-License-Identifier: MIT

pragma solidity 0.8.10;

interface IDBSwapV1Factory {
    function getExchange(address) external view returns (address);
}
