function yell() {
	var originalText = document.getElementById('text').value;
	var newText = originalText.toUpperCase();
	document.getElementById('newYellText').innerText = newText;
  }

var $nav = $("li.nav");
$nav.css('width', '200px');
$nav.css('height', '50px');

$nav.hover(
	function(){
	$(this).fadeTo(100, 0.25);
	$(this).css('text-transform', 'uppercase');
},function(){
	$(this).fadeTo(100, 1);
	$(this).css('text-transform', 'lowercase');
});

//Example of taking an action on a click:
// $nav.click(function(){
// 		$(this).css('font-size', '40px');
// });
