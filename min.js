new Splide( '.splide', {
	type  : 'fade',
	rewind: true,
} ).mount();
function hov(){
    var name, lastname;
    name = "amir";
    lastname = "Heydari";
 document.getElementById("demo").innerHTML = name + " " + lastname;
 alert(name);
}
function show(){
document.getElementById("box").style.display="flex";
var x, y, z;
x = "Amir";
y = "Heydari";
z = x + y;	
alert(z);
}
function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}
function loginFunction(){
	let theUsername = document.getElementById('username').value;
	let thePassword = document.getElementById('password').value;
	let theAge = document.getElementById('age').value;
if(isEmptyOrSpaces(theUsername) || isEmptyOrSpaces(thePassword)){
	alert('لطفا فیلد هارو پر کنید');	
}
else{
	alert('خوش آمدید');
}}

    
var $jq = jQuery.noConflict();
$jq(document).ready(function(){
    $jq('.testCarousel').slick({
        dots: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        rtl: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
});

var $jq = jQuery.noConflict();
$jq(document).ready(function(){
$jq('.responsive').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});
});
var $jq = jQuery.noConflict();
$jq(document).ready(function(){
  $jq('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
});
});
