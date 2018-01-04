var $top = $('.top');
var $dipper = $('.dipper');
var $section = $('section');
$top.waypoint(function(){
    console.log('TOPPPPPPP')
    $dipper.removeClass('js-dipper-animate');
    $pre.removeClass('pre-ani');
});

$dipper.waypoint(function(direction){
    if (direction == 'down'){
    console.log('waypoint!')
        $dipper.addClass('js-dipper-animate');
    } 
    else if (direction == 'up'){
        console.log('UP@\@@')
        $dipper.addClass('js-dipper-animate');
    }

}, { offset: '50%'});


//$section.waypoint(function(direction){
//    if (direction == 'down' ){
//    console.log('waypoint!')
//        $section.addClass('section-ani');
//    } else {
//        $section.removeClass('section-ani');
//    }
//}, { offset: '70%'});

var $pre = $('.pre');
$pre.waypoint(function(direction){
   if(direction == 'down'){
       console.log('Prepoint!')
       $dipper.removeClass('js-dipper-animate');
       $pre.addClass('pre-ani');
   } else{
       console.log('UPPPPP!!!!')
        $pre.removeClass('pre-ani');
    }
},{offset: '40%'});