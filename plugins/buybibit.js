let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} BIBIT ${htka}

*Jenis bibit:*
โ Bibit Anggur (๐)
โ Bibit Pisang (๐)
โ Bibit Apel (๐)
โ Bibit Mangga (๐)
โ Bibit Jeruk (๐)

Hayรฐลธโโน, Mau Beli bibit Tanaman? Isi Formulir Berikut!

*FORMULIR PEMBELIAN*
โ Bibit Tanaman: 
โ Jumlah bibit yang akan dibeli:
โ Harga limit yang akan dibeli:
โ Username user:
โ Nomor user:
โ Metode pembayaran:


โ๏ธ *Informasi Pembayaran:*

Jika sudah diisi, kirimkan formulir ke owner
Klik tombol owner dibawah ini!


๐ฎ *Note:*
โข Jika salah salah satu owner tidak aktif, chat owner yang lain. 
โข Jika semua owner tidak aktif, tunggu saja sampai seluruhnya aktif
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'โ แด แดก ษด แด ส', url: 'wa.me/6285872761910'}},
    {index: 1, urlButton: {displayText: 'โ แด แดก ษด แด ส', url: 'wa.me/6285794408499'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^buybibittanaman$/i
handler.private = false

export default handler