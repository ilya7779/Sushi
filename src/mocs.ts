// import {Model, Server} from "miragejs";

import {
  philadelphiaSalmon, philadelphiaWithSalmonLight, philadelphiaEel, philadelphiaShrimp,
  philadelphiaWithSalmonAndShrimp, philadelphiaWithCheese, philadelphiaWithTuna, californiaSalmon,
  californiaEel, californiaTuna, californiaWithShrimp, vegan, musselMeat, crabRoll, bonitoSalmon, bonitoTuna,
  bonitoBabyOctopus, bonitoShrimp, greenDragon, blackDragon, redDragon, tempuraRollWithShrimp, tempuraRollWithSalmon,
  tempuraRollWithMusselMeat, tempuraRollWithEel, tempuraRollWithCrabSticks, canadaCheese, hayashiRoll,
  friendShrimpInPanko, salmon, eel, tuna, shrimp, octopus, mussel, avocado, cucumber, cheese, setOne, setTwo, setThree,
  setFour, setTempura, withSalmon, withTuna, withEel, withShrimpTempura, veganSushi, gunkanWithSalmonAndAvocado,
  gunkanWithEel, gunkanWithTunaAndCucumber, gunkanWithShrimp, musselTempura, shrimpTempura, soupPhiladelphia,
  saladWithChuka
} from "./assets";

export const classicalRolls = [
  { id: 1, poster: `${philadelphiaSalmon}`, title: 'Филадельфия с лососем',
    composition: 'Состав: рис, нори, сыр, авокадо, лосось', price: '24,9 GEL' },
  { id: 2, poster: `${philadelphiaWithSalmonLight}`, title: 'Филадельфия с лососем лайт',
    composition: 'Состав: рис, нори, сыр, авокадо, лосось, кунжут', price: '20,9 GEL' },
  { id: 3, poster: `${philadelphiaEel}`, title: 'Филадельфия с угрём',
    composition: 'Состав: рис, нори, сыр, авокадо, угорь, унаги соус, кунжут', price:'27,9 GEL' },
  { id: 4, poster: `${philadelphiaShrimp}`, title: 'Филадельфия с креветками',
    composition: 'Состав: рис, нори, сыр, авокадо, креветки, спайси соус, кунжут', price: '24,9 GEL' },
  { id: 5, poster: `${philadelphiaWithSalmonAndShrimp}`, title: 'Филадельфия с лососем и креветкой',
    composition: 'Состав: рис, нори, сыр, авокадо, креветки, лосось', price: '29,9 GEL' },
  { id: 6, poster: `${philadelphiaWithCheese}`, title: 'Филадельфия с сыром',
    composition: 'Состав: рис, нори, сыр, соус унаги, кунжут', price: '19,9 GEL' },
  { id: 7, poster: `${philadelphiaWithTuna}`, title: 'Филадельфия с тунцом',
    composition: 'Состав: рис, нори, тунец, сыр, авокадо, соус унаги, кунжут', price: '24,9 GEL' },
  { id: 8, poster: `${californiaSalmon}`, title: 'Калифорния с лососем',
    composition: 'Состав: рис, нори, огурец, икра тобико, спайси соус, лосось', price: '25,9 GEL' },
  { id: 9, poster: `${californiaEel}`, title: 'Калифорния с угрём',
    composition: 'Состав: рис, нори, огурец, икра тобико, спайси соус, угорь', price: '29,9 GEL' },
  { id: 10, poster: `${californiaTuna}`, title: 'Калифорния с тунцом',
    composition: 'Состав: рис, нори, огурец, икра тобико, спайси соус, тунец', price: '29,9 GEL' },
  { id: 11, poster: `${californiaWithShrimp}`, title: 'Калифорния с креветкой',
    composition: 'Состав: креветка, огурец, икра масаго, спайси соус', price: '26,9 GEL' },
  { id: 12, poster: `${vegan}`, title: 'Веганский',
    composition: 'Состав: рис, нори, огурец, авокадо, сладкий перец, листья салата', price: '19,9 GEL' },
  { id: 13, poster: `${musselMeat}`, title: 'С мясом мидий',
    composition: 'Состав: рис, нори, сыр, огурец, мясо мидий, спайси соус', price: '23,9 GEL' },
  { id: 14, poster: `${crabRoll}`, title: 'Крабовый ролл',
    composition: 'Состав: рис, нори, огурец, соус унаги, спайси соус, крабовые палочки',
    price: '20,9 GEL' },
  { id: 15, poster: `${bonitoSalmon}`, title: 'Бонито с лососем',
    composition: 'Состав: рис, нори, сыр, огурец, соус кимчи, соус унаги, лосось, стружка из тунца', price: '27,9 GEL' },
  { id: 16, poster: `${bonitoTuna}`, title: 'Бонито с тунцом',
    composition: 'Состав: рис, нори, сыр, огурец, соус кимчи, соус унаги, тунец, стружка из тунца', price: '29,9 GEL' },
  { id: 17, poster: `${bonitoBabyOctopus}`, title: 'Бонито baby c осьминогом',
    composition: 'Состав: рис, нори, сыр, огурец, соус кимчи, соус унаги, осьминог, стружка из тунца', price: '27,9 GEL' },
  { id: 18, poster: `${bonitoShrimp}`, title: 'Бонито с креветкой',
    composition: 'Состав: рис, нори, сыр, огурец, соус кимчи, соус унаги, креветка, стружка из тунца', price: '28,9 GEL' },
  { id: 19, poster: `${greenDragon}`, title: 'Зелёный Дракон',
    composition: 'Состав: сыр, угорь, авокадо, икра масаго, огурец, соус унаги, кунжут', price: '29,9 GEL' },
  { id: 20, poster: `${blackDragon}`, title: 'Чёрный Дракон',
    composition: 'Состав: сыр, лосось , угорь, авокадо, икра тобико, соус унаги, кунжут', price: '32,9 GEL' },
  { id: 21, poster: `${redDragon}`, title: 'Красный Дракон',
    composition: 'Состав: рис, нори, сыр, огурец, лосось, угорь, икра тобико, соус унаги, кунжут', price: '32,9 GEL' },
  { id: 22, poster: `${canadaCheese}`, title: 'Канадский Чизу',
    composition: 'Состав: сыр, угорь, авокадо, креветка, икра тобико, соус унаги, кунжут', price: '30,9 GEL' },
  { id: 23, poster: `${hayashiRoll}`, title: 'Хаяши ролл',
    composition: 'Состав: рис, нори, сыр, хаяши (чука)', price: '20,9 GEL' },
  { id: 24, poster: `${friendShrimpInPanko}`, title: 'Жаренная креветка в панко',
    composition: 'Состав: рис, нори, сыр, жаренная креветка, соус унаги, икра тобико, кунжут', price: '29,9 GEL' },
];

