const mongoose = require("mongoose");

const ArtworkSchema = new mongoose.Schema(
  {
    artist: { type: String, required: true },
    desc: { type: String, required: true },
    dimension: { type: String },
    fdate: { type: Number, required: true },
    img: { type: String },
    title: { type: String, required: true},
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Artwork", ArtworkSchema);
