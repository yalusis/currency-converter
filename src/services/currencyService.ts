import axios from 'axios';
import { Rates } from '../types/Rates';

export const getExchangeRates = async (): Promise<Rates> => {
  try {
    const response = await axios.get('https://api.exchangerate-api.com/v4/latest/UAH');
    return response.data.rates;
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    throw new Error('Failed to fetch exchange rates');
  }
};
