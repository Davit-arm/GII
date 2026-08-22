movies = [
    {
        title:'Black Adam',
        genre:'Action',
        rating:"6.5",
        image:"imgs/adammain.png"
    },
    {
        title:'1899',
        genre:'Mystery',
        rating:"7.3",
        image:"imgs/shipmovie.png"
    },
    {
        title:'Justice League',
        genre:'Action',
        rating:"6.0",
        image:"imgs/justiceleague.png"
    }
];

btnl = document.querySelector('.button_left');
btnr = document.querySelector('.button_right');

let currentMovie = 0;
let start;
let end;
let condition = false;


let image = document.querySelector('.slider_pic_img');
let title = document.querySelector('#sliderTitle');
let desc = document.querySelector('#sliderDesc');
let rating = document.querySelector('#sliderRating');
let slider = document.querySelector('.slider_pic');

// slider
function btnlf() {
    currentMovie++
    slider.classList.add('changing');
    if (currentMovie >= movies.length){
        currentMovie = 0;
    }
    let movie = movies[currentMovie]
    setTimeout(function(){
        image.src = movie.image;
        title.textContent = movie.title;
        rating.textContent = movie.rating;
        desc.textContent = movie.genre;
        slider.classList.remove('changing');
    },300);
}
function btnrf() {
    currentMovie--
    slider.classList.add('changing');
    if (currentMovie < 0 ){
        currentMovie = movies.length - 1;
    }
    // console.log(currentMovie)
    let movie = movies[currentMovie]
    setTimeout(function(){
        image.src = movie.image;
        title.textContent = movie.title;
        rating.textContent = movie.rating;
        desc.textContent = movie.genre;
        slider.classList.remove('changing');
    },300);
};

btnl.addEventListener('click',btnlf);
btnl.addEventListener('click',function(){clearInterval(interval)});
btnr.addEventListener('click',btnrf);
btnr.addEventListener('click',function(){clearInterval(interval)});


$('#hero').on('touchstart',function(event){
    start = event.originalEvent.touches[0].pageX
})
$('#hero').on('touchend',function(event){
    end = event.originalEvent.changedTouches[0].pageX
    if (end-start >= 100) {
        clearInterval(interval)
        btnrf();
    }
    else if (end-start < 0) {
        clearInterval(interval)
        btnlf();
    }
})


let interval = setInterval(btnlf,2500);

//  burger

$('.burger').on('click',function(){
    if (!condition){
        condition = true;
        anime(({
        targets: '.burger_menu_container',
        translateX:['-200%','0'],
        easing:'easeInOutQuad',
        direction:'alternate',
        duration:1000,
        loop:false
            }));
        anime(({
        targets: '.burger',
        rotate:90,
        easing:'easeInOutQuad',
        direction:'alternate',
        duration:1000,
        loop:false
            }));
    } else {
        condition = false;
        anime(({
            targets:'.burger_menu_container',
            translateX:['0','-200%'],
            easing:'easeInOutQuad',
            direction:'alternate',
            duration:1000,
            loop:false
        }))
        anime(({
        targets: '.burger',
        rotate:0,
        easing:'easeInOutQuad',
        direction:'alternate',
        duration:1000,
        loop:false
            }));
    }
});

$('.menu_item').on('click',function(){
        condition = false;
        anime(({
            targets:'.burger_menu_container',
            translateX:['0','-200%'],
            easing:'easeInOutQuad',
            direction:'alternate',
            duration:1000,
            loop:false
        }))
        anime(({
        targets: '.burger',
        rotate:0,
        easing:'easeInOutQuad',
        direction:'alternate',
        duration:1000,
        loop:false
            }));
    
})