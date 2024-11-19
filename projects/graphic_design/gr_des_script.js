const footerText = document.querySelector("footer p");
const mgrInnerWrapper = document.querySelector(".merry-go-round-inner-wrapper");
const portraitWrapper = document.querySelector(".gd-portrait-wrapper");

if (getInnerWidth() < 1200) {
  footerText.textContent = "push here to pause merry-go-round";
  document.querySelector(".fl4-w-1").remove();
  document.querySelector(".fl4-w-2").remove();
}

footerText.addEventListener("touchstart", () => {
  mgrInnerWrapper.style.animationPlayState = "paused";
  portraitWrapper.style.animationPlayState = "paused";
});
footerText.addEventListener("touchend", () => {
  mgrInnerWrapper.style.animationPlayState = "running";
  portraitWrapper.style.animationPlayState = "running";
});
