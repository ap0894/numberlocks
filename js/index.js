var gameExplanation = "<strong class=\"important\">How to play </strong> swipe tiles to subtract from each other. End up with 0 to get to next level";

/*var sublevelsDiv = "<table><tbody><tr><tr><td>Level 1</td><td>Level 2</td><td>Level 3</td><td>Level 4</td><td>Level 5</td></tr><tr class=\"level-img-row\"><td><img id=\"level1\" src=\"./img/lock.png\" /></td><td><img id=\"level2\" src=\"./img/lock.png\" /></td><td><img id=\"level3\" src=\"./img/lock.png\" /></td><td><img id=\"level4\" src=\"./img/lock.png\" /></td><td><img id=\"level5\" src=\"./img/lock.png\" /></td></tr></tr><tr><tr><td>Level 6</td><td>Level 7</td><td>Level 8</td><td>Level 9</td><td>Level 10</td></tr><tr class=\"level-img-row\"><td><img id=\"level6\" src=\"./img/lock.png\" /></td><td><img id=\"level7\" src=\"./img/lock.png\" /></td><td><img id=\"level8\" src=\"./img/lock.png\" /></td><td><img id=\"level9\" src=\"./img/lock.png\" /></td><td><img id=\"level10\" src=\"./img/lock.png\" /></td></tr></tr></tbody></table>";

var diaglevelsDiv = "<table><tbody><tr><tr><td>Level 11</td><td>Level 12</td><td>Level 13</td><td>Level 14</td><td>Level 15</td></tr><tr class=\"level-img-row\"><td><img id=\"level11\" src=\"./img/lock.png\" /></td><td><img id=\"level12\" src=\"./img/lock.png\" /></td><td><img id=\"level13\" src=\"./img/lock.png\" /></td><td><img id=\"level14\" src=\"./img/lock.png\" /></td><td><img id=\"level15\" src=\"./img/lock.png\" /></td></tr></tr><tr><tr><td>Level 16</td><td>Level 17</td><td>Level 18</td><td>Level 19</td><td>Level 20</td></tr><tr class=\"level-img-row\"><td><img id=\"level16\" src=\"./img/lock.png\" /></td><td><img id=\"level17\" src=\"./img/lock.png\" /></td><td><img id=\"level18\" src=\"./img/lock.png\" /></td><td><img id=\"level19\" src=\"./img/lock.png\" /></td><td><img id=\"level20\" src=\"./img/lock.png\" /></td></tr></tr></tbody></table>";

var multiselectlevelsDiv = "<table><tbody><tr><tr><td>Level 21</td><td>Level 22</td><td>Level 23</td><td>Level 24</td><td>Level 25</td></tr><tr class=\"level-img-row\"><td><img id=\"level21\" src=\"./img/lock.png\" /></td><td><img id=\"level22\" src=\"./img/lock.png\" /></td><td><img id=\"level23\" src=\"./img/lock.png\" /></td><td><img id=\"level24\" src=\"./img/lock.png\" /></td><td><img id=\"level25\" src=\"./img/lock.png\" /></td></tr></tr><tr><tr><td>Level 26</td><td>Level 27</td><td>Level 28</td><td>Level 29</td><td>Level 30</td></tr><tr class=\"level-img-row\"><td><img id=\"level26\" src=\"./img/lock.png\" /></td><td><img id=\"level27\" src=\"./img/lock.png\" /></td><td><img id=\"level28\" src=\"./img/lock.png\" /></td><td><img id=\"level29\" src=\"./img/lock.png\" /></td><td><img id=\"level30\" src=\"./img/lock.png\" /></td></tr></tr></tbody></table>";

var fourbyfourlevelsDiv = "<table><tbody><tr><tr><td>Level 31</td><td>Level 32</td><td>Level 33</td><td>Level 34</td><td>Level 35</td></tr><tr class=\"level-img-row\"><td><img id=\"level31\" src=\"./img/lock.png\" /></td><td><img id=\"level32\" src=\"./img/lock.png\" /></td><td><img id=\"level33\" src=\"./img/lock.png\" /></td><td><img id=\"level34\" src=\"./img/lock.png\" /></td><td><img id=\"level35\" src=\"./img/lock.png\" /></td></tr></tr><tr><tr><td>Level 36</td><td>Level 37</td><td>Level 38</td><td>Level 39</td><td>Level 40</td></tr><tr class=\"level-img-row\"><td><img id=\"level36\" src=\"./img/lock.png\" /></td><td><img id=\"level37\" src=\"./img/lock.png\" /></td><td><img id=\"level38\" src=\"./img/lock.png\" /></td><td><img id=\"level39\" src=\"./img/lock.png\" /></td><td><img id=\"level40\" src=\"./img/lock.png\" /></td></tr></tr></tbody></table>";*/

