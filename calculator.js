function fNum0() {
  if (vLastOper === "=") {
    fButtonC();
  }
  vResult.value += "0";
  vLastNum += "0";
}

function fNum1() {
  if (vLastOper === "=") {
    fButtonC();
  }
  vResult.value += "1";
  vLastNum += "1";
}

function fNum2() {
  if (vLastOper === "=") {
    fButtonC();
  }
  vResult.value += "2";
  vLastNum += "2";
}

function fNum3() {
  if (vLastOper === "=") {
    fButtonC();
  }
  vResult.value += "3";
  vLastNum += "3";
}

function fNum4() {
  if (vLastOper === "=") {
    fButtonC();
  }
  vResult.value += "4";
  vLastNum += "4";
}

function fNum5() {
  if (vLastOper === "=") {
    fButtonC();
  }
  vResult.value += "5";
  vLastNum += "5";
}

function fNum6() {
  if (vLastOper === "=") {
    fButtonC();
  }
  vResult.value += "6";
  vLastNum += "6";
}

function fNum7() {
  if (vLastOper === "=") {
    fButtonC();
  }
  vResult.value += "7";
  vLastNum += "7";
}

function fNum8() {
  if (vLastOper === "=") {
    fButtonC();
  }
  vResult.value += "8";
  vLastNum += "8";
}

function fNum9() {
  if (vLastOper === "=") {
    fButtonC();
  }
  vResult.value += "9";
  vLastNum += "9";
}

function fButtonC() {
  vResult.value = "";
  vLastNum = "";
  vFinalTotal = 0;
  vLastOper = "";
}

function fButtonAdd() {
  if (vLastOper === "=") {
    vResult.value = 0;
  }
  if (vLastOper !== "+") {
    if (vLastOper === "-") {
      vFinalTotal -= parseFloat(vLastNum);
    }
    if (vLastOper === "x") {
      vFinalTotal *= parseFloat(vLastNum);
    }
    if (vLastOper === "/") {
      if (parseFloat(vLastNum) !== 0) {
        vFinalTotal /= parseFloat(vLastNum);
      } else {
        fButtonC();
        vResult.value = "Error: División por 0";
      }
    }
  }
  if (vLastOper === "") {
    vFinalTotal = parseFloat(vLastNum);
  }
  if (vLastOper === "+") {
    if (vFinalTotal !== 0) {
      vFinalTotal += parseFloat(vLastNum);
    } else {
      vFinalTotal = parseFloat(vLastNum);
    }
  }
  if (vResult.value !== "Error: División por 0") {
    vResult.value += "+";
    vLastOper = "+";
  } else {
    vLastOper = "=";
  }
  vLastNum = "";
}

function fButtonSub() {
  if (vLastOper === "=") {
    vResult.value = 0;
  }
  if (vLastOper !== "-") {
    if (vLastOper === "+") {
      vFinalTotal += parseFloat(vLastNum);
    }
    if (vLastOper === "x") {
      vFinalTotal *= parseFloat(vLastNum);
    }
    if (vLastOper === "/") {
      if (parseFloat(vLastNum) !== 0) {
        vFinalTotal /= parseFloat(vLastNum);
      } else {
        fButtonC();
        vResult.value = "Error: División por 0";
      }
    }
    if (vLastOper === "") {
      vFinalTotal = parseFloat(vLastNum);
    }
  }
  if (vLastOper === "-") {
    if (vFinalTotal !== 0) {
      vFinalTotal -= parseFloat(vLastNum);
    } else {
      vFinalTotal = parseFloat(vLastNum);
    }
  }
  if (vResult.value !== "Error: División por 0") {
    vResult.value += "-";
    vLastOper = "-";
  } else {
    vLastOper = "=";
  }
  vLastNum = "";
}

function fButtonMul() {
  if (vLastOper === "=") {
    vResult.value = 0;
  }
  if (vLastOper !== "x") {
    if (vLastOper === "+") {
      vFinalTotal += parseFloat(vLastNum);
    }
    if (vLastOper === "-") {
      vFinalTotal -= parseFloat(vLastNum);
    }
    if (vLastOper === "/") {
      if (parseFloat(vLastNum) !== 0) {
        vFinalTotal /= parseFloat(vLastNum);
      } else {
        fButtonC();
        vResult.value = "Error: División por 0";
      }
    }
    if (vLastOper === "") {
      vFinalTotal = parseFloat(vLastNum);
    }
  }
  if (vLastOper === "x") {
    if (vFinalTotal !== 0) {
      vFinalTotal *= parseFloat(vLastNum);
    } else {
      vFinalTotal = parseFloat(vLastNum);
    }
  }
  if (vResult.value !== "Error: División por 0") {
    vResult.value += "x";
    vLastOper = "x";
  } else {
    vLastOper = "=";
  }
  vLastNum = "";
}

