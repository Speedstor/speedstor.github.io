function focusImg(title, date, srcs){

    document.getElementById("imgDisplayTitle").innerText = title;
    document.getElementById("imgDisplayDate").innerText = date;

    var htmlText = "";

    for(var i = 0; i < srcs.length; i++){
        if(srcs[i].substring(srcs[i].length - 4) === ".mp4"){
            htmlText += "<video controls><source src='"+srcs[i]+"' type='video/mp4'>Your browser does not support the video tag.</video>\n"
        }else{
            htmlText += "<img src='"+srcs[i]+"'/>\n";
        }
    }
    
    
    
    document.getElementById("imgContent").innerHTML = htmlText;




    document.getElementById("mainDiv").classList.add("focused");
    document.getElementById("indexBody").classList.add("focused");
    document.getElementById("imgDisplay").style.display = "block";
}


function defocus(){
    document.getElementById("mainDiv").classList.remove("focused");
    document.getElementById("indexBody").classList.remove("focused");
    document.getElementById("imgDisplay").style.display = "none";
}

function changedTag(){


    var elems = document.getElementsByClassName("imageContainer");
    for(var i = 0; i < elems.length; i++){
        elems[i].style.display = "none";
    }

    if(document.getElementById("realismCheck").checked){
        displayFlex("realism");
    }
    if(document.getElementById("colorCheck").checked)
        displayFlex("inColor");
    if(document.getElementById("animationCheck").checked)
        displayFlex("animation");
    if(document.getElementById("sketchCheck").checked)
        displayFlex("quickSketch");
    if(document.getElementById("inktoberChecker").checked)
        displayFlex("inktober");
    if(document.getElementById("comicCheck").checked)
        displayFlex("comic");
    if(document.getElementById("vfxCheck").checked)
        displayFlex("vfx");
    if(document.getElementById("craftCheck").checked)
        displayFlex("craft");
    
    if(document.getElementById("lessCheck").checked){
        var elems = document.getElementsByClassName("less");
        for(var i = 0; i < elems.length; i++){
            elems[i].style.display = "none";
        }

    }

}

function displayFlex(className){
    var elems = document.getElementsByClassName(className);
    for(var i = 0; i < elems.length; i++){
        elems[i].style.display = "block";
    }
}

function selectAllTags(){
    if(document.getElementById("selectAllTags").innerText === "deselect all"){
        document.getElementById("selectAllTags").innerText = "select all";
        document.getElementById("realismCheck").checked = false;
        document.getElementById("colorCheck").checked = false;
        document.getElementById("animationCheck").checked = false;
        document.getElementById("sketchCheck").checked = false;
        document.getElementById("inktoberChecker").checked = false;
        document.getElementById("comicCheck").checked = false;
        document.getElementById("vfxCheck").checked = false;
        document.getElementById("craftCheck").checked = false;
    }else{
        document.getElementById("selectAllTags").innerText = "deselect all";
        document.getElementById("realismCheck").checked = true;
        document.getElementById("colorCheck").checked = true;
        document.getElementById("animationCheck").checked = true;
        document.getElementById("sketchCheck").checked = true;
        document.getElementById("inktoberChecker").checked = true;
        document.getElementById("comicCheck").checked = true;
        document.getElementById("vfxCheck").checked = true;
        document.getElementById("craftCheck").checked = true;
    }
    changedTag();
}