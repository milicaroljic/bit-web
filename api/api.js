function loadDocument() {

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://www.freegeoip.net/xml/4.2.2.2");
    xmlhttp.send();

    xmlhttp.onload = function () {
        var xmlDoc = xmlhttp.responseXML;
        var from = xmlDoc.getElementsByTagName("CountryName")[0].childNodes[0].nodeValue;
        console.log(from);
        var p = document.querySelector("#demo");
        p.textContent = from;
        //document.getElementById("demo").innerHTML = this.responseText;
    }
}