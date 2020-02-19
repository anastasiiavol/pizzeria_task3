'use strict';

const ingredientsJson = '[\n' +
    '    {\n' +
    '      "name": "tomato",\n' +
    '      "calories": 20,\n' +
    '      "price": 15\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "mozzarella",\n' +
    '      "calories": 30,\n' +
    '      "price": 25\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "basil",\n' +
    '      "calories": 10,\n' +
    '      "price": 20\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "garlic",\n' +
    '      "calories": 20,\n' +
    '      "price": 20\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "oregano",\n' +
    '      "calories": 20,\n' +
    '      "price": 25\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "beef",\n' +
    '      "calories": 200,\n' +
    '      "price": 50\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "pepperoni",\n' +
    '      "calories": 150,\n' +
    '      "price": 50\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "onion",\n' +
    '      "calories": 30,\n' +
    '      "price": 15\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "mushrooms",\n' +
    '      "calories": 40,\n' +
    '      "price": 25\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "sausage",\n' +
    '      "calories": 200,\n' +
    '      "price": 45\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "anchovies",\n' +
    '      "calories": 150,\n' +
    '      "price": 55\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "herbs",\n' +
    '      "calories": 20,\n' +
    '      "price": 25\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "olives",\n' +
    '      "calories": 30,\n' +
    '      "price": 30\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "chicken",\n' +
    '      "calories": 150,\n' +
    '      "price": 40\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "pepper",\n' +
    '      "calories": 50,\n' +
    '      "price": 25\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "cheese",\n' +
    '      "calories": 200,\n' +
    '      "price": 30\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "pineapple",\n' +
    '      "calories": 150,\n' +
    '      "price": 35\n' +
    '    }\n' +
    '  ]';