export const tempuraRolls = [
  { id: 25, poster: `${tempuraRollWithShrimp}`, title: 'Тёплый ролл с креветкой',
    composition: 'Состав: рис, нори, сыр, огурец, креветка, соус унаги, спайси соус, темпура', price: '27,9 GEL' },
  { id: 26, poster: `${tempuraRollWithSalmon}`, title: 'Тёплый ролл с лососем',
    composition: 'Состав: рис, нори, сыр, огурец, лосось, соус унаги, спайси соус, темпура', price: '24,9 GEL' },
  { id: 27, poster: `${tempuraRollWithMusselMeat}`, title: 'Тёплый ролл с мясом мидий',
    composition: 'Состав: рис, сыр, огурец, мясо мидий, соус унаги, спайси соус, темпура', price: '24,9 GEL' },
  { id: 28, poster: `${tempuraRollWithEel}`, title: 'Тёплый ролл с угрём',
    composition: 'Состав: рис, нори, сыр, огурец, угорь, соус унаги, спайси соус, темпура', price: '29,9 GEL' },
  { id: 29, poster: `${tempuraRollWithCrabSticks}`, title: 'Тёплый ролл с крабовими палочками',
    composition: 'Состав: рис, нори, сыр, огурец, крабовые палочки, соус унаги, спайси соус, темпура', price: '23,9 GEL' },
];

