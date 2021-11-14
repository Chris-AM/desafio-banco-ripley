const {Schema, model} = require('mongoose');

const TransferSchema = Schema({
    receiver: {
        type: Schema.Types.ObjectId,
        ref: 'Receiver',
        required: true
    },
    ammount: {
        type: Number,
        required: true
    },
    account: {
        type: Schema.Types.ObjectId,
        ref: 'Account',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

TransferSchema.method('toJSON', function() {
    const {__v, _id, ...object} = this.toObject();
    return object;
})

module.exports = model('Transfer', TransferSchema);