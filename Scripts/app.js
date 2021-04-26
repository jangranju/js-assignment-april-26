// IIFE -> Immediately Invoked Function Expression

(function(){

    function start(){
    console.log(`%c App Started...`, "font-size:blue;")
    document.getElementsByClassName("Intro")[0].innerHTML = "My Name is Khan <br/> But I am not a terrorist...";

    
    }

    window.addEventListener("load", start);

})();

    