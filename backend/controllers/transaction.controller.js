const { request, response } = require("express");
const Transfer = require("../models/transaction.model");
const resources = {
    receriver: "$receiver",
    ammount: "$ammount",
    date: "$date",
};

const createTransfer = async (req = request, res = response) => {
    const transer = new Transfer({
        ...req.body
    });
    console.log('transer ==>', transer.ammount);
    console.log('transer ==>', transer.account);
    try {
        const newTransfer = await transer.save();
        res.json({
            message: "Transfer created",
            transfer: newTransfer
        });
    } catch (error) {
        console.log('error ==>', error);
        res.status(500).json({
            message: "Internal Server Error. Check Logs",
            data: error
        });
    }
}

const getTransfers = async (req = request, res = response) => {
    try {
        tranfer_info = await Transfer.find({}).populate('receiver', 'rut name bank account_type account_number')
                                                .populate('account', 'account_type');
        res.json({
            message: "Transfers retrieved",
            transfers: tranfer_info
        });
       
    } catch (error) {
        console.log('error ==>', error);
        res.status(500).json({
            message: "Internal Server Error. Check Logs",
            data: error
        });
    }
}

const getTransfer = async (req = request, res = response) => {
    const { id } = req.params;
    try {
        const transfer = await Transfer.findById(id)
            .populate('receiver', 'rut name bank account_type account_number');
        res.json({
            message: "Transfer retrieved",
            transfer: transfer
        });
    } catch (error) {
        console.log('error ==>', error);
        res.status(500).json({
            message: "Internal Server Error. Check Logs",
            data: error
        });
    }
}

module.exports = {
    createTransfer,
    getTransfers,
    getTransfer
}