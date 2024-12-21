import React from 'react';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
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
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-gray-600 border-gray-500 rounded-lg p-2"
      />
    </div>
  );
}