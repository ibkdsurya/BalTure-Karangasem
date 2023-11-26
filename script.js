
// js bagian destinasi
const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";  
    track.dataset.prevPercentage = track.dataset.percentage;
  }
  
  const handleOnMove = e => {
    if(track.dataset.mouseDownAt === "0") return;
    
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 2;
    
    const percentage = (mouseDelta / maxDelta) * -100,
          nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
          nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
    
    track.dataset.percentage = nextPercentage;
    
    track.animate({
      transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards" });
    
    for(const image of track.getElementsByClassName("image")) {
      image.animate({
        objectPosition: `${100 + nextPercentage}% center`
      }, { duration: 1200, fill: "forwards" });
    }
  }


window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);


// js bagian budaya
const swiper = new Swiper(".swiper",{
    autoplay:{
        delay: 8000,
        disableOnInteraction: false,
    },
    grapCursor: true,
    loop: true,

    pagination:{
        el:".swiper-pagination",
        clickable: true,
    },

    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
})

// js bagian kuliner
const dish = document.getElementById('dish');
const dish1 = document.getElementById('dish1');
const dish2 = document.getElementById('dish2');
const dish3 = document.getElementById('dish3');
const dish4 = document.getElementById('dish4');

dish1.addEventListener('click', () =>{
  dish.src = "recourse/kuliner/sate serapah.jpg"
})
dish2.addEventListener('click', () =>{
  dish.src = "recourse/kuliner/tipat belayag.jpg"
})
dish3.addEventListener('click', () =>{
  dish.src = "recourse/kuliner/pesan-tlengis.webp"
})
dish4.addEventListener('click', () =>{
  dish.src = "recourse/kuliner/plecing-tlengis.jpg"
})


