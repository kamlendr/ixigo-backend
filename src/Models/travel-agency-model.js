const {Schema,model} = require('mongoose');

const agencySchema = new Schema(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Agency', agencySchema);
