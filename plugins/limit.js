let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    m.reply(`*${user.limit}* ๐ป๐ธ๐ผ๐ธ๐๐๐งง\n\n*${user.exp}* ๐๐ฟ๐ด\n\nโ๏ธ๐ป๐ด๐๐ด๐ป *${user.level}*\n\n๐ฎ๐๐พ๐ป๐ด: *${user.role}*\n\n\n*แดแดษดแด าแดสษขแดแด แดแด แดสแดษชแด สแดแดส แดแดษชสส*`)
}
handler.help = ['my [@user]' , 'level [@user]']
handler.tags = ['xp']
handler.command = /^(my|limit|level)$/i
module.exports = handler