function fButtonDiv() {
  if (vLastOper === "=") {
    vResult.value = 0;
  }
  if (vLastOper !== "/") {
    if (vLastOper === "+") {
      vFinalTotal += parseFloat(vLastNum);
    }
    if (vLastOper === "-") {
      vFinalTotal -= parseFloat(vLastNum);
    }
    if (vLastOper === "x") {
      vFinalTotal *= parseFloat(vLastNum);
    }
    if (vLastOper === "") {
      vFinalTotal = parseFloat(vLastNum);
    }
  }
  if (vLastOper === "/") {
    if (vFinalTotal !== 0) {
      if (parseFloat(vLastNum) !== 0) {
        vFinalTotal /= parseFloat(vLastNum);
      } else {
        fButtonC();
        vResult.value = "Error: División por 0";
      }
    } else {
      vFinalTotal = parseFloat(vLastNum);
    }
  }
  if (vResult.value !== "Error: División por 0") {
    vResult.value += "/";
    vLastOper = "/";
  } else {
    vLastOper = "=";
  }
  vLastNum = "";
}

function fButtonEqu() {
  if (vLastOper === "+") {
    vFinalTotal += parseFloat(vLastNum);
  }
  if (vLastOper === "-") {
    vFinalTotal -= parseFloat(vLastNum);
  }
  if (vLastOper === "x") {
    vFinalTotal *= parseFloat(vLastNum);
  }
  if (vLastOper === "/") {
    if (parseFloat(vLastNum) !== 0) {
      vFinalTotal /= parseFloat(vLastNum);
    } else {
      fButtonC();
      vResult.value = "Error: División por 0";
    }
  }
  if (vResult.value !== "Error: División por 0") {
    vResult.value = vFinalTotal.toString();
  }
  vFinalTotal = 0;
  vLastNum = "";
  vLastOper = "=";
}

// -- Variables definition and html and id asosiation --

let vResult = document.getElementById("result"); // To write the strings in the calculator screen.
let vLastNum = ""; // To read the last number before the last operator read and turn the string into numbers.
let vLastOper = ""; // To save the last operation inside each operator.
let vFinalTotal = 0; // To save the final result.

let vNum0 = document.getElementById("button0");
vNum0.addEventListener("click", fNum0);

let vNum1 = document.getElementById("button1");
vNum1.addEventListener("click", fNum1);

let vNum2 = document.getElementById("button2");
vNum2.addEventListener("click", fNum2);

let vNum3 = document.getElementById("button3");
vNum3.addEventListener("click", fNum3);

let vNum4 = document.getElementById("button4");
vNum4.addEventListener("click", fNum4);

let vNum5 = document.getElementById("button5");
vNum5.addEventListener("click", fNum5);

let vNum6 = document.getElementById("button6");
vNum6.addEventListener("click", fNum6);

let vNum7 = document.getElementById("button7");
vNum7.addEventListener("click", fNum7);

let vNum8 = document.getElementById("button8");
vNum8.addEventListener("click", fNum8);

let vNum9 = document.getElementById("button9");
vNum9.addEventListener("click", fNum9);

let vButtonC = document.getElementById("buttonC");
vButtonC.addEventListener("click", fButtonC);

let vButtonAdd = document.getElementById("buttonAdd");
vButtonAdd.addEventListener("click", fButtonAdd);

let vButtonSub = document.getElementById("buttonSub");
vButtonSub.addEventListener("click", fButtonSub);

let vButtonMul = document.getElementById("buttonMul");
vButtonMul.addEventListener("click", fButtonMul);

let vButtonDiv = document.getElementById("buttonDiv");
vButtonDiv.addEventListener("click", fButtonDiv);

let vButtonEqu = document.getElementById("buttonEqu");
vButtonEqu.addEventListener("click", fButtonEqu);
