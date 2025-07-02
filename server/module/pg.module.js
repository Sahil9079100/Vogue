import mongoose, { Schema } from "mongoose";

const pgSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  address: {
    street: String,
    city: String,
    state: String,
    pincode: String
  },

  location: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point"
    },
    coordinates: {
      type: [Number], 
      required: true
    }
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Owner",
    required: true
  },

  photos: [String], 

  genderAllowed: {
    type: String,
    enum: ["male", "female", "unisex"],
    default: "unisex"
  },

  foodIncluded: {
    type: Boolean,
    default: false
  },

  facility: [String], 

  rooms: [{
    type : mongoose.Schema.Types.ObjectId,
    ref : "Room"
  }],

  reviews: [{
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student"
    },

    rating: Number,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],


comments: [{
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student"
  },
  text: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
}]
,
checkInTime: {
  type: String,
  default: "10:00 AM"
},

checkOutTime: {
  type: String,
  default: "12:00 PM"
},


  averageRating: {
    type: Number,
    default: 0
  },

  

  isActive: {
    type: Boolean,
    default: true
  }

}, { timestamps: true });


pgSchema.index({ location: "2dsphere" });

export const PG = mongoose.model("PG", pgSchema);
