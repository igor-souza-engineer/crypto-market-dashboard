import type { Coin } from "@/types/coin";
import formatLargeNumber from "@/utils/formatMarketCap";

type CoinCardProps = {
  coin: Coin;
};

export default function CoinCard(props: CoinCardProps) {
  return (
    <div className="flex justify-between border border-gray-600 rounded-md shadow-lg shadow-white/10 px-5 py-5">
      <div className="flex gap-2">
        <span className="mt-1.5 text-xs font-semibold text-gray-400">
          #{props.coin.market_cap_rank}
        </span>
        <div>
          <div>
            <span className="text-xl font-bold">{props.coin.name}</span>
            <p className="text-sm font-semibold text-gray-400 uppercase">
              {props.coin.symbol}
            </p>
          </div>
          <div>
            <p className="text-sm mt-5 text-gray-400">Market Cap</p>
            <p className="text-base font-semibold">
              ${formatLargeNumber(props.coin.market_cap)}
            </p>
          </div>
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold mb-5 md:mb-5">
          {props.coin.current_price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
        <div className="grid grid-cols-[auto_auto] justify-end gap-x-3">
          <span className="text-sm font-medium text-gray-400">24h</span>

          <span
            className={`font-semibold ${
              props.coin.price_change_percentage_24h >= 0
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {props.coin.price_change_percentage_24h.toFixed(2)}%
          </span>
          <span className="text-sm font-medium text-gray-400">7d</span>
          <span
            className={`font-semibold ${
              props.coin.price_change_percentage_week >= 0
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {props.coin.price_change_percentage_week.toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  );
}
