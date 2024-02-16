const mongoose = require("mongoose");

// Schema
const invoiceSchema = new mongoose.Schema({
    invoiceNo: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    invoiceReceivedFrom: {
        type: String,
        required: true
    },
    invoiceSendingTo: {
        type: String,
        required: true
    },
    itemDetails: {
        type: String,
        required: true
    },
    paymentDetails: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        
    }
}, { timestamps: true });

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;