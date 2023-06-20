const { check, validationResult } = require('express-validator');

const registerValidate=[
    check('username').notEmpty().trim().withMessage("Username cannot be empty"),
    check('password').notEmpty().isAlphanumeric().withMessage("password must be alphanumeric").trim().isLength({min:6}).withMessage("password must have atleast 6 letters"),
    check('email').notEmpty().isEmail().normalizeEmail().withMessage("Not a valid email"),

    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }
    next()
    }
]

module.exports=registerValidate