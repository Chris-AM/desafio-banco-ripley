const { Router } = require('express');
const { check } = require('express-validator');
const { createAccount, getAccounts } = require('../controllers/account.controller');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router()

router.post('/', [
    check('account_type', 'Account type is required').not().isEmpty(),
    validateFields
], createAccount)

router.get('/', getAccounts)

module.exports = router