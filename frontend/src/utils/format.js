const formatter = Intl.NumberFormat('pt-BR');

export function formatNumber(value) {
  return formatter.format(value);
}

export function formatPercentage(value) {
  const stringValue = value.toFixed(2);
  return stringValue.replace('.', ',') + '%';
}