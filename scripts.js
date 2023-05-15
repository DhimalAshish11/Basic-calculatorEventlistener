const btns = document.querySelectorAll(".btn");
///importing audio file

const audioFile = new Audio("aa.wav");

const displayElem = document.querySelector(".display");
let stringToDisplay = "";
let latestOperators = "";
const operators = ["+", "-", "%", "*", "/"];
//console.log("btn:", btns);

btns.forEach((btn) => {
  //console.log("btn:", btn.innerText);

  btn.addEventListener("click", () => {
    //console.log("Some click");

    let clickedButton = btn.innerText;

    if (operators.includes(clickedButton) && !stringToDisplay.length) {
      return;
    }
    //console.log("ClickButton:", clickedButton);

    //console.log("StringToDidp:", stringToDisplay);

    if (clickedButton === "AC") {
      stringToDisplay = "";
      return displayResult("");
    }

    if (clickedButton === "←") {
      //console.log("StringToDidp:", stringToDisplay);

      stringToDisplay = stringToDisplay.slice(0, -1);
      return displayResult(stringToDisplay);
    }

    if (operators.includes(clickedButton)) {
      latestOperators = clickedButton;

      const lastCharacter = stringToDisplay.slice(-1);

      if (operators.includes(lastCharacter)) {
        stringToDisplay = stringToDisplay.slice(0, -1);
      }

      console.log("latestcharacter:", lastCharacter);
    }

    if (clickedButton === "=") {
      const lastCharacter = stringToDisplay.slice(-1);

      if (operators.includes(lastCharacter)) {
        stringToDisplay = stringToDisplay.slice(0, -1);
      }
      return displayTotal(stringToDisplay);
    }

    stringToDisplay = stringToDisplay + clickedButton;
    displayResult(stringToDisplay);
  });
});

const displayResult = (value) => {
  displayElem.innerText = value || "0";
};

const displayTotal = (value) => {
  const prankedData = sendRandom();
  if (prankedData) {
    audioFile.play();
  }
  let totalValue = eval(value).toString();
  stringToDisplay = totalValue;
  displayResult(totalValue);
};

const sendRandom = () => {
  let randomNumber = Math.round(Math.random() * 10);
  /*  if (randomNumber < 3) {
    return randomNumber;
  } else {
    return 0;
  } */
  return randomNumber < 3 ? randomNumber : 0;
};

//Operators
