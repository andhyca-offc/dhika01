let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} INDOSAT ${htka}

HayÃ°Å¸ââ¹, ingin melanjutkan pembayaran?

ð *Pembayaran*
ð³ Via: Pulsa Indosat (My iM3)
ð Nomor: 085872761910
ð¤ A/n: Andhyca
ð¦ Mitra: Andhyca Botz
ð° Metode pembayaran: Online ( ~Cod~ )

ð£ *Beli*

Sewa Bot: https://wa.me/62895330584590+.sewabot

Buy Premium: https://wa.me/62895330584590+.premium

Join GC Free 1 Day: https://wa.me/6285872761910+Owner+aku+mau+tambahin+bot+ke+grup+ku+yang+free+1+day.+boleh+gk

âï¸ _Informasi Pembayaran_

Pembayaran Sewa hanya dapat menggunakan saldo.
Pastikan saldo kamu mencukupi untuk bertransaksi!


âKLIK *SUDAH BAYAR* JIKA SUDAH MEMBAYAR!
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'ð¸ Transfer Pulsa', url: 'https://developer.iak.id/'}},
    {index: 4, quickReplyButton: {displayText: 'ð ï¸Sudah Membayar', id: '.sudahbayar'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^pulsasmartfren$/i
handler.private = true

export default handler