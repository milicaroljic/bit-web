function loadDocument() {

    var request = new XMLHttpRequest();
    request.open("GET", "https://freegeoip.net/json/github.com");


    request.onload = function () {
        var data = JSON.parse(request.responseText);/////// json string prtvorim u objekat i to je sada data objekat 
        console.log("ovo je JSON: ",request.responseText);
        console.log("ovo je objekat parsiran iz JSON-a: ",data);
        var dataString = JSON.stringify(data);
        console.log("Ovo ima isti sadrzaj kao JSON",dataString);
        
    }
    request.send();
};