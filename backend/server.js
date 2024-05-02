// Contract Address :-  0x6abAFbf7BeE7D9c702B557474942120473688ED0
const express = require("express");
const cors = require ("cors");
const colors = require ("colors");
const ethRoutes = require ("./routes/eth.route");
require("dotenv").config();

const app = express() 

app.use(cors());
app.use(express.json());  // server to accept the frontend data;
app.use(express.urlencoded({extended: true}));


app.use('/api/eth', ethRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(colors.yellow(`Server is running on port : ${PORT}`));
});

app.get('/', (_, res) => {
    res.send("<h2>Server is running successfully</h2>");
});