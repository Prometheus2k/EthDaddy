// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

async function main() {
  //setup accounts & variables
  const [deployer] = await ethers.getSigners();

  const NAME = "ETH Daddy";
  const SYMBOL = "ETHD";

  //deploy contract
  const ETHDaddy = await ethers.getContractFactory("ETHDaddy");
  const ethDaddy = await ETHDaddy.deploy(NAME, SYMBOL);
  await ethDaddy.deployed();

  console.log(`Deployed Domain Contract at: ${ethDaddy.address}\n`);

  //List 6 domains
  const names = [
    "jack.eth",
    "jill.eth",
    "bob.eth",
    "alice.eth",
    "joe.eth",
    "jane.eth",
  ];
  const costs = [
    tokens(10),
    tokens(20),
    tokens(30),
    tokens(40),
    tokens(50),
    tokens(60),
  ];

  for (let i = 0; i < names.length; i++) {
    const transaction = await ethDaddy
      .connect(deployer)
      .list(names[i], costs[i]);
    await transaction.wait();

    console.log(`Listed domains ${i + 1}: ${names[i]}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
