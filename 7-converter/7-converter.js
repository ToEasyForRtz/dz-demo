function convertCurrency(amount, fromCurrency, toCurrency) {
  // Проверяем и конвертируем за один проход
  if (fromCurrency === "руб" && toCurrency === "$") {
    return amount / 97.5;
  }

  if (fromCurrency === "руб" && toCurrency === "€") {
    return amount / 105.3;
  }

  if (fromCurrency === "$" && toCurrency === "руб") {
    return amount * 97.5;
  }

  if (fromCurrency === "$" && toCurrency === "€") {
    return (amount * 97.5) / 105.3;
  }

  if (fromCurrency === "€" && toCurrency === "руб") {
    return amount * 105.3;
  }

  if (fromCurrency === "€" && toCurrency === "$") {
    return (amount * 105.3) / 97.5;
  }

  // Если валюты совпадают
  if (fromCurrency === toCurrency) {
    return amount;
  }

  // Во всех остальных случаях
  return null;
}
console.log(convertCurrency(1000, "руб", "$")); // 10.256410256410257
console.log(convertCurrency(100, "$", "€")); // 92.5925925925926
console.log(convertCurrency(50, "€", "$")); // 54.0
console.log(convertCurrency(100, "$", "руб")); // 9750
console.log(convertCurrency(100, "руб", "руб")); // 100
console.log(convertCurrency(100, "йена", "€")); // null