export const makiRolls = [
  { id: 30, poster: `${salmon}`, title: 'Лосось', composition: 'Состав: рис, нори, лосось', price: '11,9 GEL' },
  { id: 31, poster: `${eel}`, title: 'Угорь', composition: 'Состав: рис, нори, угорь', price: '14,9 GEL' },
  { id: 32, poster: `${tuna}`, title: 'Тунец', composition: 'Состав: рис, нори, тунец', price: '14,9 GEL' },
  { id: 33, poster: `${shrimp}`, title: 'Креветка', composition: 'Состав: рис, нори, креветка', price: '14,9 GEL' },
  { id: 34, poster: `${octopus}`, title: 'Осьминог', composition: 'Состав: рис, нори, осьминог', price: '13,9 GEL' },
  { id: 35, poster: `${mussel}`, title: 'Мидии', composition: 'Состав: рис, нори, мидии', price: '9,9 GEL' },
  { id: 36, poster: `${avocado}`, title: 'Авокадо', composition: 'Состав: рис, нори, авокадо', price: '7,9 GEL' },
  { id: 37, poster: `${cucumber}`, title: 'Огурец', composition: 'Состав: рис, нори, огурец', price: '6,9 GEL' },
  { id: 38, poster: `${cheese}`, title: 'Сыр', composition: 'Состав: рис, нори, сыр', price: '8,9 GEL' },
];

export const sets = [
  { id: 39, poster: `${setOne}`, title: '1. Set',
    composition: 'Состав: Philadelphia Shrimp Roll, Roll with Mussel Meat, Crab Roll, Vegan Roll,' +
      ' Tempura Roll with Salmon, Maki Cheese, Maki Cucumber, Maki Shrimp, Maki Salmon, 64 pcs', price: '149,9 GEL' },
  { id: 40, poster: `${setTwo}`, title: '2. Set',
    composition: 'Состав: Roll California Eel, Roll California Salmon, Bonito Tuna, Tempura Roll with Mussel Meat,' +
      ' Sushi with Salmon (2 s.), Maki Cheese, 40 pcs', price: '113,9 GEL' },
  { id: 41, poster: `${setThree}`, title: '3. Set',
    composition: 'Состав: Tempura Salmon Roll, Philadelphia Shrimp Roll, Mussel Meat Maki, Cheese Maki,Cucumber Maki,' +
      ' Gunkan Salmon (2 s.), 36 pcs', price: '82,9 GEL' },
  { id: 42, poster: `${setFour}`, title: '4. Set',
    composition: 'Состав: Maki Shrimp, Maki Salmon, Maki Eel, Maki Cheese, Maki Cucumber, 30 pcs', price: '51,9 GEL' },
  { id: 43, poster: `${setTempura}`, title:'Tempura Set',
    composition: 'Состав: Tempura Roll with Shrimp, Tempura Roll with Salmon, Tempura Roll with Mussel Meat, ' +
      'Tempura Roll with Eel, Tempura Mussels, 32 pcs', price: '114,9 GEL' },
];

export const sushi = [
  { id: 44, poster: `${withSalmon}`, title: 'С лососем', composition: 'Состав: рис, лосось', price:'3,9 GEL' },
  { id: 45, poster: `${withTuna}`, title: 'С тунцом', composition: 'Состав: рис, тунец', price: '5,9 GEL' },
  { id: 46, poster: `${withEel}`, title: 'С угрём', composition: 'Состав: рис, нори, угорь', price: '6,9 GEL' },
  { id: 47, poster: `${withShrimpTempura}`, title: 'С креветкой Темпура', composition: 'Состав: рис, нори, креветка темпура', price: '5,9 GEL' },
  { id: 48, poster: `${veganSushi}`, title: 'Веганский', composition: 'Состав: рис, нори, авокадо', price: '3,9 GEL' },
];

export const gunkans = [
  { id: 49, poster: `${gunkanWithSalmonAndAvocado}`, title: 'Гункан с лососем и авокадо',
    composition: 'Состав: рис, нори, лосось, авокадо, японский майонез, икра тобико', price: '5,9 GEL' },
  { id: 50, poster: `${gunkanWithEel}`, title: 'Гункан с угрём',
    composition: 'Состав: рис, нори, японским майонезом, икра тобико', price: '7,9 GEL' },
  { id: 51, poster: `${gunkanWithTunaAndCucumber}`, title: 'Гункан с  тунцом и огурцом',
    composition: 'Состав: рис, нори, тунец, огурец, майонез', price: '7,9 GEL' },
  { id: 52, poster: `${gunkanWithShrimp}`, title: 'Гункан с  с креветкой',
    composition: 'Состав: рис, нори, креветка, авокадо, майонез, кунжут', price: '5,9 GEL' },
];

