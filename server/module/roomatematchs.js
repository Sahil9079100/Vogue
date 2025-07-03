import mongoose, { Schema } from "mongoose";

const roommateFormSchema = new Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true
  },

  roomid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
    required: true
  }
  ,
  preferredRoomType: {
    type: String,
    enum: ["1-seater", "2-seater", "3-seater", "4-seater"]
  },

  locationPreference: {type: String},

  budgetRange: {
    min: Number,
    max: Number
  },

  habits: [String],

  genderPreference: {
    type: String,
    enum: ["male", "female", "no preference"],
    default: "no preference"
  },

  additionalNotes: String

}, { timestamps: true });

export const FindRoommateForm = mongoose.model("FindRoommateForm", roommateFormSchema);



