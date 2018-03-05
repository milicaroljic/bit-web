var marioStanding = document.querySelector(".standing");
var body = document.querySelector("body");

function replaceMario(event) {
    if(event.keyCode === 39) { // ogranicenje, samo na desnu strelicu da radi
        console.log(event);
        
    }
    marioStanding.setAttribute("src", "mario_running.gif");

    const keyName = event.key;

}

body.addEventListener("keydown", replaceMario);
