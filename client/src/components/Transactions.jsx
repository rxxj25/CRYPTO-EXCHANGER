import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import useFetch from "../hooks/useFetch";

const shortenAddress = (address) =>
  `${address.slice(0, 6)}...${address.slice(address.length - 4)}`;

const Transactions = () => {
  const { currentAccount, transactions } = useContext(TransactionContext);

  return (
    <div className="transactions-container">
      <h1 className="transactions-title">
        {currentAccount
          ? "Latest Transactions"
          : "Connect your account to see the latest transactions."}
      </h1>

      {currentAccount && transactions.length > 0 ? (
        <div className="boxes-container">
          {transactions.map((tx, index) => {
            const gifUrl = useFetch(tx.keyword);

            return (
              <a
                key={index}
                href={`https://sepolia.etherscan.io/address/${tx.addressFrom}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transaction-box-link"
              >
                <div className="transaction-box">
                  <img
                    src={gifUrl || "https://via.placeholder.com/150"}
                    alt="transaction gif"
                    className="transaction-gif"
                    style={{ width: "100%", borderRadius: "12px" }}
                  />
                  <div className="transaction-info">
                    <p><strong>From:</strong> {shortenAddress(tx.addressFrom)}</p>
                    <p><strong>To:</strong> {shortenAddress(tx.addressTo)}</p>
                    <p><strong>Amount:</strong> {tx.amount} ETH</p>
                    <p><strong>Message:</strong> {tx.message}</p>
                    <p><strong>Keyword:</strong> {tx.keyword}</p>
                    <p><small>{tx.timestamp}</small></p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      ) : (
        currentAccount && <p>No transactions found.</p>
      )}
    </div>
  );
};

export default Transactions;
