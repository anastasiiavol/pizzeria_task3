'use strict';

class DataSource {
    #KEY_INGREDIENTS = 'ingredients';
    #KEY_PIZZAS = 'pizzas';
    #KEY_BASKET = 'basket';

    #ingredients = [];
    #pizzas = [];
    #basket = [];

    constructor() {
        let ingredientsJson = localStorage.getItem(this.#KEY_INGREDIENTS);
        this.#ingredients = ingredientsJson == null
            ? []
            : JSON.parse(ingredientsJson).map(value => Object.assign(new Ingredient(), value));

        let pizzasJson = localStorage.getItem(this.#KEY_PIZZAS);
        this.#pizzas = pizzasJson == null
            ? []
            : JSON.parse(pizzasJson).map(value => Object.assign(new PizzaItem(), value));

        let basketJson = localStorage.getItem(this.#KEY_BASKET);
        this.#basket = basketJson == null
            ? []
            : JSON.parse(basketJson).map(value => Object.assign(new PizzaItem(), value));
    }

    get ingredients() {
        return this.#ingredients;
    }

    set ingredients(ingredients) {
        this.#ingredients = ingredients;
        localStorage.setItem(this.#KEY_INGREDIENTS, JSON.stringify(ingredients));
    }

    get pizzas() {
        return this.#pizzas;
    }

    set pizzas(pizzas) {
        this.#pizzas = pizzas;
        localStorage.setItem(this.#KEY_PIZZAS, JSON.stringify(pizzas));
    }

    get basket() {
        return this.#basket;
    }

    set basket(basket) {
        this.#basket = basket;

        localStorage.setItem(this.#KEY_BASKET, JSON.stringify(basket));
    }

    addPizza(pizza) {
        this.#pizzas.push(pizza);
    }

    deletePizza(pizza) {
        this.#pizzas.splice(this.#pizzas.indexOf(pizza), 1);
    }
}


var dataSource = new DataSource();
