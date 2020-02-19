'use strict';

class Basket {

    #pizzas = [];

    constructor(items) {
        this.#pizzas = items;
    }

    get items() {
        return this.#pizzas;
    }

    get itemsCount() {
        return this.#pizzas.length;
    }

    get price() {
        let price = 0;
        for (let i = 0; i < this.#pizzas.length; i++) {
            price += this.#pizzas[i].price
        }
        return price;
    }

    add(pizza) {
        this.#pizzas.push(pizza);
        dataSource.basket = this.#pizzas;
    }

    delete(pizza) {
        this.#pizzas.splice(this.#pizzas.indexOf(pizza), 1);
        dataSource.basket = this.#pizzas;
    }

    clear() {
        this.#pizzas = [];
        dataSource.basket = this.#pizzas;
    }

}

var basket = new Basket(dataSource.basket);

