'use strict'

const MAX_TIMER_COUNT = 1500

let timer = null
let timerCount = MAX_TIMER_COUNT//1500

function startTimer() {
  timer = setInterval(timeShow, 1000)
}

function stopTimer() {
  if(timer == null) return

  clearInterval(timer)
  timer = null
  timerCount = MAX_TIMER_COUNT
  $("#time").html(timeStr(timerCount))
}

function timeStr(num) {
  function getTimeFormat(num) {
    return (num < 10) ? ('0' + num) : num
  }

  if(num > 3600) 
    return null

  let hours = getTimeFormat(parseInt(num / 60))
  let min   = getTimeFormat(parseInt(num % 60))

  return hours + ":" + min
}

function timeShow() {
  timerCount--
  $("#time").html(timeStr(timerCount))
  if(timerCount < 1) {
    stopTimer()

    const notification = {
      title: "Congratulations",
      body: "Great, you just got a tomato!",
      icon: "img/tomato.svg#tomato"
    }

    const myNotification = new Notification(notification.title, notification)
  }
}

$("div").click( (e) => {
  if(e.target.classList.value === "clock")
  {
    if(timer == null)
      startTimer()
    else
      stopTimer()
  }
})