export const others = [
  { id: 53, poster: `${musselTempura}`, title: 'Темпура мидии',
    composition: 'Состав: темпура мидии', price: '18,9 GEL' },
  { id: 54, poster: `${shrimpTempura}`, title: 'Темпура креветки',
    composition: 'Состав: темпура креветки', price: '19,9 GEL' },
  { id: 55, poster: `${soupPhiladelphia}`, title: 'Суп Филадельфия',
    composition: 'Состав: лосось, креветки, мидии, лук-порей', price: '13,9 GEL' },
  { id: 56, poster: `${saladWithChuka}`, title: 'Салат с чукой',
    composition: '', price: '8,9 GEL' },
];

export const snacks = [
  { id: 57, poster: `${musselTempura}`, title: 'Темпура мидии',
    composition: 'Состав: темпура мидии', price: '18,9 GEL' },
  { id: 58, poster: `${shrimpTempura}`, title: 'Темпура креветки',
    composition: 'Состав: темпура креветки', price: '19,9 GEL' },
  { id: 70, poster: `${shrimpTempura}`, title: 'Картофель фри',
    composition: 'Состав: картофель фри', price: '5 GEL' },
  { id: 71, poster: `${shrimpTempura}`, title: 'Картофель по-мексикански',
    composition: 'Состав: картофель по-мексикански', price: '6 GEL' },
  // { id: 72, poster: `${shrimpTempura}`, title: 'Куриные крылышки',
  //   composition: 'Состав: куриные крылышки', price: '12 GEL' },
  { id: 73, poster: `${shrimpTempura}`, title: 'Луковые кольца',
    composition: 'Состав: Луковые кольца', price: '8 GEL' },
];


export const pizzas = [
  { id: 59, poster: `${musselTempura}`, title: 'Маргарита',
    composition: 'Состав: моцарелла, томатный соус, оливковое масло, помидор', price: '17 GEL' },
  { id: 60, poster: `${shrimpTempura}`, title: 'Цезарь',
    composition: 'Состав: куриная грудка, моцарелла, пармезан, листья салата, помидоры чери, соус цезарь', price: '20 GEL' },
  { id: 61, poster: `${shrimpTempura}`, title: 'Пеперони',
    composition: 'Состав: моцарелла, сырокопчёная колбаса, томатный соус', price: '20 GEL' },
  // { id: 62, poster: `${shrimpTempura}`, title: 'С прошутто',
  //   composition: 'Состав: моцарелла, прошутто, руккола, пармезан', price: '20 GEL' },
  { id: 63, poster: `${shrimpTempura}`, title: 'Четыре сыра',
    composition: 'Состав: моцарелла, элементаль, дор-блю, пармезан', price: '20 GEL' },
  // { id: 64, poster: `${shrimpTempura}`, title: 'Баварская',
  //   composition: 'Состав: колбаски копчёные, пеперони, сыр, маринованый огурец', price: '20 GEL' },
  { id: 65, poster: `${shrimpTempura}`, title: 'Гавайская',
    composition: 'Состав: томатный соус, моцарелла, ананасы, ветчина', price: '20 GEL' },
  // { id: 66, poster: `${shrimpTempura}`, title: 'Мясная',
  //   composition: 'Состав: мясной фарш, помидоры, лук репчатый, сыр орегано', price: '18 GEL' },
  // { id: 67, poster: `${shrimpTempura}`, title: 'Карбонара',
  //   composition: 'Состав: бекон, моцарелла, яйцо, сливки', price: '14 GEL' },
];

export const salads = [
  // { id: 100, poster: `${musselTempura}`, title: 'Цезарь с копчённой курицей',
  //   composition: '', price: '14 GEL' },
  // { id: 101, poster: `${musselTempura}`, title: 'С баклажанами по-корейски',
  //   composition: '', price: '9 GEL' },
  { id: 102, poster: `${musselTempura}`, title: 'Салат с чукой',
    composition: '', price: '12 GEL' },
  // { id: 103, poster: `${musselTempura}`, title: 'Цезарь с креветками',
  //   composition: '', price: '18 GEL' },
  // { id: 104, poster: `${musselTempura}`, title: 'Морковь по-корейски',
  //   composition: '', price: '8 GEL' },
  // { id: 105, poster: `${musselTempura}`, title: 'Кукси по-корейски',
  //   composition: '', price: '14 GEL' },
];

