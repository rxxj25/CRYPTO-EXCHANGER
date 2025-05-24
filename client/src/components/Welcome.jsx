import React, { useContext } from "react";
import "../index.css";
import { SiEthereum } from "react-icons/si";
import { TransactionContext } from "../context/TransactionContext";

import { Loader} from './'; //
import { shortenAddress } from "../utils/shortenAddress"; //

const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    handleChange,
    sendTransaction,
    isLoading
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { addressTo, amount, keyword, message } = formData;

    if (!addressTo || !amount || !keyword || !message) return;
    sendTransaction();
  };

  return (
    <div className="welcome-container">
      <div className="welcome-left">
        <h1 className="welcome-title">Explore Cryptocurrency</h1>
        <p className="welcome-subtitle">Buy and Sell Cryptocurrency</p>

        {!currentAccount && (
          <button className="connect-wallet-button" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}

        <div className="features-grid">
          <div className="feature-item">Reliability</div>
          <div className="feature-item">Security</div>
          <div className="feature-item">Ethereum</div>
          <div className="feature-item">Solidity</div>
          <div className="feature-item">Web3.0</div>
          <div className="feature-item">Blockchain</div>
        </div>
      </div>

      <div className="welcome-right">
        <div className="eth-card">
          <div className="ethereum-logo">
            <SiEthereum size={30} color="white" />
          </div>
          <h2 className="eth-card-title">Ethereum</h2>
          <div className="wallet-address">
            {currentAccount
              ? `${currentAccount.slice(0, 6)}...${currentAccount.slice(-4)}`
              : "0x1234...abcd"}
          </div>
        </div>

        <div className="form-container blue-glassmorphism">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Address To"
              className="form-input"
              value={formData.addressTo}
              onChange={(e) => handleChange(e, "addressTo")}
            />
            <input
              type="number"
              placeholder="Amount (ETH)"
              className="form-input"
              value={formData.amount}
              onChange={(e) => handleChange(e, "amount")}
            />
            <input
              type="text"
              placeholder="Keyword"
              className="form-input"
              value={formData.keyword}
              onChange={(e) => handleChange(e, "keyword")}
            />
            <input
              type="text"
              placeholder="Enter Message"
              className="form-input"
              value={formData.message}
              onChange={(e) => handleChange(e, "message")}
            />
            <hr className="thin-line" />
            {isLoading ? (
              <div className="loader"></div>
            ) : (
              <button type="submit" className="send-now-button">
                Send Now
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
