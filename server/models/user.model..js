import mongoose from "mongoose"
import modelOptions from "./model.option.js"
import crypto from 'crypto';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    displayName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
        required: true
    }
}, modelOptions)

userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString("hex")

    // 1:20
}