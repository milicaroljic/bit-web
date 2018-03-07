     $(function () { 
         
            $('li').click(function(){
                console.log('Click happened!');
                
                $(this).addClass("fontColor");
                
            })
            var middleListItem = ($('li').length - 1) / 2;
            
            $('li:first').addClass('bottomBorder');
            $('li').addClass('textTransform');
            $('li.active').addClass('fontColor');
            $('li:eq('+middleListItem+')').addClass('bgColor');

});