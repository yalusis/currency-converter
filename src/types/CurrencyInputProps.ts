export interface CurrencyInputProps {
    amount: number;
    currency: string;
    currencies: string[];
    onAmountChange: (amount: number) => void;
    onCurrencyChange: (currency: string) => void;
  }