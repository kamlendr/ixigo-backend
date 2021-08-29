const mongoose = require('mongoose');
const Err = require('../Models/error');
const Station = require('../Models/station-model');
const Schedule = require('../Models/schedule-model');
const Agency = require('../Models/travel-agency-model');
const User = require('../Models/user-model');
const Busbuild = require('../Models/bus-build-model');
const Ticket = require('../Models/ticket-model');
const Bus = require('../Models/bus-model');

exports.getStations = async (req, res, next) => {
  let stations, totalstation;
  //   console.log('object1')
  try {
    stations = await Station.find();
  } catch (error) {
    return next(error);
  }
  try {
    totalstation = await Station.countDocuments();
  } catch (error) {
    return next(error);
  }

  res
    .status(200)
    .json({ data: { stations, totalstation }, message: 'found these station' });
};
exports.addStation = async (req, res, next) => {
  const { newStation } = req.body;
  let stations = [
    'delhi',
    'mumbai',
    'pune',
    'goa',
    'calcutta',
    'surat',
    'vishakhapatnam',
    'guwahati',
    'bhopal',
    'gwalior',
    'manali',
    'gurugram',
    'jaipur',
    'ahmedabad',
    'lucknow',
    'chandigarh',
    'bangalore',
    'hyderabad',
  ].map((v) => ({ name: v }));
  // console.log(newStation)
  let addedStation;
  //   try {
  //     addedStation= await Station.countDocuments({ name:newStation });
  //   } catch (error) {
  //     return next(error);
  //   }
  try {
    addedStation = await Station.insertMany(stations);
  } catch (error) {
    return next(error);
  }

  res.status(201).json({ data: addedStation, message: 'added a new station' });
};
let today2 = new Date('2021-08-30T04:22:23');
exports.addSchedule = async (req, res, next) => {
  let addedSchedule;
  let newSchedule = [
    {
      from: '612b47163e25b01552e5485c',
      to: '612b47163e25b01552e54866',
      departureTime: new Date('2021-08-30T20:22:23'),
      arrivalTime: new Date('2021-08-31T08:22:23'),
      bus: '612b5f15b21d620a8c80cc06',
      fare: 200,
      discount: 10,
      emptySeats: 30,
    },
    {
      from: '612b47163e25b01552e5485c',
      to: '612b47163e25b01552e54866',
      departureTime: new Date('2021-08-31T19:00:00'),
      arrivalTime: new Date('2021-09-01T04:22:23'),
      bus: '612b5f15b21d620a8c80cc07',
      fare: 240,
      discount: 25,
      emptySeats: 20,
    },
    {
      from: '612b47163e25b01552e5485c',
      to: '612b47163e25b01552e54866',
      departureTime: new Date('2021-08-30T21:22:23'),
      arrivalTime: new Date('2021-08-31T10:22:23'),
      bus: '612b5f15b21d620a8c80cbf6',
      fare: 500,
      discount: 15,
      emptySeats: 20,
    },
    {
      from: '612b47163e25b01552e5485c',
      to: '612b47163e25b01552e54866',
      departureTime: new Date('2021-08-29T18:22:23'),
      arrivalTime: new Date('2021-08-30T09:22:23'),
      bus: '612b5f15b21d620a8c80cbfc',
      fare: 400,
      discount: 5,
      emptySeats: 24,
    },
  ];
  try {
    addedSchedule = await Schedule.insertMany(newSchedule);
  } catch (error) {
    return next(error);
  }

  res.status(201).json({ data: addedSchedule, message: 'added a new station' });
};
exports.addAgency = async (req, res, next) => {
  let addedSchedule = [
    'gogoBus',
    'Mountain Travels',
    'Rao Travel Heights',
    'Rocket Bus',
    'zingbus',
    'Indo Express',
    'SRT Volvo Bus',
    'Just Go Holiday',
    'BFC Holidays',
    'Travel Hub',
    'Shubham Holiday',
    'Shan E India',
    'KTY BUS SERVICE',
    'HRTC',
  ].map((v) => ({ name: v }));
  //   try {
  //     addedSchedule= await Station.countDocuments({ name:newStation });
  //   } catch (error) {
  //     return next(error);
  //   }
  try {
    addedSchedule = await Agency.insertMany(addedSchedule);
  } catch (error) {
    return next(error);
  }

  res.status(201).json({ data: addedSchedule, message: 'added a new station' });
};
exports.addbusType = async (req, res, next) => {
  let addedSchedule = [
    {
      name: 'A',
      ac: true,
      sleeper: false,
    },
    {
      name: 'B',
      ac: true,
      sleeper: true,
    },
    {
      name: 'C',
      ac: false,
      sleeper: true,
    },
    {
      name: 'D',
      ac: false,
      sleeper: false,
    },
  ];
  //   try {
  //     addedSchedule= await Station.countDocuments({ name:newStation });
  //   } catch (error) {
  //     return next(error);
  //   }
  try {
    addedSchedule = await Busbuild.insertMany(addedSchedule);
  } catch (error) {
    return next(error);
  }

  res.status(201).json({ data: addedSchedule, message: 'added a new station' });
};
exports.addbus = async (req, res, next) => {
  let addedSchedule = [
    {
      agency: '612b5a6dd661b2564671d2a9',
      bustype: '612b5c79fad0cc8805ee0be8',
    },
    {
      agency: '612b5a6dd661b2564671d2a9',
      bustype: '612b5c79fad0cc8805ee0be8',
    },
    {
      agency: '612b5a6dd661b2564671d2a9',
      bustype: '612b5c79fad0cc8805ee0be8',
    },
    {
      agency: '612b5a6dd661b2564671d2aa',
      bustype: '612b5c79fad0cc8805ee0be8',
    },
    {
      agency: '612b5a6dd661b2564671d2aa',
      bustype: '612b5c79fad0cc8805ee0be8',
    },
    {
      agency: '612b5a6dd661b2564671d2aa',
      bustype: '612b5c79fad0cc8805ee0be9',
    },
    {
      agency: '612b5a6dd661b2564671d2ab',
      bustype: '612b5c79fad0cc8805ee0be9',
    },
    {
      agency: '612b5a6dd661b2564671d2ab',
      bustype: '612b5c79fad0cc8805ee0be9',
    },
    {
      agency: '612b5a6dd661b2564671d2ab',
      bustype: '612b5c79fad0cc8805ee0be9',
    },
    {
      agency: '612b5a6dd661b2564671d2ac',
      bustype: '612b5c79fad0cc8805ee0be9',
    },
    {
      agency: '612b5a6dd661b2564671d2ac',
      bustype: '612b5c79fad0cc8805ee0bea',
    },
    {
      agency: '612b5a6dd661b2564671d2ac',
      bustype: '612b5c79fad0cc8805ee0bea',
    },
    {
      agency: '612b5a6dd661b2564671d2ad',
      bustype: '612b5c79fad0cc8805ee0bea',
    },
    {
      agency: '612b5a6dd661b2564671d2ad',
      bustype: '612b5c79fad0cc8805ee0bea',
    },
    {
      agency: '612b5a6dd661b2564671d2ad',
      bustype: '612b5c79fad0cc8805ee0beb',
    },
    {
      agency: '612b5a6dd661b2564671d2ae',
      bustype: '612b5c79fad0cc8805ee0beb',
    },
    {
      agency: '612b5a6dd661b2564671d2ae',
      bustype: '612b5c79fad0cc8805ee0beb',
    },
    {
      agency: '612b5a6dd661b2564671d2ae',
      bustype: '612b5c79fad0cc8805ee0beb',
    },
    {
      agency: '612b5a6dd661b2564671d2af',
      bustype: '612b5c79fad0cc8805ee0be9',
    },
    {
      agency: '612b5a6dd661b2564671d2af',
      bustype: '612b5c79fad0cc8805ee0be9',
    },
  ];
  //   try {
  //     addedSchedule= await Station.countDocuments({ name:newStation });
  //   } catch (error) {
  //     return next(error);
  //   }
  try {
    addedSchedule = await Bus.insertMany(addedSchedule);
  } catch (error) {
    return next(error);
  }

  res.status(201).json({ data: addedSchedule, message: 'added a new station' });
};
exports.bookTicket = async (req, res, next) => {
  let addedTicket;
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    addedTicket = await Ticket.create(
      [
        {
          journey: '612b6d5ccab3c2297001b46c',
          seat: 1,
          bearer: {
            name: 'mark',
            age: 34,
          },
          bookedby: req.userId,
        },
      ],
      { session: session }
    );
    const user = await User.findOne({ id: req.userId });
    // console.log(addedTicket)
    user.tickets.push(addedTicket[0]);
    await user.save({ session });
    await session.commitTransaction();
  } catch (error) {
    return next(error);
  }

  res.status(201).json({ data: addedTicket, message: 'added a new station' });
};
exports.getAllBookings = async (req, res, next) => {
  //   try {
  //     addedSchedule= await Station.countDocuments({ name:newStation });
  //   } catch (error) {
  //     return next(error);
  //   }
  try {
    addedSchedule = await Bus.insertMany(addedSchedule);
  } catch (error) {
    return next(error);
  }

  res.status(201).json({ data: addedSchedule, message: 'added a new station' });
};
let tickets = [
  {
    journey: '612b6d5ccab3c2297001b46c',
    seat: 12,
    bearer: {
      name: 'raj',
      age: 12,
    },
    bookedby: '612a1b5dde000afaea995fb0',
  },
  {
    journey: '612b6d5ccab3c2297001b46e',
    seat: 12,
    bearer: {
      name: 'mark',
      age: 23,
    },
    bookedby: '612a178eb2f8cd43c43230b7',
  },
  {
    journey: '612b6d5ccab3c2297001b46f',
    seat: 12,
    bearer: {
      name: 'david',
      age: 56,
    },
    bookedby: '612a178eb2f8cd43c43230b7',
  },
];
exports.searchBuses = async (req, res, next) => {
  let { from, to, on } = req.query;
  from = '612b47163e25b01552e5485c';
  to = '612b47163e25b01552e54866';
  let departureTime = new Date(on),
    tempTime = new Date(departureTime.getTime() + 60 * 60 * 24 * 1000);
//   console.log(tempTime);
  let results;
  try {
    results = await Schedule.find({
      from,
      to,
      departureTime: { $gte: departureTime, $lt: tempTime },
    })
      .select('departureTime')
      .exec();
  } catch (error) {
    return next(error);
  }
  res.status(200).json({ results });
};
