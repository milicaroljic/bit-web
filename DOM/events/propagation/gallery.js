var image = document.querySelectorAll("img");

for (var i = 0; i < image.length; i++) {
    var clikedImage = event.target;
    image[i].addEventListener("click", function (event) {
            event.target.classList.add("red");
            if (clikedImage !== 300) {
                event.stopPropagation();

            });
    }

}

document.addEventListener('click', globalLogger)

function globalLogger(event) {
    console.log(event.target);

}