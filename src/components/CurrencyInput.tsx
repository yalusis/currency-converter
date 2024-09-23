import React, { ReactElement, useState, useEffect } from 'react';
import { CurrencyInputProps } from '../types/CurrencyInputProps';
import { flagMap } from '../constant/flagMap';

const CurrencyInput: React.FC<CurrencyInputProps> = ({ amount, currency, currencies, onAmountChange, onCurrencyChange }) => {
    const [flag, setFlag] = useState<ReactElement | null>(flagMap[currency] || null);

    useEffect(() => {
        setFlag(flagMap[currency] || null);
    }, [currency]);

    return (
        <div>
            <input
                type="number"
                value={amount}
                onChange={(e) => onAmountChange(parseFloat(e.target.value))}
            />
            <span className="flag">
                {flag}
            </span>
            <select
                value={currency}
                onChange={(e) => onCurrencyChange(e.target.value)}
            >
                {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CurrencyInput;

