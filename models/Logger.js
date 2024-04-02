const mongoose = require('mongoose');

const LoggerSChema = new mongoose.Schema({
        data: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Logger', LoggerSChema);