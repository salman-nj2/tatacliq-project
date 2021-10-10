// show the pin code dynamically

function pinCODEShown() {
  document.getElementById("getTHEPINCODE").innerHTML = "";
  let getPin = JSON.parse(localStorage.getItem("pinCodeString"));
  document.getElementById("getTHEPINCODE").innerHTML = getPin;
}

pinCODEShown();

// showing the size selected dynamically

function sizeShown() {
  document.getElementById("getTHESIZE").innerHTML = "";
  let getSize = JSON.parse(localStorage.getItem("sizeArray"));
  document.getElementById("getTHESIZE").innerHTML = `Size: ${getSize[0]}`;
}

sizeShown();

function xxxHarishFirst() {
  window.location.href = "../address/address.html";
}
