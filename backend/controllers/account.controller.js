const { request, response } = require("express");
const Account = require("../models/account.model");


const createAccount = async(req = request, res = response) => {
    try {
        const account = new Account(req.body);
        await account.save();
        res.status(200).json({
            ok: true,
            message: "Account created successfully",
            account
        });
    } catch (error) {
        console.log('Error ==>', error);
        res.status(500).json({
            ok: false,
            msg:'Internal server error. Check Logs'
        })
    }
}

const getAccounts = async(req = request, res = response) => {
    try {
        const accounts = await Account.find({}, 'account_type');
        res.status(200).json({
            ok: true,
            message: "Accounts retrieved successfully",
            accounts
        });
    } catch (error) {
        console.log('Error ==>', error);
        res.status(500).json({
            ok: false,
            msg:'Internal server error. Check Logs'
        })
    }
}

const getAccount = async(req = request, res = response) => {
    const { id } = req.params;
    try {
        const account = await Account.findById(id);
        res.status(200).json({
            ok: true,
            message: "Account retrieved successfully",
            account
        });
    } catch (error) {
        console.log('Error ==>', error);
        res.status(500).json({
            ok: false,
            msg:'Internal server error. Check Logs'
        })
    }
}


module.exports = {
    createAccount,
    getAccounts,
    getAccount
}