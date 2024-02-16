const mongoose = require("mongoose");

// Schema
const departmentSchema = new mongoose.Schema({
    departmentId: {
        type: String,
        required: true,
        unique: true
    },
    departmentName: {
        type: String,
        required: true
    },
    headOfDepartment: {
        type: String,
        required: true
    },
    departmentStartDate: {
        type: Date,
        required: true
    },
    noOfStudents: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;