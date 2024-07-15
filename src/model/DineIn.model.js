import mongoose, { Schema } from "mongoose";

const DineInSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    rdate:{
        type: Date,
        required: true,
    },
    rtime: {
        type: String,
        required: true,
    },
    npeople: {
        type: Number,
        required: true,
    }
});

export const DineIn = mongoose.model('DineIn-DB', DineInSchema);