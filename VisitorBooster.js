const axios = require('axios');
const { SocksProxyAgent } = require('socks-proxy-agent');
const readline = require('readline');
const UserAgent = require('user-agents');  // 🆕 استدعاء مكتبة User-Agent

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const visitInterval = 3000;

let successCount = 0;
let failCount = 0;
let totalCount = 0;

const torProxy = 'socks5://127.0.0.1:9050';

rl.question('Please enter the blog URL: ', (targetURL) => {
    console.log(`Selected URL: ${targetURL}`);
    rl.close();

    function visitSite() {
        const agent = new SocksProxyAgent(torProxy);
        const userAgent = new UserAgent().toString();  // 🧠 توليد User-Agent عشوائي

        axios.get(targetURL, {
            httpAgent: agent,
            httpsAgent: agent,
            headers: {
                'User-Agent': userAgent
            }
        })
        .then(() => {
            successCount++;
            totalCount++;
            console.log(`✅ Successful visit (${successCount}) / Total: ${totalCount}`);
        })
        .catch((err) => {
            failCount++;
            totalCount++;
            console.log(`❌ Visit failed (${failCount}) / Total: ${totalCount} — ${err.message}`);
        });

        axios.get('https://api.ipify.org?format=json', {
            httpAgent: agent,
            httpsAgent: agent,
        })
        .then((response) => {
            console.log(`🕵️‍♂️ The IP address used via Tor: ${response.data.ip}`);
        })
        .catch((err) => {
            console.log(`❌ IP error: ${err.message}`);
        });
    }

    console.log('🚀 Starting to increase visits via Tor ...');
    setInterval(visitSite, visitInterval);
});
