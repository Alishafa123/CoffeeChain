require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "9q3Dg267mEPzLl6vtU8NzDDSEgRT3PSv";
const SEPOLIA_PRIVATE_KEY = "b2b8f780b81a1c95275416974017f7525486fce63d681ae7d1a6ea2c78194ef0";

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};
