const images =[
    "./slides/1.jpg", "./slides/2.jpg", "./slides/3.jpg", "./slides/4.jpg", "./slides/5.jpg", "./slides/6.jpg", "./slides/7.jpg"
];
let i = 1;
const slider = document.querySelector("[data-slider]");
const btnPrev = document.querySelector("[data-btn-prev]");
const btnNext = document.querySelector("[data-btn-next]");


const outputSlides = () => {
    slider.innerHTML =`<img src=${images[i-1]} alt=slide_${images.indexOf(images[i-1]) + 1}>`;
    log(images[i-1])
}

outputSlides();

btnNext.onclick = () =>{
    if(i < images.length){
        i++;
    }else{
        i = 1;
    }

    outputSlides();
}

btnPrev.onclick = () =>{
    if(i > 1 ){
        i--;
    }else{
        i = images.length;
    }
    outputSlides();
}