const hourEl = document.querySelector(".hour")
const minuteEl = document.querySelector(".minute")
const secondEl = document.querySelector(".second")
const timeEl = document.querySelector(".time")
const dateEl = document.querySelector(".date")
const toggle = document.querySelector(".toggle")

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

changeMode()
function changeMode(){
    toggle.addEventListener("click", () =>{
        const html = document.querySelector("html")
        html.classList.toggle("dark")
        if (toggle.innerHTML === "Dark Mode") {
            toggle.innerHTML = "Light Mode";
          } else {
            toggle.innerHTML = "Dark Mode";
          }
        } 
        
    )
}

function setTime() {
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const hoursForClock = hours % 12
    const ampm = hours >= 12 ? "PM" : "AM"

    
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale((hoursForClock * 60) + minutes, 0, 720, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%,-100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%,-100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

    secondEl.style.transition = `${seconds === 0 ? "none" : "all 0.5s ease-in"}`;


    timeEl.innerHTML= `${hoursForClock < 10 ?`0${hoursForClock}` : hoursForClock }:${minutes < 10 ?`0 ${minutes}` : minutes } ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class= "circle"> ${date}`
}
    const scale = (number, inMin, inMax, outMin, outMax) => {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }


setTime()

setInterval(setTime,1000)
