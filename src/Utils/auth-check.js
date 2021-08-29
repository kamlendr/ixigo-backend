const { verify } = require('jsonwebtoken');
const dotenv = require('dotenv');

const Err = require('../Models/error');
dotenv.config();
const authChecker = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  // console.log(!token);
  // console.log(1)

  const errMsg = new Err(401, 'Not valid token');
  if (!token) {
    //  return res.redirect("/")
    return next(new Err(401, 'No token'));
  }
  // console.log(2)

  let validToken;
  try {
    validToken = verify(token, process.env.SECRETKEY);
  } catch (error) {
    return next(errMsg);
  }
  // console.log(4)
  if (!validToken) {
    return next(errMsg);
  }
  // console.log(validToken)

  req.userId=validToken.userId

  // console.log(validToken);
  next();
};

module.exports = authChecker;
