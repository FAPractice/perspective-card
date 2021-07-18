const img = document.querySelector("img");
const container = document.querySelector(".container");

container.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) * 0.05;
  const y = (window.innerHeight / 2 - e.pageY) * 0.05;

  img.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
});

container.addEventListener("mouseenter", () => {
  img.style.transition = "none";
  img.style.boxShadow = `0px 80px 100px rgba(0, 0, 0, 0.4)`;

});

container.addEventListener("mouseleave", () => {
  img.style.transition = "all 250ms ease-in";
  img.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`;
  img.style.boxShadow = `0px 20px 40px rgba(0, 0, 0, 0.24)`;
});
