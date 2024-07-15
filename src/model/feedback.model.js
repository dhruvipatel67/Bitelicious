import mongoose, { Schema } from "mongoose";

const feedbackSchema = new mongoose.Schema({
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
    message: {
        type: String,
        required: true,
    },
});

export const Feedback = mongoose.model('Feedback-DB', feedbackSchema);