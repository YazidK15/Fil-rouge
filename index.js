var test = document.getElementsByClassName("quantity_value")
// console.log (test[3])

function increment () {
test[3].value = parseInt(test[3].value) + 1
}

function decrease () {
    if (test[3].value > 0) {
        test[3].value = parseInt(test[3].value) - 1
    }
}
