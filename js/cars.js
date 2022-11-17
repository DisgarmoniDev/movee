let boxcar1 = document.getElementById('cars__info1')
let boxcar2 = document.getElementById('cars__info2')
let boxcar3 = document.getElementById('cars__info3')

let btncar1 = document.getElementById('cars__btn1')
let btncar2 = document.getElementById('cars__btn2')
let btncar3 = document.getElementById('cars__btn3')

function car1visible () {
    boxcar1.classList.remove('cars__info-none')
    boxcar2.classList.add('cars__info-none')
    boxcar3.classList.add('cars__info-none')
    btncar1.classList.add('border__car')
    btncar2.classList.remove('border__car')
    btncar3.classList.remove('border__car')
}

function car2visible () {
    boxcar1.classList.add('cars__info-none')
    boxcar2.classList.remove('cars__info-none')
    boxcar3.classList.add('cars__info-none')
    btncar1.classList.remove('border__car')
    btncar2.classList.add('border__car')
    btncar3.classList.remove('border__car')
}

function car3visible () {
    boxcar1.classList.add('cars__info-none')
    boxcar2.classList.add('cars__info-none')
    boxcar3.classList.remove('cars__info-none')
    btncar1.classList.remove('border__car')
    btncar2.classList.remove('border__car')
    btncar3.classList.add('border__car')
}

btncar1.addEventListener ('click', car1visible)
btncar2.addEventListener ('click', car2visible)
btncar3.addEventListener ('click', car3visible)



let btn_close = document.getElementById('btn-close')
let btn_order_car1 = document.getElementById('btn_order_car1')
let btn_order_car2 = document.getElementById('btn_order_car2')
let btn_order_car3 = document.getElementById('btn_order_car3')
let modal_car = document.getElementById('orden_car_modal')
let span_close = document.getElementsByClassName('modal__content_close')[0];

btn_order_car1.onclick = modalOpen
btn_order_car2.onclick = modalOpen
btn_order_car3.onclick = modalOpen
let interval


function modalOpen () {
    modal_car.style.display = 'block'
}

function modalClose() {
    modal_car.style.display = 'none'
}


span_close.onclick = modalClose



window.onclick = function(event) {
    if (event.target == modal_car) {
        modalClose()
    }
}

btn_close.addEventListener('click', ()=> {
    clearTimeout (interval)

    interval = setTimeout (()=> {
        modal_car.style.display = 'none'
    }, 200);
})