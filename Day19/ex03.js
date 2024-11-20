// function People(email, name, age, password) {
// 	this.email = email;
// 	this.name = name;
// 	this.age = age;
// 	this.password = password;
// }

// const newUser = new People( "nguyen@gmail.com", "Nguyen",32, "123")
// console.log(newUser);


function CreateUserCart(userId) {
    this.product = [];
    this.userId = userId;
    this.addProduct = function(id, productName, productQuantity) {

        const item = this.product.find( item => item.id === id );
        if (item) {
            return {}

        }
        this.productId = id;
        this.productName = productName;
        this.productQuantity = productQuantity;
    };

    this.showCart = function() {
        return [this.product, this.productQuantity];
    }
}

const cartOfHoang = CreateUserCart("123")

cartOfHoang.addProduct({
    id: 1,
    productName: "iPhone",
    productQuantity: 4,
});

console.log('cartOfHoang: ',cartOfHoang);