var controls = "<img id=\"restart\" class=\"pause-img\" src=\"./img/icons/Restart.svg\" /><img id=\"levelSelect\" class=\"pause-img\" src=\"./img/icons/Padlock.svg\" /><img id=\"vaultSelect\" class=\"pause-img\" src=\"./img/icons/SafeSmall.svg\" /><img class=\"pause-img leaderboard\" src=\"./img/icons/Trophy.svg\" />";

var levelDiv = "";

var pie = "<div id=\"pie\" class=\"pie degree middle\"><span class=\"block\"></span><span id=\"time\"></span></div>";

var currentLevel;
var currentVault;
var currentVaultNumber;
var remainingTiles;
var completeBonus = 500;
var remainderBonus = 1000;
var moves;
var movesUp;
var testing = true;
var total = 0;
var myTimer;
var timerDuration = 60*2;
var isPaused = false;
var storage;
var highestLevel;
var highestVault;

if (testing) {
	AdMob = false;
	onReady();
}
else if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', onDeviceReady, false);
} else {
    onReady();
}

function calculateStars(currentLevel, movesUp) {
	var three = parseInt(levels[currentLevel]['three'], 10);
	var two = parseInt(levels[currentLevel]['two'], 10);
	var one = parseInt(levels[currentLevel]['one'], 10);
	
	if (movesUp <= three ) {
		return 3;
	} else if (movesUp > three && movesUp <= two) {
		return 2;
	} else {
		return 1;
	}
}

function createVaultDiv() {
	var tempVaultDiv = "<table style=\"border-spacing: 0px; font-size: 10px;\"><tbody>";
	var firstLabelRow = "<tr><td>Subtraction</td><td>Diagonal</td><td>Multi-Select</td></tr>";
	var secondLabelRow = "<tr><td>4x4 Grid</td><td>5x5 Grid</td><td>Division</td></tr>";
	var firstVaultRow = "<tr class=\"vault-row\">";
	var secondVaultRow = "<tr class=\"vault-row\">";
	for (i=1; i<=3; i++) {
		if(i<=highestVault) {
			firstVaultRow += "<td id=\"vault"+i+"\"><img id=\"vault"+i+"img\" style=\"position: relative; top: 0; left: 0;\" class=\"vault-img\" src=\"./img/icons/SafeLargeOpen.svg\" /><img id=\"vault"+i+"overlay\" src=\"./img/icons/"+i+"Open.svg\" style=\"width: 24px; position: relative; bottom: 13px; right: 12px; margin-left: -24px;\"/></td>";
		} else {
			firstVaultRow += "<td id=\"vault"+i+"\"><img id=\"vault"+i+"img\" style=\"position: relative; top: 0; left: 0;\" class=\"vault-img\" src=\"./img/icons/SafeLargeClosedGrey.svg\" /><img id=\"vault"+i+"overlay\" src=\"./img/icons/"+i+"Lock.svg\" style=\"width: 24px; position: relative; bottom: 13px; right: 12px; margin-left: -24px;\"/></td>";
		}
	}
	firstVaultRow += "</tr>";
	
	for (j=4; j<=6; j++) {
		if(j<=highestVault) {
			secondVaultRow += "<td id=\"vault"+j+"\"><img id=\"vault"+j+"img\" style=\"position: relative; top: 0; left: 0;\" class=\"vault-img\" src=\"./img/icons/SafeLargeOpen.svg\" /><img id=\"vault"+j+"overlay\" src=\"./img/icons/"+j+"Open.svg\" style=\"width: 24px; position: relative; bottom: 13px; right: 12px; margin-left: -24px;\"/></td>";
		} else {
			secondVaultRow += "<td id=\"vault"+j+"\"><img id=\"vault"+j+"img\" style=\"position: relative; top: 0; left: 0;\" class=\"vault-img\" src=\"./img/icons/SafeLargeClosedGrey.svg\" /><img id=\"vault"+j+"overlay\" src=\"./img/icons/"+j+"Lock.svg\" style=\"width: 24px; position: relative; bottom: 13px; right: 12px; margin-left: -24px;\"/></td>";
		}
	}
	secondVaultRow += "</tr>";
	tempVaultDiv += firstLabelRow + firstVaultRow + secondLabelRow + secondVaultRow + "</tbody></table>" + "<div style=\"text-decoration:underline; cursor:pointer;\" id=\"resetGame\">Reset Game</div>";
	return tempVaultDiv;
}

