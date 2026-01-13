import { coinmarketcapClient } from "../clients/coinmarketcap.client.js";

export async function getLatestCryptoQuoteBySymbol(symbol) {
  try {
    const response = await coinmarketcapClient.get(`/v1/cryptocurrency/quotes/latest`, {
      params: {
        symbol: symbol,
        convert: "IDR",
      },
    });

    const crypto = Object.values(response.data.data)?.[0];
    if (!crypto) throw new Error(`Maaf, Crypto *${symbol}* tidak tersedia 😔`);

    return {
      symbol: crypto.symbol,
      name: crypto.name,
      priceIDR: crypto.quote.IDR.price,
      percentChange24h: crypto.quote.IDR.percent_change_24h,
    };
  } catch (error) {
    throw new Error(error.message ?? "Failed to get response from Gemini API");
  }
}
