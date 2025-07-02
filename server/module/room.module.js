import mongoose, { Schema } from "mongoose";

const roomSchema = new Schema({
  pg: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PG",
    required: true
  },
ownerid :{
type : mongoose.Schema.Types.ObjectId,
ref : "Owner",
required : true
},
  roomType: {
    type: String,
    enum: ["1-seater", "2-seater", "3-seater", "4-seater"],
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

  facility: [String], 

  bookings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Booking"
  }],

isbook :{
type : Boolean,
default : false
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
  floor :{
    type : String
  },

  videoTourLink :{
    type : String
  },

  
  hasAttachedWashroom :{
    type : Boolean,
    default : false
  }
}, { timestamps: true });

export const Room = mongoose.model("Room", roomSchema);


