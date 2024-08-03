const mongoose = require("mongoose");
const { Schema } = mongoose;

const AddressSchema = new Schema({
  user_id: { type: String, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  fullName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  pincode: { type: String, required: true },
  address: {
    flat: { type: String, required: true },
    area: { type: String, required: true },
    landmark: { type: String, required: false },
  },
  defaultAddress: { type: Boolean, required: false },
  instructions: { type: String, required: false },
});

module.exports = mongoose.model("Address", AddressSchema);

/*
  user_id
  country
  state
  city
  fullName
  mobileNumber
  pincode
  address: {
    flat
    area
    landmark
  },
  defaultAddress
  instructions
*/ 
