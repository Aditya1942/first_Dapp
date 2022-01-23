const Web3 = require("web3");

const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
web3.eth.defaultAccount = web3.eth.accounts[0];

// Set Contract Abi
var contractAbi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
    ],
    name: "store",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "retrieve",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
]; // Add Your Contract ABI here!!!

// Set Contract Address
var contractAddress = "0x7aE1351C3a6140A510fb66ba91a857D38B287ACD"; // Add Your Contract address here!!!
web3.eth.Contract.defaultAccount = web3.eth.accounts[0];

// Set the Contract
var contract = new web3.eth.Contract(contractAbi, contractAddress);

contract.methods
  .store(1942)
  .send({ from: "0x0B35E4729f3239E7997053174De70D80d0E2E0Eb" })
  .then(function (receipt) {
    console.log("retrieving number");
    contract.methods
      .retrieve()
      .call({ from: "0x0B35E4729f3239E7997053174De70D80d0E2E0Eb" })
      .then(console.log);
  });
