let heightPage = window.innerHeight;
let widthPage = window.innerWidth;


window.onresize = () => {
    heightPage = window.innerHeight;
    widthPage = window.innerWidth;
    aramkorResize();
}
let imageWidth;
let imageTop = 0;
let imageLeft = 0;
function aramkorResize() {
    let aramkor = document.getElementById("aramkor");


    if(heightPage > widthPage) {
        imageWidth = widthPage;
    }
    else if(widthPage > heightPage) {
        imageWidth = heightPage;
    }
    if(imageWidth > 700) {
        imageWidth -= 8;
        imageTop = 4;
    }
    aramkor.style.top = imageTop + "px";
    aramkor.style.left = (widthPage - imageWidth) / 2 + "px";
    aramkor.style.width = imageWidth + "px";
    aramkor.style.height = imageWidth + "px";
    console.log(aramkor);
}



function valami() {
    let aramkor = document.getElementById("aramkor");
    aramkor.style.width = imageWidth * 2 + "px";
    aramkor.style.left = "10%";
    
}
