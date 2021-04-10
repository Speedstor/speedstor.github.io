
var timeline = document.getElementById("timelineScroll");

function timelineScrollEnter(e){

    document.onmousemove = timelineScrollMove;
    timeline = document.getElementById("timelineScroll");
    timeline.style.scrollBehavior = "auto";
    timeline.onmouseleave = timelineScrollLeave;
}

function timelineScrollMove(e){

    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos = (e.clientX - timeline.offsetLeft) / timeline.offsetWidth;
    // set the element's new position:
    timeline.scrollLeft = 8500 * pos;
}

function timelineScrollLeave(e){
    console.log("exit")
    document.onmousemove = null;
    timeline.onmouseleave = null;

}

function spotlightSelect(element, title, imgLink, hrefLink){
    var items = document.getElementsByClassName("spotlightListItem");
    for(var i = 0; i < items.length; i++){
        items[i].classList.remove("selected");
    }

    element.classList.add("selected");

    document.getElementById("spotlightImg").style.background = "url("+imgLink+")";
    document.getElementById("spotlightLink").innerHTML = title;
    
    document.getElementById("spotlightImg").href = hrefLink;
    document.getElementById("spotlightLink").href = hrefLink;
}