function createLevelDiv(vault) {
	var tempLevelDiv = "<table><tbody>" ;
	var numStars;
	
	var vaultIcon = "<tr style=\"text-align:right\"><td colspan=\"5\"><img id=\"vaultSelect\" style=\"width:32px; padding-right:12px; padding-bottom:32px;\"  src=\"./img/icons/SafeSmall.svg\"></td></tr>"
	
	var firstLabelRow = "<tr>";
	var secondLabelRow = "<tr>";
	var firstIconRow = "<tr class=\"level-img-row\">";
	var secondIconRow = "<tr class=\"level-img-row\">";
	var firstStarRow = "<tr class=\"star-row\">";
	var secondStarRow = "<tr class=\"star-row\">";
	
	for (i=((10*vault)-9); i<=(10*vault)-5; i++)
	{
		firstLabelRow +=  "<td>Level "+i+"</td>";
		if(i <= highestLevel) {
			firstIconRow += "<td><img id=\"level"+i+"\" src=\"./img/icons/PadlockOpenTickNoShadow.svg\" /></td>";
		} else {
			firstIconRow += "<td><img id=\"level"+i+"\" src=\"./img/icons/PadlockGrey.svg\" /></td>";
		}
		numStars = 0;
		numStars = storage.getItem('level'+i);
		firstStarRow += "<td id=\""+i+"stars\">";
		for (x=0; x<3; x++) {
			if(numStars > x) {
				firstStarRow += "<img class = \"star\" src=\"./img/icons/StarOn.svg\" />";
			} else {
				firstStarRow += "<img class = \"star\" src=\"./img/icons/StarOff.svg\" />";
			}
		}
		firstStarRow += "</td>";
	}
	firstLabelRow +="</tr>"
	firstIconRow += "</tr>"
	firstStarRow += "</tr>"
	
	for (j=((10*vault)-4); j<=(10*vault); j++)
	{
		secondLabelRow +=  "<td>Level "+j+"</td>";
		if(j <= highestLevel) {
			secondIconRow += "<td><img id=\"level"+j+"\" src=\"./img/icons/PadlockOpenTickNoShadow.svg\" /></td>";
		} else {
			secondIconRow += "<td><img id=\"level"+j+"\" src=\"./img/icons/PadlockGrey.svg\" /></td>";
		}
		numStars = 0;
		numStars = storage.getItem('level'+j);
		secondStarRow += "<td id=\""+j+"stars\">";
		for (y=0; y<3; y++) {
			if(numStars > y) {
				secondStarRow += "<img class = \"star\" src=\"./img/icons/StarOn.svg\" />";
			} else {
				secondStarRow += "<img class = \"star\" src=\"./img/icons/StarOff.svg\" />";
			}
		}
		secondStarRow += "</td>";
	}
	secondLabelRow +="</tr>";
	secondIconRow += "</tr>";
	secondStarRow += "</tr>"
	
	tempLevelDiv += tempLevelDiv + vaultIcon + firstLabelRow + firstIconRow + firstStarRow + secondLabelRow + secondIconRow + secondStarRow + "</tbody></table>";
	return tempLevelDiv;
}

function updateLevelDiv(level, stars) {
	
	var newStars = "";
	for (i=0; i<3; i++) {
		if(stars > i) {
			newStars += "<img class = \"star\" src=\"./img/icons/StarOn.svg\" />";
		} else {
			newStars += "<img class = \"star\" src=\"./img/icons/StarOff.svg\" />";
		}
	}
	$('#'+level+'stars').html(newStars);
}

function update(percent){
	var deg;
	var colour = '#00b0f0';
	if (percent<(timerDuration/2)) {
		deg = 90 + (360*percent/timerDuration);
		$('.pie').css('background-image','linear-gradient('+deg+'deg, transparent 50%, '+colour+' 50%),linear-gradient(90deg, '+colour+' 50%, transparent 50%)');
	} else if (percent>=(timerDuration/2)) {	
		deg = -90 + (360*percent/timerDuration);
        $('.pie').css('background-image','linear-gradient('+deg+'deg, transparent 50%, white 50%),linear-gradient(90deg, '+colour+' 50%, transparent 50%)');
	}
}

