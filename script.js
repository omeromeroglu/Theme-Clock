const hourEl = document.querySelector(".hour")
const minuteEl = document.querySelector(".minute")
const secondEl = document.querySelector(".second")
const timeEl = document.querySelector(".time")
const dataEl = document.querySelector(".date")
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
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const hoursForClock = hours % 12

    

    hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)})`
    minuteEl.style.transform = `translate(-50%,-100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%,-100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`
}
    const scale = (number, inMin, inMax, outMin, outMax) => {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }


setTime()

setInterval(setTime,1000)
