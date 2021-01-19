function OpenOverlay(id) {
  let OpenVideo = document.getElementById(id);

  if ((OpenVideo.style.display = "none")) {
    OpenVideo.style.display = "block";
  }
}
$(document).ready(function () {
  var image = ".wrapper .main-content .our-jobs .job1 .job-image img";
  $(image).click(function (e) {
    var $frame = jQuery(
      ".wrapper .main-content .Overlay .Job1-overlay iframe",
      jQuery(this)
    );
    let newAttr = $frame.attr("src", "&autoplay=1");
    console.log(newAttr);
    console.log("Excuted");
  });
});

$(".js-modal-btn").modalVideo();
