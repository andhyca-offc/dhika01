import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	let namae = conn.getName(m.sender)
	const sections = [
	{
	title: "π Select Your Age Here !",
	rows: [
	    {title: "π Random Years", rowId: '.daftar ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])}
	]
    },
    {
	title: "π O L D",
	rows: [
	    {title: "πΈβ’30< Years ΚΔ­Ι", rowId: '.daftar ' + namae + '.30 '},
	    {title: "πβ’29< Years ΚΔ­Ι", rowId: '.daftar ' + namae + '.29 '},
	    {title: "πΈβ’28< Years ΚΔ­Ι", rowId: '.daftar ' + namae + '.28 '},
	{title: "πβ’27< Years ΚΔ­Ι", rowId: '.daftar ' + namae + '.27 '},
	{title: "πΈβ’26< Years ΚΔ­Ι", rowId: '.daftar ' + namae + '.26 '},
	{title: "πβ’25< Years ΚΔ­Ι", rowId: '.daftar ' + namae + '.25 '},
	{title: "πΈβ’24< Years ΚΔ­Ι", rowId: '.daftar ' + namae + '.24 '},
	{title: "πβ’23< Years ΚΔ­Ι", rowId: '.daftar ' + namae + '.23 '},
	{title: "πΈβ’22< Years ΚΔ­Ι", rowId: '.daftar ' + namae + '.22 '},
	{title: "πβ’21< Years ΚΔ­Ι", rowId: '.daftar ' + namae + '.21 '}
	]
    },
    {
	title: "π Y O U N G",
	rows: [
	    {title: "πΈβ’20< Years ΚΔ­Ι", rowId: '.daftar ' + namae + '.20 '},
	    {title: "πβ’19< Years ΚΔ­Ι", rowId: '.daftar ' + namae + '.19 '},
	    {title: "πΈβ’18< Years ΚΔ­Ι", rowId: '.daftar ' + namae + '.18 '},
	{title: "πβ’17< Years ΚΔ­Ι", rowId: '.daftar ' + namae + '.17 '},
	{title: "πΈβ’16< Years ΚΔ­Ι", rowId: '.daftar ' + namae + '.16 '},
	{title: "πβ’15< Years ΚΔ­Ι", rowId: '.daftar ' + namae + '.15 '},
	{title: "πΈβ’14< Years ΚΔ­Ι", rowId: '.daftar ' + namae + '.14 '},
	{title: "πβ’13< Years ΚΔ­Ι", rowId: '.daftar ' + namae + '.13 '},
	{title: "πΈβ’12< Years ΚΔ­Ι", rowId: '.daftar ' + namae + '.12 '},
	{title: "πβ’11< Years ΚΔ­Ι", rowId: '.daftar ' + namae + '.11 '},
	{title: "πΈβ’10< Years ΚΔ­Ι", rowId: '.daftar ' + namae + '.10 '},
	{title: "πβ’9< Years ΚΔ­Ι", rowId: '.daftar ' + namae + '.9 '}
	]
    },
]

const listMessage = {
  text: `ββΊPlease select your age at the bottom button...`,
  footer: `β *Κα΄α΄Κ Ι΄α΄α΄α΄:* ${conn.getName(m.sender)}\n<β>  ANDHTCA BOTZ\nBy Andhyca`,
  title: "β’ββββγ Registration γβββββ’",
  buttonText: "πβ’ΰ΄ Register ΰ΄β’π",
  sections
}

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `π? *Warning:* Kamu Sudah ter daftar di database, Apa kamu ingin mendaftar ulang? *${usedPrefix}unreg <SERIAL NUMBER>*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 30) throw 'Hi Kakak, Kakek, Atau Nenek ποΈ'
  if (age < 5) throw 'Hi π'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let cap = `
  ββββ γ *Successful Registration* γβββ
  .
β­ββγ *α΄sα΄Κs* γ
ββΈ *sα΄α΄α΄α΄s:* βοΈ sα΄α΄α΄α΄ss?α΄Κ
ββΈ *Ι΄α΄α΄α΄:* ${name}
ββΈ *α΄Ι’α΄:* ${age} Κα΄α΄Κs
ββΈ *sΙ΄:* ${sn}
β°ββββββββββΰΉ

?α΄ΚΚα΄α΄‘ ΙͺΙ΄sα΄α΄Ι’Κα΄α΄: https://instagram.com/andhycarsrofficial
`
  let buttonMessage= {
'document':{'url':'https://instagram.com/andhycarsrofficial'},
'mimetype':global.ddocx,
'fileName':'β’ββββγ Registration γβββββ’',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':global.sig,
'mediaType':2,
'previewType':'pdf',
'title':global.titlebot,
'body':global.titlebot,
'thumbnail':await(await fetch('https://telegra.ph/file/2d9ee1ffd5d907259190a.jpg')).buffer(),
'sourceUrl':'https://instagram.com/andhycarsrofficial'}},
'caption':cap,
'footer':botdate,
'buttons':[
{'buttonId':'.owner','buttonText':{'displayText':'πΉ Own?½r'},'type':1},
{'buttonId':'.ping','buttonText':{'displayText':'πΎ Sp?½?½d'},'type':1},
{'buttonId':'.menu','buttonText':{'displayText':'π List M?½Ι³Ο'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|verify|reg(ister)?)$/i

export default handler
