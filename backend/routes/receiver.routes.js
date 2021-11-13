const {Router} = require("express");
const { check } = require("express-validator");
const { createReceiver, getReceivers, updateReceiver, deleteReceiver } = require('../controllers/receiver.controller');
const { validateFields } = require("../middlewares/validate-fields");

const router = Router();

router.post(
    "/", [
        check("rut", "Rut is required").not().isEmpty(),
        check("name", "Name is required").not().isEmpty(),
        check("mail", "Mail is required").not().isEmpty(),
        check("phone", "Phone is required").not().isEmpty(),
        check("bank", "Bank is required").not().isEmpty(),
        check("account_type", "Account type must be valid").isMongoId(),
        check("account_number", "Account number is required").not().isEmpty(),
        validateFields
    ],
    createReceiver
)
router.get("/", getReceivers);
router.put("/:id", [
    check("rut", "Rut is required").not().isEmpty(),
    check("name", "Name is required").not().isEmpty(),
    check("mail", "Mail is required").not().isEmpty(),
    check("phone", "Phone is required").not().isEmpty(),
    check("bank", "Bank is required").not().isEmpty(),
    check("account_type", "Account type must be valid").isMongoId(),
    check("account_number", "Account number is required").not().isEmpty(),
    validateFields
],updateReceiver);

router.delete("/:id", deleteReceiver);
module.exports = router;