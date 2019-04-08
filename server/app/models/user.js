// get an instance of mongoose and mongoose.Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    password: String,
    admin: Boolean
})
// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', userSchema);