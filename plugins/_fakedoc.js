import fs from 'fs'
let handler  = async (m, { conn, usedPrefix: _p }) => {
const {
    MessageType,
    Mimetype
} = (await import("@adiwajshing/baileys")).default
const anu = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: 'ใ ๐๐ง๐๐ก๐ฒ๐๐๐๐จ๐ญ๐ณ-๐๐เฝผ | ยฉ ๐๏ธโพ๏ธ๐๏ธโผ๏ธ โข ๐ด๐๐โ๐ฆ๐๐แตแตโฟแถป ใ', 
                    jpegThumbnail: './thumbnail.jpg'
                          }
                        }
                      }
conn.sendMessage(m.chat,{ text: wm}, { quoted: anu })
}



handler.help = ['doc']

handler.tags = ['แดแดษดแดษชษดษข sแดแดาา']

handler.command = /^doc$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true

export default handler
