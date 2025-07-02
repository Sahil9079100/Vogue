import mongoose, { Schema } from "mongoose";

const ownerSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phone: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    isVerified: {
        type: Boolean,
        default: false
    },

    ownedPGs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "PG"
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
    verifactioncode: {
        type: String
    }

}, {
    timestamps: true
});

export const Owner = mongoose.model("Owner", ownerSchema);