export const vienneseWaffles = [
  { id: 106, poster: `${musselTempura}`, title: 'С шоколадом и орехами',
     composition: '', price: '10 GEL' },
  { id: 107, poster: `${musselTempura}`, title: 'Со сгущёнкой и орехами',
    composition: '', price: '10 GEL' },
  { id: 108, poster: `${musselTempura}`, title: 'Мороженое с ягодами',
    composition: '', price: '10 GEL' },
  { id: 109, poster: `${musselTempura}`, title: 'С яйцом пашот',
    composition: '', price: '12 GEL' },
  { id: 110, poster: `${musselTempura}`, title: 'С лососем',
    composition: '', price: '16 GEL' },
];

export const khachapuris = [
  { id: 111, poster: `${musselTempura}`, title: 'Хачапури по Аджарски',
    composition: '', price: '12 GEL' },
  { id: 112, poster: `${musselTempura}`, title: 'Хачапури Мегрули',
    composition: '', price: '14 GEL' },
  { id: 113, poster: `${musselTempura}`, title: 'Хачапури Имерули',
    composition: '', price: '12 GEL' },
];

export const coffees = [
  { id: 111, title: 'Американо', price: '3.5 GEL' },
  { id: 112, title: 'Эспрессо', price: '3.5 GEL' },
  { id: 113, title: 'Капучино', price: '4 GEL' },
  { id: 114, title: 'Латте', price: '4.5 GEL' },
  { id: 115, title: 'Мокачино', price: '6 GEL' },
  { id: 116, title: 'Раф', price: '7 GEL' },
  { id: 117, title: 'Какао', price: '5 GEL' },
  { id: 118, title: 'Американо с молоком', price: '4 GEL' },
  { id: 119, title: 'Американо с шоколадом', price: '5 GEL' },
  { id: 120, title: 'Американо с коньяком', price: '6 GEL' },
  { id: 121, title: 'Американо с Bellis', price: '8.5 GEL' },
  { id: 122, title: 'Чай чёрный, зелёныйё, малина', price: '5 GEL' },
  { id: 123, title: 'Крафтовый чай', price: '8 GEL' },
];

export const coldDrinks = [
  { id: 124, poster: '', title: 'Кола', price: '3 GEL' },
  { id: 125, poster: '', title: 'Вода без газа Bakhmaro', price: '3 GEL' },
  { id: 126, poster: '', title: 'Вода без газа Nabeghlavi', price: '3 GEL' },
  { id: 127, poster: '', title: 'Red bull', price: '6 GEL' },
  { id: 128, poster: '', title: 'Натахтари', price: '3 GEL' },
];

export const otherAlcohols = [
  { id: 129, poster: '', title: 'Коньяк Sarajishvili 3 * 100ml', price: '8.5 GEL' },
  { id: 130, poster: '', title: 'Коньяк Sarajishvili 5 * 100ml', price: '11.5 GEL' },
  { id: 131, poster: '', title: 'Чача 100ml', price: '6.5 GEL' },
  { id: 132, poster: '', title: 'Шампанское White Brut', price: '22 GEL' },
  { id: 133, poster: '', title: 'Ром Bacardi 100ml', price: '15 GEL' },
  { id: 134, poster: '', title: 'Ликёр Baileys 100ml', price: '14 GEL' },
  { id: 135, poster: '', title: 'Джин 100ml', price: '15 GEL' },
  { id: 136, poster: '', title: 'Текила 100ml', price: '14 GEL' },
  { id: 137, poster: '', title: 'Виски Ballantiprice', price: '11 GEL' },
  { id: 138, poster: '', title: 'Виски Jack Daniprice', price: '21 GEL' },
  { id: 139, poster: '', title: 'Виски Jameprice', price: '17 GEL' },
];

