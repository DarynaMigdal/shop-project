// add to cart 
let productsCountEl = document.getElementById("products-counter")

let addToCartBts = document.querySelectorAll(".btn-add-to-cart")


for (let i = 0 ; i < addToCartBts.length; i++){
    addToCartBts[i].addEventListener("click",function(){
    productsCountEl.textContent = +productsCountEl.textContent + 1
    })
} 

let likeBtns = document.querySelectorAll(".icon-like")

 likeBtns.forEach(btn=>{
     btn.addEventListener("click",function (){
        if(btn.classList.contains("liked")){
            btn.classList.remove("liked")
        }else {
            btn.classList.add("liked")
        }
     })
 })

let MoreDetBts = document.querySelectorAll(".btn-btn-more-details")
let form = document.querySelector(".modal")
let bat = document.querySelector (".bat-close")

MoreDetBts.forEach(btn =>{
    btn.addEventListener("click",openModal)
})
function openModal(){
form.classList.add("show")
form.classList.remove("hidden")
}

function closeModal(){
form.classList.add("hidden")
form.classList.remove("show")
}
bat.addEventListener("click",closeModal)

form.addEventListener("click",function(e){
    if(e.target===form){
        closeModal()
    }
})



// let incrementBtns = document.querySelectorAll(".increment-button")[0];
// let decrementBtns = document.querySelectorAll(".decrement-button")[0];
// let productQuantityEl = document.querySelectorAll(".product-quantity input")[0];

// let currentCount = +productQuantityEl.value
// toggleButtonState(currentCount)


// function toggleButtonState(count) {
// decrementBtns.disabled = count <= 1 
// incrementBtns.disabled = count >= 5 
// }
// incrementBtns.addEventListener("click",function(){
//     let currentCount = +productQuantityEl.value 
//     let nextCount = currentCount + 1 
//     productQuantityEl.value = nextCount

//     toggleButtonState(nextCount)
// })
// decrementBtns.addEventListener("click",function(){
//     let currentCount = +productQuantityEl.value 
//     let nextCount = currentCount - 1 
//     productQuantityEl.value = nextCount

//     toggleButtonState(nextCount)
// })
let incrementBtns = document.querySelectorAll(".increment-button")[0];
let decrementBtns = document.querySelectorAll(".decrement-button")[0];
let productQuantityEl = document.querySelectorAll(".product-quantity input")[0];

function Counter(incrementButton,decrementButton,inputField){
    this.domRefs={
        incrementButton,
        decrementButton,
        inputField
    }

    this.toggleButtonState = function(){
        const count = this.domRefs .inputField.value
     this.domRefs.decrementButton.disabled = count <= 1 
     this.domRefs.incrementButton.disabled = count >= 5
    }
  

   this.increment =  function(){
    let currentCount = +this.domRefs.inputField.value 
    let nextCount = currentCount + 1 
   this.domRefs.inputField.value = nextCount
    this.toggleButtonState()
   }

   this.decrement =  function(){
    let currentCount = this.domRefs.inputField.value 
    let nextCount = currentCount - 1 
    this.domRefs.inputField.value = nextCount
    this.toggleButtonState()
   }
   this.toggleButtonState()
   this.domRefs.incrementButton.addEventListener("click", this.increment)
   this.domRefs.decrementButton.addEventListener("click", this.decrement)
}
const counter1 = new Counter (incrementBtns,decrementBtns,productQuantityEl)
console.log(counter1)



$('.slider-block').slick({
    dots : true,
})
