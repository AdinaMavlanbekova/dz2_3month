///////////////check email
const gmailInput = document.querySelector("#gmail_input")
const gmailButton = document.querySelector("#gmail_button")
const result = document.querySelector("#gmail_result")

const regExp = /\w@gmail.com$/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)){
        result.innerHTML = 'ok'
        result.style.color = 'green'
    } else {
        result.innerHTML = 'not ok'
        result.style.color = 'red'
    }
}

///////////////////////move block//////////
const childBlock = document.querySelector('.child_block')
const parentBlock = document.querySelector('.parent_block')
const maxOffsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth
const maxOffsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight

let positionX = 0
let positionY = 0
const moveBlock = () => {
    if (positionX < maxOffsetWidth && positionY === 0){
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 1)
    }else if (positionX >= maxOffsetWidth && positionY < maxOffsetHeight) {
        positionY++
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 1)
    }else if (positionX >= 0 && positionY <= maxOffsetHeight) {
        positionX--
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 1)
    }else if (positionX <= 0 && positionY > 0) {
        positionY--
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 1)
    }
}
moveBlock()

///////// counter ////////////////

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let seconds = document.getElementById("seconds");
let count = 0;
let intervalId;

function Start() {
    if(!intervalId){
        intervalId = setInterval(() => {
            count++;
            seconds.innerHTML = count;
        }, 1000);}
}

function Stop() {
    clearInterval(intervalId)
    intervalId = null

}

function Reset() {
    clearInterval(intervalId);
    intervalId = null
    count = 0;
    seconds.innerHTML = count;
}

stop.onclick = Stop;
start.onclick = Start;
reset.onclick = Reset;