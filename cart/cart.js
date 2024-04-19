var quantity = document.getElementsByClassName("quantity_value")

function increment (index) {
    quantity[index].value = parseInt(quantity[index].value) + 1
}


function decrease (index) {
    if (quantity[index].value > 0) {
        quantity[index].value = parseInt(quantity[index].value) - 1
    }
}


var cart = document.getElementsByClassName("cart-item")

function deleteItem (index) {
    cart[index].style.display = "none";
}
