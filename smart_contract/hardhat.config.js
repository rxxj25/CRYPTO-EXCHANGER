require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/LHUVL3Omoqsw4N-vObVEN",
      accounts: ["ff1960c710713149d873e1a1d35fa366bea6ccc4782a542490ef476f732bdbc5"]
    }
  }
};
