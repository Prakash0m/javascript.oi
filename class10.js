const images = ["kng.jpg", "kng1.jpeg", "king2.jpg", "kng2.webp", "kng3.webp"];
const imglength = images.length;
let i = 0;
const demofunction = () => {
  i = i % imglength;

  document.querySelector("img").src = `${images[i]}`;
  i++;
};
let set = setInterval(demofunction, 5000);

document.querySelector(`.right`).addEventListener(`click`, demofunction);
document.querySelector(`.left`).addEventListener(`click`, () => {
  if (1 < 0) {
    i = imglength - 1;
  }
  document.querySelector(`img`).src = `&{images[i]}`;
  i--;
});
document.querySelector("img").addEventListener("mouseover", () => {
  clearInterval(set);
});
document.querySelector("img").addEventListener("mouseout", () => {
  set = setInterval(demofunction, 5000);
});
