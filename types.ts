export enum MessageRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  id: string;
  role: MessageRole;
  text: string;
  timestamp: Date;
  isError?: boolean;
}

export interface StockPoint {
  name: string;
  value: number;
  benchmark: number;
}

export interface PortfolioItem {
  asset: string;
  allocation: number;
  value: number;
  change: number;
}

export interface InsightCardProps {
  title: string;
  category: string;
  summary: string;
  sentiment: 'positive' | 'neutral' | 'negative';
}