import React from 'react';
import { formatInputCurrency } from '../../utils/numberFormat';

interface CurrencyInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function CurrencyInput({
  value,
  onChange,
  placeholder = '0,00',
  className = ''
}: CurrencyInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/\D/g, '');
    if (newValue === '') {
      onChange('');
      return;
    }
    
    // Remove leading zeros
    const cleanValue = newValue.replace(/^0+/, '');
    if (cleanValue === '') {
      onChange('');
      return;
    }
    
    onChange(formatInputCurrency(cleanValue));
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={`w-full bg-gray-600 border-gray-500 rounded-lg p-2 ${className}`}
    />
  );
}