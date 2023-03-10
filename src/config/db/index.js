const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/BLoc_dev');
        console.log("Connect DB Successfully!");
    } catch {
        console.log("Connect DB Failed!");
    }
}

module.exports = {connect};