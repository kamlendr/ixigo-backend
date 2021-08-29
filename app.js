const express = require('express');
const app = express();
const cors = require('cors');
const busRoutes = require('./src/Routes/bus-router');
const authRoutes = require('./src/Routes/auth-router');
const userRoutes = require('./src/Routes/user-router');
const authChecker = require('./src/Utils/auth-check');

app.use(express.json());
app.use(cors());
const logger=(req,res,next)=>{
  console.log(req.query)
  next()
}
app.use('/api/bus',logger, busRoutes);
app.use('/api/user', userRoutes);

app.use('/api/auth' ,authRoutes);

app.use((req,res,next)=>{throw new Error("Not found")})

app.use((err, req, res, next) => {
  const { statusCode, message,errInfo } = err;
  console.log('error middleware called.');
  res.status(statusCode || 404).json(errInfo||{ Error: message });
});

module.exports = app;
