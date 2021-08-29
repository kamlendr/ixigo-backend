const Err = require('../Models/error');
const User = require('../Models/user-model');

exports.getUserDetails = async (req, res, next) => {
  // let req.userId;
  let user;
  try {
    user = await User.findOne({ id: req.userId }, ['email','name','tickets']);
  } catch (error) {
    return next(new Error(error));
  }
  if (!user) {
    return next(new Err(403, 'no such user exists.'));
  }
  res.status(200).json({ data: user, message: 'hello user' });
};
