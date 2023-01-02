class Bartender extends User {

    constructor(firstName, lastName, phoneNumber, email) {
        super(firstName, lastName, phoneNumber, email);
    }
    
    createDrink(name, ingredients, drinkList) {
        const drink = new Drink(name, ingredients);
        if (drink) {
            drinkList.push(drink);
        }
    }
}