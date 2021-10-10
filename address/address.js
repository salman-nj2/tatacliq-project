// Navigation Bar js starts

//Navigation bar ends
function addAddress(event) {

    event.preventDefault();

    let pincode = document.getElementById('pincode').value;

    let city = document.getElementById('city').value;

    let state = document.getElementById('state').value;

    let landmark = document.getElementById('landmark').value;

    let firstname = document.getElementById('firstname').value;

    let lastname = document.getElementById('lastname').value;

    let address = document.getElementById('address').value;

    let phonenumber = document.getElementById('address').value;

    let addresstype = "";

    if (document.getElementById('home').checked == true)
    {
         addresstype = 'Home:';
    }
    else if (document.getElementById('office').checked == true)
    {
         addresstype = 'Office:';
    }

        let data =
        {
            pincode,
            city,
            state,
            landmark,
            firstname,
            lastname, 
            address,
            phonenumber,
            addresstype
        }
        let arr = localStorage.getItem('datas');

        if (arr == null)
        {
            arr = [];
        }
        else
        {
            arr = JSON.parse(localStorage.getItem('datas'));
        }
        arr.push(data);
    localStorage.setItem('datas', JSON.stringify(arr));
    

    if (JSON.parse(localStorage.getItem('datas')) != null)
        
    {
        window.location.href = "/payment/payment.html";
    }
}

function clear1()
{
    document.getElementById('pincode').value = "";
    document.getElementById('city').value = "";
    document.getElementById('state').value = "";
    document.getElementById('landmark').value = "";
    document.getElementById('firstname').value = "";
    document.getElementById('lastname').value = "";
    document.getElementById('address').value = "";
    document.getElementById('phonenumber').value = "";
    document.getElementById('home').checked = false;
    document.getElementById('office').checked = false;
}



function xxxMOVEBACK(){
    window.location.href = "/Mybag/Mybag.html"
}