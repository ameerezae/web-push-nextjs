const webPush = require('web-push');
const fs = require('fs');

const vapidKeys = webPush.generateVAPIDKeys();

const envData = `
NEXT_PUBLIC_VAPID_PUBLIC_KEY=${vapidKeys.publicKey}
NEXT_PUBLIC_VAPID_PRIVATE_KEY=${vapidKeys.privateKey}
`;

fs.writeFileSync('.env', envData, { flag: 'w' });

console.log('#### VAPID keys generated and saved to .env file ### \n');
