import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
	let ne = await (await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')).text()
    let nek = ne.split('\n')
    let neko = pickRandom(nek)
	conn.sendButton(m.chat, 'γ ππ’π‘π γ\nβ’ Created ποΈβΎοΈποΈβΌοΈ β’ π΄ππβπ¦ππα΅α΅βΏαΆ»\nβ’ Supported ππππππ±πππ£-πΌπ³ΰ½Ό γβ©', wm, neko, [['π Nekopoi','.neko']],m)
}
handler.command = /^(neko)$/i
handler.tags = ['anime']
handler.help = ['neko']
handler.limit = true
export default handler
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}