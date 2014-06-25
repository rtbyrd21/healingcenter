
$(document).ready(function() {
    var sliderHeight = $('.hero').height();
    var $window = $(window);
    var $pane = $('#pane1');
    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize > 750) {
         $('.branding img').attr('src', '/images/misc/hc%20logo_full.svg');
$(window).scroll(function () {
    if ($(document).scrollTop() < 290) {
        $('.branding img').attr('src', '/images/misc/hc%20logo_full.svg');
        $('.branding').css({marginBottom: "-60px"});
       // $('.branding').css({border: "1px solid black"});
        $('.branding img').css({maxWidth: "230px"});
        $('.branding img').css({marginLeft: "0%"});
        $('.branding img').css({boxShadow: "0px 0px 5px #333"});
        $('.branding img').css({paddingBottom: "4%"});
        $('.branding img').css({background: "rgba(255,255,255,1)"});
        $('.navigation').css({background: "rgba(255,255,255,.6)"});
        $('.navigation').css({boxShadow: "none"});
        $('.branding').css({top: "0px"});
    } else {
        $('.branding img').attr('src', '/images/misc/hc_logo_textonly.svg');
        $('.branding').css({marginBottom: "0px"});
        $('.branding').css({top: "5px"});
        $('.branding').css({border: "0px"});
        $('.branding img').css({maxWidth: "320px"});
        $('.branding img').css({marginLeft: "-5%"});
        $('.branding img').css({boxShadow: "none"});
        $('.branding img').css({paddingBottom: "0%"});
        $('.branding img').css({background: "rgba(255,255,255,0)"});
        $('.navigation').css({background: "rgba(255,255,255,1)"});
        $('.navigation').css({boxShadow: "0px 0px 5px #333"});
    }


                 
                 
   var scrolledY = $(window).scrollTop();
  $('.hero').css('background-position', 'left ' + ((scrolledY)) + 'px');
  $('.nav a').css('top', 50 + ((scrolledY)*.07) + '%');
  $('.leaderimage').css('background-position', 'left ' + (-(scrolledY)*.15) + 'px');
}); //window scroll

}else{
  $('.branding img').css({display: "none"});
}
  //if windowsize
}//checkWidth  
// Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
         
//if ($(window).width() < 960) {
//$('.artist').click(function(){
//  $(this).css({height: "80%"});
//
//});
//}
if ($(window).width() < 750) {
$(".artist .toHide").hide();
//$(".artist a").hide();
$(".artist").click(function(){
    $(".toHide",this).slideToggle(500);
//    $("a",this).slideToggle(500);
    $("i",this).toggleClass("fa-chevron-circle-down fa-chevron-circle-up");
    

  });
}
  
  
  
if ($(window).width() < 750) {
$(".address").css({display: "none"});
$(".location").css({display: "none"});
$(".thirdrow .promoitem:first-of-type").css({display: "none"});
$("<div class=\"promoitem\"><h4>Partners</h4><p>If you need help with your job search, with skills to retain or adjust to your current job, or with finding fulfillment in your work, we\'re here to help.</p><br><a>Learn more</a></div>" ).appendTo( ".secondrow .hcpromo" );
$("<div class=\"promoitem\"><h4>Location</h4><p>The Healing Center is located in Tri-County on Kemper Road, across from Target.<br><br>Click for map and directions.</p></div>" ).appendTo( ".thirdrow .hcpromo" );
$("<div class=\"address\"><h4>Contact Information</h4><p>Healing Center Cincinnati<br>11345 Century Circle W.<br>Springdale, OH 45246<br>(513)346-4080</p><h4>Office Hours</h4><p>Tuesday - Friday, 8:30am - 5:00pm</p><h4>Service Hours</h4><p>Wednesday - Sat 9:00am - 12noon<br>Thursday evenings, 6:30-9pm</p></div>" ).appendTo( ".appendable" );
$(".secondrow .promoitem:last-of-type").css({marginRight: "0px"});
}  
  
  
});//document on ready




  







      var myLatlng = new google.maps.LatLng(39.281203, -84.455547);
      function initialize() {
        
        var mapOptions = {
          center: new google.maps.LatLng(39.281203, -84.455547),
          zoom: 15,
          draggable: true
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
        var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
      
      }
      
      
     
      google.maps.event.addDomListener(window, 'load', initialize);