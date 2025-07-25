const User = require('../models/userModel.js')
const wrapAsync = require('../middlewares/wrapAsync.js');
const ExpressError = require('../middlewares/expressError.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signUp = wrapAsync(async (req, res, next) => {
    const { firstname, lastname, age, email, gender, password } = req.body;
    if (!firstname || !lastname || !age || !email || !gender || !password) {
        return next(new ExpressError('All fields are required', 400));
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return next(new ExpressError('User already exists', 400));
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ firstname, lastname, age, email, gender, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'Registration Successful. You can now log in.' });
});
const login = wrapAsync(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new ExpressError('Email and password are required', 400));
    }
    const user = await User.findOne({ email });
    if (!user) {
        return next(new ExpressError('Invalid email or password', 401));
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return next(new ExpressError('Invalid email or password', 401));
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: 7 * 24 * 60 * 60 }); 
    user.token = token;
    await user.save();
    res.status(200).json({ message: 'Login Successful', token });
});

module.exports = { signUp, login };