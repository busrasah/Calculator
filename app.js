var sonuc = 0;
var deger = "0";

const inputVal = document.getElementById("inputVal");

function appendToDisplay(input) {
  if (inputVal.value === "0") {
    inputVal.value = input;
  } else {
    inputVal.value = inputVal.value + input;
  }
}

function clearDisplay() {
  inputVal.value = " ";
}

function calculate() {
  try {
    inputVal.value = eval(inputVal.value);
  } catch (error) {
    inputVal.value = "error";
  }
}

const topla = () => {
  sonuc = sonuc + Number(deger);
};

const cikar = () => {
  sonuc = sonuc - Number(deger);
};

const bol = () => {
  if (Number(deger) == 0 || (sonuc == 0 && Number(deger) == 0)) {
    console.log("HATA");
    sonuc = null;
  }

  sonuc = sonuc / Number(deger);
};

const carp = () => {
  sonuc = sonuc == 0 || Number(deger) == 0 ? 0 : sonuc * Number(deger);
};

const yuzde = () => {
  sonuc = sonuc / 100;
};
const ters = () => {
  sonuc = sonuc * -1;
};

const changedeger = (value) => {
  deger = deger + value;
};
