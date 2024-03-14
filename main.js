let container = document.querySelector(".container")
let btns = document.querySelectorAll(".container .box .box-content .btns .btnCn .btn")
let title = document.querySelector(".box .box-content .title")
let boxContent = document.querySelector(".box-content")
let box = document.querySelectorAll(".box")
let dicr = document.querySelectorAll(".btns .value .dicr")
let incr = document.querySelectorAll(".btns .value .incr")
let ValueH3 = document.querySelector(".value h3")
let buy = document.querySelector(".box .box-content .buy")
let img = document.querySelector(".box .box-content img")
let p = document.querySelector(".p")
let valueCalc = 0
dicr.forEach((btn) => {
    btn.addEventListener("click" , () => {
        valueCalc--
        if (valueCalc <= 0) {
            valueCalc++
            p.textContent = "Eng kami 1 dona"
        }
        ValueH3.textContent = valueCalc
    } )
})

incr.forEach((btn) => {
    btn.addEventListener("click" , () => {
        valueCalc++
        ValueH3.textContent = valueCalc
    })
})

// btns.forEach((btn , index) => {
//     btn.addEventListener("click" , () => {
//         // boxEaching()
//         removeActv()
//         btn.classList.add("active")
//         box[index].classList.add("active")
//     })
// })

// function removeActv () {
//     btns.forEach((btn , index) => {
//         btn.classList.remove("active")
//         box[index].classList.remove("active")
//     })
// }

buy.addEventListener("click" , () => {
    alert("Added to cart ✔")
})


// Styles
container.addEventListener("mousemove" , (e) => {
    let mouseX = e.clientX
    let mouseY = e.clientY
    let windowWidth = window.innerWidth
    let windowHeight = window.innerHeight
    let x = windowWidth / 2 - mouseX
    let y = windowHeight / 2 - mouseY
    boxContent.style.transition = "0s"
    boxContent.style.transform = `rotateX(${y / 50}deg) rotateY(${x / 50}deg)`
    img.style.animation = `rotateImg 20s infinite`
})

container.addEventListener("mouseleave" , () => {
    boxContent.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`
    img.style.animation = `rotateImg 0s infinite`
    boxContent.style.transition = "0.5s"
})