// ----------------------опрос кнопок v 1.0 ----------------------------------------------------
let navMenu     = document.querySelectorAll('.nav--menu'),
    switchMain  = document.querySelectorAll('.switch--main');
let kolPresButton = 0;
navMenu[0].classList.add('nav--menu-act');
//-----------------------------------v1.1--------------------------------------------------------------
for(let i =0; i < navMenu.length; i++){
    navMenu[i].addEventListener('click', ()=>{
        if( i == 0){
            menuDefolt(i)
            navMenu[i].classList.add('nav--menu-act')
                for(let j = 1; j <= navMenu.length; j++){
                navMenu[j].classList.remove('nav--menu-act');
        }
        }
        else if(kolPresButton == i){
            menuDefolt(i)
            navMenu[i].classList.remove('nav--menu-act');
            navMenu[0].classList.add('nav--menu-act');
            kolPresButton = 0
        }
        else {
            menuDefolt(i)
            for(let j = 0; j <= navMenu.length-1; j++){
                navMenu[j].classList.remove('nav--menu-act');
            }
            navMenu[i].classList.add('nav--menu-act');
            menuWindows(i);
            kolPresButton = i;

        }

    })}
//-----------------------------------icon footer--------------------------------------------------------
let footerIcon = document.querySelectorAll('.footer--icon');

    for(let i=0; i < footerIcon.length; i++){
        footerIcon[i].addEventListener('click', ()=>{
            if (i == 0){
                window.location = "http://github.com/Harehliad?tab=repositories"
            }
            if (i == 1){
                window.location = "https://rs.school/js/"
            }
        })
    }
//-------------------------------------------------------------------------------------------------------
let mapMogilev = document.querySelector('.map--mogilev');

mapMogilev.addEventListener('click',()=>{
    window.location = "https://yandex.by/maps/geo/53176783/?ll=30.360908%2C53.887811&tilt=0.8726646259971648&z=13.29"
})
//----------------------------------------------------------------------------------------------------------
let content = document.querySelectorAll('.content'),
    extendedInformation = document.querySelectorAll('.extended--information')


//----------------------------------------------------------------------------------------------------------
function menuWindows(element) {
    for ( let i=0; i < navMenu.length-1; i++ ){
        content[i].classList.add('non')
    }
    extendedInformation[element-1].classList.add('extended--information-act')
    //extendedInformation[0].classList.add('extended--information-act')
}
//---------------------------------------------------------------------------------------------------------
function menuDefolt(element){
    for ( let i=0; i < navMenu.length-1; i++ ){
        content[i].classList.remove('non')
    }
    for(let j=0; j < extendedInformation.length; j++){
    extendedInformation[j].classList.remove('extended--information-act')
    }
}
//--------Отображение иконки месаджера в отдельном окне при наведении курсора на ссылку----------------------
let contactInfo =   document.querySelectorAll('.contact--info'),
    iconMessenger = document.querySelector('.icon--messenger');
for(let i=0; i < contactInfo.length; i++){
    contactInfo[i].addEventListener('mouseover', ()=>{
        iconMessenger.classList.add('icon--messenger-act')
        iconMessenger.style.backgroundImage = `url(/rsschool-cv/assets/${i}.png)`
    })
    contactInfo[i].addEventListener('mouseout', ()=>{
        iconMessenger.classList.remove('icon--messenger-act')
    })
}
//-------------------------------------------------------------------------------------------------------------

function switchOn (){

}
function swichOff(){

}