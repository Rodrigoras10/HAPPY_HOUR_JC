const express = require('express');
const QRCode = require('../models/QRCode');

const router = express.Router();

router.get('/validar_qr', async (req, res) => {
  const { codigo } = req.query;
  const qrCode = await QRCode.findOne({ code: codigo });

  if (!qrCode || qrCode.used) {
    return res.json({ valido: false, mensagem: "QR Code inválido ou já utilizado!" });
  }

  qrCode.used = true;
  await qrCode.save();
  res.json({ valido: true, mensagem: "QR Code validado! +1 minuto adicionado." });
});

module.exports = router;
