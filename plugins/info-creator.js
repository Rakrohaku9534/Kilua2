import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
if (command == 'owner') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; Fahrul\nNICKNAME: Fahrul\nORG: Fahrul\nTITLE:\nitem1.TEL;waid=6285786539008:+62 857 8653 9008\nitem1.X-ABLabel: Nomor Owner\nitem2.URL:https://instagram.com/fahrul_mt\nitem2.EMAIL;type=INTERNET: rakrohaku@gmail.com\nitem2.X-ABLabel:\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
m.reply(`Itu dia nomer ownerku, Fahrul`)
}
if (command == 'creator') {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; Fahrul\nNICKNAME: Fahrul\nORG: Fahrul\nTITLE:\nitem1.TEL;waid=6285786539008:+62 857 8653 9008\nitem1.X-ABLabel: Nomor Owner\nitem2.URLhttps://instagram.com/fahrul_mtnitem2.EMAIL;type=INTERNET: rakrohaku@gmail.com\nitem2.X-ABLabel:\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
m.reply(`Tuh nomor si creator`)
}
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(creator|owner|owner2)$/i

export default handler