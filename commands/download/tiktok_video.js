const fs = Ft.fs
const tiktok = require("../../Lib/scrape.js").tiktok

module.exports = {
name: ["tiktok", "tt"],
type: ["download"],
description: "download video from tiktok with url",
utilisation: userbot.prefix + "tiktok <link>",

async execute(m) {
let { args } = data
try {
if (!args[0]) return m.reply("url ?")
conn.send2Button(m.chat, `Pilih Type Barikut ${m.mention}`, userbot.packname,`MP4`, `tnowm ${[args[0]]}`, `MP3` , `tmusic ${[args[0]]}`, {quoted: m, contextInfo: {"mentionedJid": m.mention }})
//download = await tiktok([args[0]])
//conn.sendMessage(m.chat, await (await Ft.fetch(download.result[args[1]])).buffer(),"videoMessage",{quoted:m})
} catch (e) {
m.reply(Ft.util.format(e))
}
}
}
