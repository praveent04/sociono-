import {Telegraf} from 'telegraf';
import { message } from 'telegraf/filters';
import userModel from './src/models/User.js';
import eventModel from './src/models/Event.js';
import connectDB from './src/config/db.js'

const bot = new Telegraf(process.env.BOT_TOKEN);

try{

    connectDB()
    

} catch(err){

    console.log(err);
    process.kill(process.pid, 'SIGTERM');

}

bot.start(async(ctx)=>{

    const from = ctx.update.message.from;

    console.log('from', from);

    try{

        await userModel.findOneAndUpdate({ tgId: from.id},{
            $setOnInsert:{
                firstName: from.first_name,
                lastName: from.last_name,
                isBot: from.is_bot,
                username: from.username,
            }
    },{ upsert: true, new:true });

    await ctx.reply(
        `Hey! ${from.first_name}, Welcome:). I am socio bot, I will be writing highly engaging social media posts for you. Just keep feeding me with the events throughout the day. Let's shine on social media!`
    );
} catch (err) {
    console.log(err);
    await ctx.reply("Facing errors!");
}
    
});

bot.on(message('text'), async(ctx)=>{
    const from = ctx.update.message.from;
    const message = ctx.update.message.text;

    try{
        await eventModel.create({
            text: message,
            tgId: from.id,
        });
        ctx.reply('Noted!!, Keep texting me your thoughts. To generate the posts, just enter the command: /generate');
    }catch(err){
        console.log(err);
        await ctx.reply('Facing difficulties, please try again later.');
    }
    
    
});

bot.launch();
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))