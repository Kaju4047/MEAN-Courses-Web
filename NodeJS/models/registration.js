const mongoose = require('mongoose');
const Joi = require('joi');
 
const registration = mongoose.model('registration', new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    lname: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    }
}));
 
function validateUser(reg) {
    const schema = {
        fname: Joi.string().min(5).max(50).required(),
        lname: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(reg, schema);
}
 
exports.registration = registration;
exports.validate = validateUser;