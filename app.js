var result = 0;
var transaction = "";
var variable = "";

const inputVal = document.getElementById("inputVal");

function appendToDisplay(input) {
  if (inputVal.value === "0") {
    inputVal.value = input;
  } else {
    inputVal.value = inputVal.value + input;
  }
}

function calculate() {
  if (variable == "+") {
    sum();
  } else if (variable == "-") {
    subtract();
  } else if (variable == "/") {
    divide();
  } else {
    multiply();
  }
}

function clearDisplay() {
  inputVal.value = "0";
  result = 0;
}

const sum = () => {
  result = result + Number(inputVal.value);
  inputVal.value = result;
};

const subtract = () => {
  result = result - Number(inputVal.value);

  inputVal.value = result;
};

const divide = () => {
  if (
    Number(inputVal.value) == 0 ||
    (result == 0 && Number(inputVal.value) == 0)
  ) {
    console.log("HATA");
    result = null;
  }

  result = result / Number(inputVal.value);
  inputVal.value = result;
};

const multiply = () => {
  result =
    result == 0 || Number(inputVal.value) == 0
      ? 0
      : result * Number(inputVal.value);
  inputVal.value = result;
  console.log("3 -" + inputVal.value);
  console.log("4 -" + result);
};

const percent = () => {
  result = result / 100;
  inputVal.value = result;
};
const reverse = () => {
  result = result * -1;
  inputVal.value = result;
};
const sign = (i) => {
  variable = i;
  result = Number(inputVal.value);
  inputVal.value = "";
};
