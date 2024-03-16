let questionText = "This city is home to a UFO-shaped ice cream parlor called Coppelia, which was founded by a world leader. Nearly a million people are buried in this city's Colón Cemetery, including chess champion José Raúl Capablanca. The Hershey Electric Railway connects this city to Matanzas. A constructivist building resembling a sword hilt contains this city's Russian embassy. A presidential palace-turned-museum in this city includes a glass enclosure protecting the yacht (*) Granma. This city's Morro Castle can be seen in the background of Watson and the Shark. Waterfront hotels in this city owned by Meyer Lansky hosted a 1946 meeting of Mafia leaders during a tourist-friendly period under Fulgencio Batista. For 10 points, José Martí International Airport serves what capital of Cuba?"
let messages = questionText.split(" ")
let speedInput = document.querySelector(".speed-input")
let delay = 300

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
