# 📝 Jump Markdown Editor

A **2-pane real-time Markdown editor** built as part of the screening challenge for the **Global Software Engineering Contractor** role at Jump.

## 🚀 Live Demo

[👉 Open the deployed app](https://jump-md-editor-one.vercel.app/)

---

## ✨ Features

- 🖊️ **Markdown Input** on the left pane
- 👀 **Real-time Preview** on the right pane
- 📄 **Export to PDF** of the rendered Markdown
- 📋 **Copy Rendered Output** to clipboard

---

## 🧱 Tech Stack

- **Frontend Framework**: React (via Vite)
- **Markdown Parser**: [marked](https://github.com/markedjs/marked)
- **PDF Export**: [html2pdf.js](https://github.com/eKoopmans/html2pdf)
- **Clipboard API**: `navigator.clipboard`

---

## 🛠️ Getting Started

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/jump-md-editor.git
cd jump-md-editor

# Install dependencies
npm install

# Run locally
npm run dev


## 📦 Deployment
This project is deployed via Vercel. Just push to GitHub and import the repo on Vercel – it auto-detects Vite and deploys instantly.

