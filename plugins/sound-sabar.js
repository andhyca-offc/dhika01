let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('./mp3/sabar.opus')
conn.sendFile(m.chat, helloaine, '', '', m, true)
}

handler.customPrefix = /^(đĨš|đĨ˛|đ|đ|đ|đ|đ|đ|đ|âšī¸|đŖ|đ|đĢ|đŠ|đĨē|đĸ|đ­|đ¤|đ |đĄ|đ¤Ŧ|đą|đ¨|đ°|đĨ|đ|đĢ |đ|đĢ¤|đ|đŦ|đ|đĻ|đ§|đĒ|đ¤ĸ|đ¤Ž|đ¤§|đŋ|sad|sedih|sakit)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

export default handler 