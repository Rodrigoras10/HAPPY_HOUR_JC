const escpos = require('escpos');  
escpos.USB = require('escpos-usb');  

const device = new escpos.USB();  
const printer = new escpos.Printer(device);  

device.open(() => {
    printer
        .align('ct')
        .text('Happy Hour')
        .qrimage('SEU_CODIGO_QR', { type: 'png' }, function () {
            this.cut();
            this.close();
        });
});
