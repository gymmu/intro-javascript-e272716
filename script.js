function sayHello() {
  alert("Hello World!")
}

function changeBackground() {
  const body = document.querySelector("body")
  body.style.backgroundColor = "darkgrey"
}
function deleteText () {
  const elemToDeleteText = document.querySelector("#to-delete")
  elemToDeleteText.textContent = "Inhalt gelöscht"
}

function incrementCounter (){
 const numberElement = document.querySelector("#counter")
 let num = parseInt(numberElement.textContent)
 num = num + 1
 numberElement.textContent = num
 

}
function decrementCounter () {
  const numberElement = document.querySelector("#counter")
  let num = parseInt(numberElement.textContent)
  num = num - 1
  numberElement.textContent = num
}
function resetCounter () {
  const numberElement = document.querySelector("#counter")
  let num = parseInt(numberElement.textContent)
  num = num 
  numberElement.textContent = num 
}
function writeText(){
  // Input Element in Java-Skript zu bekommen
  const inputElement = document.querySelector("#input")

 
  //Output Element in Java-Skript zu bekommen.
  const outputElement= document.querySelector("#output")
  const outputText= outputElement.textContent

  // den inhalt vom Input Element, dem Output Element hinzufügen.
  outputElement.textContent= outputText + "\n" + inputElement.value
 
}