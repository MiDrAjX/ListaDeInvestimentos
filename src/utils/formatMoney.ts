export default function (value: number, precision = 2, separator = ',') {
  return value.toFixed(precision).replace('.', separator);
}
