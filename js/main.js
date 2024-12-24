function show1(){
  document.getElementById('card-info1').style.display ='none';
}
function show2(){
  document.getElementById('card-info1').style.display = 'block';
}

// JavaScript function to toggle mute/unmute
function toggleMute(videoId, buttonId) {
  const video = document.getElementById(videoId);
  const button = document.getElementById(buttonId);
  var play1 = '\U+23F5';
  var stop = '&#10074';
  if (video.muted) {
    video.muted = false;
    button.textContent = "❚❚ ";
  } else {
    video.muted = true;
    button.textContent = " ▶";
  }
}