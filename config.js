const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "uv5xxJDR#HMvGC8kL0ZWGLWQsfStt_T_rZLoEbaXdkYriX6wtvGg",
ALIVE_IMG : process.env.ALIVE_IMG || "https://i.ibb.co/M5g5DdYY/Golden-Queen-MD-VIMAMODS-67006b1fdd617d59.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "*🤖𝐇𝐞𝐲 𝐈'𝐦 💃bot name 🤍 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭⚡*\n\n*🔔𝐈'𝐦 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰🎠*\n\n*⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : 𝐒𝐇𝐀𝐆𝐄𝐄 𝐌𝐃",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
