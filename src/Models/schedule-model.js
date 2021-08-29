const { Schema, model, Types } = require('mongoose');
let today2 = new Date('2021-08-30T04:22:23')
const scheduleSchema = new Schema(
  {
    from: { type: Types.ObjectId, ref: 'Station', required: true },
    to: { type: Types.ObjectId, ref: 'Station', required: true },
    departureTime: { type: Date, required: true },
    arrivalTime: { type: Date, required: true },
    bus: { type: Types.ObjectId, ref: 'Bus', required: true },
    fare: { type: Number, required: true },
    discount: { type: Number },
    // seatL: [
    //   [0, 0, 0],
    //   [0, 0, 0],
    //   [0, 0, 0],
    //   [0, 0, 0],
    //   [0, 0, 0],
    // ],
    // seatR: [
    //   [0, 0, 0],
    //   [0, 0, 0],
    //   [0, 0, 0],
    //   [0, 0, 0],
    //   [0, 0, 0],
    // ],
    emptySeats: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Schedule', scheduleSchema);
