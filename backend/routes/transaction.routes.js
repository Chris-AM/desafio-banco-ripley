const { Router } = require('express');
const { check } = require('express-validator');
const { createTransfer, getTransfer, getTransfers } = require('../controllers/transaction.controller');
const { validateFields } = require("../middlewares/validate-fields");

const router = Router();

router.post('/', [
    check('receiver', 'Receiver must be valid').isMongoId(),
    check('ammount', 'Amount is required').not().isEmpty(),
    validateFields
], createTransfer)
router.get('/:id', getTransfer)
router.get('/', getTransfers)
module.exports = router;