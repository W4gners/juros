import React from 'react';
import CurrencyInput from './CurrencyInput';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'number' | 'currency';
  placeholder?: string;
  periodSelector?: React.ReactNode;
}

export default function InputField({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  periodSelector,
}: InputFieldProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">
        {label}
      </label>
      {periodSelector}
      {type === 'currency' ? (
        <CurrencyInput
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-gray-600 border-gray-500 rounded-lg p-2"
        />
      )}
    </div>
  );
}