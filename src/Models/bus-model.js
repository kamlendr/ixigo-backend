const {Schema,model,Types} = require('mongoose');

const busSchema = new Schema(
  {
    // name: { type: String, required: true },
    bustype:  { type: Types.ObjectId, ref: 'Busbuild' },
    agency: { type: Types.ObjectId, ref: 'Agency' },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Bus', busSchema);
