
let imagArr = ["https://github.com/sarsag/Founders/blob/master/Compressed%20and%20resized/20190324_165051-01-min.jpg?raw=true", "https://github.com/sarsag/Founders/blob/master/Compressed%20and%20resized/20190324_183357-01-min.jpg?raw=true", "https://github.com/sarsag/Founders/blob/master/Compressed%20and%20resized/20190514_134111-min.jpg?raw=true", "https://github.com/sarsag/Founders/blob/master/Compressed%20and%20resized/20190517_184744-min.jpg?raw=true", "https://github.com/sarsag/Founders/blob/master/Compressed%20and%20resized/20190623_202702-min.jpg?raw=true", "https://github.com/sarsag/Founders/blob/master/Compressed%20and%20resized/20190823_170316-min.jpg?raw=true", "https://github.com/sarsag/Founders/blob/master/Compressed%20and%20resized/20190829_144041-min.jpg?raw=true"]

let imagTitle = [ "Richmond Park, September 2019", "Hildenborough, March 2019", "Hildenborough, March 2019", "God's Own Junkyard, May 2019", "Busaba Eatthai, May 2019", "Kent, June 2019", "Barkingside, August 2019"]

let num = 0;
let interval;
let buttonIsPause = true;
let slideIndex = 0;
var dots = document.getElementsByClassName("dot")
var slider = document.getElementById("slider")

function selectDot(index, sliderTitle){
  for (i=0; i<dots.length; i++){
     dots[i].classList.remove("active");
  }
  dots[index].classList.add("active");
  slider.title = sliderTitle;
  slider.src = imagArr[index];
  slideIndex = index;
}

function next() {
  let slider = document.getElementById("slider")
  num++;
  if (num >= imagArr.length) {
    num = 0
  }
  slider.src = imagArr[num];
  slider.title = imagTitle[num];
  slideIndex++;
  slideIndex = ((slideIndex%7)+7)%7;
  dots[slideIndex].classList.add("active");
  dots[((slideIndex-1%7)+7)%7].classList.remove("active");
}

function previous() {
  let slider = document.getElementById("slider");
  num--;
  if (num < 0) {
    num = imagArr.length - 1;
  }
  slider.src = imagArr[num];
  slider.title = imagTitle[num];
  slideIndex--;
  slideIndex = ((slideIndex%7)+7)%7;
  dots[slideIndex].classList.add("active");
  dots[((slideIndex+1%7)+7)%7].classList.remove("active");
}

function setSlideshowInterval(){
  interval = setInterval(function() {
    next();
    }, 3000);
}

window.onload = setSlideshowInterval();

function pausePlay() {
  if (buttonIsPause) {
    clearInterval(interval);
    document.getElementsByClassName("pause-play-button")[0].innerHTML = "&#9658;";
    buttonIsPause = false;
  } else {
    setSlideshowInterval();
    document.getElementsByClassName("pause-play-button")[0].innerHTML = "&#10074; &#10074;";
    buttonIsPause = true;
  }
}


document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
        //left
        e.preventDefault();
        previous();
        break;
    case 39:
        //right
        e.preventDefault();
        next();
        break;
    case 32:
        //pause and play
        e.preventDefault();
        pausePlay();
        break;
  }
}

function resnav() {
  var x = document.getElementById("resnavbar");
  if (x.className === "left") {
    x.className += " responsive";
  } else {
    x.className = "left";
  }
}