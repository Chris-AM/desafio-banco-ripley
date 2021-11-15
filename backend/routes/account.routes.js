const { Router } = require('express');
const { check } = require('express-validator');
const { createAccount, getAccounts, getAccount } = require('../controllers/account.controller');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router()

router.post('/', [
    check('account_type', 'Account type is required').not().isEmpty(),
    validateFields
], createAccount)

router.get('/', getAccounts);
router.get('/:id', getAccount);

module.exports = router