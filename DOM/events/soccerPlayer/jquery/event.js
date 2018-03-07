
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

      var field = $(".field");
      var player = $(".player");
      var btn = $("button");
  
      var clickHandler = function(event) {  
          var top = event.clientY - player.height()/2;
          var left = event.clientX - player.width()/2;
          player.offset({top:top,left:left})
      }
  
      field.click(clickHandler);
  
      var boolean = true;
  
      btn.click(function(){
          if(boolean){
              field.unbind();
              btn.text('Start Moving')
              boolean = false;
          } else if(!boolean){
              field.click(clickHandler);
              btn.text('Stop Moving')
              boolean = true;
          }
      });
  })