const mongoose = require('mongoose');

const QRCodeSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  used: { type: Boolean, default: false },
});

module.exports = mongoose.model('QRCode', QRCodeSchema);
