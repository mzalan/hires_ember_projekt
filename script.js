
function fadeAway(element, ms) {
  element.style.opacity = "0";
  element.style.transition = ms/1000+"s";
  let timeout = setTimeout(fadeDisable, ms);
}

function fadeDisable(timeout) {
  clearTimeout(timeout);
}
function wait(ms) {
  let timeout = setTimeout(fadeDisable, ms);
}
let startPresCounter = 0;
let isStartPres = false;
function startPres() {
  isStartPres = true;
  let timeout = setTimeout(startPres, 500);
  if(startPresCounter == 0) { 
    fadeAway(title, 500);
    fadeAway(startBtn, 500);
    alanhome.style.filter = "brightness(100%)";
    andrewhome.style.filter = "brightness(100%)";
  }
  else if(startPresCounter==1) {
    startBtn.className = "n";
    title.className = "n";
    homeDiv.className = "n";
  }
  else if(startPresCounter==2){
    fadeAway(alanhome, 500);
    fadeAway(andrewhome, 500);
    document.body.style.transition = "3.5s";
    document.body.style.background="black";
  }
  else {
    alanhome.style.display = "none";
    andrewhome.style.display = "none";
    container.style.display = "block";

  }
  startPresCounter++;
}
cim.addEventListener("mouseover", proceeding);
nagy1.addEventListener("mouseover", proceeding);
nagy2.addEventListener("mouseover", proceeding);

let hoveredList = [];
function proceeding(event) {
  if(hoveredList.length == 0) {
    hoveredList.push(event.target.id);
  }
  else {
    for (let i = 0; i < hoveredList.length; i++) {
      if(hoveredList[i] == event.target.id) {
        break;
      }
      if(hoveredList.length - 1 == i) {
        hoveredList.push(event.target.id);
      }
    }
  }
  if(hoveredList.length == 3) {
    arrow.style.display = "block";
  }
}
let nxtCounter = 0;
let isNext = false;
function next() {
  isNext = true; 
  let timeout = setTimeout(next, 500);
  if(nxtCounter == 0) {
    fadeAway(container, 500);
    fadeAway(arrow, 500);
  }
  else if(nxtCounter == 1) {
    container.className = "n";
    arrow.className="n";
    header.className="n";
    container2.style.display = "block";
    footer.style.display = "block";
    clearTimeout(timeout);
  }
  nxtCounter++;
}
function nameSzukules() {
  t1.style.width="18%";
  t2.style.width="18%";
  t2.style.left="82%";
}
function nameVissza() {
  t1.style.width="25%";
  t2.style.width="25%";
  t2.style.left="75%";
}