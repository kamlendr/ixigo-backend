const { model, Schema, Types } = require('mongoose');

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    tickets: [{ type: Types.ObjectId, ref: 'Ticket' }],
  },
  {
    timestamps: true,
  }
);

module.exports = model('User', userSchema);
