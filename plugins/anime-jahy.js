import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.xteam.xyz/randomimage/jahy?APIKEY=YOURAPIKEY'
	conn.sendButton(m.chat, 'γ ππ’π‘π γ\nβ’ Created ποΈβΎοΈποΈβΌοΈ β’ π΄ππβπ¦ππα΅α΅βΏαΆ»\nβ’ Supported ππππππ±πππ£-πΌπ³ΰ½Ό γ', wm, await(await fetch(url)).buffer(), [['π Jahy',`.${command}`]],m)
}
handler.command = /^(jahy)$/i
handler.tags = ['anime', 'premium', 'nsfw']
handler.help = ['jahy']
handler.premium = true
handler.limit = true

export default handler