function onDeviceReady () {
	var successCallback = function (user) {
		//alert(user.alias);
		// user.alias, user.player, user.displayName
	};
	
	var failureCallback = function (e) {
		//alert("Failed to authenticate " + e);
	}

	gamecenter.auth(successCallback, failureCallback);
	AndroidFullScreen.immersiveMode();
	showBanner();
	onReady();
}

function createGrid(size) {
	var grid = "";
	for (i=0; i<size; i++) {
		grid += "<div class=\"grid-row\">";
		for(j=0; j<size; j++) {
			grid += "<div class=\"grid-cell\"></div>";
		}
		grid += "</div>";
	}
	return grid;
}

function createLines(size) {
	var lines = "";
	for (i=0; i<size; i++) {
			lines += "<hr class=\"horizontal-line\" \>";
	}
	return lines;
}

function createVerticalLines(size) {
	var lines = "";
	for (i=0; i<size; i++) {
			lines += "<hr class= \"vertical-line\"\>";
	}
	return lines;
}

function createDiagonalLeftLines(size) {
	var lines = "";
	var numLines = getNumLines(size);

	for (i=0; i<numLines; i++) {
		var height = getHeight(i+1,numLines);
		var top = getTop(i+1,numLines);
		var left = getLeft(i+1,numLines);
		lines += "<hr style =\"height:"+height+"px; top:"+top+"px; left:"+left+"px\" class= \"diagonal-left-line\"\>";
		//linesRight += "<hr class= \"diagonal-right-line\"\>";
	}
	return lines;
}

function createDiagonalRightLines(size) {
	var lines = "";
	var numLines = getNumLines(size);

	for (i=0; i<numLines; i++) {
		var height = getHeight(i+1,numLines);
		var top = getRTop(i+1,numLines);
		var left = getRLeft(i+1,numLines);
		lines += "<hr style =\"height:"+height+"px; top:"+top+"px; left:"+left+"px\" class= \"diagonal-right-line\"\>";
	}
	return lines ;
}

function getMid(numLines) {
	return mid = Math.floor(numLines/2)+1;
}

function getNumLines(num) { 
  return ((num-1)*2)-1;
}

function getHeight(i,numLines) {
	var mid = getMid(numLines);
	if (i>mid) {
		return (82*(numLines+1-i));	
	} else {
		return 82*i;
	}
}

function getTop(i,numLines) {
	var mid = getMid(numLines);
	if (i>mid) {
		return (i-mid)*58;
	} else {
		return 0;
	}
}

function getLeft(i,numLines) {
	var mid = getMid(numLines);
	
	if (i>mid) {
		return mid*58;
	} else {
		return i*58;
	}
}

function getRTop(i,numLines) {
	var mid = getMid(numLines);
	if (i<mid) {
		return (mid-i)*58;
	} else {
		return 0;
	}
}

function getRLeft(i,numLines) {
	var mid = getMid(numLines);
	
	if (i>mid) {
		return (i-mid)*58;
	} else {
		return 0;
	}
}


function createLine(size) {
	var grid = "";
	grid += "<div class=\"grid-row\">";
	for(i=0; i<size; i++) {
		grid += "<div class=\"grid-cell\"></div>";
	}
	grid += "</div>";
	return grid;
}

