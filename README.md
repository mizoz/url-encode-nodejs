# URL Encode Node.js

[![npm Version](https://img.shields.io/npm/v/url-encode-nodejs?style=flat-square)](https://www.npmjs.com/package/url-encode-nodejs)
[![npm Downloads](https://img.shields.io/npm/dm/url-encode-nodejs?style=flat-square)](https://www.npmjs.com/package/url-encode-nodejs)
[![License](https://img.shields.io/npm/l/url-encode-nodejs?style=flat-square)](LICENSE)
[![Node Version](https://img.shields.io/node/v/url-encode-nodejs?style=flat-square)](https://www.npmjs.com/package/url-encode-nodejs)
[![GitHub Stars](https://img.shields.io/github/stars/mizoz/url-encode-nodejs?style=flat-square)](https://github.com/mizoz/url-encode-nodejs)

> A Node.js CLI tool for URL encoding and decoding with support for batch processing.

## Features

- URL encode strings
- URL decode encoded strings
- Batch processing support
- Component vs full URL encoding
- Special character handling
- JavaScript/TypeScript API

## Installation

### From npm

```bash
npm install -g url-encode-nodejs
```

### From Source

```bash
git clone https://github.com/mizoz/url-encode-nodejs.git
cd url-encode-nodejs
npm install
```

## Usage

### Command Line

```bash
# Encode a string
url-encode "Hello World!"

# Decode an encoded string
url-decode "Hello%20World%21"

# Encode multiple strings
url-encode "string1" "string2"

# Encode as URL component
url-encode --component "Hello World"
```

### JavaScript API

```javascript
const { URLEncoder } = require("url-encode-nodejs");

const encoder = new URLEncoder();

// Encode a string
const encoded = encoder.encode("Hello World!");
console.log(encoded);  // Hello%20World%21

// Decode a string
const decoded = encoder.decode("Hello%20World%21");
console.log(decoded);  // Hello World!
```

## Requirements

- Node.js 14+

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Author

**mizoz**
- GitHub: [@mizoz](https://github.com/mizoz)

---

⭐ If you find this project useful, please consider giving it a star on GitHub!
