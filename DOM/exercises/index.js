var lists = document.querySelectorAll("ul");
var list2 = lists[1];
list2.className = "bgul-color";


// function selectAllLi() {
//     var lItems = document.querySelectorAll("li");
//     console.log(lItems);
    
//     for (var i = 0; i < lItems.length; i++) {
//         var li = lItems[i];
//         li.className = "test";
        
//     }

//     console.log(lItems);
    
//     // return lItems;
// }

// selectAllLi();

// var liColor = selectAllLi();

function selectLifromlastUl() {
    var thirdUl = document.querySelectorAll("ul");
    console.log(thirdUl);    
    var lastUl = thirdUl[2];
   console.log(lastUl);
   
   
    for (var i = 0; i < lastUl.length; i++) {
        var li = lastUl[i];
        li.className = "third";
        
    }
}

    selectLifromlastUl();