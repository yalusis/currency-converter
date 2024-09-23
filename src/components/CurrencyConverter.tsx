import React, { useState, useEffect } from 'react';
import CurrencyInput from './CurrencyInput';
import Header from './Header';
import { getExchangeRates } from '../services/currencyService';
import { Rates } from '../types/Rates';

const CurrencyConverter: React.FC = () => {
  const [rates, setRates] = useState<Rates>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [amount1, setAmount1] = useState<number>(1);
  const [currency1, setCurrency1] = useState<string>('USD');
  const [amount2, setAmount2] = useState<number>(1);
  const [currency2, setCurrency2] = useState<string>('USD');
  const currencies: string[] = ['USD', 'EUR', 'UAH'];

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const ratesData = await getExchangeRates();
        setRates(ratesData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchRates();
  }, []);

  const convert = (fromCurrency: string, toCurrency: string, amount: number): string => {
    if (!rates[fromCurrency] || !rates[toCurrency]) return '0';
    const convertedAmount = (amount / rates[fromCurrency]) * rates[toCurrency];
    console.log(convertedAmount);
    return convertedAmount.toFixed(2);
  };

  const handleAmount1Change = (amount: number) => {
    setAmount1(amount);
    setAmount2(parseFloat(convert(currency1, currency2, amount)));
  };

  const handleCurrency1Change = (currency: string) => {
    setCurrency1(currency);
    setAmount2(parseFloat(convert(currency, currency2, amount1)));
  };

  const handleAmount2Change = (amount: number) => {
    setAmount2(amount);
    setAmount1(parseFloat(convert(currency2, currency1, amount)));
  };

  const handleCurrency2Change = (currency: string) => {
    setCurrency2(currency);
    setAmount1(parseFloat(convert(currency, currency1, amount2)));
  };

  if (loading) {
    return <p>Loading exchange rates...</p>;
  }

  return (
    <div className="currency-converter">
      <Header rates={rates} />

      <div className="main-section">
        <div className="converter-section">
          <CurrencyInput
            amount={amount1}
            currency={currency1}
            currencies={currencies}
            onAmountChange={handleAmount1Change}
            onCurrencyChange={handleCurrency1Change}
          />
          <CurrencyInput
            amount={amount2}
            currency={currency2}
            currencies={currencies}
            onAmountChange={handleAmount2Change}
            onCurrencyChange={handleCurrency2Change}
          />
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
