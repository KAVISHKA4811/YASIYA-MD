const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~BF5hkRCZ#eyL1z3Oy53UyH9KtiX1LgN4-rsVk19WZm8Ouxzg_PjI'
};
