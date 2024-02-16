const mongoose = require("mongoose");

const validatePhoneNumberLength = function(phoneNumber) {
    return phoneNumber && phoneNumber.length === 10;
};

// Schema
const teacherSchema = new mongoose.Schema({
    teacherId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Other']
    },
    dob: {
        type: Date,
        required: true
    },
    mobileNo: {
        type: String,
        required: true,
        validate: [validatePhoneNumberLength, 'Phone number must be exactly 10 characters long'],
    },
    joiningDate: {
        type: Date,
        required: true
    },
    qualifications: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        
    },
    password: {
        type: String,
        required: true
    },
    
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;