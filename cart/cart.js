var test = document.getElementsByClassName("quantity_value")

function increment (index) {
    test[index].value = parseInt(test[index].value) + 1
}

function decrease (index) {
    if (test[index].value > 0) {
        test[index].value = parseInt(test[index].value) - 1
    }
}

var test2 = document.getElementsByClassName("cart-item")

function deleteItem (index) {
    test2[index].style.display = "none";
}
