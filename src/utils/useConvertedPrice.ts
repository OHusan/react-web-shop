const USD_BAM = 1.77;
const USD_EUR = 0.9;

export default (value: string, price: number) => {
  switch (value) {
    case 'BAM':
      return `${price * USD_BAM} KM`;
    case 'EUR':
      return `${price * USD_EUR} €`;
    default:
      return `$ ${price}`;
  }
};
