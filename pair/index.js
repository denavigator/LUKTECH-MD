import { makeWASocket, useMultiFileAuthState } from "@whiskeysockets/baileys"
import QRCode from "qrcode"
import express from "express"

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.static("pair/public"))

let qrImage = null

async function startPair() {
    const { state, saveCreds } = await useMultiFileAuthState("auth")

    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: false
    })

    sock.ev.on("creds.update", saveCreds)

    sock.ev.on("connection.update", async (update) => {
        if (update.qr) {
            qrImage = await QRCode.toDataURL(update.qr)
        }

        if (update.connection === "open") {
            console.log("✅ WhatsApp paired successfully")
            qrImage = null
        }
    })
}

startPair()

app.get("/qr", (req, res) => {
    if (!qrImage) return res.json({ success: false })
    res.json({ success: true, qr: qrImage })
})

app.listen(PORT, () => {
    console.log("🌐 Pair server running on port", PORT)
})

export default app mm
































