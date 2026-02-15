#!/usr/bin/env node
/** URL encode/decode */
const a=process.argv.slice(2);
if(!a[0]){console.log('Usage: url-encode.js <string> [--decode]');process.exit(1);}
const d=a.includes('--decode'),t=a.filter(x=>!x.startsWith('--')).join(' ');
console.log(d?decodeURIComponent(t):encodeURIComponent(t));
