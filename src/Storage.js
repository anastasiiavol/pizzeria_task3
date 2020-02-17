'use strict';

let pizzaArr = [];

let tomato = new Ingredient('tomato', 20, 15);
let mozzarella = new Ingredient('mozzarella', 30, 25);
let basil = new Ingredient('basil', 10, 20);
let garlic = new Ingredient('garlic', 20, 20);
let oregano = new Ingredient('oregano', 20, 25);
let beef = new Ingredient('beef', 200, 50);
let pepperoni = new Ingredient('pepperoni', 150, 50);
let onion = new Ingredient('onion', 30, 15);
let mushrooms = new Ingredient('mushrooms', 40, 25);
let sausage = new Ingredient('sausage', 200, 45);
let anchovies = new Ingredient('anchovies', 150, 55);
let herbs = new Ingredient('herbs', 20, 25);
let olives = new Ingredient('olives', 30, 30);
let chicken = new Ingredient('chicken', 150, 40);
let pepper = new Ingredient('pepper', 50, 25);
let cheese = new Ingredient('cheese', 200, 30);
let pineapple = new Ingredient('pineapple', 150, 35);

let ingredients = [
    tomato,
    mozzarella,
    basil,
    garlic,
    oregano,
    beef,
    pepperoni,
    onion,
    mushrooms,
    sausage,
    anchovies,
    herbs,
    olives,
    chicken,
    pepper,
    cheese,
    pineapple
];

let Margherita = new PizzaItem(
    'Margherita',
    [tomato, mozzarella, basil],
    'img/margherita.jpeg'
);

let Marinara = new PizzaItem(
    'Marinara',
    [tomato, garlic, oregano],
    'img/Marinara.jpeg'
);
let Chicago = new PizzaItem(
    'Chicago',
    [beef, pepperoni, onion, mushrooms],
    'img/chicago.jpeg'
);
let New_York_Style = new PizzaItem(
    'New York-Style',
    [tomato, mozzarella, sausage, mushrooms],
    'img/New_York_Style.jpeg'
);
let Sicilian = new PizzaItem(
    'Sicilian ',
    [tomato, onion, anchovies, herbs],
    'img/sicilian.jpeg'
);

let Greek = new PizzaItem(
    'Greek',
    [tomato, oregano, mozzarella, olives],
    'img/greek.jpeg'
);
let California = new PizzaItem(
    'California ',
    [tomato, chicken, pepper, olives],
    'img/california.jpeg'
);
let Detroit = new PizzaItem(
    'Detroit',
    [cheese, pepperoni, mushrooms, olives],
    'img/detroid.jpeg'
);
let St_Louis = new PizzaItem(
    'St. Louis',
    [cheese, tomato, oregano, herbs],
    'img/st_l.jpeg'
);
let New_Jersey = new PizzaItem(
    'New Jersey',
    [cheese, tomato, oregano, beef],
    'img/New_Jersey.jpeg'
);

let Calzone = new PizzaItem(
    'Calzone',
    [cheese, tomato, garlic, beef],
    'img/calzone.jpeg'
);
let Indian = new PizzaItem(
    'Indian',
    [cheese, oregano, garlic, herbs],
    'img/indian.jpeg'
);
let Mexican = new PizzaItem(
    'Mexican',
    [cheese, tomato, olives, herbs],
    'img/mexican.jpeg'
);
let Ukrainian = new PizzaItem(
    'Ukrainian',
    [cheese, tomato, mushrooms, chicken],
    'img/ukrainian.jpeg'
);
let Sweet = new PizzaItem(
    'Sweet',
    [cheese, tomato, pineapple, mozzarella],
    'img/sweet.jpeg'
);

pizzaArr.push(Margherita, Marinara, Chicago,
    New_York_Style, Sicilian, Greek,
    California, Detroit, St_Louis,
    New_Jersey, Calzone, Indian,
    Mexican, Ukrainian, Sweet);
