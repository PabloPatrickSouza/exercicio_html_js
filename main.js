const numeroA = document.getElementById("numero-A")
const numeroB = document.getElementById("numero-B")

let form = document.getElementById("form-deposito")


form.addEventListener("submit",function(e){
     e.preventDefault()
     if (numeroB.value > numeroA.value){ 
          document.querySelector(".error-message").style.display = "none"
          document.querySelector(".success-message").style.display = "block"
          }

     else{
          document.querySelector(".success-message").style.display = "none"
          document.querySelector(".error-message").style.display = "block"
     }

})