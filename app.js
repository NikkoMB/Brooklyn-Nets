'use strict';

const express = require('express');
const path = require('path');

const app = express();

app.listen(process.env.PORT || 3500, () => {
    console.log(`..I THINK WE'RE LIVE FAM!`);
});

app.use('/images', express.static(path.join(__dirname, '/images')));
app.use('/main.css', express.static(path.join(__dirname, '/main.css')));
app.use('/main.js', express.static(path.join(__dirname, '/main.js')));


/*-----------------------------------------------------------------------------------------*/

app.get('/', (req,res) => { //HOME PAGE
    res.sendFile(path.join(__dirname, 'index.html'));
});