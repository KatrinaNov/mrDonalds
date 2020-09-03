export const totalPriceItems = order => {
  const countTopping = order.topping && order.topping.filter(item => item.checked).length;
  const priceTopping = order.price * 0.1 * countTopping || 0;

  return (order.price + priceTopping) * order.count;
};

export const formatCurrency = price => price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});