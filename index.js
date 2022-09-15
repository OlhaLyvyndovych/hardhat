require('dotenv').config();
const { ethers } = require('ethers');

async function connect() {
    if (typeof window.ethereum !== "undefined") {
    await ethereum.request({ method: "eth_requestAccounts" });
    }
}
// 
async function execute() {
    // address ✅
    // contract ABI (blueprint to interact with a contract) ✅
    // function ✅
    // node connection - for this case it's a metamask ✅
    const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
    const abi = process.env.ABI
      // Here is the connection of metamask / ethers / 
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // To get the connected account
      const signer = provider.getSigner();
      // Getting an instance of the contract
      // Any function that will be called - will be called by a signer
      const contract = new ethers.Contract(contractAddress, abi, signer);
      await contract.store(42);
}

module.exports = {
    connect,
    execute
}