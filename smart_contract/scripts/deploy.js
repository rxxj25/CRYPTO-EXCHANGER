const hre = require("hardhat");

const main = async () => {
    const Transactions = await hre.ethers.getContractFactory("Transactions");
    const transactions = await Transactions.deploy();  // ethers v6 automatically deploys

    await transactions.waitForDeployment(); // ✅ ethers v6 uses waitForDeployment() instead of deployed()

    console.log("Transactions deployed to:", await transactions.getAddress()); // ✅ ethers v6 uses getAddress()
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

runMain();
