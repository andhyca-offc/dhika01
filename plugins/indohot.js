let handler  = async (m, { conn }) => {
	
	await m.reply('ใโณใ ๐ฃ๐ฟ๐ผ๐ฐ๐ฒ๐๐๐ถ๐ป๐ด, ๐ฃ๐น๐ฒ๐ฎ๐๐ฒ ๐๐ฎ๐ถ๐ ๐ฎ ๐บ๐ผ๐บ๐ฒ๐ป๐')
  conn.reply(m.chat,`${pickRandom(global.hot)}`, m)
}
handler.help = ['indohot']
handler.tags = ['premium']
handler.command = /^(indohot)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = true

handler.fail = null
handler.exp = 0

export default handler 

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.hot = [
'*๐๐ก๐๐ข๐ก๐๐ฆ๐๐๐ก ๐๐ข๐ง*\nโข สแดสแดแด แดแดแดกษดสแดแดแด sแดษดแดษชสษช โข\n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file',
'*๐๐ก๐๐ข๐ก๐๐ฆ๐๐๐ก ๐๐ข๐ง*\nโข สแดสแดแด แดแดแดกษดสแดแดแด sแดษดแดษชสษช โข\n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file',
'*๐๐ก๐๐ข๐ก๐๐ฆ๐๐๐ก ๐๐ข๐ง*\nโข สแดสแดแด แดแดแดกษดสแดแดแด sแดษดแดษชสษช โข\n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file',
'*๐๐ก๐๐ข๐ก๐๐ฆ๐๐๐ก ๐๐ข๐ง*\nโข สแดสแดแด แดแดแดกษดสแดแดแด sแดษดแดษชสษช โข\n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file',
'*๐๐ก๐๐ข๐ก๐๐ฆ๐๐๐ก ๐๐ข๐ง*\nโข สแดสแดแด แดแดแดกษดสแดแดแด sแดษดแดษชสษช โข\n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file',
'*๐๐ก๐๐ข๐ก๐๐ฆ๐๐๐ก ๐๐ข๐ง*\nโข สแดสแดแด แดแดแดกษดสแดแดแด sแดษดแดษชสษช โข\n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file',
'*๐๐ก๐๐ข๐ก๐๐ฆ๐๐๐ก ๐๐ข๐ง*\nโข สแดสแดแด แดแดแดกษดสแดแดแด sแดษดแดษชสษช โข\n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file',
'*๐๐ก๐๐ข๐ก๐๐ฆ๐๐๐ก ๐๐ข๐ง*\nโข สแดสแดแด แดแดแดกษดสแดแดแด sแดษดแดษชสษช โข\n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file',
'*๐๐ก๐๐ข๐ก๐๐ฆ๐๐๐ก ๐๐ข๐ง*\nโข สแดสแดแด แดแดแดกษดสแดแดแด sแดษดแดษชสษช โข\n\nhttps://www.mediafire.com/file/aipi6xisyppe751/VID-20210107-WA1465.mp4/file',
'*๐๐ก๐๐ข๐ก๐๐ฆ๐๐๐ก ๐๐ข๐ง*\nโข สแดสแดแด แดแดแดกษดสแดแดแด sแดษดแดษชสษช โข\n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file',
'*๐๐ก๐๐ข๐ก๐๐ฆ๐๐๐ก ๐๐ข๐ง*\nโข สแดสแดแด แดแดแดกษดสแดแดแด sแดษดแดษชสษช โข\n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file',
'*๐๐ก๐๐ข๐ก๐๐ฆ๐๐๐ก ๐๐ข๐ง*\nโข สแดสแดแด แดแดแดกษดสแดแดแด sแดษดแดษชสษช โข\n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file',
]