function addBoard() {

	var movesLegend = "<table><tbody><tr><td>Moves</td><td>"+levels[currentLevel]['three']+"</td><td>"+levels[currentLevel]['two']+"</td><td>"+levels[currentLevel]['one']+"</td></tr><tr><td>Stars</td><td><img class = \"star\" src=\"./img/icons/StarOn.svg\" /><img class = \"star\" src=\"./img/icons/StarOn.svg\" /><img class = \"star\" src=\"./img/icons/StarOn.svg\" /></td><td><img class = \"star\" src=\"./img/icons/StarOn.svg\" /><img class = \"star\" src=\"./img/icons/StarOn.svg\" /><img class = \"star\" src=\"./img/icons/StarOff.svg\" /></td><td><img class = \"star\" src=\"./img/icons/StarOn.svg\" /><img class = \"star\" src=\"./img/icons/StarOff.svg\" /><img class = \"star\" src=\"./img/icons/StarOff.svg\" /></td></tr></tbody></table>";
	prepInterstitial();	
	$('.lines-container').html('');
	$('.vertical-lines-container').html('');
	$('.diagonal-left-lines-container').html('');
	$('.diagonal-right-lines-container').html('');
	$('.levels').css('display','none');
	var size;
	if(levels[currentLevel]['tiles'].length<4) {
		size = levels[currentLevel]['tiles'].length; 
		$('.grid-container').html(createLine(size));
		$('.tile-container').html(generateStraightLevel(size));
		$('.lines-container').html(createLines(1));
		var width = (12*(size+1))+(size*46);
		var superWidth = width + 25;
		width = width.toString() + 'px';
		superWidth = superWidth.toString() + 'px';
		var height = (46) + (12*2);
		height = (height+39).toString() + 'px';
		$('.game-container').css('width',width);
		$('.game-container').css('height',height);
		$('.super-container').css('padding','10px');
		$('.super-container').css('margin-bottom','20px');
		$('.super-container').css('width',superWidth);
	} else {
		size = Math.sqrt(levels[currentLevel]['tiles'].length); 
		$('.grid-container').html(createGrid(size));
		$('.tile-container').html(generateLevel(size));
		$('.lines-container').html(createLines(size));
		$('.vertical-lines-container').html(createVerticalLines(size));
		var dimension = (12*(size+1))+(size*46);
		var height = dimension + 39;
		if(currentVaultNumber > 1) {
			$('.diagonal-left-lines-container').html(createDiagonalLeftLines(size));
			$('.diagonal-right-lines-container').html(createDiagonalRightLines(size));
		}
		$('.vertical-line').css('height',dimension-70);
		$('.horizontal-line').css('width',dimension-66);
		dimension = dimension.toString() + 'px';
		height = height.toString() + 'px';
		$('.game-container').css('width',dimension);
		$('.game-container').css('height',height);
		$('.super-container').css('padding','10px');
		$('.super-container').css('margin-bottom','20px');
		$('.super-container').css('width',height);
	}
	$('.super-container').css('box-shadow','0 3px 6px #000000');
	$('.control-container').css('display','block');	
	$('.game-container').css('display','block');
	$('.controls-lower').html(controls);
	$('.controls-lower').css('display','block');
	$('.moves-legend-container').html(movesLegend);
	$('.moves-legend-container').css('display','block');	
	$('.super-container').css('display','block');
	if(	currentLevel === "level1" ) {
		$('.tutorial-container').html("<img class=\"object animate\" src=\"./img/icons/HandPointer.svg\"/>");
		$('.object').css('left');
		$('.object').addClass('horizTranslate');
	} else {
		$('.tutorial-container').html("");
	}
	//$('#pie-container').html(pie);
	
	movesUp = 0;
	moves = levels[currentLevel]['tiles'].length-1;
	$('#move-num').html(movesUp);
	isPaused = false;
	//startTimer();
	
}

function generateLevel(size) {
	var output = "";
	for (i=0; i<levels[currentLevel]['tiles'].length; i++) {
		output += "<div class=\"tile tile-movable tile-position-" + (Math.floor(i/size)+1)+ "-" + ((i%size)+1) + "\">" + levels[currentLevel]['tiles'][i] + "</div>";
	}
	return output;
}

function generateStraightLevel(size) {
	var output = "";
	for (i=0; i<levels[currentLevel]['tiles'].length; i++) {
		output += "<div class=\"tile tile-movable tile-position-" + ((i%size)+1) + "-" + (Math.floor(i/size)+1) + "\">" + levels[currentLevel]['tiles'][i] + "</div>";
	}
	return output;
}

function calculateTotal() {
	total = remainderBonus + completeBonus + (((levels[currentLevel]['tiles'].length-1)-moves) * 75);
	//return total;
}

function incrementLevel() {
	var newNum = parseInt(currentLevel.substr(5),10)+1;
	return "level"+newNum;
}

function getCurrentLevelNumber () {
	return parseInt(currentLevel.substr(5),10);
}

