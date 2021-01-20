// Opening the popup and triggering autoplay
function OpenOverlay(id) {
  let OpenVideo = document.getElementById(id);

  if ((OpenVideo.style.display = "none")) {
    OpenVideo.style.display = "block";
  }

  // triggering the iframe to autoplay
  var player = new Vimeo.Player(OpenVideo);
  player.play();
}

// Closing Popup
jQuery(document).ready(function () {
  jQuery(
    ".wrapper .main-content .Overlay .Job1-overlay .close-button button"
  ).on("click", function () {
    1;
    var iframeId = $(this).val();
    var $frame = jQuery(
      ".wrapper .main-content .Overlay .Job1-overlay iframe#" + iframeId
    );
    // saves the current iframe source
    var vidsrc = $frame.attr("src");

    // sets the source to nothing, stopping the video
    $frame.attr("src", "");

    // sets it back to the correct link so that it reloads immediately on the next window open
    $frame.attr("src", vidsrc);
    jQuery(".wrapper .main-content .Overlay .Job1-overlay").hide();
  });
});
