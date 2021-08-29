

const express = require('express');
const { check } = require('express-validator');
// const {check} from 
const { signup, login } = require('../Controllers/auth-controller');
const router = express.Router();

router.post('/signup',[check('email').not().isEmpty().normalizeEmail().isEmail(),check('password').not().isEmpty().isLength({min:8})] ,signup);
router.post('/login',[check('email').not().isEmpty().normalizeEmail().isEmail(),check('password').not().isEmpty().isLength({min:8})] ,login);
module.exports = router;