function checkSurrounds(x,y) {
	var leftX = parseInt(x,10)-1;
	var rightX = parseInt(x,10)+1;
	var upY = parseInt(y,10)-1;
	var downY = parseInt(y,10)+1;
	var classIndexTopLeft = '.'+'tile-position-'+leftX+'-'+upY;
	var classIndexTopMid = '.'+'tile-position-'+x+'-'+upY;
	var classIndexTopRight = '.'+'tile-position-'+rightX+'-'+upY;
	var classIndexMidLeft = '.'+'tile-position-'+leftX+'-'+y;
	var classIndex = '.'+'tile-position-'+x+'-'+y;
	var classIndexMidRight = '.'+'tile-position-'+rightX+'-'+y;
	var classIndexBotLeft = '.'+'tile-position-'+leftX+'-'+downY;
	var classIndexBotMid = '.'+'tile-position-'+x+'-'+downY;
	var classIndexBotRight = '.'+'tile-position-'+rightX+'-'+downY;
	
	if ($(classIndex).text() == $(classIndexTopMid).text()) {
		$(classIndex).addClass('pair');
		$(classIndexTopMid).addClass('pair');
	} 
	if ($(classIndex).text() == $(classIndexMidLeft).text()) {
		$(classIndex).addClass('pair');
		$(classIndexMidLeft).addClass('pair');
	} 
	if ($(classIndex).text() == $(classIndexMidRight).text()) {
		$(classIndex).addClass('pair');
		$(classIndexMidRight).addClass('pair');
	} 
	if ($(classIndex).text() == $(classIndexBotMid).text()) {
		$(classIndex).addClass('pair');
		$(classIndexBotMid).addClass('pair');
	} 
	if (currentVaultNumber > 1) {
		if ($(classIndex).text() == $(classIndexTopLeft).text()) {
			$(classIndex).addClass('pair');
			$(classIndexTopLeft).addClass('pair');
		} 
		if ($(classIndex).text() == $(classIndexTopRight).text()) {
			$(classIndex).addClass('pair');
			$(classIndexTopRight).addClass('pair');
		} 
		if ($(classIndex).text() == $(classIndexBotLeft).text()) {
			$(classIndex).addClass('pair');
			$(classIndexBotLeft).addClass('pair');
		} 
		if ($(classIndex).text() == $(classIndexBotRight).text()) {
			$(classIndex).addClass('pair');
			$(classIndexBotRight).addClass('pair');
		} 
	}
}

