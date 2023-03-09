const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Bloc_dev');
        console.log("1");
    } catch {
        console.log(0);
    }
}

module.exports = {connect};