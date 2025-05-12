const axios = require('axios');

const wallets = [
  '0xWalletAddress1',
  '0xWalletAddress2',
  // Add more wallet addresses
];

async function getWalletScore(wallet) {
  // Hypothetical API endpoint or scraping logic for Repute or explorer
  const url = `https://repute.monad.xyz/api/score?address=${wallet}`;
  try {
    const response = await axios.get(url);
    return { wallet, score: response.data.score };
  } catch (err) {
    return { wallet, error: err.message };
  }
}

async function bulkCheck() {
  const results = [];
  for (const wallet of wallets) {
    const result = await getWalletScore(wallet);
    results.push(result);
  }
  console.log(results);
}

bulkCheck();
