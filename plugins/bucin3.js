let handler = async (m, { conn, usedPrefix, command }) => {
  await conn.sendButton(m.chat, `β${pickRandom(global.bucin3)}β`, watermark, 'Good Morning', `${usedPrefix + command}`)
}
handler.help = ['goodmorning' , 'gm']
handler.tags = ['quotes']
handler.command = /^(goodmorning|gm)$/i
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

global.bucin3 = [
  "βπGoodβ βmorningβπ₯°β",
  "βοΈπΊπππ ππππππππ π",
  "ππΆπππ π»πππππππ π₯°",
  "πππΌπΌπ± ππΊπΌπΏπ»πΆπ»π΄ πΈ",
  "π»ππΈπΈπ­ πΆπΈπ»π·π²π·π° π",
  "πΌππππ πππ‘ππππ πΆ",
  "πβΌβββ πβββ‘ββββ π₯°",
]
