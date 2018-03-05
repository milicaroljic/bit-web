var marioStanding = document.querySelector(".standing");
var body = document.querySelector("body");

function replaceMario(event) {
    marioStanding.setAttribute("src", "mario_running.gif");

    const keyName = event.key;

}
body.addEventListener("keydown", replaceMario);
