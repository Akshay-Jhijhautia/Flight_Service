const express = require('express');
const { PORT } = require('./config');

const app = express();

app.get('/',(req,res) => {
    res.send("Healthy");
});



app.listen(PORT, () => {
    console.log(`Successfully started the server on port = ${PORT}`);
});