const mongoose = require("mongoose");

const validatePhoneNumberLength = function(phoneNumber) {
    return phoneNumber && phoneNumber.length === 10;
};

// Schema
const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Other'], // Only allows specified values
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    rollNo: {
        type: String,
        required: true,
        unique: true,
    },
    bloodGroup: {
        type: String,
        
    },
    religion: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    class: {
        type: String,
        required: true,
    },
    section: {
        type: String,
        required: true,
    },
    admissionId: {
        type: String,
        required: true,
        unique: true,
    
    },
    phoneNumber: {
        type: String,
        required: true,
        validate: [validatePhoneNumberLength, 'Phone number must be exactly 10 characters long'],
    }
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;