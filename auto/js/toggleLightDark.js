

function toggleLightDark(){
    console.log(document.getElementById("myonoffswitch").checked);
    var indexBody = document.getElementsByTagName("body")[0];
    if(document.getElementById("myonoffswitch").checked){
        //light
        indexBody.style.color = "black";
        indexBody.style.background = "url(../src/transparentPattern.png)";
        indexBody.style.backgroundColor = "rgba(0,0,0,0)";

        var items = document.getElementsByClassName("spotlightListItem");
        for(var i = 0; i < items.length; i++){
            items[i].classList.remove("dark");
        }
        var inputs = document.getElementsByTagName("input");
        for(var i = 0; i < inputs.length; i++){
            inputs[i].classList.remove("dark");
        }
        var textareas = document.getElementsByTagName("textarea");
        for(var i = 0; i < textareas.length; i++){
            textareas[i].classList.remove("dark");
        }

        if( document.getElementById("statImg")){
            document.getElementById("statImg").src = "https://github-readme-stats-tau-henna.vercel.app/api/top-langs/?username=speedstor&layout=compact&langs_count=100";
        }

        if( document.getElementById("sideBar1")){
            document.getElementById("sideBar1").style.background = "white";
            document.getElementById("sideBarInfo").style.background = "rgb(241, 241, 241)";
        }
        


    }else{
        //dark
        indexBody.style.color = "#e7e7e7";
        indexBody.style.background = "url(../src/transparentPattern_white.png)";
        indexBody.style.backgroundColor = "rgba(0,0,0,0.91)";

        var items = document.getElementsByClassName("spotlightListItem");
        for(var i = 0; i < items.length; i++){
            items[i].classList.add("dark");
        }

        var inputs = document.getElementsByTagName("input");
        for(var i = 0; i < inputs.length; i++){
            inputs[i].classList.add("dark");
        }

        var textareas = document.getElementsByTagName("textarea");
        for(var i = 0; i < textareas.length; i++){
            textareas[i].classList.add("dark");
        }
        if( document.getElementById("statImg")){
            document.getElementById("statImg").src = "https://github-readme-stats-tau-henna.vercel.app/api/top-langs/?username=speedstor&layout=compact&langs_count=100&theme=vue-dark";
        }
        
        
        if( document.getElementById("sideBar1")){
            document.getElementById("sideBar1").style.background = "rgb(58, 58, 58)";
            document.getElementById("sideBarInfo").style.background = "rgb(32, 32, 32)";
        }
        

    }
}

function share(btn){
    
    var shareDiv = document.getElementById("shareDiv");

    shareDiv.style.right = (window.innerWidth-btn.offsetLeft-btn.offsetWidth - 30)+"px";
    shareDiv.style.top = (btn.offsetTop+140)+"px";

    console.log(btn);

    if(shareDiv.style.opacity == 0){
        shareDiv.style.opacity = 1;
        shareDiv.style.height = "63px";
    }else{
        shareDiv.style.opacity = 0;
        shareDiv.style.height = "0px";

    }
}

function lightDarkOnClick(){
    clearInterval(window.checkTimeInterval);
    console.log("cleared")
}


// document.addEventListener("DOMContentLoaded", function(event) {
//     // - Code to execute when all DOM content is loaded. 
//     // - including fonts, images, etc.
// });

// window.onload = () => {
//     console.log("load")

//     autoCheckTheme();

//     window.checkTimeInterval = window.setInterval(function(){ // Set interval for checking
//         autoCheckTheme();
//     }, 600000); // Repeat every 60000 milliseconds (1 minute)
// }

function autoCheckTheme(){
    var nowDate = new Date();

    if(!(nowDate.getHours() >= 6 && nowDate.getHours() < 19)){
        document.getElementById("myonoffswitch").checked = false;
        toggleLightDark()
    }
}
