class User {

    constructor(firstName, lastName, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    createTicket(queue, drink) {
        const ticket = new Ticket(drink);
        queue.push(ticket);
    }
}