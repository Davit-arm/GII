moviesC = [
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

movies = [
    {
        'Black Adam': {
            genre: 'Action',
            rating: '6.5',
            image:"imgs/adammain.png",
            desc: 'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods, Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.'
        },
        '1899': {
            genre: 'Mystery',
            rating: '7.3',
            image:"imgs/shipmovie.png",
            desc: 'Multinational immigrants traveling from the old continent to the new encounter a nightmarish riddle aboard a second ship adrift on the open sea.'
        },
        'Lightyear': {
            genre: 'Adventure',
            rating: '6.1',
            image:"imgs/defaultmovie.png",
            desc: 'While spending years attempting to return home, marooned Space Ranger Buzz Lightyear encounters an army of ruthless robots commanded by Zurg who are trying to steal his fuel source.'
        },
        'Fantastic Beasts': {
            genre: 'Fantasy',
            rating: '7.2',
            image:"imgs/fantasticbeast.png",
            desc: 'The adventures of writer Newt Scamander in New York\'s secret community of witches and wizards seventy years before Harry Potter reads his book in school.'
        },
        'Dune': {
            genre: 'Science Fiction',
            rating: '8.0',
            image:"imgs/dune.png",
            desc: 'A noble family becomes embroiled in a war for control over the galaxy\'s most valuable asset while its heir is haunted by visions of a dark future.'
        },
        'Tenet': {
            genre: 'Science Fiction',
            rating: '7.3',
            image:"imgs/tenet.png",
            desc: 'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.'
        },
        'Eternals': {
            genre: 'Science Fiction',
            rating: '6.3',
            image:"imgs/eternals.png",
            desc: 'The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.'
        },
        'X-Men': {
            genre: 'Science Fiction',
            rating: '7.3',
            image:"imgs/xmen.png",
            desc: 'In a world where mutants are oppressed, two groups engage in conflict: the peaceful X-Men and the militant Brotherhood of Mutants.'
        },
        'Spider-Man: Brand New Day': {
            genre: 'Action',
            rating: '7.5',
            image:"imgs/spiderman.jpg",
            desc: 'Peter Parker navigates life as a street-level hero while trying to rebuild his world from scratch.'
        },
        'Shadow and Bone': {
            genre: 'Fantasy',
            rating: '7.6',
            image:"imgs/shadow.png",
            desc: 'Dark forces conspire against orphan mapmaker Alina Starkov when she unleashes an extraordinary power that could change the fate of her war-torn world.'
        },
        'The Sandman': {
            genre: 'Fantasy',
            rating: '7.7',
            image:"imgs/sandman.png",
            desc: 'Upon escaping after decades of imprisonment by a mortal wizard, Dream, the personification of dreams, sets about reclaiming his lost equipment.'
        },
        'Lock & Key': {
            genre: 'Mystery',
            rating: '7.3',
            image:"imgs/lock.png",
            desc: 'After their father is murdered under mysterious circumstances, three siblings and their mother move into their ancestral home, Keyhouse, which they discover is full of magical keys.'
        },
        'Umbrella Academy': {
            genre: 'Mystery',
            rating: '7.8',
            image:"imgs/umbrella.png",
            desc: 'A family of former child heroes, now grown apart, must reunite to solve the mystery of their father\'s death and head off the threat of an imminent apocalypse.'
        },
        'The Flash': {
            genre: 'Superhero',
            rating: '7.5',
            image:"imgs/flash.png",
            desc: 'After being struck by lightning, Barry Allen wakes up from his coma to discover he has been granted the gift of super speed, becoming the Flash to fight crime in Central City.'
        },
        'The Witcher': {
            genre: 'Mystery',
            rating: '8.0',
            image:"imgs/witcher.png",
            desc: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.'
        },
        'Game Of Thrones': {
            genre: 'Fantasy',
            rating: '9.2',
            image:"imgs/gameofthrones.jpg",
            desc: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for a millennia.'
        }
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


let modaloverlay = document.querySelector('.modal__overlay')
let modal = document.querySelector('.modal')
let moviesThumbnail = document.querySelectorAll('.movies__thumbnails');
let seriesThumbnail = document.querySelectorAll('.series__thumbnails');
// slider
function btnlf() {
    currentMovie++
    slider.classList.add('changing');
    if (currentMovie >= moviesC.length){
        currentMovie = 0;
    }
    let movie = moviesC[currentMovie]
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
        currentMovie = moviesC.length - 1;
    }
    // console.log(currentMovie)
    let movie = moviesC[currentMovie]
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

// modals

$('.close').on('click',function(){
    anime(({
        targets:'.modal',
        opacity:[1,0],
        direction:'alternate',
        easing:'easeInOutQuad',
        duration:500,
        loop:false,
        complete: function(){
            $('.modal__overlay').css('display','none')
        }
    }))
})


moviesThumbnail.forEach(movieThumb => {
    movieThumb.addEventListener('click', function(event){
        let originalmovie = event.currentTarget.querySelector('h1')
        let name = modal.querySelector('.Mname');
        let genre = modal.querySelector('.Mgenre');
        let desc = modal.querySelector('.MdescText')
        let rating = modal.querySelector('.rating_number')
        for (let movie in movies[0]){
            if (originalmovie.textContent == movie) {
                modaloverlay.style.display = 'flex';
                console.log('turned on the modal')
                name.textContent = movie
                console.log('changed name')
                genre.textContent = movies[0][movie].genre
                console.log('changed genre')
                desc.textContent = movies[0][movie].desc
                console.log('changed description')
                rating.textContent = movies[0][movie].rating
                console.log('changed rating')
                modal.style.backgroundImage = `url(${movies[0][movie].image})` 
                console.log('changed background')
                anime(({
                    targets:'.modal',
                    opacity:[0,1],
                    easing:'easeInOutQuad',
                    direction:'alternate',
                    duration:'400',
                    loop:false
                }))
            }
        }
        
    })
})

seriesThumbnail.forEach(serieThumb => {
    serieThumb.addEventListener('click', function(event){
        let originalserie = event.currentTarget.querySelector('h1')
        let name = modal.querySelector('.Mname');
        let genre = modal.querySelector('.Mgenre');
        let desc = modal.querySelector('.MdescText')
        let rating = modal.querySelector('.rating_number')
        for (let serie in movies[0]){
            if (originalserie.textContent == serie) {
                modaloverlay.style.display = 'flex';
                modal.style.opacity = '1';
                console.log('turned on the modal')
                name.textContent = serie
                console.log('changed name')
                genre.textContent = movies[0][serie].genre
                console.log('changed genre')
                desc.textContent = movies[0][serie].desc
                console.log('changed description')
                rating.textContent = movies[0][serie].rating
                console.log('changed rating')
                modal.style.backgroundImage = `url(${movies[0][serie].image})` 
                console.log('changed background')
                anime(({
                    targets:'.modal',
                    opacity:[0,1],
                    direction:'alternate',
                    easing:'easeInOutQuad',
                    loop:false,
                    duration:500
                }))
            }
        }
        
    })
})