let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw '*๐๐๐ฆ๐๐ฆ๐ฆ ๐๐ฅ๐ ๐๐๐ก๐๐๐* ใ\n *แดแดแดแดแดษดแด* โข Pengguna tidak ada didalam data base !'
    m.reply(`${global.db.data.users[who].limit} Limit Left=ออออ๐`)
}
handler.help = ['limit [@user]']
handler.tags = ['xp']
handler.command = /^(limit)$/i
export default handler 