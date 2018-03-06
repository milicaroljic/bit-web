
// var player = document.querySelector("img");
// var listener = document.querySelector("body");
// var button  = document.querySelector("button");

// function moveImg (event){
//    var middle = player.width / 2;

//    player.style.top= (event.clientY-middle) + "px";
//    player.style.left = (event.clientX-middle) + "px";
// }


// function stopMoving (event){
//     listener.removeEventListener("click",moveImg);
// }


// listener.addEventListener("click",moveImg);
// button.addEventListener("click",stopMoving);

$(function(){
 var $player = $("img");
 //var $listener = $("body");
 var $button = $("button");

 $("body").on("click",function(event){
    var $middle = $player.width() /2;
    var $top = (event.pageY-$middle)
    var $left = (event.pageX-$middle)
    
    //    $player.css("top","(event.clientY-$middle) + px");
    //    $player.css("left","(event.clientX-$middle) + px");
       
       })
 });
})