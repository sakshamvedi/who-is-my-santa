import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    number: String,
    homeAddress: String,
})


export const user = mongoose.model("user", userSchema);