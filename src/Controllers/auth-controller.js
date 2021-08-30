const { hash, compare } = require('bcryptjs');
const { validationResult } = require('express-validator');
const { sign } = require('jsonwebtoken');
const dotenv = require('dotenv');
const Err = require('../Models/error');
const User = require('../Models/user-model');
dotenv.config();
exports.signup = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(new Err(422, errors));
  }

  const { email, password, name } = req.body;
  let user;

  try {
    user = await User.findOne({ email });
  } catch (error) {
    return next(new Error(error));
  }

  if (user) {
    return next(new Err(403, 'User already exists.'));
  }
  let hashedPassword = await hash(password, 12);
  try {
    hashedPassword = await hash(password, 12);
  } catch (error) {
    return next(new Error(error));
  }
  try {
    user = await User.create({ name, email, password: hashedPassword });
    // user = new User({ email, password });
    // await user.save();
  } catch (error) {
    console.log(1);
    return next(new Error(error));
  }
  let token;
  try {
    token = sign(
      { userId: user.id, email: user.email },
      process.env.SECRETKEY,
      { expiresIn: '1h' }
    );
  } catch (error) {
    return next(new Error(error));
  }

  res
    .status(200)
    .json({
      data: { token, userId: user.id, email: user.email, name: user.name },
      message: 'Registration success.',
    });
};

exports.login = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new Err(422, errors));
  }
  const { email, password } = req.body;

  let user;
  try {
    user = await User.findOne({ email });
  } catch (error) {
    return next(error);
  }
  if (!user) {
    return next(new Err(400, 'No such user exists.'));
  }
  console.log(email);
  let correctPassword = false;
  try {
    correctPassword = await compare(password, user.password);
  } catch (error) {
    return next(error);
  }
  if (!correctPassword) {
    return next(new Err(401, 'Wrong Password.'));
  }
  let token;
  try {
    token = sign(
      { userId: user.id, email: user.email },
      process.env.SECRETKEY,
      { expiresIn: '1h' }
    );
  } catch (error) {
    return next(new Error(error));
  }

  res
    .status(200)
    .json({
      data: { token, userId: user.id, email: user.email, name: user.name },
      message: 'Login Success,',
    });
};
