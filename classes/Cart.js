class Cart {
    products = [];
    total = 0;

    addProduct(Product) {
        this.products.push(Product);
        this.total+= Product.price;
    }

    removeProduct(i) {
        this.total -= this.products[i].price;
        this.products.splice(i,1);
    }
}

module.exports = Cart;