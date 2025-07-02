import mongoose, { Schema } from "mongoose";

const roomSchema = new Schema({
  pg: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PG",
    required: true
  },
  ownerid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Owner",
    required: true
  },
  rentPerPerson: {
    type: Number,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },

  availableSpots: {
    type: Number,
    required: true
  },

  roomPhotos: [String],

  facility: [String], // ac or non ac, veg or non-veg, seperate or attachedd bathroom, geyser or not , indian or western toilet (with jet spray) , shower or balti , seperate smoking space

  booking_person_detail: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student"
  }],

  isbook: {
    type: Boolean,
    default: false
  },

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

  roommateRequests: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student"
  }],

  currentRoommates: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student"
  }]
  ,
  floor: {
    type: String
  },

  videoTourLink: {
    type: String
  },

}, { timestamps: true });

export const Room = mongoose.model("Room", roomSchema);


