"use strict";

const bannerVideo = document.querySelector(".banner-video");
const soundButton = document.querySelector(".sound-button");

let sound = false;
soundButton.addEventListener("click", () => {
  sound = sound === false ? true : false;

  if (sound) {
    soundButton.textContent = "Turn Sound Off";
    bannerVideo.muted = false;
    bannerVideo.volume = 1.0;
  } else {
    soundButton.textContent = "Turn Sound On";
    bannerVideo.muted = true;
  }
});
