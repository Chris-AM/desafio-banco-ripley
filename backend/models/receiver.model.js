const {Schema, model} = require('mongoose');

const ReceiverSchema = Schema({
    rut: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    bank: {
        type: String,
        required: true
    },
    account_type: {
        type: Schema.Types.ObjectId,
        ref: 'Account',
        required: true
    },
    account_number: {
        type: Number,
        required: true
    },
});

ReceiverSchema.method('toJSON', function () {
    const {__v, ...object} = this.toObject();
    return object;
});

module.exports = model('Receiver', ReceiverSchema);