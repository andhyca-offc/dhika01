import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `βοΈ *Mau Apa Cari Owner BOT?*\n`,wm + '\n\n' + botdate, giflogo, [['π Bio Data Owner', '.creator'],['πΈ Instagram Owner', '.ig'],['π½οΈ Youtube Owner', '.ytbot']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'γ ππ§ππ‘π²ππππ¨π­π³-ππΰ½Ό | Β© ποΈβΎοΈποΈβΌοΈ β’ π΄ππβπ¦ππα΅α΅βΏαΆ» γ',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: 'https://youtube.com/channel/UCtt_8qM9i8x83BY_U8oozOg'
                      }}
})
}


handler.help = ['owner']
handler.tags = ['info']
handler.command = ['owner']
export default handler