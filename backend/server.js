// Contract Address :-  0x6abAFbf7BeE7D9c702B557474942120473688ED0

const express = require("express");
const cors = require ("cors");
const colors = require ("colors");
const ABI = require ("./ABI.json");
const {ethers} = require ("ethers");
require("dotenv").config();


const provider = new ethers.JsonRpcProvider(process.env.ALCHEMY_SEPOLIA_NETWORK);
const contractAddress = process.env.CONTRACT_ADDRESS;
const contract = new ethers.Contract(contractAddress, ABI, provider);  // Instance of our contract.

const app = express() 

app.use(cors());
app.use(express.json());  // server to accept the frontend data;
app.use(express.urlencoded({extended: true}));

async function Task(){
    const Task = await contract.viewTask(1);
    console.log(Task);
}

Task();

app.get('/', (_, res) => {
    res.send("<h2>Server is running successfully</h2>");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(colors.yellow(`Server is running on port : ${PORT}`));
})