const pizzasJson = '[\n' +
    '    {\n' +
    '      "name": "Margherita",\n' +
    '      "ingredients": [\n' +
    '        {\n' +
    '          "name": "tomato",\n' +
    '          "calories": 20,\n' +
    '          "price": 15\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "mozzarella",\n' +
    '          "calories": 30,\n' +
    '          "price": 25\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "basil",\n' +
    '          "calories": 10,\n' +
    '          "price": 20\n' +
    '        }\n' +
    '      ],\n' +
    '      "removedIngredients": [],\n' +
    '      "picture": "img/margherita.jpeg"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "Marinara",\n' +
    '      "ingredients": [\n' +
    '        {\n' +
    '          "name": "tomato",\n' +
    '          "calories": 20,\n' +
    '          "price": 15\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "garlic",\n' +
    '          "calories": 20,\n' +
    '          "price": 20\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "oregano",\n' +
    '          "calories": 20,\n' +
    '          "price": 25\n' +
    '        }\n' +
    '      ],\n' +
    '      "removedIngredients": [],\n' +
    '      "picture": "img/Marinara.jpeg"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "Chicago",\n' +
    '      "ingredients": [\n' +
    '        {\n' +
    '          "name": "beef",\n' +
    '          "calories": 200,\n' +
    '          "price": 50\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "pepperoni",\n' +
    '          "calories": 150,\n' +
    '          "price": 50\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "onion",\n' +
    '          "calories": 30,\n' +
    '          "price": 15\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "mushrooms",\n' +
    '          "calories": 40,\n' +
    '          "price": 25\n' +
    '        }\n' +
    '      ],\n' +
    '      "removedIngredients": [],\n' +
    '      "picture": "img/chicago.jpeg"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "New York-Style",\n' +
    '      "ingredients": [\n' +
    '        {\n' +
    '          "name": "tomato",\n' +
    '          "calories": 20,\n' +
    '          "price": 15\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "mozzarella",\n' +
    '          "calories": 30,\n' +
    '          "price": 25\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "sausage",\n' +
    '          "calories": 200,\n' +
    '          "price": 45\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "mushrooms",\n' +
    '          "calories": 40,\n' +
    '          "price": 25\n' +
    '        }\n' +
    '      ],\n' +
    '      "removedIngredients": [],\n' +
    '      "picture": "img/New_York_Style.jpeg"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "Sicilian ",\n' +
    '      "ingredients": [\n' +
    '        {\n' +
    '          "name": "tomato",\n' +
    '          "calories": 20,\n' +
    '          "price": 15\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "onion",\n' +
    '          "calories": 30,\n' +
    '          "price": 15\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "anchovies",\n' +
    '          "calories": 150,\n' +
    '          "price": 55\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "herbs",\n' +
    '          "calories": 20,\n' +
    '          "price": 25\n' +
    '        }\n' +
    '      ],\n' +
    '      "removedIngredients": [],\n' +
    '      "picture": "img/sicilian.jpeg"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "Greek",\n' +
    '      "ingredients": [\n' +
    '        {\n' +
    '          "name": "tomato",\n' +
    '          "calories": 20,\n' +
    '          "price": 15\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "oregano",\n' +
    '          "calories": 20,\n' +
    '          "price": 25\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "mozzarella",\n' +
    '          "calories": 30,\n' +
    '          "price": 25\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "olives",\n' +
    '          "calories": 30,\n' +
    '          "price": 30\n' +
    '        }\n' +
    '      ],\n' +
    '      "removedIngredients": [],\n' +
    '      "picture": "img/greek.jpeg"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "California ",\n' +
    '      "ingredients": [\n' +
    '        {\n' +
    '          "name": "tomato",\n' +
    '          "calories": 20,\n' +
    '          "price": 15\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "chicken",\n' +
    '          "calories": 150,\n' +
    '          "price": 40\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "pepper",\n' +
    '          "calories": 50,\n' +
    '          "price": 25\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "olives",\n' +
    '          "calories": 30,\n' +
    '          "price": 30\n' +
    '        }\n' +
    '      ],\n' +
    '      "removedIngredients": [],\n' +
    '      "picture": "img/california.jpeg"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "Detroit",\n' +
    '      "ingredients": [\n' +
    '        {\n' +
    '          "name": "cheese",\n' +
    '          "calories": 200,\n' +
    '          "price": 30\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "pepperoni",\n' +
    '          "calories": 150,\n' +
    '          "price": 50\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "mushrooms",\n' +
    '          "calories": 40,\n' +
    '          "price": 25\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "olives",\n' +
    '          "calories": 30,\n' +
    '          "price": 30\n' +
    '        }\n' +
    '      ],\n' +
    '      "removedIngredients": [],\n' +
    '      "picture": "img/detroid.jpeg"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "St. Louis",\n' +
    '      "ingredients": [\n' +
    '        {\n' +
    '          "name": "cheese",\n' +
    '          "calories": 200,\n' +
    '          "price": 30\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "tomato",\n' +
    '          "calories": 20,\n' +
    '          "price": 15\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "oregano",\n' +
    '          "calories": 20,\n' +
    '          "price": 25\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "herbs",\n' +
    '          "calories": 20,\n' +
    '          "price": 25\n' +
    '        }\n' +
    '      ],\n' +
    '      "removedIngredients": [],\n' +
    '      "picture": "img/st_l.jpeg"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "New Jersey",\n' +
    '      "ingredients": [\n' +
    '        {\n' +
    '          "name": "cheese",\n' +
    '          "calories": 200,\n' +
    '          "price": 30\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "tomato",\n' +
    '          "calories": 20,\n' +
    '          "price": 15\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "oregano",\n' +
    '          "calories": 20,\n' +
    '          "price": 25\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "beef",\n' +
    '          "calories": 200,\n' +
    '          "price": 50\n' +
    '        }\n' +
    '      ],\n' +
    '      "removedIngredients": [],\n' +
    '      "picture": "img/New_Jersey.jpeg"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "Calzone",\n' +
    '      "ingredients": [\n' +
    '        {\n' +
    '          "name": "cheese",\n' +
    '          "calories": 200,\n' +
    '          "price": 30\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "tomato",\n' +
    '          "calories": 20,\n' +
    '          "price": 15\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "garlic",\n' +
    '          "calories": 20,\n' +
    '          "price": 20\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "beef",\n' +
    '          "calories": 200,\n' +
    '          "price": 50\n' +
    '        }\n' +
    '      ],\n' +
    '      "removedIngredients": [],\n' +
    '      "picture": "img/calzone.jpeg"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "Indian",\n' +
    '      "ingredients": [\n' +
    '        {\n' +
    '          "name": "cheese",\n' +
    '          "calories": 200,\n' +
    '          "price": 30\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "oregano",\n' +
    '          "calories": 20,\n' +
    '          "price": 25\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "garlic",\n' +
    '          "calories": 20,\n' +
    '          "price": 20\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "herbs",\n' +
    '          "calories": 20,\n' +
    '          "price": 25\n' +
    '        }\n' +
    '      ],\n' +
    '      "removedIngredients": [],\n' +
    '      "picture": "img/indian.jpeg"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "Mexican",\n' +
    '      "ingredients": [\n' +
    '        {\n' +
    '          "name": "cheese",\n' +
    '          "calories": 200,\n' +
    '          "price": 30\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "tomato",\n' +
    '          "calories": 20,\n' +
    '          "price": 15\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "olives",\n' +
    '          "calories": 30,\n' +
    '          "price": 30\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "herbs",\n' +
    '          "calories": 20,\n' +
    '          "price": 25\n' +
    '        }\n' +
    '      ],\n' +
    '      "removedIngredients": [],\n' +
    '      "picture": "img/mexican.jpeg"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "Ukrainian",\n' +
    '      "ingredients": [\n' +
    '        {\n' +
    '          "name": "cheese",\n' +
    '          "calories": 200,\n' +
    '          "price": 30\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "tomato",\n' +
    '          "calories": 20,\n' +
    '          "price": 15\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "mushrooms",\n' +
    '          "calories": 40,\n' +
    '          "price": 25\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "chicken",\n' +
    '          "calories": 150,\n' +
    '          "price": 40\n' +
    '        }\n' +
    '      ],\n' +
    '      "removedIngredients": [],\n' +
    '      "picture": "img/ukrainian.jpeg"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "Sweet",\n' +
    '      "ingredients": [\n' +
    '        {\n' +
    '          "name": "cheese",\n' +
    '          "calories": 200,\n' +
    '          "price": 30\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "tomato",\n' +
    '          "calories": 20,\n' +
    '          "price": 15\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "pineapple",\n' +
    '          "calories": 150,\n' +
    '          "price": 35\n' +
    '        },\n' +
    '        {\n' +
    '          "name": "mozzarella",\n' +
    '          "calories": 30,\n' +
    '          "price": 25\n' +
    '        }\n' +
    '      ],\n' +
    '      "removedIngredients": [],\n' +
    '      "picture": "img/sweet.jpeg"\n' +
    '    }\n' +
    '  ]';

dataSource.ingredients = JSON.parse(ingredientsJson).map(value => Object.assign(new Ingredient(), value));
dataSource.pizzas = JSON.parse(pizzasJson).map(value => Object.assign(new PizzaItem(), value));

