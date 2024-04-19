var test = document.getElementsByClassName("quantity_value")

function increment (index) {
test[index].value = parseInt(test[index].value) + 1
}

function decrease (index) {
    if (test[index].value > 0) {
        test[index].value = parseInt(test[index].value) - 1
    }
}
