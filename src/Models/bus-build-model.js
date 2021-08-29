const {Schema,model} = require('mongoose');

const busBuildSchema = new Schema(
  {
    name: { type: String, required: true },
    ac: { type: Boolean, required: true },
    sleeper: { type: Boolean, required: true },
    seatL: [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],],
    seatR: [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],]
  },
  {
    timestamps: true,
  }
);

module.exports = model('Busbuild', busBuildSchema);
