/*export default function formatMarketCap(value: number): string{
    if (value >= 1000000000000){
        return (value / 1000000000000).toFixed(2) + "T";
    }
    else if (value >= 1000000000){
        return (value / 1000000000).toFixed(2) + "B";
    }
    else if (value >= 1000000){
        return (value / 1000000).toFixed(2) + "M";
    }
    else if (value >= 1000){
        return (value / 1000).toFixed(2) + "K";
    }
        return value.toLocaleString();
}*/

export default function formatLargeNumber(value: number): string {
  const units = [
    { value: 1_000_000_000_000, suffix: "T" },
    { value: 1_000_000_000, suffix: "B" },
    { value: 1_000_000, suffix: "M" },
    { value: 1_000, suffix: "K" },
  ];

  for (const unit of units) {
    if (value >= unit.value) {
      return (value / unit.value).toFixed(2) + unit.suffix;
    }
  }

  return value.toLocaleString();
}
