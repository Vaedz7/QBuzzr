var buzzBtn = document.querySelector("#buzz-btn")
var answerField = document.querySelector("#answer-field")
var questionsBtn = document.querySelector("#questions_btn")
var sidebarBtnsSmall = document.querySelector(".sidebar-btns-small")
var ultraLabel = document.querySelector("#ultra")
var questionAnswer = document.querySelector(".question-answer")

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



var copyBtn = document.querySelector(".bi-copy")
var wikipediaBtn = document.querySelector(".bi-wikipedia")
var googleBtn = document.querySelector(".bi-google")

//Need to remove the [], (), <>, 
copyBtn.addEventListener("click", function(){
    navigator.clipboard.writeText(questionAnswer.innerText)
})

wikipediaBtn.addEventListener("click", function(){
    window.open(`https://wikipedia.org/w/index.php?search=${questionAnswer.innerText}`)
})

googleBtn.addEventListener("click", function(){
    window.open(`https://www.google.com/search?q=${questionAnswer.innerText}`)
});


