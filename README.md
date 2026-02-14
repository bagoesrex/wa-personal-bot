# 🤖 wa-personal-bot

Personal WhatsApp bot based on [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js).  
Made for personal use with simple commands like connection testing, sending funny pictures, and more.

## ⚙️ Command Prefix

This bot uses a dynamic command prefix based on environment:

- Development mode → `$`
- Production mode → `!`

Prefix is configured automatically from:

```
commandPrefix: isDev ? "$" : "!"
```

### Example Usage (Production)

```
!menu
!ai hello
```

### Example Usage (Development)

```
$menu
$ai hello
```

## 🚀 Feature

> Replace `<prefix>` with the active command prefix.

- `<prefix>testprivate` — Tes koneksi bot
- `<prefix>kucink` — Kirim pesan cukurukuk
- `<prefix>neko` — Kirim gambar neko random
- `<prefix>menu` — Tampilkan daftar perintah
- `<prefix>ai <teks>` — Tanya AI
- `<prefix>price <symbol>` — Cek harga crypto
- `More features (coming soon)`

## 📋 Requirements

Make sure your system has installed:

- [Node.js](https://nodejs.org/) (version 16.x or later is recommended)
- WhatsApp is active and can scan QR code

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/bagoesrex/wa-personal-bot.git
cd wa-personal-bot
```

### 2. Install dependencies

```bash
npm install
```

### 3. Konfigurasi Environments

Copy `.env.example` to `.env`, then adjust the values as needed:

```bash
cp .env.example .env
```

example `.env`:

```bash
# App Environment
NODE_ENV=development
APP_NAME="bagoesrex personal bot"

# Whatsapp Environments
WA_DEVICE_NAME=meguphone
WA_SESSION_PATH=./session

# Gemini Environments
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-2.5-flash

# Coinmarketcap Environments
COINMARKETCAP_API_KEY=your_coinmarketcap_api_key
```

### 4. Run the bot

```bash
npm run start
```

On the first run, a QR code will appear in the terminal. Scan it using WhatsApp:

**WhatsApp** → **Linked Devices** → **Link a Device**

---

## 🔧 Additional Configuration

- Make sure you have logged in to WhatsApp on your browser beforehand.
- Can be run on VPS, use `screen`, `tmux`, or `pm2` to keep the bot running after logout.

---
