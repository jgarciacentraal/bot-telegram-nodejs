const Telegraf = require('telegraf');
// instanciar Telegraf
const bot = new Telegraf('1252339649:AAFp6IyLvxU1D-cfMkwIcnk30euN-1cW4Vg');

// Ejecutamos comando start y a la funcion pasamos context que es el obj de los chats 
// comandos de telegram start, help, settings, etc..
bot.start((ctx)=> {
    console.log(ctx.from)
    console.log(ctx.chat)
    console.log(ctx.message)
    console.log(ctx.updateSubTypes)
    ctx.reply('Bienvenido '+ctx.from.first_name);
});
bot.help((ctx)=> {
    ctx.reply('help!');
});
// Puedes pasar diferentes nombre de comando o solo uno
bot.command(['miComando', 'test'], (ctx)=> {
    ctx.reply('Probando mi comando personalizado');
});
// un texto en especifico
bot.hears('javascript',(ctx)=> {
    ctx.reply('I love js!');
});
// evento, mientras escribes 
// bot.on('text', ctx => {
//     ctx.reply('Ya deja de insistirle compadre, ella no te quiere');
// });
bot.phone('+52 33 34 56 78 98', ctx => {
    ctx.reply('Guarda ese numero de telefono');
});

// escuchando comandos
bot.launch();