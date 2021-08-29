const { Schema, model } = require('mongoose');

const stationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    //   enum: [
    //     'delhi',
    //     'mumbai',
    //     'manali',
    //     'gurugram',
    //     'jaipur',
    //     'ahmedabad',
    //     'lucknow',
    //     'chandigarh',
    //   ],
    }

    // password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Station', stationSchema);
