class Drink {
    constructor(name, ingredients) {
        this.name = name; // String -> name
        this.ingredients = ingredients; //[[Ingredient, Volume],...] -> Ingredients Required

        // Check if ingredients are available to create Drink (assumes all identical ingredients are consolidated)
        for(let i = 0; i < ingredients.length; i++) {
            if(ingredients[i][0].volume < ingredients[i][1]) {
                return null;
            }
            else {
                ingredients[i][0].volume -= ingredients[i][1];
            }
        }
    }

    addVolume() {
        for(let i = 0; i < ingredients.length; i++) {
            ingredients[i][0].volume += ingredients[i][1];
        }
    }

    subtractVolume() {
        for(let i = 0; i < ingredients.length; i++) {
            ingredients[i][0].volume -= ingredients[i][1];
        }
    }
}