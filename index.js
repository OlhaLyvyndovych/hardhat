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
    const abi = [
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "_favoriteNumber",
              "type": "uint256"
            }
          ],
          "name": "addPerson",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "name": "nameToFavoriteNumber",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "people",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "favoriteNumber",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "retrieve",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_favoriteNumber",
              "type": "uint256"
            }
          ],
          "name": "store",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]
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