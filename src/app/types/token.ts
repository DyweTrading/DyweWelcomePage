export interface IToken {
  symbol: string;
  icon: string;
  volume: number | string;
  price: number | string;
  percentChange: number | string;

  lastPrice?: string;
  priceChangePercent?: string;
  subIcon?: string;
}
