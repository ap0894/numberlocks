var gameExplanation = "<strong class=\"important\">How to play </strong> swipe tiles to subtract from each other. End up with 0 to get to next level";

var currentLevel;
var remainingTiles;
var completeBonus = 500;
var remainderBonus = 1000;
var moves = 0;

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', onDeviceReady, false);
} else {
    onReady();
}


function onDeviceReady () {
	AndroidFullScreen.immersiveMode();
	initAds();
	onReady();
}

function onReady() {
    
	$('.game-explanation').html(gameExplanation);
	
	$("#level1, #level2, #level3, #level4, #level5, #level6, #level7, #level8, #level9, #level10").on('click', function(e) {
		e.preventDefault();
		currentLevel = $(this).attr('id');
		alert(currentLevel);
	});
}