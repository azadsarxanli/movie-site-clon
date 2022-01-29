//Define variables

const FilmPoster = document.getElementsByClassName("film-poster");
const PosterTitle = document.getElementsByClassName("film-title");
const leftBtn = document.querySelector('.left-button')
const rightBtn = document.querySelector('.right-button')
const sliderItems = document.querySelector('.slider-items')

rightBtn.addEventListener('click', ()=>{
    let restNumber = sliderItems.offsetWidth - sliderItems.scrollLeft
    sliderItems.scrollLeft +=150
    console.log("scrolLeft", sliderItems.scrollLeft)
    console.log("offsetWidth", sliderItems.offsetWidth)
    console.log("restNumber",restNumber)
    if(sliderItems.scrollLeft === sliderItems.scrollLeft + sliderItems.offsetWidth){
        sliderItems.scrollLeft = 0

    }
})
//Adding event listeners
