export interface SlideProps {
  isActive: boolean;
}

export interface ChartData {
  name: string;
  value: number;
  fill?: string;
}

export enum SlideId {
  COVER = 0,
  PROBLEM = 1,
  SOLUTION = 2,
  DEMO = 3,
  INTELLIGENCE = 4,
  ADMIN = 5,
  MARKET = 6,
  BUSINESS_MODEL = 7,
  TRACTION = 8,
  COMPETITION = 9,
  TEAM = 10,
  ASK = 11,
}
