export const totalPriceItems = order => order.price * order.count;

export const formatCurrency = price => price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});