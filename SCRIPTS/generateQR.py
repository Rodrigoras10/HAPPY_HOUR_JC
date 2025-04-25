import qrcode
import uuid


codigo = str(uuid.uuid4())

qr = qrcode.make(codigo)

qr.save(f"qrcodes/{codigo}.png")

print(f"QR Code gerado para o código: {codigo}")
