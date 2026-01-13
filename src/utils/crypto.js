export function getTrendEmoji(percentChange) {
  if (percentChange > 0) return "📈";
  if (percentChange < 0) return "📉";
  return "➖";
}
