// Formata número para exibição (1234.56 -> "1.234,56")
export const formatCurrency = (value: number): string => {
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

// Converte string formatada para número (1.234,56 -> 1234.56)
export const parseLocaleNumber = (value: string): number => {
  if (!value) return 0;
  const cleanValue = value.replace(/\./g, '').replace(',', '.');
  return Number(cleanValue);
};

// Formata input enquanto usuário digita (adiciona pontos e vírgula)
export const formatInputCurrency = (value: string): string => {
  // Remove tudo exceto números
  let numbers = value.replace(/\D/g, '');
  
  // Se não houver números, retorna string vazia
  if (!numbers) return '';
  
  // Garante que temos pelo menos 3 dígitos para formatar (incluindo centavos)
  numbers = numbers.padStart(3, '0');
  
  // Separa centavos
  const cents = numbers.slice(-2);
  const integers = numbers.slice(0, -2);
  
  // Remove zeros à esquerda dos inteiros
  const cleanIntegers = integers.replace(/^0+/, '') || '0';
  
  // Adiciona pontos para milhares
  const formattedIntegers = cleanIntegers.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  
  return `${formattedIntegers},${cents}`;
};