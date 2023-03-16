const mongoose = require('mongoose');

async function connect() {
    mongoose
        .connect('mongodb://127.0.0.1:27017/BLoc_dev')
        .then(() => console.log('Connect DB successfully!'))
        .catch (error => console.log(error));
}

module.exports = {connect};