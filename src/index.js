'use strict';


let header = document.createElement("header");
header.setAttribute("class", "header");
document.body.appendChild(header);

let logo = document.createElement("img");
logo.setAttribute("src", "img/pizza.svg");
logo.setAttribute("class", "logo_img");
logo.setAttribute("alt", "logo");

header.appendChild(logo);

let pizzeria_name = document.createElement("span");
let pizzeria_name_text = document.createTextNode("Pizzeria");
pizzeria_name.setAttribute("class", "name");
pizzeria_name.appendChild(pizzeria_name_text);
header.appendChild(pizzeria_name);

let section_choose_view = document.createElement("div");
section_choose_view.setAttribute("class", "section_choose_view");
document.body.appendChild(section_choose_view);

function appendSortSelect(parentContainer) {
    let divSelectSort = document.createElement("div");
    parentContainer.appendChild(divSelectSort);
    divSelectSort.setAttribute("class", "select_sort_type");

    let selectSort = document.createElement("select");
    selectSort.setAttribute("id", "selectSort");

    divSelectSort.appendChild(selectSort);

    let originalOrder = document.createElement("option");
    originalOrder.setAttribute("value", "4");
    let originalOrder_text = document.createTextNode("Original Order");
    originalOrder.appendChild(originalOrder_text);

    let priceAscending = document.createElement("option");
    priceAscending.setAttribute("value", "0");
    let priceAscending_text = document.createTextNode("Price Ascending");
    priceAscending.appendChild(priceAscending_text);

    let priceDescending = document.createElement("option");
    priceDescending.setAttribute("value", "1");
    let priceDescending_text = document.createTextNode("Price Descending");
    priceDescending.appendChild(priceDescending_text);

    let alphabetOrder = document.createElement("option");
    alphabetOrder.setAttribute("value", "2");
    let alphabetOrder_text = document.createTextNode("Alphabet Order");
    alphabetOrder.appendChild(alphabetOrder_text);

    let reverseOrder = document.createElement("option");
    reverseOrder.setAttribute("value", "3");
    let reverseOrder_text = document.createTextNode(" Reverse Order");
    reverseOrder.appendChild(reverseOrder_text);

    document.getElementById("selectSort").appendChild(priceAscending);
    document.getElementById("selectSort").appendChild(priceDescending);
    document.getElementById("selectSort").appendChild(alphabetOrder);
    document.getElementById("selectSort").appendChild(reverseOrder);
    document.getElementById("selectSort").appendChild(originalOrder);

    selectSort.addEventListener("change", () => {
        let pizzas = [];
        switch (selectSort.selectedIndex) {
            case parseInt(priceAscending.value):
                pizzas = sortPizzas(pizzaArr, true, sortByPrice);
                getListContent(pizzas);
                break;
            case parseInt(priceDescending.value):
                pizzas = sortPizzas(pizzaArr, false, sortByPrice);
                getListContent(pizzas);
                break;
            case parseInt(alphabetOrder.value):
                pizzas = sortPizzas(pizzaArr, true, sortByName);
                getListContent(pizzas);
                break;
            case parseInt(reverseOrder.value):
                pizzas = sortPizzas(pizzaArr, false, sortByName);
                getListContent(pizzas);
                break;
            case parseInt(originalOrder.value):
                getListContent(pizzaArr);
                break;
        }
    });
    selectSort.selectedIndex = parseInt(originalOrder.value);
}


let pic_view_grid = document.createElement("img");
pic_view_grid.setAttribute("src", "img/icons/grid.svg");
pic_view_grid.setAttribute("class", "pic_view");
pic_view_grid.setAttribute("alt", "pic_view");
section_choose_view.appendChild(pic_view_grid);


let pic_view_list = document.createElement("img");
pic_view_list.setAttribute("src", "img/icons/list.svg");
pic_view_list.setAttribute("class", "pic_view");
pic_view_list.setAttribute("alt", "pic_view");
section_choose_view.appendChild(pic_view_list);

pic_view_grid.addEventListener("click", function () {
    document.querySelector(".container_list").innerHTML = "";

    handleGridMode();
});

pic_view_list.addEventListener("click", function () {
    document.querySelector(".container_grid").innerHTML = "";
    handleListMode();
});


