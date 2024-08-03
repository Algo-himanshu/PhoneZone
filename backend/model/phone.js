const mongoose = require("mongoose");
const { Schema } = mongoose;

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
module.exports = phone;

// module.exports = mongoose.model("DataApi", dataApiSchema);
