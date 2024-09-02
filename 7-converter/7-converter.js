function conversationCurrency(sum, initialCurrency, targetCurrency) {
    switch (true) {
        case initialCurrency === 'RUB' && targetCurrency === 'USD':
            rateCurrency = 0.028;
            return sum * rateCurrency;
        case initialCurrency === 'USD' && targetCurrency === 'RUB':
            rateCurrency = 0.64;
            return sum / rateCurrency;
        case initialCurrency === 'RUB' && targetCurrency === 'EUR':
            rateCurrency = 1.10;
            return sum * rateCurrency; 
        case initialCurrency === 'EUR' && targetCurrency === 'RUB':
            rateCurrency = 1.17;
            return sum / rateCurrency; 
        default:
            return 'Валюта не принимается';
    }
}

console.log(conversationCurrency(2000, 'RUB', 'USD')); 
console.log(conversationCurrency(2000, 'USD', 'RUB'));
console.log(conversationCurrency(1500, 'RUB', 'EUR'));
console.log(conversationCurrency(1500, 'EUR', 'RUB'));
console.log(conversationCurrency(5700, 'VND', 'RUB'));