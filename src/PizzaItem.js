'use strict';

const DOUGH_PRICE = 20;
const DOUGH_CALORIES = 400;
const WORK_PRICE = 50;

class PizzaItem {

    name;
    ingredients;
    removedIngredients;
    picture;

    constructor(name, ingredients, picture) {
        this.name = name;
        this.ingredients = ingredients;
        this.removedIngredients = [];
        this.picture = picture;
    }


    get calories() {
        let pizzaCalories = DOUGH_CALORIES;
        for (let i = 0; i < this.ingredients.length; i++) {
            pizzaCalories += this.ingredients[i].calories
        }

        let removedPizzaCalories = 0;
        for (let i = 0; i < this.removedIngredients.length; i++) {
            removedPizzaCalories += this.removedIngredients[i].calories
        }

        return pizzaCalories - removedPizzaCalories;
    }

    get price() {
        let pizzaPrice = WORK_PRICE + DOUGH_PRICE;
        for (let i = 0; i < this.ingredients.length; i++) {
            pizzaPrice += this.ingredients[i].price
        }

        let removedIngredientsPrice = 0;
        for (let i = 0; i < this.removedIngredients.length; i++) {
            removedIngredientsPrice += this.removedIngredients[i].price
        }

        return pizzaPrice - removedIngredientsPrice;
    }


}