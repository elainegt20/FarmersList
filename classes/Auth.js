const Customer = require('./Customer.js')

class Auth {
    customers = [];

    register(name, email, shippingAddress) {
        this.customers.push(new Customer(name, email, shippingAddress))
    }

    login(email) {
        for (let key in this.customers) {
            if (this.customers[key].email == email) {
                return this.customers[key]
            }
        }
        return null;
    }
}
module.exports = Auth;