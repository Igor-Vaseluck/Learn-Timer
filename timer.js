const times = document.querySelector('.times')
const btn = document.querySelector('.btn')
const showTimer = document.querySelector('.showTimer')
showTimer.innerHTML='00:00:00'

setInterval(function (){
    const date = new Date()
    const hours = date.getHours().toString().length < 2 ? '0'+date.getHours() : date.getHours()
    const minutes = date.getMinutes().toString().length < 2 ? '0'+date.getMinutes() : date.getMinutes()
    const seconds = date.getSeconds().toString().length < 2 ? '0'+date.getSeconds() : date.getSeconds()
    times.innerText = hours + ":" + minutes + ":" + seconds
}, 1000)

function addTime(){
    tick()
    showTimer.innerHTML=(hr <= 9 ? '0'+ hr : hr)+":"+(min <= 9 ? '0'+min : min)+":"+(sec <= 9 ? '0'+ sec : sec)
}


const tick = function(){
    sec++
    if(sec>=60){
        sec=0
        min++
        if(min>=60){
            min=0
            hr++
        }
    }
}
let interval = null
let sec
let min
let hr

btn.addEventListener('click', function(){
 sec=0
 min=0
 hr=0
        if(interval){
            clearInterval(interval)
            interval = null
            showTimer.innerHTML='00:00:00'
        } else{
           interval = setInterval(function(){
               addTime()
           },1000)
        }
})

