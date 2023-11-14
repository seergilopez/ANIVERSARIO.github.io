var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  const   header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 0); 
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}










const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference
}
function closeImg(){
    fulImgBox.style.display = "none";
}