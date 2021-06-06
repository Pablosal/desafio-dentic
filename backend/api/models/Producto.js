const { Schema, model } = require("mongoose");

const productoSchema = new Schema({
  name: String,
  store: String,
  price: Number,
  units_in_pack: Number,
  fast_shipping: Boolean,
  description: String,
  image: String,
});
module.exports = model("producto", productoSchema);
