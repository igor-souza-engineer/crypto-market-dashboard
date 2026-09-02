import CoinCard from "@/components/market/CoinCard";
/*port { getCoinsMarkets } from "@/services/coingecko"c*/
import MarketSummaryCard from "@/components/market/MarketSummaryCard";
import { mockCoins } from "@/data/mockCoins";
import { mockGlobalMarketData } from "@/data/mockGlobalMarketData";

export default async function Home() {
  const coins = mockCoins;
  /*const coins = await getCoinsMarkets() */
  return (
    <main className="mt-7 mb-4 px-4 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Crypto Market Dashboard
        </h1>
        <p className="text-gray-400 mt-3 text-center">
          Top cryptocurrencies by market cap
        </p>
      </div>
      <div>
        <MarketSummaryCard
          label="Total Market Cap"
          value={mockGlobalMarketData.totalMarketCap}
          prefix="$"
        />
      </div>
      <div>
        <MarketSummaryCard
          label="Total Volume"
          value={mockGlobalMarketData.totalVolume}
          prefix="$"
        />
      </div>
      <div className="flex flex-col gap-4">
        {coins.map((coins) => {
          return <CoinCard key={coins.id} coin={coins} />;
        })}
      </div>
    </main>
  );
}
