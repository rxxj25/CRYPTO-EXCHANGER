# 🚀 CRYPTO-EXCHANGER

A decentralized Ethereum-based application (dApp) that enables users to send cryptocurrency transactions securely and view historical transaction data. It integrates React for the frontend, Solidity for the backend smart contract, and is hosted on **Netlify** for seamless deployment.

---


---

## ✨ Features

- 🔐 Connect MetaMask wallet
- 🚀 Send Ethereum to any wallet address
- 📝 Add a message and keyword with the transaction
- 📜 View history of transactions
- 📊 Blockchain-powered backend
- 🌐 Hosted freely on Netlify
- used Giphy for gifs

---

## 💻 Tech Stack

| Layer       | Technology       |
|-------------|------------------|
| Frontend    | React.js         |
| Blockchain  | Ethereum, Solidity |
| Wallet      | MetaMask         |
| Library     | Ethers.js        |
| Hosting     | Netlify          |

---

## 🔧 Smart Contract

- Developed in **Solidity**
- Deployed on the Ethereum network
- Stores transactions with sender, receiver, timestamp, keyword, and message
- Provides functions:
  - `addToBlockchain()`
  - `getAllTransactions()`
  - `getTransactionCount()`

---

## 🎨 Frontend

- Built with **React.js**
- Uses `ethers.js` to interact with the blockchain
- Handles:
  - Wallet connection
  - Sending transactions
  - Fetching all transactions
- Uses Context API to manage state globally

### Key Files

- `TransactionProvider.jsx` – Ethereum interaction logic
- `App.jsx` – Main application file
- `components/` – Reusable UI components
- `utils/constants.js` – Smart contract address and ABI

---

## 🌍 Netlify Hosting
🔗 [CRYPTO-EXCHANGER Live Demo](https://cerulean-crumble-0c3f6c.netlify.app/)

