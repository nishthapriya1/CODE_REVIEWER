const express = require('express');
require('dotenv').config()
const path = require('path');
const app = require('./src/app')


const _dirname = path.resolve();

app.use(express.static(path.join(_dirname,"/Frontend/dist")))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(_dirname, "Frontend", "dist", "index.html"));
})
app.listen(process.env.PORT, () => {
    console.log('Server is running on http://localhost:3000')
})