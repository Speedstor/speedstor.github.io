

function toggleLightDark(){
    console.log(document.getElementById("myonoffswitch").checked);
    var indexBody = document.getElementsByTagName("body")[0];
    if(document.getElementById("myonoffswitch").checked){
        //light
        indexBody.style.color = "black";
        indexBody.style.background = "url(./src/transparentPattern.png)";
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

    }else{
        //dark
        indexBody.style.color = "#e7e7e7";
        indexBody.style.background = "url(./src/transparentPattern_white.png)";
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