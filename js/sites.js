const DEFAULT_COLOR = '#aaaaaa';

var sites = [
  {
    name: 'Facebook',
    color: '#4767aa',
    logo: 'img/facebook.png',
    url: 'https://www.facebook.com/about/privacy',
    data_collected: 'Interactions on Facebook <a href=\"https://arstechnica.com/information-technology/2013/12/facebook-collects-conducts-research-on-status-updates-you-never-post/\" target=\"_blank\">like quizzes and comments and statuses you type but do not post</a>, browsing info from pages with like buttons, location data, apps you and friends install, Instagram and WhatsApp data',
    used_for: 'Targeted advertising, facial recognition'
   }, {
    name: 'Google',
    color: '#4086f4',
    logo: 'img/google.png',
    url: 'https://policies.google.com/privacy',
    data_collected: 'Gmail content, drive files, calendar appointments, photos, searches, browsing history through page analytics, DoubleClick ads, and captchas, calls, texts, and location on Android',
    used_for: 'Targeted advertising'
  }, {
    name: 'Instagram',
    color: '#d0389f',
    logo: 'img/instagram.png',
    url: 'https://help.instagram.com/155833707900388',
    data_collected: 'Uploaded content, contacts, location data',
    used_for: 'Targeted advertising, sharing with parent company Facebook, licensing of your photos with no reimbursement'
  }, {
    name: 'Microsoft',
    color: '#004185',
    logo: 'img/microsoft.png',
    url: 'https://privacy.microsoft.com/en-us/privacy',
    data_collected: 'Device info, applications installed and usage details, crash info, browsing history, inferred interests, searches',
    used_for: 'Promotional communications, relevant offers, targeted advertising'
  }, {
    name: 'PayPal',
    color: '#203881',
    logo: 'img/paypal.png',
    url: 'https://www.paypal.com/gi/webapps/mpp/ua/privacy-full',
    data_collected: 'Name, address, phone, email, contacts, financial account info, transaction info from each transaction including device info, usage and behavior data, and location',
    used_for: 'Location-based advertising, sharing with other advertising and analytics services and financial institutions'
  }, {
    name: 'Tinder',
    color: '#fe5665',
    logo: 'img/tinder.png',
    url: 'https://www.gotinder.com/privacy',
    data_collected: 'Facebook info like photos, locations, and statuses, device ID and type, Google and Apple advertising IDs, mobile and wireless network info like service provider, input from accelerometer, gyroscope, and compass, precise geolocation even while not using the app',
    used_for: 'Targeted advertising, full usage rights to your data including photos from linked accounts'
  }, {
    name: 'Uber',
    color: '#1e3944',
    logo: 'img/uber.png',
    url: 'https://privacy.uber.com/policy',
    data_collected: 'Name, credit card info, current location even when app is in background, regularly travelled locations',
    used_for: 'Marketing, data analytics and research, employees have full access to user data (which has been used to target reporters critical of Uber)'
  }, {
    name: 'Venmo',
    color: '#3d95ce',
    logo: 'img/venmo.png',
    url: 'https://venmo.com/legal/us-privacy-policy/',
    data_collected: 'Personal transaction info, contacts',
    used_for: 'Targeted advertising, sharing with parent company PayPal'
  }, {
    name: 'Verizon',
    color: '#cd040b',
    logo: 'img/verizon.png',
    url: 'https://www.verizon.com/about/privacy/privacy-policy-summary',
    data_collected: 'Calls, texts, data, location, browsing history after logging into "My Verizon" on any device',
    used_for: 'Targeted advertising, selling location data'
  }
];

