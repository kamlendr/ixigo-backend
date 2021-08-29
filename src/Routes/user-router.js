const express = require('express');
const { check } = require('express-validator');
// const {check} from
const { getUserDetails } = require('../Controllers/user-controller');
const authChecker = require('../Utils/auth-check');
const router = express.Router();

router.get('/profile',authChecker, getUserDetails);
// router.post('/login',[check('email').not().isEmpty().normalizeEmail().isEmail(),check('password').not().isEmpty().isLength({min:8})] ,login);
module.exports = router;
