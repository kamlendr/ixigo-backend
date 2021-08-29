const { Schema, model, Types } = require('mongoose');

const ticketSchema = new Schema(
  {
    // name: { type: String, required: true },
    journey: { type: Types.ObjectId, ref: 'Schedule' },
    seat: { type: Number, required: true },
    bearer: new Schema({
      name: { type: String, required: true },
      age: { type: Number, required: true },
    }),
    bookedby: { type: Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Tickets', ticketSchema);
