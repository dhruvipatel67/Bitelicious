import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userscehma = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    number: {
        type: Number,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

}, { timestamps: true, } )

//hashing function for bcrypt
userscehma.pre("save", async function (next) {

    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
})


// for update password
userscehma.method.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

export const User = mongoose.model("User-DB", userscehma)