export const coctails = [
  { id: 140, poster: `${musselTempura}`, title: 'Jungle Juice',
    composition: 'gin, pisan, lemon fresh, orange juice', price: '12 GEL' },
  { id: 141, poster: `${musselTempura}`, title: 'Night Gin',
    composition: 'gin, lemon fresh, crema de classic', price: '11 GEL' },
  { id: 142, poster: `${musselTempura}`, title: 'Godfather',
    composition: 'whiskey, creme de cafe', price: '13 GEL' },
  { id: 143, poster: `${musselTempura}`, title: 'Aperol Spritz',
    composition: 'brut champagne, soda', price: '17 GEL' },
  { id: 144, poster: `${musselTempura}`, title: 'Tequila Sunrise',
    composition: 'tequila, grenadine, orange juice', price: '13 GEL' },
  { id: 145, poster: `${musselTempura}`, title: 'Pina Colada',
    composition: 'light rum, ice cream, coconut liqueur, pineapple juice', price: '19 GEL' },
  { id: 146, poster: `${musselTempura}`, title: 'Hawaii',
    composition: 'light rum, curacao blue, coconut liqueur, pineapple juice', price: '13 GEL' },
  { id: 147, poster: `${musselTempura}`, title: 'Long Ice Tea',
    composition: 'vodka, tequila, gin, cola, lemon juice, light rum, triple sec', price: '19 GEL' },
  { id: 148, poster: `${musselTempura}`, title: 'Blue Laggon',
    composition: 'rum, sprite, curacao blue, lemon fresh', price: '19 GEL' },
  { id: 149, poster: `${musselTempura}`, title: 'Mohito',
    composition: 'rum, mint, lime, sprite', price: '15 GEL' },
  { id: 150, poster: `${musselTempura}`, title: 'Bahama mama',
    composition: 'liquor, coconut, light rum, pineapple juice, orange juice', price: '15 GEL' },
  { id: 151, poster: `${musselTempura}`, title: 'Tropical Dream',
    composition: 'banana, melon, pisan, light rum, coconut liqueur, pineapple juice, orange juice', price: '15 GEL' },
];

export const beers = [
  { id: 152, title: 'Karva 0.5', price: '5 GEL' },
  { id: 153, title: 'Leffe 0.33', price: '8 GEL' },
  { id: 154, title: 'Stella Artois 0.33', price: '6 GEL' },
  { id: 155, title: 'Corona Extra 0.33', price: '7 GEL' },
  { id: 156, title: 'Efes 0.33', price: '4 GEL' },
  { id: 157, title: 'Имбирное пиво б/а', price: '5 GEL' },
  { id: 158, title: 'Разливное Taati 0.5', price: '6 GEL' },
  { id: 159, title: 'Разливное Staropramen 0.5', price: '5 GEL' },
];

export const wines = [
  { id: 160, title: 'Mtsvane-Kisi 0.7l', price: '30 GEL' },
  { id: 161, title: 'Mukuzani 0.7l', price: '37 GEL' },
  { id: 162, title: 'Saperavi', price: '25 GEL' },
  { id: 163, title: 'Kindzmarauli', price: '37 GEL' },
  { id: 164, title: 'Tsinandali', price: '20 GEL' },
];

// export const sauces = [
//   { id: 51, poster: `${ginger}`, title: 'Имбирь', composition: '', price: '2 GEL' },
//   { id: 52, poster: `${soySauce}`, title: 'Соевый соус', composition: '', price: '2 GEL' },
//   { id: 53, poster: `${spicySauce}`, title: 'Острый соус', composition: '', price: '3 GEL' },
//   { id: 54, poster: `${cheeseSauce}`, title: 'Сырный соус', composition: '', price: '3 GEL' },
//   { id: 55, poster: `${sweetChilli}`, title: 'Сладкий чили', composition: '', price: '3 GEL' },
//   { id: 56, poster: `${wasabi}`, title: 'Вассаби', composition: '', price: '1 GEL' },
//   { id: 57, poster: `${sushiSticks}`, title: 'Суши палочки', composition: '', price: '2 GEL' },
//   { id: 58, poster: `${unagiSauce}`, title: 'Соус Унаги', composition: '', price: '3 GEL' },
// ];


// const server = {
//   models: {
//     event: Model
//   },
//
//   seeds(server) {
//     events.forEach((event) => {
//       server.create("event", event);
//     });
//   },


//   routes() {
//     this.namespace = "api";
//
//     this.get("/events", (schema) => {
//       return schema.events.all();
//     });
//
//     this.get("/events/:id", (schema, request) => {
//       const id = request.params.id;
//       return schema.events.find(id);
//     });
//   }
// };
//
// new Server(server);