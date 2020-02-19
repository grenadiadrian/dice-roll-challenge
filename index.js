let randomNumber1 = Math.random()
randomNumber1 = randomNumber1 * 6
randomNumber1 = Math.floor(randomNumber1) + 1

function dice1() {
  if (randomNumber1 === 1) {
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice1.png")
  } else if (randomNumber1 === 2) {
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice2.png")
  } else if (randomNumber1 === 3) {
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice3.png")
  } else if (randomNumber1 === 4) {
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice4.png")
  } else if (randomNumber1 === 5) {
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice5.png")
  } else {
    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice6.png")
  }
}

let randomNumber2 = Math.random()
randomNumber2 = randomNumber2 * 6
randomNumber2 = Math.floor(randomNumber2) + 1

function dice2() {
  if (randomNumber2 === 1) {
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice1.png")
  } else if (randomNumber2 === 2) {
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice2.png")
  } else if (randomNumber2 === 3) {
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice3.png")
  } else if (randomNumber2 === 4) {
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice4.png")
  } else if (randomNumber2 === 5) {
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice5.png")
  } else {
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice6.png")
  }
}

function callWinner() {
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
  } else {
    document.querySelector("h1").innerHTML = "Draw!"
  }
}
