/*
{
 name: '',
 color: '#',
 url: '',
 data: '',
 uses: ''
},
*/

var sites = [
  {
    name: 'Facebook',
    color: '#4767aa',
    url: 'https://www.facebook.com/about/privacy',
    data: 'Interactions on Facebook <a href=\"https://arstechnica.com/information-technology/2013/12/facebook-collects-conducts-research-on-status-updates-you-never-post/\" target=\"_blank\">like quizzes and comments and statuses you type but do not post</a>, browsing info from pages with like buttons, location data, apps you and friends install, Instagram and WhatsApp data',
    uses: 'Targeted advertising, facial recognition'
   }, {
    name: 'Google',
    color: '#4086f4',
    url: 'https://policies.google.com/privacy',
    data: 'Gmail content, drive files, calendar appointments, photos, searches, browsing history through page analytics, DoubleClick ads, and captchas, calls, texts, and location on Android',
    uses: 'Targeted advertising'
  }, {
    name: 'Instagram',
    color: '#d0389f',
    url: 'https://help.instagram.com/155833707900388',
    data: 'Uploaded content, contacts, location data',
    uses: 'Targeted advertising, sharing with parent company Facebook, licensing of your photos with no reimbursement'
  }, {
    name: 'Microsoft',
    color: '#004185',
    url: 'https://privacy.microsoft.com/en-us/privacy',
    data: 'Device info, applications installed and usage details, crash info, browsing history, inferred interests, searches',
    uses: 'Promotional communications, relevant offers, targeted advertising'
  }, {
    name: 'PayPal',
    color: '#203881',
    url: 'https://www.paypal.com/gi/webapps/mpp/ua/privacy-full',
    data: 'Name, address, phone, email, contacts, financial account info, transaction info from each transaction including device info, usage and behavior data, and location',
    uses: 'Location-based advertising, sharing with other advertising and analytics services and financial institutions'
  }, {
    name: 'Tinder',
    color: '#fe5665',
    url: 'https://www.gotinder.com/privacy',
    data: 'Facebook info like photos, locations, and statuses, device ID and type, Google and Apple advertising IDs, mobile and wireless network info like service provider, input from accelerometer, gyroscope, and compass, precise geolocation even while not using the app',
    uses: 'Targeted advertising, full usage rights to your data including photos from linked accounts'
  }, {
    name: 'Uber',
    color: '#1e3944',
    url: 'https://privacy.uber.com/policy',
    data: 'Name, credit card info, current location even when app is in background, regularly travelled locations',
    uses: 'Marketing, data analytics and research, employees have full access to user data (which has been used to target reporters critical of Uber)'
  }, {
    name: 'Venmo',
    color: '#3d95ce',
    url: 'https://venmo.com/legal/us-privacy-policy/',
    data: 'Personal transaction info, contacts',
    uses: 'Targeted advertising, sharing with parent company PayPal'
  }, {
    name: 'Verizon',
    color: '#cd040b',
    url: 'https://www.verizon.com/about/privacy/privacy-policy-summary',
    data: 'Calls, texts, data, location, browsing history after logging into "My Verizon" on any device',
    uses: 'Targeted advertising, selling location data'
  }
];

var alternatives = [
  {
    name: 'Blur',
    color: '#32668e',
    url: 'https://www.abine.com/index.html',
    what: 'Masked emails, phone number, and credit card, browser extension blocks trackers and ads',
    cost: 'Free masked emails and extension, premium adds masked phone and credit card for down to $2.20/month with 3-year subscription'
  }, {
    name: 'Bouncer (Android)',
    color: '#fccc0c',
    url: 'https://play.google.com/store/apps/details?id=com.samruston.permission',
    what: 'Grant permissions to apps temporarily and automatically remove them when you close the app or after a chosen period of time',
    cost: '$0.99'
  }, {
    name: 'DuckDuckGo',
    color: '#de5833',
    url: 'https://duckduckgo.com/',
    what: 'Search engine that makes money from ads but doesn\'t track you',
    cost: 'Free, ads are based on search terms only'
  }, {
    name: 'Exodus Privacy',
    color: '#684971',
    url: 'https://exodus-privacy.eu.org/en/',
    what: 'Analyzes privacy concerns in Android applications',
    cost: 'Free'
  }, {
    name: 'F-Droid (Android)',
    color: '#b1eb0b',
    url: 'https://f-droid.org/',
    what: 'Open-source android app repository',
    cost: 'Free'
  }, {
    name: 'Feeder',
    color: '#189052',
    url: 'https://f-droid.org/en/packages/com.nononsenseapps.feeder/',
    what: 'Open-source RSS feed reader for curating your own news feed',
    cost: 'Free'
  }, {
    name: 'Firefox',
    color: '#ff600c',
    url: 'https://www.mozilla.org/en-US',
    what: 'Browser that\'s not made by an ad company, so it doesn\'t track everything you do',
    cost: 'Free'
  }, {
    name: 'KeePassXC',
    color: '#6cac4d',
    url: 'https://keepassxc.org/',
    what: 'Open-source password manager with encrypted database stored locally instead of in the cloud',
    cost: 'Free'
  }, {
    name: 'LastPass',
    color: '#af0809',
    url: 'https://www.lastpass.com',
    what: 'Encrypted cloud-based password manager',
    cost: 'Free, premium adds extra features'
  }, {
    name: 'LibreOffice',
    color: '#00a500',
    url: 'https://www.libreoffice.org',
    what: 'Open-source office suite that can work with Microsoft Office files',
    cost: 'Free'
  }, {
    name: 'Malwarebytes',
    color: '#3371e3',
    url: 'https://www.malwarebytes.com',
    what: 'PC utility that reactively scans for and removes malware, ransomeware, adware, and more',
    cost: 'Free'
  }, {
    name: 'Nextcloud',
    color: '#0082c9',
    url: 'https://nextcloud.com/',
    what: 'Self-hosted cloud storage',
    cost: 'Free for personal use'
  }, {
    name: 'NoScript',
    color: '#cf0000',
    url: 'https://noscript.net',
    what: 'Free and open-source Firefox browser extension that blocks all scripts on websites allowing you to build your own whitelist',
    cost: 'Free'
  }, {
    name: 'Pay With Privacy',
    color: '#ff2d36',
    url: 'https://privacy.com',
    what: 'Create free, unique, virtual debit cards for either single-use or have them link to the first vendor they\'re used with, can also set a monthly limit for subscriptions and bills',
    cost: 'Free, they get a cut of the debit card transaction fees like any other bank'
  }, {
    name: 'Private Internet Access',
    color: '#39b54a',
    url: 'https://www.privateinternetaccess.com',
    what: 'Swiss-based VPN that hides your IP address and encrypts all internet traffic, so even your ISP can\'t see what you do online',
    cost: '$6.95/month, $3.33/month with 1-year subscription, $2.91/month with 2-year subscription'
  }, {
    name: 'ProtonMail',
    color: '#505061',
    url: 'https://protonmail.com',
    what: 'End-to-end encrypted email with mailbox encrypted with your password so even ProtonMail can\'t access your emails',
    cost: 'Free with 500MB storage, more features starting at €5 like 5GB, 5 addresses, 200 folders, email filters, and more'
  }, {
    name: 'uBlock Origin',
    color: '#800000',
    url: 'https://github.com/gorhill/uBlock',
    what: 'Open-source browser extension that blocks ads in basic mode, functions like NoScript in advanced mode',
    cost: 'Free'
  }, {
    name: 'Wire',
    color: '#1f2024',
    url: 'https://wire.com/en/',
    what: 'End-to-end encrypted messaging, file sharing, and voice calls',
    cost: 'Free for personal use with max file sharing size of 25MB/file'
  },
];

