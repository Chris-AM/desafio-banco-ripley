const mongoose = require('mongoose');

const DB_CNN = process.env.DB_CNN;

const dbConnection = async () => {

    try {
        await mongoose.connect(DB_CNN, {});
        console.log('DB is connected');
    } catch (error) {
        console.log('error', error);
    }
}

module.exports = {
    dbConnection
};