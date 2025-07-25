const userSchema = require('../schemas/userSchema.js');
const {model} = require('mongoose');
const User = model('User', userSchema);
module.exports = User;