$(document).ready(function(){
    $(".tip1").click(function(){
        $(".tip_text1").slideDown();
        $(".main_text1").hide();
        $(".down1").hide();
        $(".tip1").css("background-image", "url(img/tip_1.jpeg)");
    });
    $(".tip_text1").click(function(){
        $(".tip_text1").slideUp();
        $(".main_text1").show();
        $(".down1").show();
        $(".tip1").css("background-image", "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url(img/tip_1.jpeg)");
    });
    
    $(".tip2").click(function(){
        $(".tip_text2").slideDown();
        $(".main_text2").hide();
        $(".down2").hide();
        $(".tip2").css("background-image", "url(img/tip_2.jpeg)");
    });
    $(".tip_text2").click(function(){
        $(".tip_text2").slideUp();
        $(".main_text2").show();
        $(".down2").show();
        $(".tip2").css("background-image", "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url(img/tip_2.jpeg)");
    });
    
    $(".tip3").click(function(){
        $(".tip_text3").slideDown();
        $(".main_text3").hide();
        $(".down3").hide();
        $(".tip3").css("background-image", "url(img/tip_3.jpeg)");
    });
    $(".tip_text3").click(function(){
        $(".tip_text3").slideUp();
        $(".main_text3").show();
        $(".down3").show();
        $(".tip3").css("background-image", "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url(img/tip_3.jpeg)");
    });
    
    $(".tip4").click(function(){
        $(".tip_text4").slideDown();
        $(".main_text4").hide();
        $(".down4").hide();
        $(".tip4").css("background-image", "url(img/tip_4.jpeg)");
    });
    $(".tip_text4").click(function(){
        $(".tip_text4").slideUp();
        $(".main_text4").show();
        $(".down4").show();
        $(".tip4").css("background-image", "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url(img/tip_4.jpeg)");
    });
    //팝업
    $(".pic_img1").click(function(){
        $(".pop").fadeIn();
        $(".pop_img").css("background-image", "url(img/fil_1.jpg)");
        $("#exe").click(function(){ //id=exe 인 버튼을 클릭하면

        var sApp = startApp.set({
        	"component": ["ang.androidtown.myapplication","ang.androidtown.myapplication.CameraActivity"]
        	,"flags":["FLAG_ACTIVITY_CLEAR_TOP","FLAG_ACTIVITY_CLEAR_TASK"]
        	//,"flags": ["FLAG_ACTIVITY_NEW_TASK"]
        }
            , { /* extras */
	       "My_fil":"fil1.png",
	       "extraKey2":"extraValue2"
        }                   
                               );
        sApp.start(function() { /* success */
        	console.log("OK");
        }, function(error) { /* fail */
        	alert(error);
        });
    });
        
    });
    $(".pop_img").click(function(){
        $(".pop").fadeOut();
        $(".pop").css("display", "none");
    });
    $(".pic_img2").click(function(){
        $(".pop").fadeIn();
        $(".pop_img").css("background-image", "url(img/fil_2.jpg)");
        $("#exe").click(function(){ //id=exe 인 버튼을 클릭하면

        var sApp = startApp.set({
        	"component": ["ang.androidtown.myapplication","ang.androidtown.myapplication.CameraActivity"]
        	,"flags":["FLAG_ACTIVITY_CLEAR_TOP","FLAG_ACTIVITY_CLEAR_TASK"]
        	//,
            //"flags": ["FLAG_ACTIVITY_NEW_TASK"]
        }
            , { /* extras */
	       "My_fil":"fil2.png",
	       "extraKey2":"extraValue2"
        }                   
                               );
        sApp.start(function() { /* success */
        	console.log("OK");
        }, function(error) { /* fail */
        	alert(error);
        });
    });
    });
    $(".pop_img").click(function(){
        $(".pop").fadeOut();
        $(".pop").css("display", "none");
    });
    $(".pic_img3").click(function(){
        $(".pop").fadeIn();
        $(".pop_img").css("background-image", "url(img/fil_3.jpg)");
        $("#exe").click(function(){ //id=exe 인 버튼을 클릭하면

        var sApp = startApp.set({
        	"component": ["ang.androidtown.myapplication","ang.androidtown.myapplication.CameraActivity"]
        	,"flags":["FLAG_ACTIVITY_CLEAR_TOP","FLAG_ACTIVITY_CLEAR_TASK"]
        	//,"flags": ["FLAG_ACTIVITY_NEW_TASK"]
        }
            , { /* extras */
	       "My_fil":"fil3.png",
	       "extraKey2":"extraValue2"
        }                   
                               );
        sApp.start(function() { /* success */
        	console.log("OK");
        }, function(error) { /* fail */
        	alert(error);
        });
    });
    });
    $(".pop_img").click(function(){
        $(".pop").fadeOut();
        $(".pop").css("display", "none");
    });
    $(".pic_img4").click(function(){
        $(".pop").fadeIn();
        $(".pop_img").css("background-image", "url(img/fil_4.jpg)");
        $("#exe").click(function(){ //id=exe 인 버튼을 클릭하면

        var sApp = startApp.set({

        	"component": ["ang.androidtown.myapplication","ang.androidtown.myapplication.CameraActivity"]
        	,"flags":["FLAG_ACTIVITY_CLEAR_TOP","FLAG_ACTIVITY_CLEAR_TASK"]
        	//,
            //"flags": ["FLAG_ACTIVITY_NEW_TASK"]
        }
            , { /* extras */
	       "My_fil":"fil4.png",
	       "extraKey2":"extraValue2"
        }                   
                               );
        sApp.start(function() { /* success */
        	console.log("OK");
        }, function(error) { /* fail */
        	alert(error);
        });
    });
    });
    $(".pop_img").click(function(){
        $(".pop").fadeOut();
        $(".pop").css("display", "none");
    });
    //팝업
    
//    어플 함수 호출 //
//    $("#exe").click(function(){ //id=exe 인 버튼을 클릭하면
//
//        var sApp = startApp.set({
//        	"component": ["ang.androidtown.myapplication","ang.androidtown.myapplication.CameraActivity"]
//        }
//            , { /* extras */
//	       "My_fil":"fil2.png",
//	       "extraKey2":"extraValue2"
//        }                   
//                               );
//        sApp.start(function() { /* success */
//        	console.log("OK");
//        }, function(error) { /* fail */
//        	alert(error);
//        });
//    });
   
   
});



