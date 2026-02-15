# URL Encode Node.js

A command-line tool for URL encoding and decoding.

## Features

- URL encode strings
- URL decode encoded strings
- Batch processing support
- Component vs full URL encoding
- Special character handling

## Installation

```bash
npm install -g url-encode-nodejs
```

Or clone and install:

```bash
git clone https://github.com/mizoz/url-encode-nodejs.git
cd url-encode-nodejs
npm install
```

## Usage

```bash
# Encode a string
url-encode "Hello World!"

# Decode an encoded string
url-decode "Hello%20World%21"

# Encode multiple strings
url-encode "string1" "string2"

# Encode as URL component (default)
url-encode --component "Hello World"
```

## Options

- `-d, --decode` - Decode instead of encode
- `-c, --component` - Encode as URL component (default: false)

## License

MIT License

## Author

mizoz
