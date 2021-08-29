const express = require('express');
const {
  getStations,
  addStation,
  addAgency,
  addSchedule,
  addbusType,
  addbus,
  getAllBookings,
  bookTicket,
  searchBuses,
} = require('../Controllers/bus-controller');
const authChecker = require('../Utils/auth-check');
const router = express.Router();

// router.get('/station',(req, res, next)=>{
//   console.log('object')
// res.status(200).json({data:"variable"})
// })

router.post('/buses', addbus);
router.post('/station', addStation);
// router.get('/',authChecker, (req, res, next) => {
router.get('/station', getStations);
router.get('/search', searchBuses);
router.post('/schedule', addSchedule);
router.get('/schedule', addSchedule);
router.post('/agency', addAgency);
router.post('/bustype', addbusType);
router.get('/booking', getAllBookings);
router.post('/booking', authChecker, bookTicket);
// router.post('/schedule', addSchedule);
module.exports = router;
