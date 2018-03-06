$(function () {
    
    var links = [
        "http://via.placeholder.com/350x150",
        "http://via.placeholder.com/300x150",
        "http://via.placeholder.com/200x100",
        "http://via.placeholder.com/350x150"
    ]

    var $gallery = $(".gallery");

    links.forEach(function (element) {
        var $currentImg = $("<img>");
        $currentImg.attr("src", element);

        //$(element).html("<img src= >" + index);
        $gallery.append($currentImg);
    })
    //var $createImg = $("body").append("<img>")
});

// Array object

// var numbers = [10, 11, 12, 13, 14, 15];

// for (var index = 0; index < numbers.length; index++) {
//     var element = numbers[index];
//     var output = "Current element: " + element + ", at index: " + index + " of array: " + numbers;
//     console.log(output);

// }

// console.log("________________________");


// numbers.forEach(function (element, index, array) {
//     var output = "Current element: " + element + ", at index: " + index + " of array: " + numbers;
//     console.log(output);
// });