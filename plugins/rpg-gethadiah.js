let handler = async (m, { conn }) => {
let info = `
*${htki} GET HADIAH ${htka}*
`
const sections = [
   {
	title: `β CLAIM`,
	rows: [
	    {title: "πΈβ’ Daily", rowId: '.daily', description: 'Hadiah per hari' },
	    {title: "πΈβ’ Weekly", rowId: '.weekly', description: 'Hadiah per minggu' },
	{title: "πΈβ’ Monthly", rowId: '.monthly', description: 'Hadiah per bulan' },
	{title: "πΈβ’ Special", rowId: '.special', description: 'Hadiah special' },
	]
    }, {
    title: `β INFO`,
	rows: [
	    {title: "π»β’ Info BOT", rowId: '.info', description: 'Info Andhyca BOT' },
	    {title: "ποΈβ’ Menu", rowId: '.menu', description: 'Back to menu' },
	{title: "π€β’ Ownee", rowId: '.owner', description: 'Owner Andhyca BOT' },
	{title: "π°β’ Sewa BOT", rowId: '.sewa', description: 'Sewa Andhyca BOT' },
	]
    },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "π G E T π",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "π Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['hadiah', 'claim']
handler.tags = ['rpg']
handler.command = /^(hadiah|claim)$/i

export default handler
