const images =[
    "./slides/1.jpg", "./slides/2.jpg", "./slides/3.jpg", "./slides/4.jpg", "./slides/5.jpg", "./slides/6.jpg", "./slides/7.jpg"
];

const slider = document.querySelector("[data-slider]");
const btnPrev = document.querySelector("[data-btn-prev]");
const btnNext = document.querySelector("[data-btn-next]");

const setupSlides = () => {
    images.forEach((imageUrl, index) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.dataset.index = index;
    img.alt = `slide ${index + 1}`;

    slider.appendChild(img);
    });

    
}

setupSlides();