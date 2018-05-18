$(document).ready(function() {

    setInterval(function () {      
        var sliderOne = $('.slider1');
        var sliderTwo = $('.slider2');
        
        if(sliderOne.css('margin-left') == '0px') {
            sliderTwo.css({'margin-left' : '100%'});
            sliderOne.animate({marginLeft : '-100%'}, 'slow');
            sliderTwo.animate({marginLeft : '0px'}, 'slow');
        } else {
            sliderOne.css({'margin-left' : '100%'});
            sliderOne.animate({marginLeft : '0px'}, 'slow');
            sliderTwo.animate({marginLeft : '-100%'}, 'slow');
        }
    }, 7000);

});