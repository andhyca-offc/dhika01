let handler = async (m, { conn }) => {
let info = `
*${htki} STORE ${htka}*
          
*π¦ Kalau mau dapat discon join GC Bot*
Link: https://chat.whatsapp.com/DTtOcmrCAkKFrVZJD6jb6M

ββββββ *πΎ α΄α΄ΚΙͺα΄α΄α΄α΄Ι΄ πΎ* ββββββ
π£οΈ: Kak, Kok harganya mahal banget?
π¬: Mau tawar menawar? boleh, silahkan Join Gc Bot!

π£οΈ: Scam ga nih kak?
π¬: Enggalah, Owner 100% Tepati janji #STAYHALAL

β βββββββββββββ ββββ ββββββ βββββββββββ β
`
const sections = [
   {
	title: `β LIST`,
	rows: [
	    {title: "π οΈJasa Add Follower IG", rowId: '.jasafollower', description: 'Biar Followermu banyak' },
	    {title: "π οΈJasa Premium Member", rowId: '.premium', description: 'Unlock fitur premium' },
	{title: "ποΈ Jasa Sewa BOT", rowId: '.sewabot', description: 'Biar BOT masuk GCmu' },
	{title: "π Jasa Join GC Free 1 Hari", rowId: '.jasafree', description: 'Only one group' },
	{title: "π Jasa Bikin Logo", rowId: '.bikinlogo', description: 'Kamu mau logo apa?' },
	{title: "π Rpg Store", rowId: 'storerpg', description: 'Ayo beli item RPG mu' },
	]
    }, {
    title: `β INFO`,
	rows: [
	    {title: "π οΈEvent", rowId: '.event', description: 'Event ππ§ππ‘π²ππππ¨π­π³-ππΰ½Ό' },
	    {title: "π° Sewa Bot", rowId: '.sewa', description: 'Mau sewa ππ§ππ‘π²ππππ¨π­π³-ππΰ½Ό?' },
	{title: "π Buy Premium", rowId: '.premium', description: 'Biar limitmu unlimited' },
	{title: "π List Menu", rowId: '.menu', description: 'All Features diBOT' },
	]
    }, {
    title: `β INFO`,
	rows: [
	    {title: "π Discount", rowId: '.diskon', description: 'Penurunan harga Pembayaran' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "π Κ α΄ Κ",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "π Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['storebot']
handler.tags = ['store']
handler.command = /^storebot$/i

export default handler