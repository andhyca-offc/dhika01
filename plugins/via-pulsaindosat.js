let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} DANA ${htka}

Hay๐โน, ingin Donasi?

๐ *Pembayaran*
๐ณ Via: Pulsa Indosat 
๐ Nomor: 085872761910
๐ค A/n: โ๏ธ๐๏ธโ๏ธ๐๏ธ โข ๐ด๐๐โ๐ฆ๐๐แตแตโฟแถป
๐ Mitra: ๐๐ง๐๐ก๐ฒ๐๐๐๐จ๐ญ๐ณ-๐๐เฝผ
๐ฐ Metode pembayaran: Online ( ~Cod~ )


ยฎKLIK *SUDAH BAYAR* JIKA SUDAH TRANSFER 
`
const templateButtons = [
    {index: 4, quickReplyButton: {displayText: 'Sudah membayar', id: '.sudahbayar'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['smart']
handler.tags = ['info']
handler.command = /^(donasismartften)$/i
handler.private = true

export default handler