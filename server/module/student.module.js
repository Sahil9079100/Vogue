import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  phoneno: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "Other"],
    default: "male"
  },

  matchedWith: [{
    type: mongoose.Schema.Types.ObjectId ,
    ref: "Student"
  }],


  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: "Point"
    },


    coordinates: {
      type: [Number]
    }
  },

  

  bookings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Booking"
  }],

  isVerified: {
    type: Boolean,
    default: false
  },
  verifactioncode: {
    type: String
  }


}, {
  timestamps: true
});

export const Student = mongoose.model("Student", studentSchema);
