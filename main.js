$(document).ready(function() {

    // contact form
    var contactBody = $('.contact-form-content');
    var contactHead = $('.contact-form-top');
    var contactOpen = $('#contact-open');
    var contactClose = $('#contact-close');

    contactHead.click(function() {
        contactBody.toggle();
        contactClose.toggle();
        contactOpen.toggle();
    });

    // main slider
    setInterval(function () {      
        var sliderOne = $('.slider1');
        var sliderTwo = $('.slider2');
        
        if(sliderOne.css('margin-left') == '0px') {
            sliderTwo.css({'margin-left' : '100%'});
            sliderTwo.animate({marginLeft : '0px'}, 'slow');
            sliderOne.animate({marginLeft : '-100%'}, 'slow');
        } else {
            sliderOne.css({'margin-left' : '100%'});
            sliderOne.animate({marginLeft : '0px'}, 'slow');
            sliderTwo.animate({marginLeft : '-100%'}, 'slow');
        }
    }, 7000);

});