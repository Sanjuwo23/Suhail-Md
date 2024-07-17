const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "94710513877";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94776928548";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_11_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNixcbiAgICAgICAgMTc2LFxuICAgICAgICAzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzksXG4gICAgICAgIDEwMixcbiAgICAgICAgNjQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDg5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDAsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODUsXG4gICAgICAgIDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkyLFxuICAgICAgICA3MixcbiAgICAgICAgMTgsXG4gICAgICAgIDcyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDkzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIsXG4gICAgICAgIDQzLFxuICAgICAgICAzNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxLFxuICAgICAgICA3OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc4LFxuICAgICAgICA4NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA5NixcbiAgICAgICAgMixcbiAgICAgICAgMTQzLFxuICAgICAgICA2NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAwLFxuICAgICAgICA5MSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDM1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDUwLFxuICAgICAgICA3MixcbiAgICAgICAgMTExLFxuICAgICAgICAxMCxcbiAgICAgICAgODksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDksXG4gICAgICAgIDM4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg0LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0LFxuICAgICAgICA4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaFdzR0R4V2xiMkE4T1NlcklmUzYxUXZWK3pyY3lzc3BDYkJkM2pTWHVtRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc3NjkyODU0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNEZBRTIzNTIwODA4RTZFRDRCQ0Q1QzFCMUNDNkY3MDdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMjExMDY5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NzY5Mjg1NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjY5RjgzQzY4ODcxMEM4NzREMTU0RjdGQTE4NERGNjIyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTIxMTA3MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJNdzZyRkxvS1NFNllGS3BFR05KVDVnXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ3ODgzMWY3LTAzMzYtNDBhNC1iNjkwLTI3NTNjMjk3MTdiOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NSxcbiAgICAgIDEwLFxuICAgICAgMTQ4LFxuICAgICAgOTcsXG4gICAgICAxMTQsXG4gICAgICAyNSxcbiAgICAgIDg5LFxuICAgICAgMjMyLFxuICAgICAgMzgsXG4gICAgICAyNyxcbiAgICAgIDE1OCxcbiAgICAgIDIyMyxcbiAgICAgIDE2MyxcbiAgICAgIDMsXG4gICAgICA1MSxcbiAgICAgIDgsXG4gICAgICAxNTUsXG4gICAgICA4OCxcbiAgICAgIDcyLFxuICAgICAgNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NSxcbiAgICAgIDQ0LFxuICAgICAgOTYsXG4gICAgICAxNTcsXG4gICAgICAxMzAsXG4gICAgICAxNTgsXG4gICAgICA1OSxcbiAgICAgIDE4MixcbiAgICAgIDEzNixcbiAgICAgIDE0OCxcbiAgICAgIDE1LFxuICAgICAgOTksXG4gICAgICAxOTUsXG4gICAgICAxMzgsXG4gICAgICAxMjAsXG4gICAgICAxMDMsXG4gICAgICAxNjAsXG4gICAgICA1OCxcbiAgICAgIDI1MSxcbiAgICAgIDE2NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1NVA1WktWR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NzY5Mjg1NDg6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcInNhbmp1bGFcIixcbiAgICBcImxpZFwiOiBcIjE5NTY4MzQ5MTU1NzQ3Mzo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tLL3lwY0NFTG14M3JRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOXhIS1IreWdWcHBuR0pLZGdsSzhvR2JDY0Q0b2FDcWlIWTB3ZFpaMlNIQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNbjdUTVJzRVp3TjFoUFArVjJjRmwwaXpuWEZETU03NWxSWTZsTU8wRjRwZ0RZMmw1V1lrVFBmSTRrTXY4L3VyU1dIWHhoZkpmL0lOb2tyT01BMzBBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJzKzZUSjBZWTlGS0FaNUxyQ1VuSnhYOTZZdWZzOGRKVVFTMUhncWRwWlFGRXU4QTlFenc2YzFacjlrZHZFRmtsNzRHdTk5WGUwQkdKK3Y4U2VnMTdqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3NjkyODU0ODo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTIxMTA2OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU12RlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXZGLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSm1zSTBQaElVWlBTMHVQZUF1RENpQnlINUlSVmw0bDZ0Q2J1bUhYRmJQST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1ODYzMjU5MjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "×ㅤMr Sanjuwa තමයි බං 🇱🇰" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "×ㅤMr Sanjuwa තමයි බං 🇱🇰",
  packname: process.env.PACK_NAME || "×ㅤMr Sanjuwa තමයි බං 🇱🇰",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "×ㅤMr Sanjuwa තමයි බං 🇱🇰",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "72oXsuE5urrMXuGg8wy7yrb2",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
