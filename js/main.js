

window.addEventListener('resize', showWidth);
function showWidth() {
  document.querySelector('.widthtablet').innerText = 'Ширина екрана' + document.documentElement.clientWidth;
}
showWidth();
//  new WOW().init();
//  $(function(){
//      var mixer = mixitup('.gallery__content');
//  });


$(".menu a").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});

 $('.slider-blog__inner').slick({
     dots: true,
     arrows: false,
 });

 
// expertise__info-item

const expertise = document.querySelector('.expertise__info');
const range = document.querySelector('.range_expertise');

const img1 = document.querySelector('.expertise__info-item.e1 img')
const span1 = document.querySelector('.expertise__info-item.e1 span')

const img2 = document.querySelector('.expertise__info-item.e2 img')
const span2 = document.querySelector('.expertise__info-item.e2 span')

const img3 = document.querySelector('.expertise__info-item.e3 img')
const span3 = document.querySelector('.expertise__info-item.e3 span')


expertise && expertise.addEventListener('click', e=>{
    if(e.target.closest('.expertise__info')){
    range.classList.add('expertise__show');
}
})


document.querySelector('#customRange1').addEventListener('input', function(e){
console.log(e.target.value)
span1.innerText=e.target.value;
img1.style.width =  `calc(${e.target.value}% * 0.8)`
})

document.querySelector('#customRange2').addEventListener('input', function(e){
    console.log(e.target.value)
    span2.innerText=e.target.value;
    img2.style.width =  `calc(${e.target.value}% * 0.8)`
    })

    document.querySelector('#customRange3').addEventListener('input', function(e){
        console.log(e.target.value)
        span3.innerText=e.target.value;
        img3.style.width =  `calc(${e.target.value}% * 0.8)`
        })



        $('.menu__btn, .menu a').on('click', function(){
            $('.header__top-inner').toggleClass('header__top-inner--active');
        });
        

