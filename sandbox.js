const imgBurger = document.querySelector('.menu_burger');
const menuMobile = document.querySelector('.menu_mobile');

imgBurger.addEventListener('click', e =>{

    if(menuMobile.style.display == 'block'){
        menuMobile.setAttribute('style', 'display: none !important')
    } else{
        menuMobile.setAttribute('style', 'display: block !important')
    }
})