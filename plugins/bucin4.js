let handler = async (m, { conn, usedPrefix, command }) => {
  await conn.sendButton(m.chat, `β${pickRandom(global.bucin4)}β`, watermark, 'Good Night', `${usedPrefix + command}`)
}
handler.help = ['goodnight', 'gn']
handler.tags = ['quotes']
handler.command = /^(goodnight|gn)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.bucin4 = [
  "πππ€π€π ππ£ππππ© π«β¨",
  "π€ππΈπΈπ­ π§ββπ·π²π°π±π½ βοΈβ¨",
  "πβ‘α α α± πβ©Ι¨β‘Ο¦Ζ¬ π",
  "πΦΦΦΥͺ β­οΈΥ²Γ­ΦΥ°Τ΅ π",
  "πααͺαͺα πααααΌα’ π«β¨",
]
