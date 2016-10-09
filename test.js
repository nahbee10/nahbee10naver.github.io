var last_known_scroll_position = 0;
var ticking = false;

var ele_arr = document.getElementsByClassName('thing');
var hi_arr = document.getElementsByClassName('hi');
var for_fix = document.getElementById('letsfix');
var perc = [];
var hei = window.innerHeight;
var wid = window.innerWidth;

function doSomething(scroll_pos) {
  console.log(scroll_pos);
  /*var hiTop = document.getElementById('hi').getBoundingClientRect().top;
  var hiTop2 = document.getElementById('hi2').getBoundingClientRect().top;*/
  for (var i = 0; i <hi_arr.length; i++) {
  	console.log(hi_arr[i].getBoundingClientRect().top);
	perc[i] = hi_arr[i].getBoundingClientRect().top/hei-0.2;
	console.log(perc[i]);

  };
  for (var i = 0; i <ele_arr.length; i++) {
  	if(perc[i]<=1){
  		ele_arr[i].style.display = "inherit";
  		ele_arr[i].style.left = wid*perc[i];
  	}else{
  		ele_arr[i].style.display = "none";
  	}
		
  };
  for_fix.style.position="fixed";
  for_fix.style.top="100px";
  for_fix.style.left="20px";
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
});