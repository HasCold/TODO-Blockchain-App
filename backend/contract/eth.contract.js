const ABI = require ("../ABI.json");
const {ethers} = require ("ethers");
require("dotenv").config();

const provider = new ethers.JsonRpcProvider(process.env.ALCHEMY_SEPOLIA_NETWORK);
const contractAddress = process.env.CONTRACT_ADDRESS;
const contract = new ethers.Contract(contractAddress, ABI, provider);  // Instance of our contract.

module.exports= contract;