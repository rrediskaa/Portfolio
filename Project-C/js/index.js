var myVideo = document.getElementById("video1"); 
function playPause() { 
    if (myVideo.paused) 
        myVideo.play(); 
    else 
        myVideo.pause(); 
}

document.addEventListener('animationstart', function (e) {
    if (e.animationName === 'fade-in') {
        e.target.classList.add('did-fade-in');
    }
});
  
document.addEventListener('animationend', function (e) {
    if (e.animationName === 'fade-out') {
        e.target.classList.remove('did-fade-in');
     }
  });




function toggleFullscreen() {
    let elem = document.querySelector("video");
  
    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch((err) => {
        alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  }
// function expandNav(){
//     var navbar = document.getElementById("nav-bar");
//     navbar.style.width = "20rem";}
//     var navlink = document.getElementById("nav-link");
//     navlink.style.opacity = "1";

// function reduceNav(){
//     var navbar = document.getElementById("nav-bar");
//     navbar.style.width = "5rem";
// }

// var navbar = document.getElementById("nav-bar");
// navbar.mouseleave(reduceNav());

