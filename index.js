var test = document.getElementsByClassName("quantity_value")

function increment (index) {
test[index].value = parseInt(test[index].value) + 1
}

function decrease (index) {
    if (test[index].value > 0) {
        test[index].value = parseInt(test[index].value) - 1
    }
}


let modalAlreadyShowed = false
window.addEventListener('scroll', function(e) {
  if( ! modalAlreadyShowed ) {
    setTimeout( () => {
      document.getElementById('modal').style.display = 'block'
    }, 2000 )
    modalAlreadyShowed = true
  }
})

