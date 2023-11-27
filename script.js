
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
const rincian1 = document.getElementsByClassName('rincian1')[0];

dish1.addEventListener('click', () =>{
  dish.src = "recourse/kuliner/sate_serapah.jpg";
  console.log(dish1);
  rincian1.innerHTML = "<h1>Sate Serapah</h1><p>Sate Serapah membawa kita pada petualangan kuliner yang berbeda dengan setiap gigitannya. Bukan hanya sekadar sate, melainkan kisah unik yang ditorehkan pada setiap potongan kulit, usus, hati, atau jeroan ayam. Bumbu kuning yang mencolok menjadi semacam mantra, membuka gerbang keberanian dalam menikmati cita rasa baru.</p>"
})
dish2.addEventListener('click', () =>{
  dish.src = "recourse/kuliner/tipat belayag.jpg";
  console.log(dish1);
  rincian1.innerHTML = "<h1>Tipat Belayag</h1><p>Tipat Belayag, seperti membuka lembaran sejarah yang terjalin dalam setiap lipatan ketupat. Hidangan ini menjadi bentuk keberagaman rasa yang memukau, seiring dengan ayam suwir, potongan telur, dan kuah lezat yang merangkum kekayaan tradisi Bali Timur. Setiap suapannya menjadi persembahan rahasia kuliner, menyampaikan cerita panjang dalam setiap serat ketupat dan helai daun kelapa muda. Jelajahi dan nikmati setiap gigitan, bukan sekadar kuliner, melainkan pengalaman penuh makna.</p>"
})
dish3.addEventListener('click', () =>{
  dish.src = "recourse/kuliner/pesan-tlengis.webp";
  rincian1.innerHTML = "<h1>Pepes Tlengis</h1><p>Pepes Tlengis adalah perjalanan keajaiban rasa dalam lipatan daun pisang. Dibalik kelezatannya, kita tak hanya menikmati daging ayam, udang, atau ikan yang dihaluskan, tetapi juga menyusuri sejarah rahasia bumbu telengis. Satu hidangan, ribuan cerita, dan pengalaman kuliner yang tak terlupakan.</p>"
})
dish4.addEventListener('click', () =>{
  dish.src = "recourse/kuliner/plecing-tlengis.jpg";
  rincian1.innerHTML = "<h1>Plecing Tlengis</h1><p>Plecing Tlengis bukan hanya makanan, melainkan perjalanan rasa yang meleburkan bumbu sejarah dan gurihnya kearifan lokal. Endapan santan yang menjadi bumbu Telengis tak hanya memberikan gurih pada sayuran, tetapi juga membangkitkan tradisi memasak yang terpelihara. Mari nikmati setiap helai sayur yang menjadi kanvas bagi kisah lezat ini.</p>"
})





