(function(){

//Переменные
let items = document.querySelectorAll(".content__menu-item"); // Итемы выбора карт
let products = document.querySelectorAll(".content__product"); // Колекция карт
let menu = document.querySelector("#menu"); //Меню списка
let form = document.querySelector(".form"); //Мобильная форма
let mobileInner = document.querySelector("#mobile-inner"); //Фон меню
let mobileNav = document.querySelector("#mobile-nav"); //Мобильная навигация
let close = document.querySelector("#close"); // Кнопка выхода из мобильного меню


//Категория карт
items.forEach((item)=>{
    item.addEventListener("click",selectItem)
})


function selectItem(){
    items.forEach((item)=>{
        item.classList.remove('active')
    })
    this.classList.add('active');
    selectItemContent(this.id)
}

function selectItemContent(id){
    products.forEach((product)=>{
        if(product.dataset.name == id || product.dataset.dbname == id){
            product.classList.add('active')    
        }
        else{
            product.classList.remove('active')
        } 
    })
}



//Бургер меню
document.querySelector("#burger-menu").addEventListener("click",()=>{
    form.classList.add("active")
    menu.classList.toggle('active');
    mobileNav.classList.toggle('active');
    mobileInner.classList.add("active");
    close.classList.add('active')
    document.querySelector("body").classList.add("is-overflowed")
    
})


//Контроль окна
window.addEventListener("resize",function(){
   if(window.innerWidth >992){
    form.classList.remove('active')
    menu.classList.remove('active')
    mobileNav.classList.remove('active')
    close.classList.remove('active')
    mobileInner.classList.remove("active")
    document.querySelector("body").classList.remove("is-overflowed")
   }    
})


//Закрываем окно
close.addEventListener("click",closeMenu)
mobileInner.addEventListener("click",hide)


//Закрываем фон
function hide(event){
    if(event.target == this){
        closeMenu();
    }
}

//Закрываем меню
function closeMenu(){
    close.classList.remove('active');
    mobileNav.classList.remove('active');
    menu.classList.remove('active')
    mobileInner.classList.remove("active")
    document.querySelector("body").classList.remove("is-overflowed")
}


//Dropdown
let dropSelect = document.querySelector('.dropdown-select'); //Текущий выбранный элемент
let dropItems = document.querySelector(".dropdown__items"); // Оболочка списка
let dropItem = document.querySelector(".dropdown__item"); // Итемы списка

document.querySelector("#dropdown").addEventListener("click",(event)=>{
    if(event.target == dropSelect){
        event.target.classList.toggle("newAfter");
        dropItems.classList.toggle('active')
    }
    else if(event.target.classList.contains('dropdown__item')){
        console.log('yes')
        selectItemContent(event.target.dataset.id)
        dropSelect.classList.remove('newAfter')
        dropSelect.textContent = event.target.textContent;
        dropItems.classList.remove('active')
    }
})

})()