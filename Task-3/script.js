let images = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg", "img5.jpeg"];
let index = 0;


function showImg() {
  let img = document.getElementById('slide');
  img.src = images[index];
}
showImg();

document.getElementById('prevBtn').addEventListener('click', () => {
  index--;
  if (index < 0) index = images.length - 1;
  showImg();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  index++;
  if (index >= images.length) index = 0;
  showImg();
});

let interval = setInterval(() => {
  index++;
  if (index >= images.length) index = 0;
  showImg();
}, 3000);

document.getElementById('carousel').onmouseout = () => {
  clearInterval(interval);
  interval = setInterval(() => {
    index++;
    if (index >= images.length) index = 0;
    showImg();
  }, 3000);
}

document.getElementById('carousel').onmouseover = () => {
  clearInterval(interval);
}