function onReady() {

	storage = window.localStorage;
	highestLevel = storage.getItem('highestLevel');
	if(highestLevel == null) {
		highestLevel = 1;
		storage.setItem('highestLevel', highestLevel);
	}
	highestVault = storage.getItem('highestVault');
	if(highestVault == null) {
		highestVault = 1;
		storage.setItem('highestVault', highestVault);
	}
	
	$('.vaults').html(createVaultDiv());
	
    $('.levels').css('display','none');
    
	$('.controls-lower').css('display','none');	

	function pauseTimer() {
		isPaused = true;
	}

	startTimer = function() {
		if (myTimer) {
			clearInterval(myTimer);
		}
		duration = timerDuration;
		var minutes, seconds;
		myTimer = setInterval(function () {
			minutes = parseInt(duration / 60, 10);
			seconds = parseInt(duration % 60, 10);

			//minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;
						
			$('#time').html(minutes + ":" + seconds);
			update(timerDuration-duration);

			if(!isPaused) {
				duration--;
			}
			if (duration < 0) {
				// Time run out - need to change turns
				duration = timerDuration;
				console.log("Timeout");
			}
		}, 1000);
	};

	$('body').on('click', '.leaderboard', function(e) {
    //$('.leaderboard').on('click', function(e) {
    	var data = {
    		leaderboardId: "NLLB1234"
		};
		if(!testing) gamecenter.showLeaderboard(successCallback, failureCallback, data);
		
		var successCallback = function (e) {
			//alert("Successfully showed Leaderboard" + e);
		};
	
		var failureCallback = function (e) {
			//alert("Failed to show Leaderboard " + e);
		};
    });
    
    $('body').on('click', '.pause', function(e) {
    //$(".pause").on('click', function(e) {
	    pauseTimer();
    	pauseModal.style.display = "block";
    	$('#levelTitle').html(currentLevel.substr(5));
	});    
	
	$(".pauseClose").on('click', function(e) {
		isPaused = false;
		pauseModal.style.display = "none";
	});
	
    $(".GameOverClose").on('click', function(e) {
    	gameOverModal.style.display = "none";

		var data = {
			score: total,
			leaderboardId: "NLLB1234"
		};
		if(!testing) gamecenter.submitScore(successCallback, failureCallback, data);
		
		var successCallback = function (e) {
			//alert("Successfully submitted score" + e);
		};
	
		var failureCallback = function (e) {
			//alert("Failed to submit score " + e);
		};
		
    	// check and show it at end of a game level
    	showInterstitial();
		remainingTiles = levels[currentLevel]['tiles'].length;
		addBoard();	
		//addSwipeTo('.tile');
	});
    
    $('body').on('click', '#levelSelect', function(e) {
    //$("#levelSelect").on('click', function(e) {
    	e.preventDefault();
		pauseModal.style.display = "none";
		$('.control-container').css('display','none');	
		$('.game-container').css('display','none');	
		$('.controls-lower').css('display','none');	
		$('.super-container').css('display','none');
		$('.moves-legend-container').css('display','none');	
		$('.levels').css('display','block');
		$('.title').show();
    });
    
    $('body').on('click', '#vaultSelect', function(e) {
    	e.preventDefault();
		pauseModal.style.display = "none";
		$('.levels').hide();
		$('.control-container').css('display','none');	
		$('.game-container').css('display','none');	
		$('.controls-lower').css('display','none');	
		$('.super-container').css('display','none');
		$('.moves-legend-container').css('display','none');	
		$('.vaults').css('display','block');
		$('.title').show();
	});
	
	$('body').on('click', '#resetGame', function(e) {
    	window.localStorage.clear();
    	location.reload();
    });
    
	$('.game-explanation').html(gameExplanation);
	
	$('.levels').on('click', '#level1, #level2, #level3, #level4, #level5, #level6, #level7, #level8, #level9, #level10, #level11, #level12, #level13, #level14, #level15, #level16, #level17, #level18, #level19, #level20, #level21, #level22, #level23, #level24, #level25, #level26, #level27, #level28, #level29, #level30, #level31, #level32, #level33, #level34, #level35, #level36, #level37, #level38, #level39, #level40', function(e) {
		e.preventDefault();
		currentLevel = $(this).attr('id');
		if (getCurrentLevelNumber() <= highestLevel) {
			$('.current-level').html("Level:"+parseInt(currentLevel.substr(5),10));
			remainingTiles = levels[currentLevel]['tiles'].length;
			addBoard();	
			$('.title').hide();
		}
		//addSwipeTo('.tile');
	});
	
	$('body').on('click', '#vault1, #vault2, #vault3, #vault4, #vault5, #vault6', function(e) {
	//$("#vault1, #vault2, #vault3, #vault4, #vault5, #vault6").on('click', function(e) {
		currentVault = $(this).attr('id');
		currentVaultNumber = parseInt(currentVault.substr(5),10);
		if (currentVaultNumber <= highestVault) {
			$('.vaults').hide();
			levelDiv = createLevelDiv(currentVaultNumber);
			$('.levels').html(levelDiv);	
			$('.levels').css('display','block');
		}
	});
	
	$('body').on('click', '#return', function(e) {
		e.preventDefault();
		isPaused = false;
		pauseModal.style.display = "none";
	});
	
	$('body').on('click', '#restart', function(e) {
	//$('#restart').on('click', function(e) {
		e.preventDefault();
		pauseModal.style.display = "none";
		var size;
		if(levels[currentLevel]['tiles'].length<4) {
			size = levels[currentLevel]['tiles'].length;
			$('.tile-container').html(generateStraightLevel(size));
		} else {
			size = Math.sqrt(levels[currentLevel]['tiles'].length);
			$('.tile-container').html(generateLevel(size));
		}
		remainingTiles = levels[currentLevel]['tiles'].length;
		//addSwipeTo('.tile');
		movesUp=0;
		moves = levels[currentLevel]['tiles'].length-1;
		$('.move-num').html(movesUp);
		isPaused = false;
		//startTimer();
	});     
	
		//var remainingTiles = levels[currentLevel]['tiles'].length;
      //Enable swiping...
		var hammertime = $('.tile-container').hammer({prevent_default: true, domEvents:true});
		$('.tile-container').data("hammer").get('swipe').set({ direction: Hammer.DIRECTION_ALL, threshold: 0, velocity: 0.1 });
		hammertime.on("swipeleft swiperight swipeup swipedown", ".tile-movable", function(ev) {
			var classIndex = $.grep($(this).attr('class').split(' '), function(v, i) {
				return v.indexOf("tile-position") === 0;
			}).join();
			if(currentVaultNumber > 1) {
				var angle = ev.originalEvent.gesture.angle;
				if(angle > -157.5 && angle < -112.5) {
					direction = "swipeupleft"; 
					//UP-LEFT SWIPE...
				} else if(angle > -67.5 && angle < -22.5) {
					direction = "swipeupright"; 
					//UP-RIGHT SWIPE...
				} else if(angle > 22.5 && angle < 67.5) {
					direction = "swipedownright"; 
					//DOWN-RIGHT SWIPE...
				} else if (angle > 112.5 && angle < 157.5) {
					direction = "swipedownleft"; 
					//DOWN-LEFT SWIPE...
				} else {
					direction = ev.type;
				}
			} else {
				direction = ev.type;
			}
		var x = parseInt(classIndex.slice(-3, -2), 10);
		var y = classIndex.slice(-1);
		var move = false;
		console.log("x: "+x + " y:" + y);
        
          switch (direction) { 
			case 'swipeleft':
				if(x>1) {
					x--;
					move = true;
				}
			break; 
			case 'swipeupleft':
				if(x>1 && y>1) {
					x--;
					y--;
					move = true;
				}
			break;
			case 'swipeup':  
				if (y>1) {
					y--;
					move = true;
				}
			break;	
			case 'swipeupright':  
				if (y>1 && x<5) {
					y--;
					x++;
					move = true;
				}
			break;	
			case 'swiperight':
				if(x<5) {
					x++	;
					move = true;
				}
			break;
			case 'swipedownright':
				if(x<5 && y<5) {
					x++	;
					y++;
					move = true;
				}
			break;	
			case 'swipedown': 
				if (y<5) {
					y++;
					move = true;
				}
			break;
			case 'swipedownleft': 
				if (y<5 && x>1) {
					y++;
					x--;
					move = true;
				}
			break;
			default:
			} 
			if(move) {
			moves--;	
			movesUp++;			
			newClassIndex = 'tile-position-'+x+'-'+y;
				if ($('.'+newClassIndex).text()) {
					newValue = Math.abs((parseInt($(this).text(),10) - parseInt($('.'+newClassIndex).text(),10)));
					$('.'+newClassIndex).remove();
					$(this).removeClass(classIndex);
					$(this).addClass(newClassIndex);
					$(this).addClass('tile-merged');
					$('.tile-container').append("<div class=\"tile "+classIndex+" tile-tick tile-complete\"></div>");
					if(newValue !=0){
						$(this).text(newValue);
						checkSurrounds(x,y);
						remainingTiles--;
					} else {
						$('.'+newClassIndex).remove();
						$('.tile-container').append("<div class=\"tile "+newClassIndex+" tile-tick tile-complete\"></div>");
						remainingTiles--;
						remainingTiles--;
					}
					$('#move-num').html(movesUp);
				}
				if(remainingTiles === 0) {
					calculateTotal();
					gameOverModal.style.display = "block";
					$('#complete').html(completeBonus);
					$('#remainder').html(remainderBonus);
					$('#moves').html(((levels[currentLevel]['tiles'].length-1)-moves) * 75);
					$('#total').html(total);
					$('.count').each(function () {
					  var $this = $(this);
					  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
						  $this.text(Math.ceil(this.Counter));
						}
					  });
					});
					var stars = storage.getItem(currentLevel);
					starsUpdate = calculateStars(currentLevel, movesUp);
					if (starsUpdate > stars) {
						storage.setItem(currentLevel, starsUpdate);
						updateLevelDiv(getCurrentLevelNumber(), starsUpdate);
						//update stars in the levels div
					}
					highestLevel = storage.getItem('highestLevel');
					highestVault = storage.getItem('highestVault');
					if(getCurrentLevelNumber() >= highestLevel || highestLevel === null) {
						highestLevel = getCurrentLevelNumber();
						if (highestLevel % 10 === 0){
    						highestVault = (highestLevel/10)+1;
    						storage.setItem('highestVault', highestVault);
    						$('#vault' + highestVault + 'img').attr("src", "./img/icons/SafeLargeOpen.svg");
    						$('#vault' + highestVault + 'overlay').attr("src", "./img/icons/"+highestVault+"Open.svg");
    						currentVaultNumber++;
							//$('.levels').hide();
							//$('.vaults').show();
						}
						highestLevel++;
						storage.setItem('highestLevel', highestLevel);
						//var levToUpdate = currentLevel+1;
						$('#level' + highestLevel).attr("src", "./img/icons/PadlockOpenTickNoShadow.svg");
					}
					currentLevel = incrementLevel();
				}
			}
		});
    }