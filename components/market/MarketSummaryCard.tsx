import type { MarketSummaryCardProps } from "@/types/MarketSummaryCardProps";
import formatLargeNumber from "@/utils/formatMarketCap";

export default function MarketSummaryCard({
  label,
  value,
  prefix,
  suffix,
}: MarketSummaryCardProps) {
  return (
    <div className="flex justify-between">
      <p>{label}</p>
      <span>
        {prefix}
        {formatLargeNumber(value)}
        {suffix}
      </span>
    </div>
  );
}