const DEFAULT = '#aaaaaa';
// https://haveibeenpwned.com/api/v2/breaches
var breaches = [
  {
    name: 'Adobe',
    color: '#ed1c24'
  }, {
    name: 'Ancestry',
    color: '#9cbe30'
  }, {
    name: 'Ashley Madison',
    color: '#191919'
  }, {
    name: 'Brazzers',
    color: '#ffcc00'
  }, {
    name: 'CD Projekt RED',
    color: '#db0d15'
  }, {
    name: 'Comcast',
    color: DEFAULT
  }, {
    name: 'DaFont',
    color: '#cc0000'
  }, {
    name: 'Dailymotion',
    color: DEFAULT
  }, {
    name: 'Domino\'s',
    color: '#3f71a5'
  }, {
    name: 'Dropbox',
    color: '#007ee5'
  }, {
    name: 'Edmodo',
    color: '#276cb0'
  }, {
    name: 'Epic Games',
    color: '#313131'
  }, {
    name: 'Experian',
    color: '#007dc3'
  }, {
    name: 'Forbes',
    color: DEFAULT
  }, {
    name: 'Gawker',
    color: '#d3473a'
  }, {
    name: 'imgur',
    color: '#33353b'
  }, {
    name: 'Kickstarter',
    color: '#2bde73'
  }, {
    name: 'Last.fm',
    color: '#d51007'
  }, {
    name: 'League of Legends',
    color: '#172424'
  }, {
    name: 'LinkedIn',
    color: '#007bb6'
  }, {
    name: 'Malwarebytes',
    color: '#1b79d0'
  }, {
    name: 'MyFitnessPal',
    color: '#0070bf'
  }, {
    name: 'MyHeritage',
    color: '#d96c3b'
  }, {
    name: 'MySpace',
    color: '#003399'
  }, {
    name: 'Nexus Mods',
    color: '#faa740'
  }, {
    name: 'Plex',
    color: '#282a2d'
  }, {
    name: 'ReverbNation',
    color: '#e43526'
  }, {
    name: 'Snapchat',
    color: '#fffc00'
  }, {
    name: 'Sony',
    color: '#000000'
  }, {
    name: 'Ticketfly',
    color: '#5746de'
  }, {
    name: 'tumblr',
    color: '#001935'
  }, {
    name: 'Unreal Engine',
    color: '#2a2a2a'
  }, {
    name: 'uTorrent',
    color: '#018643'
  }, {
    name: 'VK',
    color: '#4c75a3'
  }, {
    name: 'We Heart It',
    color: '#ff5c88'
  }, {
    name: 'xHamster',
    color: '#e2454a'
  }, {
    name: 'Yahoo',
    color: '#63246b'
  }, {
    name: 'YouPorn',
    color: '#ef7896'
  }, {
    name: 'Zappos',
    color: '#0076bd',
    logo: 'https://www.zappos.com/zappos-rewards/images/logo@2x.png',
    url: 'https://www.cnet.com/news/zappos-customer-data-accessed-in-security-breach/',
    date: 'Jan 15, 2012',
    accounts: '24,000,000',
    data: 'Email addresses, Passwords, Names, Billing and shipping addresses, Phone numbers, Last four digits of credit card numbers'
  }
];
