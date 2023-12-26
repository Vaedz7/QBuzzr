var answerField = document.querySelector("#answer-field")
var questionsBtn = document.querySelector("#questions_btn")
var sidebarBtnsSmall = document.querySelector(".sidebar-btns-small")
var ultraLabel = document.querySelector("#ultra")
var questionAnswer = document.querySelector(".question-answer")

const ultra = true

if (ultra) {
    ultraLabel.textContent = "ULTRA"
} else {
    ultraLabel.textContent = "BASIC"
}

var displayingTossupsAndBonuses = false
questionsBtn.addEventListener("click", function(){
    displayingTossupsAndBonuses = !displayingTossupsAndBonuses
    if (displayingTossupsAndBonuses){
        sidebarBtnsSmall.style.display = "flex"
    } else {
        sidebarBtnsSmall.style.display = "none"
    }
})



//Action Buttons
var copyBtn = document.querySelector(".bi-copy")
var wikipediaBtn = document.querySelector(".bi-wikipedia")
var googleBtn = document.querySelector(".bi-google")

function format(string){
    string = string.replace(/\[.*?\]/g, '')
    string = string.replace(/\(.*?\)/g, '')
    string = string.replace(/<.*?>/g, '')
    return string
}

copyBtn.addEventListener("click", function(){
    navigator.clipboard.writeText(format(questionAnswer.innerText))
})

wikipediaBtn.addEventListener("click", function(){
    window.open(`https://wikipedia.org/w/index.php?search=${format(questionAnswer.innerText)}`)
})

googleBtn.addEventListener("click", function(){
    window.open(`https://www.google.com/search?q=${format(questionAnswer.innerText)}`)
})


//Reader
let questionText = "This city is home to a UFO-shaped ice cream parlor called Coppelia, which was founded by a world leader. Nearly a million people are buried in this city's Colón Cemetery, including chess champion José Raúl Capablanca. The (#) Hershey Electric Railway connects this city to Matanzas. A constructivist building resembling a sword hilt contains this city's Russian embassy. A presidential palace-turned-museum in this city includes a glass enclosure protecting the yacht (*) Granma. This city's Morro Castle can be seen in the background of Watson and the Shark. Waterfront hotels in this city owned by Meyer Lansky hosted a 1946 meeting of Mafia leaders during a tourist-friendly period under Fulgencio Batista. For 10 points, José Martí International Airport serves what capital of Cuba?"
let messages = questionText.split(" ")
let speedInput = document.querySelector(".speed-input")
const minDelay = 100
const maxDelay = 600
const maxSpeed = 100
let delay = maxDelay - ((maxDelay - minDelay) * (speedInput.value / maxSpeed))
speedInput.addEventListener("change", function(){
    delay = maxDelay - ((maxDelay - minDelay) * (speedInput.value / maxSpeed))
})

let questionContent = document.querySelector(".question-content")
questionContent.innerText = ""
let stopped = false

function until(conditionFunction) {

  const poll = resolve => {
    if(conditionFunction()) resolve()
    else setTimeout(_ => poll(resolve), 400)
  }

  return new Promise(poll)
}

const wait = ms => new Promise(res => setTimeout(res, ms))

let next = false

const read = async () => {
  for (const word of messages) {
    if (next) {
      return
    }
    if (!stopped) {
      questionContent.innerText += " " + word
    } else {
      await until(_ => stopped === false)
      questionContent.innerText += " " + word
    }
    await wait(delay)
  }
}

const forceNext = async () => {
  next=true
  read()
}

//Toolbar Buttons
var buzzBtn = document.querySelector("#buzz-btn")
buzzBtn.addEventListener("click", function() {
    answerField.style.display = "block"
})

startBtn = document.querySelector(".start-btn")
startBtn.addEventListener("click", function(){
    if (stopped){
        stopped = false
    } else{
        read()
    }
})

pauseBtn = document.querySelector(".pause-btn")
pauseBtn.addEventListener("click", function(){
    stopped = true
})

skipBtn = document.querySelector(".skip-btn")
skipBtn.addEventListener("click", function(){

})


