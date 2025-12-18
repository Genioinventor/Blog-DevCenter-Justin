const PLANTILLAS = {
    '1': {
        nombre: 'Server Simple',
        precio: '$30 MXN',
        info: 'Ideal para nuevos servidores con estructura básica y organización esencial',
        canales: 'images/plantilla1.png',
        roles: `@👑┃Dueño┃SV
    @🤖┃Bot┃SV
    @🔥┃Servidor┃SC
    @👤┃User┃SV
    @Nekotina
    @everyone`
    },

    
    '2': {
        nombre: 'Server Completo',
        precio: '$120 MXN',
        info: 'Servidor completo con sistema de moderación avanzado, roles jerárquicos y canales organizados para comunidades medianas',
        canales: 'images/plantilla2.png',
        roles: `@┃👑┃PROPETARIO
@┃👾┃BOTS
@●▬▬▬▬▬๑۩｢𝗦𝗧𝗔𝗙𝗙｣۩๑▬▬▬▬▬●
@┃💎┃Admin
@┃🌀┃pre-admin
@┃🪄┃Head Manager
@┃🛡️┃ Manager
@┃⚒️┃mod
@┃📐┃SR.Moderador
@┃📎┃Helper
@┃📋┃Soporte
@┃🔧┃STAFF
@●▬▬▬๑۩｢𝗘𝗦𝗣𝗘𝗖𝗜𝗔𝗟｣۩๑▬▬▬●
@┃🚀┃Boosters
@●▬▬▬▬▬▬๑۩｢𝗡𝗜𝗩𝗘𝗟｣۩๑▬▬▬▬▬▬●
@｢Bronce｣ 〔10〕
@｢Bronce｣ 〔9+〕
@｢Bronce｣ 〔8+〕
@｢Bronce｣ 〔7+〕
@｢Bronce｣ 〔6+〕
@｢Bronce｣ 〔5+〕
@｢Bronce｣ 〔4+〕
@｢Bronce｣ 〔3+〕
@｢Bronce｣ 〔2+〕
@｢Bronce｣ 〔1+〕
@┃✴️┃𝗨𝗦𝗨𝗔𝗥𝗜𝗢
@●▬▬▬▬▬▬▬๑۩｢𝗡𝗢𝗧𝗜｣۩๑▬▬▬▬▬▬▬●
@┃📢┃AVISOS
@●▬▬▬▬▬▬๑۩｢𝗨𝗡𝗜𝗢𝗡｣۩๑▬▬▬▬▬▬●
@┃🎁┃ℳ𝑒𝓂𝒷𝓇𝑒𝓈𝒾𝒶2025
@everyone`
    },

    '3': {
        nombre: 'Server Ultra',
        precio: '$170 MXN',
        info: 'Servidor profesional con todas las funcionalidades, niveles de permisos avanzados, canales especializados y sistema de eventos completo',
        canales: 'images/plantilla3.png',
        roles: `@【👑】PROPETARIO
@【👾】BOTS
@●▬▬▬▬▬๑۩｢𝗦𝗧𝗔𝗙𝗙｣۩๑▬▬▬▬▬●
@【🪄】Head Manager
@【🛡️】 manager
@【💎】Admin
@【🌀】Pre-Admin
@【⚒️】Mod
@【🔨】 SR.Moderador
@【⚙️】Helper
@【📋】soporte
@【🔧】STAFF
@【⬆️】STAFF en revisión
@●▬▬▬▬▬▬▬๑۩｢𝗘𝗦𝗣𝗘𝗖𝗜𝗔𝗟｣۩๑▬▬▬▬▬▬▬●
@〔💎〕｢𝗕𝗢𝗦𝗧𝗘𝗥｣
@【🚀】𝗕𝗼𝗼𝘀𝘁𝗲𝗿
@【🎉】Cumpleañero
@【🧲】𝗖𝗮𝘇𝗮 𝗔𝗹𝗶𝗮𝗻𝘇𝗮𝘀
@╔═════════╬Eventos╬═════════╗
@lik.em.oji
@●▬▬▬▬▬๑۩｢𝗡𝗜𝗩𝗘𝗟｣۩๑▬▬▬▬▬●
@｢Ｍíｔｉｃｏ｣ 〔５0〕
@｢Ｍíｔｉｃｏ｣ 〔４５〕
@｢𝗗𝗶𝗮𝗺𝗮𝗻𝘁𝗲｣ 〔40〕
@｢𝗗𝗶𝗮𝗺𝗮𝗻𝘁𝗲｣ 〔35〕
@｢𝗢𝗥𝗢｣ 〔30〕
@｢𝗢𝗥𝗢｣ 〔25〕
@｢ᴘʟᴀᴛᴀ｣ 〔20〕
@｢ᴘʟᴀᴛᴀ｣ 〔15〕
@｢Bronce｣ 〔10〕
@｢Bronce｣ 〔9+〕
@｢Bronce｣ 〔8+〕
@｢Bronce｣ 〔7+〕
@｢Bronce｣ 〔6+〕
@｢Bronce｣ 〔5+〕
@｢Bronce｣ 〔1+〕
@【👤】𝗨𝗦𝗨𝗔𝗥𝗜𝗢
@【💎】BOT
@●▬▬▬▬▬๑۩｢𝗣𝗘𝗥𝗙𝗜𝗟｣۩๑▬▬▬▬▬●
@【♀️】Mujer
@【♂️】Hombre
@【👁️‍🗨️】No mostrar genero
@●▬▬▬▬▬▬๑۩｢𝗡𝗢𝗧𝗜｣۩๑▬▬▬▬▬▬●
@【🛒】Tienda
@【🔔】Brawl
@【❄️】alianzas
@【/】Bump
@【🎩】buen chisme
@●▬▬▬▬▬▬๑۩｢𝗨𝗡𝗜𝗢𝗡｣۩๑▬▬▬▬▬▬●
@【⭐】𝗩𝗘𝗧𝗘𝗥𝗔𝗡𝗢
@【🎁】ℳ𝑒𝓂𝒷𝓇𝑒𝓈𝒾𝒶 𝟸𝟶𝟸𝟺
@【🎁】ℳ𝑒𝓂𝒷𝓇𝑒𝓈𝒾𝒶 𝟸𝟶𝟸𝟻
@●▬▬▬▬▬๑۩｢𝗘𝗖𝗢𝗡𝗢𝗠𝗜𝗔｣۩๑▬▬▬▬▬●
@【💥】brwl pass free
@【🎉】Giveaways
@【💳】brwl pass
@Nekotina
@【📸】Multimedia
@everyone`
    },














    '4': {
        nombre: 'Social',
        precio: '$40 MXN',
        info: 'Servidor temático con estética moderna, diseñado para comunidades de entretenimiento, gaming y socialización',
        canales: `$$˜"*°•.˜"*°• Social •°*"˜.•°*"˜
『💬』𝐆𝐞𝐧𝐞𝐫𝐚𝐥
『🤣』𝐌𝐞𝐦𝐞𝐬
『🤣🎥』𝐌𝐮𝐥𝐭𝐢𝐦𝐞𝐝𝐢𝐚
『🥪』𝐂𝐨𝐬𝐢𝐧𝐚
『🎮』𝐉𝐮𝐞𝐠𝐨𝐬
『😯💬』𝐒𝐢𝐠𝐮𝐞-𝐥𝐚-𝐇𝐢𝐬𝐭𝐨𝐫𝐢𝐚
$$˜"*°•.˜"*°• Musica •°*"˜.•°*"˜
$『🎶』𝐌𝐮𝐬𝐢𝐜𝐚
$『🎶』𝐌𝐮𝐬𝐢𝐜𝐚
$『🎶』𝐌𝐮𝐬𝐢𝐜𝐚
$『🎶』𝐌𝐮𝐬𝐢𝐜𝐚
$『🎶』𝐌𝐮𝐬𝐢𝐜𝐚
$$˜"*°•.˜"*°• Entretenimiento •°*"˜.•°*"˜
『🧟』𝐙𝐬𝐮𝐫𝐯𝐢𝐯𝐞
『👩💰』𝐍𝐞𝐤𝐨𝐭𝐢𝐧𝐚
『💰🤖』𝐔𝐧𝐛𝐞𝐥𝐢𝐞𝐯𝐚𝐁𝐨𝐚𝐭
『🤖😀』𝐌𝐄𝐄𝟔`,
        roles: ` ⌊👑⌉𝐎𝐰𝐧𝐞𝐫
 ⌊👮‍♂️⌉𝗦𝘁𝗮𝗳𝗳
 ⌊🤣⌉𝗦𝗲ñ𝗼𝗿 𝘀𝗵𝗶𝘁𝗽𝗼𝘀𝘁
 ⌊😎⌉𝑨𝒎𝒊𝒈𝒐𝒔
 ⌊😀⌉𝑴𝒊𝒆𝒎𝒃𝒓𝒐𝒔
 ⌊🤖⌉𝑩𝒐𝒕𝒔`
    },

    
}
