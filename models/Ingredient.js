class LiquidIngredient {
    
    constructor(name, volume, type) {
        this.name = name; // String -> name
        this.volume = volume; // float -> ml
        this.type = type; // String -> vodka, tequila, ..., mixer
    }
}

class SolidIngredient {
    constructor(name, quantity) {
        this.name = name; // String -> name
        this.quantity = quantity; // float -> ?
    }
}