$(function(){
        $(".headC").click(function(){
            $(".headB").slideToggle();
        });
    });

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}

var $ani_0 = $('.ani_0');
var $ani_1 = $('.ani_1');
var $ani_2 = $('.ani_2');
var $ani_3 = $('.ani_3');
var $ani_4 = $('.ani_4');
var $ani_5 = $('.ani_5');
$ani_0.waypoint(function(direction){
    if (direction == 'down'){
    console.log('waypoint!');
        $ani_0.addClass('ani');
    } 
    else if (direction == 'up'){
        console.log('UP@\@@')
        $ani_0.removeClass('ani');
    }
}, { offset: '60%'});
$ani_1.waypoint(function(direction){
    if (direction == 'down'){
    console.log('conD')
        $ani_0.removeClass('ani');
        $ani_1.addClass('ani');
    }else if (direction == 'up'){
        console.log('UP@\@@')
        $ani_0.addClass('ani');
        $ani_1.removeClass('ani');
    }
}, { offset: '60%'});
$ani_2.waypoint(function(direction){
    if (direction == 'down'){
    console.log('conD')
        $ani_1.removeClass('ani');
        $ani_2.addClass('ani');
    }else if (direction == 'up'){
        console.log('UP@\@@')
        $ani_1.addClass('ani');
        $ani_2.removeClass('ani');
    }
}, { offset: '60%'});
$ani_3.waypoint(function(direction){
    if (direction == 'down'){
    console.log('conD')
        $ani_2.removeClass('ani');
        $ani_3.addClass('ani');
    }else if (direction == 'up'){
        console.log('UP@\@@')
        $ani_2.addClass('ani');
        $ani_3.removeClass('ani');
    }
}, { offset: '60%'});
$ani_4.waypoint(function(direction){
    if (direction == 'down'){
    console.log('conD')
        $ani_3.removeClass('ani');
        $ani_4.addClass('ani');
    }else if (direction == 'up'){
        console.log('UP@\@@')
        $ani_3.addClass('ani');
        $ani_4.removeClass('ani');
    }
}, { offset: '60%'});
$ani_5.waypoint(function(direction){
    if (direction == 'down'){
    console.log('conD')
        
        $ani_5.addClass('ani');
    }else if (direction == 'up'){
        console.log('UP@\@@')
        
        $ani_5.removeClass('ani');
    }
}, { offset: '60%'});
