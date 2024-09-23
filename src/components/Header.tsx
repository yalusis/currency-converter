import React from 'react';

type ExchangeRatesProps = {
  rates: { [key: string]: number };
};

const Header: React.FC<ExchangeRatesProps> = ({ rates }) => {
  const uahToUsd = (1 / rates['USD']).toFixed(2);
  const uahToEur = (1 / rates['EUR']).toFixed(2);

  return (
    <header className="header">
      <h1>Currency Converter</h1>
      <div className="exchange-rates">
        <p>USD: {uahToUsd}</p>
        <p>EUR: {uahToEur}</p>
      </div>
    </header>
  );
};

export default Header;

