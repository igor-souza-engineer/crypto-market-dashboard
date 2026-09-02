import type { Coin } from "@/types/coin";

export const mockCoins: Coin[] = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image: "",
    current_price: 63251,
    market_cap: 1250000000000,
    market_cap_rank: 1,
    price_change_percentage_24h: 2.35,
    price_change_percentage_week:4.5,
    volume_24: 38278328328,
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    image: "",
    current_price: 1867.81,
    market_cap: 225000000000,
    market_cap_rank: 2,
    price_change_percentage_24h: -1.42,
    price_change_percentage_week: -10,
    volume_24: 92873982798379,
  },
];