const UserAddress = require("../model/address");
const User = require("../model/user");

const addAddress = async (req, res) => {
  const {
    user_id,
    country,
    state,
    city,
    fullName,
    mobileNumber,
    pincode,
    address,
    defaultAddress,
    instructions,
  } = req.body;

  try {
    const userAddress = new UserAddress({
      user_id, // Ensure this is set correctly
      country: country.label,
      state: state.label,
      city: city.label,
      fullName,
      mobileNumber,
      pincode,
      address,
      defaultAddress,
      instructions,
    });

    await userAddress.save();
    res.send("Address saved successfully");
  } catch (error) {
    res.status(500).send("Error saving address: " + error.message);
  }
};

const allAddress = async (req, res) => {
  const { userId } = req.query;
  const data = await UserAddress.find({ user_id: userId });
  res.status(200).send(data);
};

module.exports = { addAddress, allAddress };
