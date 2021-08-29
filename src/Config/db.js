const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
// console.log()
module.exports = () => {
  return mongoose.connect(process.env.CONNECTIONSTRING, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};
