//Why use this File?
// Basically the phone data that we took had Nan and too unrealistic price so we updated all prices between certain range which were realistic in rupees.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI);

// Ofcourse we could have used model/phones rather than creating it again here but this file was run time thing and it was created before models.
const dataApiSchema = new Schema({
  brand: String,
  model: String,
  GPRS: String,
  EDGE: String,
  announced: String,
  dimensions: String,
  weight_g: Number,
  SIM: String,
  display_type: String,
  display_resolution: String,
  OS: String,
  CPU: String,
  Chipset: String,
  GPU: String,
  memory_card: String,
  internal_memory: String,
  RAM: String,
  primary_camera: String,
  secondary_camera: String,
  loud_speaker: String,
  audio_jack: String,
  WLAN: String,
  GPS: String,
  NFC: String,
  radio: String,
  USB: String,
  sensors: String,
  battery: String,
  colors: String,
  approx_price_EUR: Number,
  img_url: String,
});
const phone = mongoose.model("phone", dataApiSchema);

const convertedPrice = () => {
  // Generate a random number between 15 and 500
  return (Math.floor(Math.random() * (50 - 15 + 1)) + 15) * 1000; //generates a random price for our data
};

async function updatePrices() {
  try {
    console.log("yes");
    const documents = await phone.find();

    // Update each document with the converted price
    const updatePromises = documents.map(async (document) => {
      const converted = convertedPrice();
      phone.updateOne(
        { _id: document._id },
        { $set: { approx_price_EUR: converted } }
      );
    });

    // Wait for all update operations to complete
    await Promise.all(updatePromises);

    console.log("Prices updated successfully");
  } finally {
    await mongoose.connection.close();
  }
}

// Execute the updatePrices function
updatePrices();
