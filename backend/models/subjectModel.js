const mongoose = require("mongoose");

// Schema
const subjectSchema = new mongoose.Schema({
    subjectId: {
        type: String,
        required: true,
        unique: true
    },
    subjectName: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;