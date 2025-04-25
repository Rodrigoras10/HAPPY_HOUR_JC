app.get('/validar_qr', async (req, res) => {
    const { codigo } = req.query;
  
    const qrCode = await QRCodeModel.findOne({ codigo });
  
    if (!qrCode) {
      return res.json({ valido: false, mensagem: 'QR Code não encontrado' });
    }
  
    if (qrCode.usado) {
      return res.json({ valido: false, mensagem: 'QR Code já utilizado' });
    }
  
    
    qrCode.usado = true;
    await qrCode.save();
  
    
    const tempoOriginal = 3 * 60 * 60;
  
    
    const novoTempo = tempoOriginal + 60;
  
    res.json({
      valido: true,
      mensagem: 'QR Code validado com sucesso!',
      tempoRestante: novoTempo  
    });
  });
  const escpos = require('escpos');
escpos.USB = require('escpos-usb');

const device = new escpos.USB(); 
const printer = new escpos.Printer(device);

device.open(() => {
    printer
        .align('ct') 
        .text('🍻 HAPPY HOUR 🍻')
        .qrimage('https://seu-link-qrcode.com', { type: 'png' }, function () {
            this.cut(); 
            this.close();
        });
});
app.get('/', (req, res) => {
  res.send('Servidor está funcionando!');
});
app.listen(3000, '0.0.0.0', () => {
  console.log('Servidor rodando na porta 3000');
});
// FRONTEND/scripts/main.js
fetch("http://localhost:3000/get-happy-hour")
  .then(res => res.json())
  .then(data => {
    document.getElementById("happyHour").innerText = data.happyHour;
  });
