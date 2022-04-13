const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    artworks: [
      {
        artworkId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    address: { type: String, required: true },
    addresstw: { type: String },
    city: { type: String, required: true },
    country: { type: String, required: true },
    funame: { type: String, required: true },
    postal: { type: String, required: true },
    province: { type: String, required: true },
    phonenum:{type: String, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
