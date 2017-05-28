const mongoose = require('mongoose');

// Client Schema
let clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    address2: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    zip: {
        type: String,
        required: false
    },
    yoe: {
        type: String,
        required: false
    },
    specialty: {
        type: String,
        required: false
    }
});

let     Client = module.exports = mongoose.model('Client', clientSchema);