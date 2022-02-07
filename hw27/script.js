let age = Number(prompt("How old are you "))
function checkAge(age) {
    if (age > 18) {
      return true
    } else {
      return confirm('Родители разрешили?')
    }
  }
  checkAge()