$(function(){ 
    var $imageHolder = $("img-holder")

    var $button = $("button").on("click", function(){
        var $inputValue = $("input").val()

        $.getJSON ("https://api.github.com/search/users?q=" + $inputValue, function(response) {
            response.items.forEach((element, i) => {
                // console.log(ele)
                if(i > 6) {
                    return;
                }
                var $aboutUser = $("<div>")
                var $aboutUserImage = $("<img>")
                var $aboutUserLoginInfo = $("<p>")
                // $aboutUser.height("300px").width("300px")
                $aboutUserImage.attr("src", element.avatar_url)
                $aboutUserImage.width("100%")
                $aboutUserLoginInfo.text(element.login)
                $aboutUser.append($aboutUserImage, $aboutUserLoginInfo)
                $imageHolder.prepend($aboutUser)
                console.log($imageHolder)
                console.log($aboutUser);
                
            }); 
            
             });    

         })
    
     })

    // function allFine(response) {
    //     response.items.forEach(element => {
    //         var $aboutUser = $("<div>")
    //         var $aboutUserImage = $("img")
    //         var $aboutUserLoginInfo = $("p")
    //         $aboutUser.height("300px").width("300px")
    //         $aboutUserImage.attr("src", element.avatar_url)
    //         $aboutUserImage.width("100%")
    //         $aboutUserLoginInfo.text(element.login)
    //         $aboutUser.append($aboutUserImage, $aboutUserLoginInfo)
    //     }); 
        
    //     $imageHolder.append($aboutUser)
    // }
// })
