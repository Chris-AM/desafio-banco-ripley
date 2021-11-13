const {Schema, model} = require('mongoose');

const AccountSchema = Schema({
    account_type: {
        type: String,
        required: true
    },
});

AccountSchema.method('toJSON', function () {
    const {__v, ...object} = this.toObject();
    return object;
});

module.exports = model('Account', AccountSchema);