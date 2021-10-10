const modal_container = document.querySelector('.modal-container')
const close = document.querySelector('fa fa-times')

function showCheckout(){
    modal_container.classList.add('showModal');
    
}
showCheckout()





function backToHome(){
    window.location.href ="../index/indexAfterLogin.html"
}