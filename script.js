// scorrlactive
let sections = document.querySelectorAll("section");
let navBar = document.querySelectorAll('header nav a');
let navbar = document.querySelector('.navbar');
let hamburgerIcon = document.getElementById('hamburger-icon');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navBar.forEach(links => {
                links.classList.remove('active');
                document.querySelector(`header nav a[href*= ${id}]`).classList.add('active');
            });
        }
    });

    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
};
document.addEventListener('DOMContentLoaded',()=> {
    const aboutImg = document.querySelector('.about-img');
    const totalDots = 50; 

    for (let i = 0; i < totalDots; i++) {
        const span = document.createElement('span');
        span.style.setProperty('--i', i); 
        span.classList.add('dot'); 
        aboutImg.appendChild(span); 
    }
});

hamburgerIcon.addEventListener('click', () => {
    navbar.classList.toggle('show');
    if (navbar.classList.contains('show')) {
        navbar.style.height = "auto";
    } else {
        navbar.style.height = "0";
    }
});

// Close navbar when a link is clicked
navBar.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('show');
        navbar.style.height = "auto";
    });
});

// my skills circles

const circles = document.querySelectorAll('.cricle');

circles.forEach(elem => {
    var dots = parseInt(elem.getAttribute("data-dots"));
    var marked = parseInt(elem.getAttribute("data-percent"));
    var percent = Math.floor(dots * marked / 100);
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }

    elem.innerHTML = points;
    const pointsMarked = elem.querySelectorAll(".points");
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add("marked")
    }
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let darkmodeicon = document.getElementById('darkMode-icon');
darkmodeicon.onclick = () => {
    darkmodeicon.classList.toggle('bx-sun');
    document.body.classList.toggle('add-color');


}

document.getElementById("downloadBtn").addEventListener("click", function () {
    const resumeUrl = "resume.pdf";  // Change this to the actual path of your resume file
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Jayandiran_Resume.pdf";  // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
