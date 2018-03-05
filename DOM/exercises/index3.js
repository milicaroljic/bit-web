var parent1 = document.querySelector("body");

function createOpt(arr, parent) {
    var select = document.createElement("select");
    for (var i = 0; i < arr.length; i++) {
        var option = document.createElement("option");
        option.textContent = arr[i];
        option.value = arr[i];
        select.appendChild (option);
    }
    parent.appendChild(select);
}

createOpt(["first", "second", "third"],parent1);