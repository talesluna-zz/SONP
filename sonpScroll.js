/****************************************************************
     SONP - Smooth ONePage Scroll - Simple JS based on JQuery

     - Section sizes
     - Smooth scroll
     - Sections navigation
     - Parallax effect
     - One simple JS file (no more)

     Author: Tales Luna - http://taleslunadev.com/

 ******************************************************************/


var pagesMax = 0;

$(document).ready(function(){


    // Create navigation list
    $("body").append("<ul class='sonp-navigation-menu'></li></ul>");


    // Define section classes
    $(".sonp-section").each(function(index){
        $(this).addClass("sonp-section-"+index);
        pagesMax++;

        // Add section on navigation list
        $(".sonp-navigation-menu").append("<li class='sonp-navigation-item' data-section='"+index+"'></li>");

    });


    // Item navigation list event
    $(".sonp-navigation-item").click(function(){
        var section = $(this).attr("data-section");
        $("html, body").stop().animate({scrollTop: $(".sonp-section-"+section).offset().top},1000);
        pageIndex = section;
    });


    // Define CSS default styles...
    $(this).defineCss();

});


// Control scroll time
var time = new Date().getTime();

// Scroll events (mouse and keys)
$(window).bind("keydown.key40 DOMMouseScroll mousewheel",function(event){

    event.preventDefault();

    // Update time
    var now = new Date().getTime();

    // Check page refresh. (F5)
    if(event.keyCode == 116){
        location.reload();
    }


    // Check time of scrolling...
    if (now - time >= 100) {
        time = now;
        // Down event
        if (event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 || event.keyCode == 40) {
            // Next section element
            $(".sonp-section").nextPage();
        } else if (event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0 || event.keyCode == 38) {
            // Previous section element
            $(".sonp-section").prevPage();
        }

        event.stopPropagation();
    } else {
        time = now;
        return 0;
    }

});


// Section index number/position
pageIndex = 0;

// Next section function
$.fn.nextPage = function () {

    if(pageIndex < pagesMax-1){

        pageIndex++;

        var top = $(this).next(".sonp-section-"+pageIndex).offset().top;
        $("html, body").stop().animate({scrollTop: top},1000);

    }

};

// Previous section function
$.fn.prevPage = function () {

    if(pageIndex > 0){

        pageIndex--;

        var top = $(this).prev(".sonp-section-"+pageIndex).offset().top;
        $("html, body").stop().animate({scrollTop: top},1000);

    }

};



// Define styles...
$.fn.defineCss = function(){

    // Width and Height 100% //
    $("html, body").css({"width":"100%","height":"100%"});


    // Remove scrollbar
    $(".no-scroll").css({"overflow": "hidden"});


    // Define small size to element (200px)
    $(".sonp-small").each(function(){
        $(this).css({"width":"100%","height":"200px"});
    });


    // Define middle size to element (50%)
    $(".sonp-middle").each(function(){
        $(this).css({"width":"100%","height":"50%"});
    });


    // Define full size to element (100%)
    $(".sonp-full").each(function(){
        $(this).css({"width":"100%","height":"100%"});
    });


    // Realize parallax effect
    $(".sonp-parallax").each(function(){

        var parallax = $(this);

        $(window).scroll(function() {
            var scrollPosition = -($(window).scrollTop() / 5);

            var imagePosition = '50% '+ scrollPosition + 'px';

            parallax.css('background-position', imagePosition );

        });
    });


    // Define navigation menu style
    $(".sonp-navigation-menu").css(
        {
            position: "fixed",
            right: "0px",
            bottom: "50%",
            'list-style': "none",
            padding: "20px"
        }
    );

    // Define navigation item style
    $(".sonp-navigation-item").css(
        {
            width: "15px",
            height: "15px",
            background: "#f9f9f9",
            margin: "5px",
            'border-radius': "90px",
            cursor: "pointer"
        }
    );
};

// Print console logs...
log = function(text){
    console.log(text);
};