var alternatives = [
  {
    name: 'Blur',
    color: '#32668e',
    logo: 'img/blur.png',
    url: 'https://www.abine.com/index.html',
    what_it_is: 'Masked emails, phone number, and credit card, browser extension blocks trackers and ads',
    what_it_costs: 'Free masked emails and extension, premium adds masked phone and credit card for down to $2.20/month with 3-year subscription'
  }, {
    name: 'Bouncer',
    color: '#fccc0c',
    logo: 'img/bouncer.png',
    url: 'https://play.google.com/store/apps/details?id=com.samruston.permission',
    what_it_is: 'Grant permissions to apps temporarily and automatically remove them when you close the app or after a chosen period of time',
    what_it_costs: '$0.99'
  }, {
    name: 'DuckDuckGo',
    color: '#de5833',
    logo: 'img/duckduckgo.png',
    url: 'https://duckduckgo.com/',
    what_it_is: 'Search engine that makes money from ads but doesn\'t track you',
    what_it_costs: 'Free, ads are based on search terms only'
  }, {
    name: 'Exodus Privacy',
    color: '#684971',
    logo: 'img/exodusprivacy.png',
    url: 'https://exodus-privacy.eu.org/en/',
    what_it_is: 'Analyzes privacy concerns in Android applications',
    what_it_costs: 'Free'
  }, {
    name: 'F-Droid',
    color: '#b1eb0b',
    logo: 'img/fdroid.png',
    url: 'https://f-droid.org/',
    what_it_is: 'Android app repository of free and open-source apps',
    what_it_costs: 'Free'
  }, {
    name: 'Feeder',
    color: '#189052',
    logo: 'img/feeder.png',
    url: 'https://f-droid.org/en/packages/com.nononsenseapps.feeder/',
    what_it_is: 'Open-source RSS feed reader for curating your own news feed',
    what_it_costs: 'Free'
  }, {
    name: 'Firefox',
    color: '#ff600c',
    logo: 'img/firefox.png',
    url: 'https://www.mozilla.org/en-US',
    what_it_is: 'Browser that\'s not made by an ad company, so it doesn\'t track everything you do',
    what_it_costs: 'Free'
  }, {
    name: 'HTTPS Everywhere',
    color: '#0098ff',
    logo: 'img/httpseverywhere.png',
    url: 'https://www.eff.org/https-everywhere',
    what_it_is: 'Open-source browser extension that encrypts website communications by changing any HTTP connections to HTTPS',
    what_it_costs: 'Free, developed by The Tor Project and the Electronic Frontier Foundation'
  }, {
    name: 'KeePassXC',
    color: '#6cac4d',
    logo: 'img/keepassxc.png',
    url: 'https://keepassxc.org/',
    what_it_is: 'Open-source password manager with encrypted database stored locally instead of in the cloud',
    what_it_costs: 'Free'
  }, {
    name: 'LastPass',
    color: '#af0809',
    logo: 'img/lastpass.png',
    url: 'https://www.lastpass.com',
    what_it_is: 'Encrypted cloud-based password manager',
    what_it_costs: 'Free, premium adds extra features'
  }, {
    name: 'LibreOffice',
    color: '#00a500',
    logo: 'img/libreoffice.png',
    url: 'https://www.libreoffice.org',
    what_it_is: 'Open-source office suite that can work with Microsoft Office files',
    what_it_costs: 'Free'
  }, {
    name: 'Malwarebytes',
    color: '#3371e3',
    logo: 'img/malwarebytes.png',
    url: 'https://www.malwarebytes.com',
    what_it_is: 'PC utility that reactively scans for and removes malware, ransomeware, adware, and more',
    what_it_costs: 'Free'
  }, {
    name: 'Nextcloud',
    color: '#0082c9',
    logo: 'img/nextcloud.png',
    url: 'https://nextcloud.com/',
    what_it_is: 'Self-hosted cloud storage',
    what_it_costs: 'Free for personal use'
  }, {
    name: 'NoScript',
    color: '#cf0000',
    logo: 'img/noscript.png',
    url: 'https://noscript.net',
    what_it_is: 'Open-source Firefox browser extension that blocks all scripts on websites allowing you to build your own whitelist',
    what_it_costs: 'Free'
  }, {
    name: 'Pay With Privacy',
    color: '#ff2d36',
    logo: 'img/paywithprivacy.png',
    url: 'https://privacy.com',
    what_it_is: 'Create free, unique, virtual debit cards for either single-use or have them link to the first vendor they\'re used with, can also set a monthly limit for subscriptions and bills',
    what_it_costs: 'Free, they get a cut of the debit card transaction fees like any other bank'
  }, {
    name: 'Privacy Badger',
    color: '#ec9329',
    logo: 'img/privacybadger.png',
    url: 'https://www.eff.org/privacybadger',
    what_it_is: 'Open-source browser extension that automatically learns to block invisible trackers that don\'t respect Do Not Track, instead of relying on a central blacklist',
    what_it_costs: 'Free, developed by the Electronic Frontier Foundation'
  }, {
    name: 'Private Internet Access',
    color: '#39b54a',
    logo: 'img/privateinternetaccess.png',
    url: 'https://www.privateinternetaccess.com',
    what_it_is: 'Swiss-based VPN that hides your IP address and encrypts all internet traffic, so even your ISP can\'t see what you do online',
    what_it_costs: '$6.95/month, $3.33/month with 1-year subscription, $2.91/month with 2-year subscription'
  }, {
    name: 'ProtonMail',
    color: '#505061',
    logo: 'img/protonmail.png',
    url: 'https://protonmail.com',
    what_it_is: 'End-to-end encrypted email with mailbox encrypted with your password so even ProtonMail can\'t access your emails',
    what_it_costs: 'Free with 500MB storage, more features starting at €5 like 5GB, 5 addresses, 200 folders, email filters, and more'
  }, {
    name: 'uBlock Origin',
    color: '#800000',
    logo: 'img/ublockorigin.png',
    url: 'https://github.com/gorhill/uBlock',
    what_it_is: 'Open-source browser extension that blocks ads in basic mode, functions like NoScript in advanced mode',
    what_it_costs: 'Free'
  }, {
    name: 'VeraCrypt',
    color: '#32b092',
    logo: 'img/veracrypt.png',
    url: 'https://www.veracrypt.fr/en/Home.html',
    what_it_is: 'Open-souce disk encryption software that provides encrypted file volumes as well as full disk encryption',
    what_it_costs: 'Free'
  }, {
    name: 'Wire',
    color: '#1f2024',
    logo: 'img/wire.png',
    url: 'https://wire.com/en/',
    what_it_is: 'End-to-end encrypted messaging, file sharing, and voice calls',
    what_it_costs: 'Free for personal use with max file sharing size of 25MB/file'
  }
];

/*
  https://haveibeenpwned.com/api/v2/breaches

  Sites with additional info not from haveibeenpwned
------------------------------------------------------------ */
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
    name: 'Collection #1',
    color: DEFAULT_COLOR
  },  {
    name: 'Comcast',
    color: DEFAULT_COLOR
  }, {
    name: 'DaFont',
    color: '#cc0000'
  }, {
    name: 'Dailymotion',
    color: DEFAULT_COLOR
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
    name: 'Equifax',
    color: '#841b2a',
    logo: 'img/equifax.png',
    url: 'https://www.consumer.ftc.gov/blog/2017/09/equifax-data-breach-what-do',
    date: 'May 15, 2017',
    accounts: '143,000,000',
    data: 'Names, Social Security numbers, Birth dates, Addresses, Driver\'s license numbers, Credit card numbers, Dispute documents'
  }, {
    name: 'Experian',
    color: '#007dc3'
  }, {
    name: 'Forbes',
    color: DEFAULT_COLOR
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
    color: '#1b79d0',
    logo: 'img/malwarebytes.png'
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
