const fs = require('fs')

// Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.my.id',
}

// Apikey
global.APIKeys = {
	'https://api.zeeoneofc.my.id': 'AAb6yDRmP3jvq7O',
}

global.namabot = "g"
global.namaowner = "g still learning."
global.packname = namabot
global.author = namaowner
global.myweb = "https://www.youtube.com/channel/UCm3LqInXSd8-4ycZb1Kz44w"
global.footer_text = "© " + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['6285790717751']
global.pairingNumber = "" //pairing number to install bot 
global.sessionName = 'session'
global.background = "https://telegra.ph/file/40342e0085d521cb8b907.jpg" //maks size 50kb agar welcome nya gk lemot
global.prefa = ['-_-']
global.grup_only = false //bot hanya bisa di gunakan dalam grup jika true
global.mess = {
    done: 'Done ✅',
    wait: '_⌛ Sedang di proses_',
    admin: '_Fitur Khusus Admin Group_',
    botNotAdmin: '_Jadikan Bot Sebagai Admin Terlebih Dahulu_',
    owner: '_Fitur Khusus Owner Bot_',
    group: '_Fitur Khusus Dalam Group_',
}
global.butwel =  [{
   buttonId: '.menu',
   buttonText: {
      displayText: '⚡ Menu'
   },
   type: 1
}, {
   buttonId: '.owner',
   buttonText: {
      displayText: 'Owner 👤'
   },
   type: 1
}]
global.help = {
menu(pushname, salam, mundur, upload, download, totalGb, usedGb, freeGb, ownerName, botName, jam, tanggal, runtime, prefix){
  return `${salam.slice(0,1).toUpperCase() + salam.slice(1)} ${pushname}

*G-BOT*
sorry if there are many shortcomings
because the owner is still learning.

╭✄┈┈┈⟬ *STATISTIC* ⟭
┆❐ Upload : ${upload}
┆❐ Downloads : ${download}
┆❐ Total : ${totalGb} GB
┆❐ Used : ${usedGb} GB
┆❐ Free : ${freeGb} GB
╰──────────◇
╭✄┈┈┈⟬ *INFO-BOT* ⟭
┆❐ Creator : ${ownerName}
┆❐ Bot Name : ${botName}
┆❐ Time : ${jam}
┆❐ Date : ${tanggal}
┆❐ Runtime : ${runtime}
╰──────────◇

╭✄┈┈┈⟬ *DOWNLOADER* ⟭
┆❐ ${prefix}ytmp4
┆❐ ${prefix}ytmp3
┆❐ ${prefix}play
┆❐ ${prefix}ytsearch
┆❐ ${prefix}igdl
┆❐ ${prefix}igphoto
┆❐ ${prefix}igvideo
┆❐ ${prefix}igreels
┆❐ ${prefix}pinterest
┆❐ ${prefix}mediafire
┆❐ ${prefix}tiktok
┆❐ ${prefix}tiktokaudio
┆❐ ${prefix}tiktokvn
╰──────────◇

╭✄┈┈┈⟬ *GAMES* ⟭
┆❐ ${prefix}tebakgambar
┆❐ ${prefix}tebakkata
┆❐ ${prefix}tebakbendera
┆❐ ${prefix}tebakkalimat
┆❐ ${prefix}tebaksiapa
┆❐ ${prefix}tebakkabupaten
┆❐ ${prefix}tebakkota
┆❐ ${prefix}tebakkimia
┆❐ ${prefix}tebaklirik
┆❐ ${prefix}tebaktebakan
┆❐ ${prefix}tekateki
┆❐ ${prefix}susunkata
┆❐ ${prefix}caklontong
╰──────────◇

╭✄┈┈┈⟬ *ISLAMIC* ⟭
┆❐ ${prefix}asmaulhusna
┆❐ ${prefix}kisahnabi
┆❐ ${prefix}jadwalshalat
┆❐ ${prefix}randomquran
┆❐ ${prefix}randomquran2
┆❐ ${prefix}dictator
┆❐ ${prefix}listsurah
┆❐ ${prefix}tafsirsurah
┆❐ ${prefix}alquranaudio
╰──────────◇

╭✄┈┈┈⟬ *CANVAS* ⟭
┆❐ ${prefix}ttp
┆❐ ${prefix}attp
┆❐ ${prefix}foliokiri
┆❐ ${prefix}foliokanan
┆❐ ${prefix}nuliskanan
┆❐ ${prefix}nuliskiri
╰──────────◇

╭✄┈┈┈⟬ *GROUP* ⟭
┆❐ ${prefix}setwelcome
┆❐ ${prefix}changewelcome
┆❐ ${prefix}delsetwelcome
┆❐ ${prefix}setleft
┆❐ ${prefix}changeleft
┆❐ ${prefix}delsetleft
┆❐ ${prefix}antiwame
┆❐ ${prefix}antiwame2
┆❐ ${prefix}open
┆❐ ${prefix}close
┆❐ ${prefix}antilink
┆❐ ${prefix}antilink2
┆❐ ${prefix}hidetag
╰──────────◇
`
}
}
