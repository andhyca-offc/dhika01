import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {

let pp = await conn.profilePictureUrl(m.sender, 'image')

 const anu = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "https://chat.whatsapp.com/DTtOcmrCAkKFrVZJD6jb6M",
			"inviteCode": "null",
			"groupName": "Official Group Botz", 
            "caption": "ใ ๐๐ง๐๐ก๐ฒ๐๐๐๐จ๐ญ๐ณ-๐๐เฝผ | ยฉ ๐๏ธโพ๏ธ๐๏ธโผ๏ธ โข ๐ด๐๐โ๐ฆ๐๐แตแตโฟแถป ใ", 
            'jpegThumbnail': await ( await fetch(pp)).buffer()
		}
	}
}
conn.sendMessage(m.chat, { text: wm} , { quoted: anu })
}


handler.help = ['fyt']

handler.tags = ['แดแดษดแดษชษดษข sแดแดาา']

handler.command = /^fyt$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

export default handler
