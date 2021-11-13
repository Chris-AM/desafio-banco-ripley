const { request, response } = require("express");
const Receiver = require('../models/receiver.model');

const createReceiver = async (req = request, res = response) => {
    const { rut } = req.body;
    try {
        const receiverExists = await Receiver.findOne({ rut });
        //if receiver exists (cannot create two receivers with same rut)
        if (receiverExists) {
            return res.status(401).json({
                ok: false,
                msg: 'Receiver already exists'
            });
        }
        //if receiver does not exist
        const receiver = new Receiver(req.body);
        await receiver.save();
        res.json({
            ok: true,
            msg: 'Receiver created successfully',
            receiver
        });
    } catch (error) {
        console.log('error ==> ', error);
        res.status(500).json({
            ok: false,
            msg: 'Internal server error, check logs'
        });
    }
}

const getReceivers = async (req = request, res = response) => {
    try {
        const receivers = await Receiver.find()
            .populate('account_type', 'account_type');
        res.json({
            ok: true,
            msg: 'Receivers retrieved successfully',
            receivers
        });
    } catch (error) {
        console.log('error ==> ', error);
        res.status(500).json({
            ok: false,
            msg: 'Internal server error, check logs'
        });
    }
}

const getReceiver = async (req = request, res = response) => {
    const { _id } = req.params;
    try {
        const receiver = await Receiver.findById(_id)
            .populate('account_type', 'account_type');
        res.json({
            ok: true,
            msg: 'Receiver retrieved successfully',
            receiver
        });
    } catch (error) {
        console.log('error ==> ', error);
        res.status(500).json({
            ok: false,
            msg: 'Internal server error, check logs'
        });
    }
}

const updateReceiver = async (req = request, res = response) => {
    const id = req.params.id;
    const { rut } = req.body;
    console.log('rut ==> ', rut);
    try {
        const receiverExists = await Receiver.findOne({ rut });
        if (!receiverExists) {
            return res.status(404).json({
                ok: false,
                msg: 'Receiver does not exist'
            });
        }
        console.log('id -> ', id);
        const receiver = await Receiver.findOneAndUpdate({ rut }, req.body, { new: true });
        res.json({
            ok: true,
            msg: 'Receiver updated successfully',
            receiver
        });
    }
    catch (error) {
        console.log('error ==> ', error);
        res.status(500).json({
            ok: false,
            msg: 'Internal server error, check logs'
        });
    }
}

const deleteReceiver = async (req = request, res = response) => {
    const id = req.params.id;
    try {
        const receiverExists = await Receiver.findById(id);
        if (!receiverExists) {
            return res.status(404).json({
                ok: false,
                msg: 'Receiver does not exist'
            });
        }
        await Receiver.findByIdAndDelete(id);
        res.json({
            ok: true,
            msg: 'Receiver deleted successfully'
        });
    } catch (error) {
        console.log('error ==> ', error);
        res.status(500).json({
            ok: false,
            msg: 'Internal server error, check logs'
        });
    }
}

module.exports = {
    createReceiver,
    getReceivers,
    getReceiver,
    updateReceiver,
    deleteReceiver
}