let main = document.createElement("div");
main.setAttribute("class", "main");
document.body.appendChild(main);

let gridContainer = document.createElement("div");
gridContainer.setAttribute("class", "container_grid");
main.appendChild(gridContainer);

let listContainer = document.createElement("div");
listContainer.setAttribute("class", "container_list");
main.appendChild(listContainer);

let footer = document.createElement("footer");
footer.setAttribute("class", "footer");
document.body.appendChild(footer);

let footer_info = document.createElement("span");
let footer_info_text = document.createTextNode("Copyright ©2020 Anastasia Volchanskaia. All rights reserved.");
footer_info.setAttribute("class", "footer_text");
footer_info.appendChild(footer_info_text);
footer.appendChild(footer_info);

appendCheckBoxes(ingredients, "filterArea", section_choose_view, () => {
    let chosenIngredients = [];
    let checkBoxes = section_choose_view.getElementsByClassName("checkbox");
    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            chosenIngredients.push(ingredients[i]);
        }
    }
    let filteredPizzas = filterByIngredients(pizzaArr, chosenIngredients);
    getGridContent(filteredPizzas);
});
appendSortSelect(section_choose_view);
hideFilterList();
hideSortList();

/*----------------------------------------------------------------------------*/

function handleGridMode() {
    showFilterList();
    hideSortList();
    getGridContent(pizzaArr);
}

function handleListMode() {
    hideFilterList();
    showSortList();
    getListContent(pizzaArr);
}


function clearContainer(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

function getGridContent(pizzasGrid) {
    clearContainer(gridContainer);
    for (let i = 0; i < pizzasGrid.length; i++) {
        let card = createPizzaCard(pizzasGrid[i]);
        gridContainer.appendChild(card);
    }
}

function getListContent(pizzasList) {
    clearContainer(listContainer);
    for (let i = 0; i < pizzasList.length; i++) {
        let card = createPizzaRow(pizzasList[i]);
        listContainer.appendChild(card);
    }
}

function createPizzaRow(pizza) {
    let divSelectSort = document.createElement("div");
    divSelectSort.setAttribute("class", "select_sort_type");

    let imgList = document.createElement("img");
    divSelectSort.appendChild(imgList);
    imgList.setAttribute("src", "img/icons/pizzaList.svg");
    imgList.setAttribute("class", "list_img");

    divSelectSort.appendChild(createPizzaListField("span", "class", "list_pizza_name", "Name " + pizza.name));
    divSelectSort.appendChild(createPizzaListField("span", "class", "list_pizza_price", " Price " + pizza.price));


    return divSelectSort;
}

function createPizzaListField(tag, value, valueName, text) {
    let listField = document.createElement(tag);
    listField.setAttribute(value, valueName);
    let listFieldText = document.createTextNode(text);
    listField.appendChild(listFieldText);

    return listField;
}

function createPizzaCard(pizza) {

    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("id", "card");

    let cardFront = document.createElement("div");
    cardFront.setAttribute("class", "card_front");


    let cardBack = document.createElement("div");
    cardBack.setAttribute("class", "card_back");





    let cardImage = document.createElement("img");
    cardImage.setAttribute("src", pizza.picture);
    cardImage.setAttribute("class", "card--avatar");
    card.appendChild(cardImage);


    let ingredientBox = document.createElement("input");
    ingredientBox.setAttribute("type", "checkbox");

    /*    let imageField = createCardField("img", "src", "card--avatar", "" + pizza.image);*/

    let caloriesField = createCardField("span", "class", "card--info", "Calories " + pizza.calories);
    let priceField = createCardField("span", "class", "card--info", "Price " + pizza.price);


    card.appendChild(createCardField("span", "class", "card--title", pizza.name));


    appendCheckBoxes(pizza.ingredients, "card_checkboxes", card, (checkbox) => {
        if (checkbox.checked) {
            let index = pizza.removedIngredients.indexOf(pizza.ingredients[checkbox.value]);
            pizza.removedIngredients.splice(index, 1);
        } else {
            pizza.removedIngredients.push(pizza.ingredients[checkbox.value]);
        }
        caloriesField.textContent = "Calories " + pizza.calories;
        priceField.textContent = "Price " + pizza.price;
    });
    let ingredientsCB = card.getElementsByClassName("checkbox");
    for (let i = 0; i < ingredientsCB.length; i++) {
        ingredientsCB[i].checked = true;
    }


    card.appendChild(caloriesField);
    card.appendChild(priceField);


    return card;
}

function createCardField(tag, value, valueName, text) {
    let cardField = document.createElement(tag);
    cardField.setAttribute(value, valueName);
    let cardFieldText = document.createTextNode(text);
    cardField.appendChild(cardFieldText);

    return cardField;
}


function hideSortList() {
    let elements = section_choose_view.getElementsByClassName("select_sort_type");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.visibility = "hidden";
    }

}

