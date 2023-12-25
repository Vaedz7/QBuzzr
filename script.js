var buzzBtn = document.querySelector("#buzz-btn")
var answerField = document.querySelector("#answer-field")
var questionsBtn = document.querySelector("#questions_btn")
var sidebarBtnsSmall = document.querySelector(".sidebar-btns-small")
var ultraLabel = document.querySelector("#ultra")

const ultra = true

if (ultra) {
    ultraLabel.textContent = "ULTRA";
} else {
    ultraLabel.textContent = "BASIC";
}
    
buzzBtn.addEventListener("click", function() {
    answerField.style.display = "block"
})

var displayingTossupsAndBonuses = false
questionsBtn.addEventListener("click", function(){
    displayingTossupsAndBonuses = !displayingTossupsAndBonuses
    if (displayingTossupsAndBonuses){
        sidebarBtnsSmall.style.display = "flex"
    } else {
        sidebarBtnsSmall.style.display = "none"
    }
})

