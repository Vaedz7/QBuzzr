var buzzBtn = document.querySelector("#buzz-btn")
var answerField = document.querySelector("#answer-field")
var questionsBtn = document.querySelector("#questions_btn")
var sidebarBtnsSmall = document.querySelector(".sidebar-btns-small")

buzzBtn.addEventListener("click", function() {
    answerField.style.display = "block"
})

questionsBtn.addEventListener("mouseover", function(){
    sidebarBtnsSmall.style.display = "flex"
})

questionsBtn.addEventListener("mouseout", function(){
    sidebarBtnsSmall.style.display = "none"
})

