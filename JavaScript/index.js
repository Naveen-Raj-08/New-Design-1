function OpenOverlay(id) {
  let OpenVideo = document.getElementById(id);

  if ((OpenVideo.style.display = "none")) {
    OpenVideo.style.display = "block";
  }
}

function CloseButton(id) {
  let CloseVideo = document.getElementById(id);

  if ((CloseVideo.style.display = "block")) {
    CloseVideo.style.display = "none";
  }
}
