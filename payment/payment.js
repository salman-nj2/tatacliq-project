id = 0
function searchbar(){
var inpField = document.querySelector('.search-tab-container')
var inp = document.getElementById('search-field')
var search = document.querySelector('.search-tab-logo')
inpField.style.backgroundColor = 'white'
inpField.style.width = '500px'
inp.style.color = 'black'
inp.style.border = 'none'
search.style.opacity = '0'
if(id == 0){
var img = document.createElement('img')
img.src = 'https://cdn.icon-icons.com/icons2/1674/PNG/512/close_111152.png'
inpField.append(img)
img.style.float = 'right'
img.style.width = '5.5%'
img.style.marginTop = '-25px'
img.style.zIndex = '10'
}
id++

}


//back to original search field

function closesearch(){
var inpField = document.querySelector('.search-tab-container')
var inp = document.getElementById('search-field')

inpField.style.backgroundColor = 'black'
inpField.style.width = '245px'

}

//hover div over category

function showCategory(){
var category = document.querySelector('.category')
var category_arrow = document.querySelector('.category-arrow')
category_arrow.style.transform = 'rotate(180deg)'
}
function closeCategory(){
var category = document.querySelector('.category')
var category_arrow = document.querySelector('.category-arrow')
category_arrow.style.transform = 'rotate(0)'
}

// hover div over brand

function showBrand(){
var brand = document.querySelector('.brand')
var brand_arrow = document.querySelector('.brand-arrow')
brand_arrow.style.transform = 'rotate(180deg)'
}
function closeBrand(){
var brand = document.querySelector('.brand')
var brand_arrow = document.querySelector('.brand-arrow')
brand_arrow.style.transform = 'rotate(0)'
}


// sticky nav bar
window.addEventListener("scroll",function(){
var header = document.querySelector('header')
header.classList.toggle("sticky", window.scrollY > 0);
})


//modal_container
const modal_container = document.querySelector('.modal-container')
const close = document.querySelector('fa fa-times')

function showCheckout(){
modal_container.classList.add('showModal');

}

function closeModal(){
modal_container.classList.remove('showModal');
}

var coll = document.getElementsByClassName('collapsible');
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

function showAddress()
{
    let data = JSON.parse(localStorage.getItem('datas'))
     
    var display = document.getElementById("deliverydisplay");
    
    var addresstype = document.getElementById("addresstype");
    addresstype.innerHTML = null;

    var address = document.getElementById("address");
    address.innerHTML = null;

    data.forEach(function (el) {

        display.innerHTML = null;
        address.innerHTML = null;
        addresstype.innerHTML = null;

    let p_addresstype = document.createElement('p')
    p_addresstype.innerHTML = el.addresstype;
        
    let p_address = document.createElement("p");
    p_address.innerHTML = el.address;

        addresstype.append(p_addresstype);
        address.append(p_address);
        
    display.append(addresstype, address);
    })

}
showAddress();

function pay(event)
{
    event.preventDefault();

    let cardnumber = document.getElementById("cardnumber").value;

    let month = document.getElementById("month").value;

    let year = document.getElementById("year").value;

    let name = document.getElementById("name").value;

    let cvv = document.getElementById("CVV").value;

        let card =
        {
            cardnumber,
            month,
            year,
            name,
            cvv
        }
        let arr = localStorage.getItem('creditcard');

         if (arr == null)
        {
            arr = [];
        }
        else
        {
            arr = JSON.parse(localStorage.getItem('creditcard'));
        }
        arr.push(card);
        localStorage.setItem('creditcard', JSON.stringify(arr));
 

    if (JSON.parse(localStorage.getItem('creditcard')) != null)
    {
        showSuccess();
            setTimeout(redirect, 1000);

            function redirect()
            {
                 window.location.href = "/thankyou/thankyou.html";
            }
        }
}

function pay1(event)
{
    event.preventDefault();

    let cardnumber = document.getElementById("cardnumber1").value;

    let month = document.getElementById("month1").value;

    let year = document.getElementById("year1").value;

    let name = document.getElementById("name1").value;

    let cvv = document.getElementById("CVV1").value;

    if (month != "" && year != "") {
        let card1 =
        {
            cardnumber,
            month,
            year,
            name,
            cvv
        }
        let arr = localStorage.getItem('debitcard');

        if (arr == null) {
            arr = [];
        }
        else {
            arr = JSON.parse(localStorage.getItem('debitcard'));
        }
        arr.push(card1);
        localStorage.setItem('debitcard', JSON.stringify(arr));
    }
    else
    {
        alert("Enter Month/Year details");
        }
        
        if (JSON.parse(localStorage.getItem('debitcard')) != null)
        {
          
            showSuccess();
            
            setTimeout(redirect, 1000);

            function redirect()
            {
                 window.location.href = "/thankyou/thankyou.html";
            }
        }
}

xxxClick = 0;
function xxxheightChange() {
    if (xxxClick % 2 === 0) {
        let block = document.getElementById("xxxheight").style.height.slice(0, 3);
        block = Number(block) + 100;
        document.getElementById("xxxheight").style.height = block + "px";
    } else {
        let block = document.getElementById("xxxheight").style.height.slice(0, 3);
        block = Number(block) - 100;
        document.getElementById("xxxheight").style.height = block + "px";
    }
    xxxClick += 1;
}

// debit card
xxxClickDebit = 0;
function xxxheightChangeDebit() {
    if (xxxClickDebit % 2 === 0) {
        let block = document.getElementById("xxxheight").style.height.slice(0, 3);
        block = Number(block) + 100;
        document.getElementById("xxxheight").style.height = block + "px";
    } else {
        let block = document.getElementById("xxxheight").style.height.slice(0, 3);
        block = Number(block) - 100;
        document.getElementById("xxxheight").style.height = block + "px";
    }
    xxxClickDebit += 1; 
}

function showSuccess()
  {
    document.getElementById('receipt-icon').style.display = "block";
    }

 