const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const CommentsContract = await hre.ethers.getContractFactory("Comments");
  const contract = await CommentsContract.deploy();

  await contract.deployed();

  const tx1 = await contract.addComment("my-blog-post", "My first comment");
  await tx1.wait();

  const tx2 = await contract.addComment("my-blog-post", "My second comment");
  await tx2.wait();

  console.log("Contract deployed to:", contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });