import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema({
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
    required: true
  },

  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true
  },

  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled"],
    default: "pending"
  },

  reason: String,

  phone: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  startDate: {
    type: Date,
    default: Date.now
  },


  aadharNumber: {
    type: String,
    required: true
  },


  aadharPhoto: {
    type: String,
    required: true
  },


  bookingAmount: {
    type: Number,
    required: true,
    default: 0
  },


  paymentStatus: {
    type: String,
    enum: ["pending", "paid", "failed"],
    default: "pending"
  }

}, { timestamps: true });

export const Booking = mongoose.model("Booking", bookingSchema);
