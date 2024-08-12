// DOM 
function changeBg() {
    document.body.style.background = "white"
}

function addText() {
    let inputText = document.getElementById("userInput")
    
    let newMessage = document.createElement("p")
    newMessage.textContent = inputText.value
    
    let msgBox = document.getElementById("messageBox")
    msgBox.appendChild(newMessage)

    inputText.value = ""

}