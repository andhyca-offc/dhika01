import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukkan Nama Characternya!\nContoh: #chara Rimuru`
  try {
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/character', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { name, alternative_names, url, image_url, mal_id, type } = json.results[0]
let charaingfo = `γ ππππ₯ππ₯ππ§ππ₯ γ

π·β’οΈ *Id Character:* ${mal_id}
π€β’ *Name:* ${name}
ββ’οΈ *Nickname:* ${alternative_names}
π¨β’ *Character Type:* ${type === undefined ? 'Default' : type}
πΊβ’ β *Link Watch:* ${url}


γ ππ’π‘π γ
β’ Created ποΈβΎοΈποΈβΌοΈ β’ π΄ππβπ¦ππα΅α΅βΏαΆ»
β’ Supported ππππππ±πππ£-πΌπ³ΰ½Ό γβ©
                γ ππ§ππ‘π²ππππ¨π­π³-ππΰ½Ό γβ© γ`

  conn.sendFile(m.chat, image_url, '', charaingfo, m)
 } catch {
  m.reply('*πππ¦ππ¦π¦ ππ₯π πππ‘πππ* γ\n *α΄α΄α΄α΄α΄Ι΄α΄* β’ Character Is Unidefined, Coba Kata Kunci Yang Lain !')
 }
}
handler.help = ['character <nama>']
handler.tags = ['anime']
handler.limit = true
handler.command = /^(character)$/i
//kyaa jangan biarkan wabot-aq terbengkalai sampai nurutomo kembali
// Command - Re Edited -- TOXIC-DEVIL == || Character Type ||
export default handler 