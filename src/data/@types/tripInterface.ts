import { PathInterface } from './pathInterface';

export interface TripInterface {
  destination: string;
  origin: string;
  path: PathInterface[];
  price: number;
}
