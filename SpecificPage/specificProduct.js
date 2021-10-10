// nav bar code

// search field effect

id = 0;
function searchbar() {
  var inpField = document.querySelector(".search-tab-container");
  var inp = document.getElementById("search-field");
  var search = document.querySelector(".search-tab-logo");
  inpField.style.backgroundColor = "white";
  inpField.style.width = "500px";
  inp.style.color = "black";
  inp.style.border = "none";
  search.style.opacity = "0";
  if (id == 0) {
    var img = document.createElement("img");
    img.src = "https://cdn.icon-icons.com/icons2/1674/PNG/512/close_111152.png";
    inpField.append(img);
    img.style.float = "right";
    img.style.width = "5.5%";
    img.style.marginTop = "-25px";
    img.style.zIndex = "10";
  }
  id++;
}

//back to original search field

function closesearch() {
  var inpField = document.querySelector(".search-tab-container");
  var inp = document.getElementById("search-field");
  var search = document.querySelector(".search-tab-logo");
  inpField.style.backgroundColor = "#212121";
  inpField.style.width = "245px";
  search.style.opacity = "1";
}

//hover div over category

function showCategory() {
  var category = document.querySelector(".category");
  var category_arrow = document.querySelector(".category-arrow");
  category_arrow.style.transform = "rotate(180deg)";
}
function closeCategory() {
  var category = document.querySelector(".category");
  var category_arrow = document.querySelector(".category-arrow");
  category_arrow.style.transform = "rotate(0)";
}

// hover div over brand

function showBrand() {
  var brand = document.querySelector(".brand");
  var brand_arrow = document.querySelector(".brand-arrow");
  brand_arrow.style.transform = "rotate(180deg)";
}
function closeBrand() {
  var brand = document.querySelector(".brand");
  var brand_arrow = document.querySelector(".brand-arrow");
  brand_arrow.style.transform = "rotate(0)";
}

// sticky nav bar
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//modal_container
const modal_container = document.querySelector(".modal-container");
const close = document.querySelector("fa fa-times");

function showCheckout() {
  modal_container.classList.add("showModal");
}

function closeModal() {
  modal_container.classList.remove("showModal");
}

// nav bar code over

var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].onclick = function () {
  ProductImg.src = SmallImg[0].src;
};
SmallImg[1].onclick = function () {
  ProductImg.src = SmallImg[1].src;
};
SmallImg[2].onclick = function () {
  ProductImg.src = SmallImg[2].src;
};

SmallImg[3].onclick = function () {
  ProductImg.src = SmallImg[3].src;
};
SmallImg[4].onclick = function () {
  ProductImg.src = SmallImg[4].src;
};

function xxxchange() {
  let inputBox = document.getElementById("xxxPincode");
  inputBox.value = "";
}

function removeItemAll(arr, value) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}

// for xxl size
let xxxI = 0;
function abraXXL() {
  let sampleArray = JSON.parse(localStorage.getItem("sizeArray"));
  let result = sampleArray == null || sampleArray.length == 0;
  if (xxxI % 2 === 0 && result) {
    document.getElementById("spanXXL").style.color = "white";
    document.getElementById("divXXLMid").style.backgroundColor = "#212121";
    let arr;
    arr = localStorage.getItem("sizeArray");
    if (arr == null) {
      arr = [];
    } else {
      arr = JSON.parse(localStorage.getItem("sizeArray"));
    }
    arr.push("XXL");
    localStorage.setItem("sizeArray", JSON.stringify(arr));
    xxxI += 1;
  } else {
    document.getElementById("divXXLMid").style.backgroundColor = "";
    document.getElementById("spanXXL").style.color = "#212121";
    let arr = JSON.parse(localStorage.getItem("sizeArray"));
    arr = removeItemAll(arr, "XXL");
    localStorage.setItem("sizeArray", JSON.stringify(arr));
    xxxI += 1;
  }
}

// for xL size
let xxI = 0;
function abraXL() {
  let sampleArray = JSON.parse(localStorage.getItem("sizeArray"));
  let result = sampleArray == null || sampleArray.length == 0;
  if (xxI % 2 === 0 && result) {
    document.getElementById("spanXL").style.color = "white";
    document.getElementById("divXLMid").style.backgroundColor = "#212121";
    let arr;
    arr = localStorage.getItem("sizeArray");
    if (arr == null) {
      arr = [];
    } else {
      arr = JSON.parse(localStorage.getItem("sizeArray"));
    }
    arr.push("XL");
    localStorage.setItem("sizeArray", JSON.stringify(arr));
    xxI += 1;
  } else {
    document.getElementById("divXLMid").style.backgroundColor = "";
    document.getElementById("spanXL").style.color = "#212121";
    let arr = JSON.parse(localStorage.getItem("sizeArray"));
    arr = removeItemAll(arr, "XL");
    localStorage.setItem("sizeArray", JSON.stringify(arr));
    xxI += 1;
  }
}

// for L size
let xI = 0;
function abraL() {
  let sampleArray = JSON.parse(localStorage.getItem("sizeArray"));
  let result = sampleArray == null || sampleArray.length == 0;
  if (xI % 2 === 0 && result) {
    document.getElementById("spanL").style.color = "white";
    document.getElementById("divLMid").style.backgroundColor = "#212121";
    let arr;
    arr = localStorage.getItem("sizeArray");
    if (arr == null) {
      arr = [];
    } else {
      arr = JSON.parse(localStorage.getItem("sizeArray"));
    }
    arr.push("L");
    localStorage.setItem("sizeArray", JSON.stringify(arr));
    xI += 1;
  } else {
    document.getElementById("divLMid").style.backgroundColor = "";
    document.getElementById("spanL").style.color = "#212121";
    let arr = JSON.parse(localStorage.getItem("sizeArray"));
    arr = removeItemAll(arr, "L");
    localStorage.setItem("sizeArray", JSON.stringify(arr));
    xI += 1;
  }
}

// when clicked on add to bag button
function xxxMoveToCart() {
  let inputcode = document.getElementById("xxxPincode").value;
  localStorage.setItem("pinCodeString", JSON.stringify(inputcode));

  // make sure the user has selected the size
  let sampleArray = JSON.parse(localStorage.getItem("sizeArray"));
  if (sampleArray == null || sampleArray.length == 0) {
    document.getElementById("sizeError").style.visibility = "visible";
    setTimeout(function () {
      document.getElementById("sizeError").style.visibility = "hidden";
    }, 1500);
  } else {
    var cartItem = document.getElementById("getTheTotalCount").innerHTML;
    cartItem = Number(cartItem) + 1;
    document.getElementById("getTheTotalCount").innerHTML = `${cartItem}`;
    document.getElementById("getTheTotalCount").style.visibility = "visible";
  }
}

function getToCARTXXX() {
  window.location.href = "../MyBagPage/Mybag.html";
}
