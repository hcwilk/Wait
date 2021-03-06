// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Wait = await hre.ethers.getContractFactory("Wait");
  const wait = await Wait.deploy();

  await wait.deployed();

  console.log("Tide deployed to:", wait.address);





}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  //npx hardhat run --network PulseChain scripts/deploy.js 

  // Gabriel if you were trying to run this ^^ script and it wouldn't work you are a dumbass because that's 
  // Pulsechain. Fuck you. Love, Cole

  // npx hardhat run --network rinkeby scripts/deploy.js 
