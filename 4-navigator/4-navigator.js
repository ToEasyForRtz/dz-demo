// Координаты
const addressLat = 55.7558; // Широта адреса
const addressLong = 37.6173; // Долгота адреса
const positionLat = 55.7512; // Широта пользователя (близко к адресу)
const positionLong = 37.6178; // Долгота пользователя

// Разница в координатах (стороны воображаемого прямоугольника)
const diffLat = addressLat - positionLat; // Разница по широте
const diffLon = addressLong - positionLong; // Разница по долготе

// Коэффициенты перевода градусов в километры
// 1 градус широты ≈ 111.32 км всегда
// 1 градус долготы зависит от широты
const kmPerDegreeLat = 111.32;
const averageLat = (addressLat + positionLat) / 2;
const kmPerDegreeLon = Math.cos((averageLat * Math.PI) / 180) * 111.32;

// Переводим разницу в градусах в километры
const sideA = Math.abs(diffLat) * kmPerDegreeLat; // Вертикальная сторона
const sideB = Math.abs(diffLon) * kmPerDegreeLon; // Горизонтальная сторона

// Находим диагональ прямоугольника (расстояние по прямой)
const distance = Math.sqrt(sideA * sideA + sideB * sideB);

// Выводим результат
console.log("Разница по широте: " + diffLat.toFixed(6) + "° (" + sideA.toFixed(2) + " км)");
console.log("Разница по долготе: " + diffLon.toFixed(6) + "° (" + sideB.toFixed(2) + " км)");
console.log("Расстояние: " + distance.toFixed(2) + " км");
