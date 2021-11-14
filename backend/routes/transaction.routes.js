const { Router } = require('express');
const { check } = require('express-validator');
const { createTransfer, getTransfer, getTransfers } = require('../controllers/transaction.controller');
const { validateFields } = require("../middlewares/validate-fields");

const router = Router();

router.post('/', [
    check('receiver', 'Receiver must be valid').isMongoId(),
    check('ammount', 'Amount is required').not().isEmpty(),
    check('ammount', 'Amount must be a number').isNumeric(),
    check('ammount', 'Amount must be greater than 0').isNumeric({ min: 0 }),
    check('account', 'Account must be valid').isMongoId(),
    validateFields
], createTransfer)
router.get('/:id', getTransfer)
router.get('/', getTransfers)
module.exports = router;