function showSortList() {
    let elements = section_choose_view.getElementsByClassName("select_sort_type");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.visibility = "visible";
    }

}

function hideFilterList() {
    let elements = section_choose_view.getElementsByClassName("filterArea");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.visibility = "hidden";
    }
}

function showFilterList() {
    let elements = section_choose_view.getElementsByClassName("filterArea");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.visibility = "visible";
    }
}

let sortByPrice = (a, b) => {
    return a.price - b.price;
};

let sortByName = (a, b) => {
    let x = a.name.toLowerCase();
    let y = b.name.toLowerCase();
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
};

function sortPizzas(pizzas, isDescending, compareFun) {
    let sortedList = [...pizzas];
    sortedList.sort((a, b) => {
        let comparison = compareFun(a, b);
        return isDescending ? comparison : -comparison;
    });
    return sortedList;
}

function filterByIngredients(pizzas, ingredients) {
    if (ingredients.length === 0) {
        return [...pizzas];
    }
    let filtered = [];
    for (let i = 0; i < pizzas.length; i++) {
        let pizza = pizzas[i];
        let contains = true;
        for (let j = 0; j < ingredients.length; j++) {
            if (!pizza.ingredients.includes(ingredients[j])) {
                contains = false;
            }
        }
        if (contains) {
            filtered.push(pizza);
        }
    }
    return filtered;
}

function appendCheckBoxes(ingredients, className, parentContainer, onCheckChanged) {
    let filterArea = document.createElement("div");
    parentContainer.appendChild(filterArea);
    filterArea.className = className;



    for (let i = 0; i < ingredients.length; i++) {
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.className = "checkbox";
        checkbox.value = i.toString();
        checkbox.addEventListener("change", () => onCheckChanged(checkbox));

        let checkboxLabel = document.createElement("label");
        checkboxLabel.className = "checkbox_label";
        filterArea.appendChild(checkboxLabel);
        let node = document.createTextNode(ingredients[i].name);
        checkboxLabel.className = "checkbox_title";
        checkboxLabel.appendChild(node);

        filterArea.appendChild(checkbox);
    }

}

function getModal(){

    let modal = document.createElement("div");
    modal.setAttribute("id", "myModal");
    modal.setAttribute("class", "modal");
    document.body.appendChild(modal);

    let modalContent = document.createElement("div");
    modalContent.setAttribute("class", "modal-content");
    let viewSelector = document.createTextNode("How to display the page?");
    modalContent.appendChild(viewSelector);
    modal.appendChild(modalContent);

    let buttonModalSection = document.createElement("div");
    buttonModalSection.setAttribute("class", "button-modal_section");
    modalContent.appendChild(buttonModalSection);


    let gridModalBtn = document.createElement("button");
    gridModalBtn.setAttribute("class", "modalBtn");
    let gridModalBtnTitle = document.createTextNode("Grid");
    gridModalBtn.appendChild(gridModalBtnTitle);
    buttonModalSection.appendChild(gridModalBtn);

    let listModalBtn = document.createElement("button");
    listModalBtn.setAttribute("class", "modalBtn");
    let listModalBtnTitle = document.createTextNode("List");
    listModalBtn.appendChild(listModalBtnTitle);
    buttonModalSection.appendChild(listModalBtn);

    function mod() {
        modal.style.display = "block";
    }
    mod();

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    gridModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
        handleGridMode();
    });

    listModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
        handleListMode();
    });
}
getModal();







