var firstTimeTitle = "TUTORIAL";
var firstTimeTutorial = "First time playing?<br />Take a quick tutorial and learn the basics";

var lessonTitles = [
	"",
	"LESSON 1: SUBTRACTION",
	"LESSON 2.1: NO NEGATIVES",
	"LESSON 3: VERTICAL",
	"LESSON 4: KEYS"
];

var lessonText = [
	"",
	"Swipe one tile onto another, they subtract! Clear all tiles to complete the level.",
	"Subtract in either direction, the result is the same.",
	"Swipe horizontally or vertically",
	"Less moves = More keys! <br /><br />Keys unlock new levels!"
];

var gameCompleteHeader = "CONGRATULATIONS YOU'VE FINISHED EVERY LEVEL!";
var gameCompleteText = "<p>Now try for 3 keys on every level!</p><p>Also, look out for our new release with even harder levels and multi-player games</p>";

var level2bTutorial = "Matching adjacent numbers turn green as visual clue that one swipe will eliminate both tiles. Be careful though, it isn’t always the right move ";
var level11Tutorial = "You can swipe diagonally";
var incorrectTutorial = "You’ve isolated a square, which means you can’t complete the level. We recommend hitting the restart button";
var tutorialComplete;

var congratsTitle = "GREAT JOB!";
var congratsText = "Ready for the next lesson?";

var hamburger = "<nav role=\"navigation\"><div id=\"menuToggle\"><input id=\"checkbox\" type=\"checkbox\" /><span></span><span></span><span></span><ul id=\"menu\"><li id=\"restart\"><img id=\"\" class=\"pause-img\" src=\"./img/restartcircle.svg\">Retry Level</li><li id=\"vaultSelect\"><img id=\"\" class=\"pause-img\" src=\"./img/safesmallcircle.svg\">Change Level</li><li id=\"home\"><img id=\"\" class=\"pause-img\" src=\"./img/home.svg\">Home</li><li id=\"sound\"><img id=\"\" class=\"pause-img\" src=\"./img/speaker.svg\">Sound On</li><li id=\"redoTutorial\"><img id=\"\" class=\"pause-img\" src=\"./img/resetdata.svg\">Tutorial</li><li id=\"resetGame\"><img id=\"\" class=\"pause-img\" src=\"./img/resetdata.svg\">Reset Game</li></ul></div></nav>";

var checkOne = 0;

var pairTutorial = false;
var welcomed = false;
var end = false;
var pairTutorialShown = false;

var gameExplanation = "<strong class=\"important\">How to play </strong> swipe tiles to subtract from each other. End up with 0 to get to next level";
var controls = "<div id=\"restart-div\"><img id=\"restart\" class=\"pause-img restart-img\" src=\"./img/restart.svg\" /></div><div class=\"level-number\"></div>";
var pie = "<div id=\"pie\" class=\"pie degree middle\"><span class=\"block\"></span><span id=\"time\"></span></div>";

var size;
var currentLevel;
var currentVault;
var currentVaultNumber;
var remainingTiles;
var completeBonus = 500;
var remainderBonus = 1000;
var moves;
var movesUp;
var testing = true;
var testingLevels;
var total = 0;
var myTimer;
var timerDuration = 60*2;
var isPaused = false;
var storage;
var highestLevel;
var highestVault;
var totalStars = 0;
var continueFlag = false;
var backToVaultFlag = false;
var one;
var oneMin;
var oneMax;
var two;
var twoMin;
var twoMax;
var three;
var starsUpdate;
var AdMob = false;
var soundFx;
var movesSlider;
var sliderOptions;

if (testing) {
	AdMob = false;
	onReady();
}
else if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
	//AdMob = true;
    document.addEventListener('deviceready', onDeviceReady, false);
} else {
    onReady();
}

function showModal(modalToShow, title, content, affirm, deny, affirmClass, denyClass) {
	$('.'+modalToShow).css('display', 'block');
	$('#modal-title').html(title);
	$('#modal-text').html(content);
	$('#affirm').html(affirm);
	$('#affirm').removeClass();
	$('#affirm').addClass(affirmClass);
	if(deny != null) {
		$('#deny').html(deny);
		$('#deny').addClass(denyClass);
		$('#deny').css('display','inline-block');
	} else {
		$('#deny').css('display','none');
	}
	
}

function hideDiv(divToHide) {
	$('#'+divToHide).css('display', 'none');
}

function showVaults() {
	$('#challenge').css('display', 'none');
	$('#hamburger-div').css('display', 'none');	
	$('#levelsDiv').html(createMainDiv());
	$('.container').css('display','block');
	$('#totalDiv').css('display','block');
	$('#totalStars').html(totalStars);
	$('.heading').hide();
	$('#levelsDiv').show();
	$('.title').css('display','block');	

	$('.slider').slick({
		centerMode: true,
		centerPadding: '10px',
		focusOnSelect: true,
		slidesToShow: 1,
		slidesToScroll: 3,
		asNavFor: '.levelsTest',
		index: 3,
		//dots: true,
		infinite: true
		//focusOnSelect: true,
	});

	$('.levelsTest').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider'
	});
}

$('body').on('click', '#redoTutorial', function(e) {
   	$('#checkbox').prop('checked', false);
	currentLevel = 'level0';
	showModal('modal', firstTimeTitle, firstTimeTutorial, 'Okay', 'Skip', 'display-lesson','skipTutorial');
   	welcomed = true;
});

$('body').on('click', '.skipTutorial', function(e) {
	$('.modal').css('display', 'none');
	$('.control-container').css('display','none');	
	$('.game-container').css('display','none');	
	$('.controls-lower').css('display','none');	
	$('#starCounter').css('display','none');
	$('.super-container').css('display','none');
	$('.level-number').css('display','none');
	tutorialComplete = 1;
	storage.setItem('tutorialComplete', tutorialComplete);
	
	if (movesSlider.html() != "") {
		movesSlider[0].noUiSlider.destroy();	
	}
	showVaults();
});

$('body').on('click', '.display-lesson', function(e) {
	$('.modal').css('display', 'none');
	var index = (getCurrentLevelNumber()-1)*-1;
	if (getCurrentLevelNumber() === -4 ) {
		tutorialComplete = 1;
		storage.setItem('tutorialComplete', tutorialComplete);
		$('.control-container').css('display','none');	
		$('.game-container').css('display','none');	
		$('.controls-lower').css('display','none');	
		$('#starCounter').css('display','none');
		$('.super-container').css('display','none');
		$('.moves-legend-container').css('display','none');	
		$('.level-number').css('display','none');
		showVaults();
		$('.title').show();
		$('.slider').slick('slickGoTo', (currentVaultNumber));
	} else {
		showModal('modal', lessonTitles[index], lessonText[index], 'Okay', null, 'next-lesson',null);
	}
});

/*************OLD FUNCTIONS ***************/

function setStarValues(currentLevel) {
	
	//three = levels[currentLevel]['three'];
	three = parseInt(levels[currentLevel]['three'], 10);
	/*if(three.includes('-')) {
		three = three.split('-'); 
		three[0] = parseInt(three[0],10);
		three[1] = parseInt(three[1],10);
	} else {
		three = parseInt(levels[currentLevel]['three'], 10);
	}*/

	two = levels[currentLevel]['two'];
	if(two.includes('-')) {
		two = two.split('-'); 
		twoMin = parseInt(two[0],10);
		twoMax = parseInt(two[1],10);
	} else {
		two = parseInt(levels[currentLevel]['two'], 10);
		twoMin = parseInt(levels[currentLevel]['two'], 10);
		twoMax = parseInt(levels[currentLevel]['two'], 10);
	}

	one = levels[currentLevel]['one'];
	if(one.includes('-')) {
		one = one.split('-'); 
		oneMin = parseInt(one[0],10);
		oneMax = parseInt(one[1],10);
	} else {
		one = parseInt(levels[currentLevel]['one'], 10);
		oneMin = parseInt(levels[currentLevel]['one'], 10);
		oneMax = parseInt(levels[currentLevel]['one'], 10);
	}
}

function calculateStars(movesUp) {	

	if(two===three) {
		if (movesUp > twoMax && movesUp <= oneMin) {
			return 1;
		} else {
			return 3;
		}
	}

	else {
		if (movesUp >= twoMin && movesUp <= twoMax) {
			return 2;
		} else if (movesUp > twoMax) {
			return 1;
		} else {
			return 3;
		}
	}
}

function createLevelDiv (x,y) {
	var div = "<div><table class=\"levels-table\"><tbody>";
	
	switch(x) {
		case 1:
			tempExpl = "<div><span class=\"explanation\">Subtract the numbers to clear each level</span></div><br/>";
			break;
		case 11:
			tempExpl = "<div><span class=\"explanation\">Subtract diagonally now in addition to horizontally & vertically</span></div><br/>";
			break;
		case 21:
			tempExpl = "<div><span class=\"explanation\">Complete the 4x4 boards</span></div><br/>";
			break;
		case 31:
			tempExpl = "<div><span class=\"explanation\">Complete the 5x5 boards</span></div><br/>";
			break;
	}
	
	if((y-x)<=5) {	
		var headerRow = tempExpl + "<tr>";
		var imageRow = "<tr class=\"level-img-row\">"
		var starRow = "<tr class=\"star-row\">";
	
		var tempHeader = "";
		var tempImg = "";
		var tempStars = "";
		for (i=x; i<=y; i++) {
			if (i <= highestLevel ) {
				tempHeader += "<td id=\"levelHeader"+i+"\">Level "+i+"</td>";
				tempImg += "<td><img id=\"level"+i+"\" src=\"./img/padlocknewopen.svg\"></td>";
			} else {		
				tempHeader += "<td id=\"levelHeader"+i+"\" style=\"color: #BFBFBF;\">Level "+i+"</td>";
				tempImg += "<td><img id=\"level"+i+"\" src=\"./img/padlockgrey.svg\"></td>";
			}
			tempStars = "<td id=\""+i+"stars\">";
			numStars = 0;
			numStars = storage.getItem('level'+i);
			for (j=0; j<3; j++) {
				if(i>2) {
					if(numStars > x) {
						tempStars += "<img class = \"star\" src=\"./img/key.svg\" />";
					} else {
						if (i > highestLevel ) {
							tempStars += "<img class = \"star\" src=\"./img/keyoffgrey.svg\" />";
						}	
						else {
							tempStars += "<img class = \"star\" src=\"./img/keyoff.svg\" />";
						}
					}
				}
			}
			tempStars += "</td>";
			starRow = starRow + tempStars;
		}
		headerRow = headerRow + tempHeader + "</tr>";
		imageRow = imageRow + tempImg + "</tr>";
		starRow = starRow + "</tr>";
		div = div + headerRow + imageRow + starRow + "</tbody></table></div>";
	} else {
		var headerRow1 = tempExpl + "<tr>";
		var headerRow2 = "<tr>";
		var imageRow1 = "<tr class=\"level-img-row\">"
		var imageRow2 = "<tr class=\"level-img-row\">"
		var starRow1 = "<tr class=\"star-row\">";
		var starRow2 = "<tr class=\"star-row\">";
	
		var tempHeader1 = "";
		var tempHeader2 = "";
		var tempImg1 = "";
		var tempImg2 = "";
		var tempStars1 = "";
		var tempStars2 = "";
		
		for (i=x; i<=(x+4); i++) {
			if (i <= highestLevel ) {
				tempHeader1 += "<td id=\"levelHeader"+i+"\">Level "+i+"</td>";
				tempImg1 += "<td><img id=\"level"+i+"\" src=\"./img/padlocknewopen.svg\"></td>";
			} else {
				tempHeader1 += "<td id=\"levelHeader"+i+"\" style=\"color: #BFBFBF;\">Level "+i+"</td>";
				tempImg1 += "<td><img id=\"level"+i+"\" src=\"./img/padlockgrey.svg\"></td>";
			}
			if ((i+5) <= highestLevel ) {
				tempHeader2 += "<td id=\"levelHeader"+(i+5)+"\">Level "+(i+5)+"</td>";
				tempImg2 += "<td><img id=\"level"+(i+5)+"\" src=\"./img/padlocknewopen.svg\"></td>";
			} else {
				tempHeader2 += "<td id=\"levelHeader"+(i+5)+"\" style=\"color: #BFBFBF;\">Level "+(i+5)+"</td>";
				tempImg2 += "<td><img id=\"level"+(i+5)+"\" src=\"./img/padlockgrey.svg\"></td>";
			}
			tempStars1 = "<td id=\""+i+"stars\">";
			tempStars2 = "<td id=\""+(i+5)+"stars\">";
			numStars1 = 0;
			numStars2 = 0;
			numStars1 = storage.getItem('level'+i);
			numStars2 = storage.getItem('level'+(i+5));
			for (j=0; j<3; j++) {
				if(numStars1 > j) {
					tempStars1 += "<img class = \"star\" src=\"./img/key.svg\" />";
				} else {
					if (i > highestLevel) {
						tempStars1 += "<img class = \"star\" src=\"./img/keyoffgrey.svg\" />";
					} else {
						tempStars1 += "<img class = \"star\" src=\"./img/keyoff.svg\" />";
					}
				}
				if(numStars2 > j) {
					tempStars2 += "<img class = \"star\" src=\"./img/key.svg\" />";
				} else {
					if (i > highestLevel) {
						tempStars2 += "<img class = \"star\" src=\"./img/keyoffgrey.svg\" />";
					} else {
						tempStars2 += "<img class = \"star\" src=\"./img/keyoff.svg\" />";
					}
				}
			}
			tempStars1 += "</td>";
			tempStars2 += "</td>";
			starRow1 = starRow1 + tempStars1;
			starRow2 = starRow2 + tempStars2;
	
		}
		headerRow1 = headerRow1 + tempHeader1 + "</tr>";
		headerRow2 = headerRow2 + tempHeader2 + "</tr>";
		imageRow1 = imageRow1 + tempImg1 + "</tr>";
		imageRow2 = imageRow2 + tempImg2 + "</tr>";
		starRow1 = starRow1 + "</tr>";
		starRow2 = starRow2 + "</tr>";
		div = div + headerRow1 + imageRow1 + starRow1 + headerRow2 + imageRow2 + starRow2 + "</tbody></table></div>";
	}
	return div;
}

function createMainDiv() {
	$('#totalDiv').html("<img class=\"star\" src=\"./img/key.svg\"/> Total: <span id=\"totalStars\"></span>");	
	var slider = "<div class=\"slider\">";
	//var tempExpl;
	for (i=1; i<=3; i++) {
		tempDiv = "<div id=\"vault"+i+"\">"
		switch(i) {
			case 1:
				tempSpan = "<span>Subtract</span>";
				//tempExpl = "<div><span class=\"explanation\">Subtract the numbers to eliminate all tiles</span></div><br/>";
				if(i<=highestVault) {
					tempStatus = "<span class=\"status\">Unlocked: 3</span><img class=\"star\" src=\"./img/key.svg\">";
				} else {
					tempStatus = "<span style=\"color:#BFBFBF \" class=\"status\">Locked: 3</span><img class=\"star\" src=\"./img/key.svg\">";
				}
				break;
			case 2:
				tempSpan = "<span>Diagonal</span>";
				//tempExpl = "<div><span class=\"explanation\">Subtract diagonally as well as horizontally & vertically</span></div><br/>";
				if(i<=highestVault) {
					tempStatus = "<span class=\"status\">Unlocked: 21</span><img class=\"star\" src=\"./img/key.svg\">";
				} else {
					tempStatus = "<span style=\"color:#BFBFBF \" class=\"status\">Locked: 21</span><img class=\"star\" src=\"./img/key.svg\">";
				}
				break;
			case 3:
				tempSpan = "<span>4x4</span>";
				//tempExpl = "<div><span class=\"explanation\">Complete the 4 by 4 boards</span></div><br/>";
				if(i<=highestVault) {
					tempStatus = "<span class=\"status\">Unlocked: 50</span><img class=\"star\" src=\"./img/key.svg\">";
				} else {
					tempStatus = "<span style=\"color:#BFBFBF \" class=\"status\">Locked: 50</span><img class=\"star\" src=\"./img/key.svg\">";
				}
				break;
		}
		if(i<=highestVault) {
			tempImg = "<img id=\"vault"+i+"img\" style=\"position: relative; top: 0; left: 0;\" class=\"vault-img\" src=\"./img/safelargeopen.svg\"></img><img id=\"vault"+i+"overlay\" src=\"./img/"+i+"Open.svg\" style=\"width: 22px; position: relative; bottom: 36px; left: 49%;\"/>";
		} else {
			tempImg = "<img id=\"vault"+i+"img\" style=\"position: relative; top: 0; left: 0;\" class=\"vault-img\" src=\"./img/safelargeclosedgrey.svg\"></img><img id=\"vault"+i+"overlay\" src=\"./img/"+i+"Lock.svg\" style=\"width: 22px; position: relative; bottom: 36px; left: 49%; \"/>";
		}
		tempDiv = tempDiv + tempSpan + tempImg + tempStatus;
		slider += tempDiv + "</div>";
	}
	slider += "</div>";
	var hr = "<hr></hr>";
	var levels = "<div class=\"levelsTest\">"
	var levels1to10 = createLevelDiv(1,10);
	var levels11to20 = createLevelDiv(11,20);
	var levels21to30 = createLevelDiv(21,30);
	levels = levels + levels1to10 + levels11to20 + levels21to30;
	return slider + hr + levels;

}

function unlockPreviousLevels(from, to) {

	for (i=(from+1); i<=to; i++) {		
		$('#level' + i).attr("src", "./img/padlocknewopen.svg");
		$('#' + i + 'stars').children().attr("src", "./img/keyoff.svg");
		$('#levelHeader' + i).css("color", "inherit");
	}
	highestLevel = to;
	storage.setItem('highestLevel', highestLevel);
	return true;
}

function updateLevelDiv(level, stars) {
	
	var newStars = "";
	for (i=0; i<3; i++) {
		if(stars > i) {
			newStars += "<img class = \"star\" src=\"./img/key.svg\" />";
		} else {
			newStars += "<img class = \"star\" src=\"./img/keyoff.svg\" />";
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
	/*var successCallback = function (user) {
		//alert(user.alias);
		// user.alias, user.player, user.displayName
	};
	
	var failureCallback = function (e) {
		//alert("Failed to authenticate " + e);
	}*/

	//gamecenter.auth(successCallback, failureCallback);
	//AndroidFullScreen.immersiveMode();
	console.log(StatusBar);
	StatusBar.hide();
	navigator.splashscreen.hide();
	window.screen.orientation.lock('portrait').then(function success() {
    	//alert("Successfully locked the orientation");
	}, function error(errMsg) {
		//alert("Error locking the orientation :: " + errMsg);
	});
	//alert('hiding status bar');
	//showBanner();
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
	var end = false;
	
	hideDiv('challenge');
	remainingTiles = levels[currentLevel]['tiles'].length;
	if (getCurrentLevelNumber() === -1) {
		$('.container').css('display','none');	
	}
	var movesLegend = "<table style=\"font-size: 12px;\"><tbody><tr><td>Moves</td><td>"+levels[currentLevel]['three']+"</td><td>"+levels[currentLevel]['two']+"</td><td>"+levels[currentLevel]['one']+"</td></tr><tr><td>Keys</td><td><img class = \"star\" src=\"./img/key.svg\" /><img class = \"star\" src=\"./img/key.svg\" /><img class = \"star\" src=\"./img/key.svg\" /></td><td><img class = \"star\" src=\"./img/key.svg\" /><img class = \"star\" src=\"./img/key.svg\" /><img class = \"star\" src=\"./img/keyoff.svg\" /></td><td><img class = \"star\" src=\"./img/key.svg\" /><img class = \"star\" src=\"./img/keyoff.svg\" /><img class = \"star\" src=\"./img/keyoff.svg\" /></td></tr></tbody></table>";
	
	setStarValues(currentLevel);
	var pipValues;
	if (twoMin!=three) {
		pipValues = [0, twoMin, oneMin];
	} else {
		pipValues = [0, one];
	}
	if (oneMin != oneMax) {
		pipValues.push(oneMax);
	}
	sliderOptions = {
		start: 0,
		step: 1,
		connect: [true, false],
		direction: 'ltr',
		tooltips: true,
		range: {
		  'min': 0,
		  'max': oneMax
		},
		pips: {
			mode: 'values',
			//values: [0, two, one],
			values: pipValues,
			density: 100
		},
		format: {
      to: function ( value ) {
    	return parseInt(value) + '';
      },
      from: function ( value ) {
        return parseInt(value.replace(',-', ''));
      }
    }
	};
	if (movesSlider.html() != "") {
		console.log('got a slider');
		movesSlider[0].noUiSlider.destroy();
	} else {
		console.log('no slider yet');
	}	
	
	prepInterstitial();	
	$('.lines-container').html('');
	$('.vertical-lines-container').html('');
	$('.diagonal-left-lines-container').html('');
	$('.diagonal-right-lines-container').html('');
	$('#levelsDiv').css('display','none');
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
		height = (height+6).toString() + 'px';
		$('.game-container').css('width',width);
		$('.game-container').css('height',height);
		$('.super-container').css('padding','10px');
		$('.super-container').css('margin-bottom','20px');
		$('.super-container').css('width',superWidth);
		//$('.controls-lower').css('width',superWidth);
	} else {
		size = Math.sqrt(levels[currentLevel]['tiles'].length); 
		$('.grid-container').html(createGrid(size));
		$('.tile-container').html(generateLevel(size));
		$('.lines-container').html(createLines(size));
		$('.vertical-lines-container').html(createVerticalLines(size));
		var dimension = (12*(size+1))+(size*46);
		var height = dimension + 6;
		if(getCurrentLevelNumber() > 10) {
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
		$('.controls-lower').css('width',height);
		$('#starCounter').css('width',height);
	}
	$('.controls-lower').html(controls);
	if(getCurrentLevelNumber()>0 || getCurrentLevelNumber() === -4) {
		if (getCurrentLevelNumber() === -4) {
			$('.level-number').html("Lesson " + getCurrentLevelNumber()*-1+"/4");
		} else {		
			$('.level-number').html("LEVEL "+ getCurrentLevelNumber());
		}
		//$('.moves-legend-container').html(movesLegend);
		//$('.moves-legend-container').css('display','block');
	} else {
		$('.level-number').html("Lesson " + getCurrentLevelNumber()*-1+"/4");
	}
	if(welcomed || getCurrentLevelNumber()>0) {	
		$('.title').css('display', 'none');
		$('.container').css('display','block');
		$('.control-container').css('display','block');	
		$('.game-container').css('display','block');
		$('.level-number').css('display','inline-block');
		$('.controls-lower').css('display','inline-block');
		$('.super-container').css('display','block');	
		$('#restart-div').css('right','-115px');
		if(currentLevel === "level-1" ) {	
			$('#restart-div').css('right','-110px');
			$('.tutorial-container').html("<img class=\"object animate\" src=\"./img/hand.svg\"/>");
			$('.object').css('left');
			$('.object').addClass('horizTranslate');
			$('#starCounter').css('display','none');
		} else if(currentLevel === "level-2" ) {	
			$('.tutorial-container').html("<img class=\"object2 animate\" src=\"./img/hand.svg\"/>");
			$('.object2').css('left');
			$('.object2').addClass('horizTranslate2');
			$('#starCounter').css('display','none');
		} else if(currentLevel === "level-3" ) {
			$('.tutorial-container').html("<img class=\"object3 animate\" src=\"./img/hand.svg\"/>");
			$('.object3').css('bottom');
			$('.object3').addClass('horizTranslate3');
			$('#starCounter').css('display','none');
		} 
		else if(currentLevel === "level-4" ) {
			$('.tutorial-container').html("");
			$('#starCounter').css('display','block');
			noUiSlider.create(movesSlider[0], sliderOptions);
			movesSlider[0].setAttribute('disabled', true);
		}
		else if(currentLevel === "level11" ) {
			$('.tutorial-container').html("<img class=\"object4 animate\" src=\"./img/hand.svg\"/>");
			$('.object4').css('bottom');
			$('.object4').addClass('horizTranslate4');
			$('#hamburger-div').css('display', 'block');
			$('#starCounter').css('display','block');
			noUiSlider.create(movesSlider[0], sliderOptions);
			movesSlider[0].setAttribute('disabled', true);
		}
		else {
			if(getCurrentLevelNumber() > 20) {
				$('#restart-div').css('right','-140px');
			} 
			$('#starCounter').css('display','block');
			noUiSlider.create(movesSlider[0], sliderOptions);
			movesSlider[0].setAttribute('disabled', true);
			$('.tutorial-container').html("");
			$('#hamburger-div').css('display', 'block');
		}
	}
	//$('#pie-container').html(pie);
	
	movesUp = 0;
	starsUpdate = 3;
	moves = levels[currentLevel]['tiles'].length-1;
	//$('#move-num').html(movesUp);
	isPaused = false;
	if(getCurrentLevelNumber() > 0 || getCurrentLevelNumber() === -4) {
		var tempStarsCounter = "";
		for (z=0; z<3; z++ ) {
			tempStarsCounter += "<img class=\"star\" src=\"./img/key.svg\">";
		}
		$('#starCounter').html(tempStarsCounter);
	} else {
		$('#starCounter').html("");
	}
	//startTimer();
	//setStarValues(currentLevel);
	
	//Check if there are any adjacent numbers
	for(a=1; a<=size; a++) {
		for (b=1; b<=size; b++) {
			//checkSurrounds(a,b);
		}
	}
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

function decrementLevel() {
	var newNum = parseInt(currentLevel.substr(5),10)-1;
	return "level"+newNum;
}

function getCurrentLevelNumber () {
	return parseInt(currentLevel.substr(5),10);
}

function clearSurrounds(x,y) {
	var classIndex = '.'+'tile-position-'+x+'-'+y;
	if($(classIndex).hasClass('pair')) {
		$(classIndex).removeClass('pair');
	}
}

function checkGameOver(x,y) {
	
	var toTrack = 0;
	var blocked = 0;
	var classIndex = '.'+'tile-position-'+x+'-'+y;
	//var end = false;
	
	if($(classIndex).hasClass('tile-complete')) {
		return;
	}
	else {
		var leftX = parseInt(x,10)-1;
		var rightX = parseInt(x,10)+1;
		var upY = parseInt(y,10)-1;
		var downY = parseInt(y,10)+1;
		var classIndexTopMid = '.'+'tile-position-'+x+'-'+upY;
		var classIndexMidLeft = '.'+'tile-position-'+leftX+'-'+y;
		var classIndexMidRight = '.'+'tile-position-'+rightX+'-'+y;
		var classIndexBotMid = '.'+'tile-position-'+x+'-'+downY;
		
		
		if( $(classIndexTopMid).length > 0) {
			toTrack++;
			if ($(classIndexTopMid).hasClass('tile-complete')) {
				blocked++;
			} else { }
		}
		
		if( $(classIndexMidLeft).length > 0) {
			toTrack++;
			if ($(classIndexMidLeft).hasClass('tile-complete')) {
				blocked++;
			} else { }
		}
		
		if( $(classIndexMidRight).length > 0) {
			toTrack++;
			if ($(classIndexMidRight).hasClass('tile-complete')) {
				blocked++;
			} else {  }
		}
		
		if( $(classIndexBotMid).length > 0) {
			toTrack++;
			if ($(classIndexBotMid).hasClass('tile-complete')) {
				blocked++
			} else {  }
		}
		
	}
	if(blocked === toTrack && $(classIndex).length>0) {
		end=true;
		$(classIndex).addClass('end');		
	}
}

function checkGameOverDiagonal(x,y) {
	
	var toTrack = 0;
	var blocked = 0;
	var classIndex = '.'+'tile-position-'+x+'-'+y;
	//var end = false;
	
	if($(classIndex).hasClass('tile-complete')) {
		return;
	}
	else {
		var leftX = parseInt(x,10)-1;
		var rightX = parseInt(x,10)+1;
		var upY = parseInt(y,10)-1;
		var downY = parseInt(y,10)+1;
		var classIndexTopLeft = '.'+'tile-position-'+leftX+'-'+upY;
		var classIndexTopMid = '.'+'tile-position-'+x+'-'+upY;
		var classIndexTopRight = '.'+'tile-position-'+rightX+'-'+upY;
		var classIndexMidLeft = '.'+'tile-position-'+leftX+'-'+y;
		var classIndexMidRight = '.'+'tile-position-'+rightX+'-'+y;
		var classIndexBotLeft = '.'+'tile-position-'+leftX+'-'+downY;
		var classIndexBotMid = '.'+'tile-position-'+x+'-'+downY;
		var classIndexBotRight = '.'+'tile-position-'+rightX+'-'+downY;
		
		if( $(classIndexTopLeft).length > 0 ) {
			toTrack++;
			if ($(classIndexTopLeft).hasClass('tile-complete')) {
				blocked++;
			} else { }
		}
		
		if( $(classIndexTopMid).length > 0) {
			toTrack++;
			if ($(classIndexTopMid).hasClass('tile-complete')) {
				blocked++;
			} else { }
		}
		
		if( $(classIndexTopRight).length > 0) {
			toTrack++;
			if ($(classIndexTopRight).hasClass('tile-complete')) {
				blocked++
			} else {  }
		}
		
		if( $(classIndexMidLeft).length > 0) {
			toTrack++;
			if ($(classIndexMidLeft).hasClass('tile-complete')) {
				blocked++;
			} else { }
		}
		
		if( $(classIndexMidRight).length > 0) {
			toTrack++;
			if ($(classIndexMidRight).hasClass('tile-complete')) {
				blocked++;
			} else {  }
		}
		
		if( $(classIndexBotLeft).length > 0) {
			toTrack++;
			if ($(classIndexBotLeft).hasClass('tile-complete')) {
				blocked++;
			} else {  }
		}
		
		if( $(classIndexBotMid).length > 0) {
			toTrack++;
			if ($(classIndexBotMid).hasClass('tile-complete')) {
				blocked++
			} else {  }
		}
		
		if( $(classIndexBotRight).length > 0) {
			toTrack++
			if ($(classIndexBotRight).hasClass('tile-complete')) {
				blocked++;
			} else { }
		}
	}
	if(blocked === toTrack) {
		end=true;
		$(classIndex).addClass('end');
	}
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
	
	if ($(classIndex).text() == $(classIndexTopMid).text() && !$(classIndex).hasClass('tile-complete')) {
		$(classIndex).addClass('pair');
		$(classIndexTopMid).addClass('pair');
		pairTutorial = true;
	} 
	if ($(classIndex).text() == $(classIndexMidLeft).text()) {
		$(classIndex).addClass('pair');
		$(classIndexMidLeft).addClass('pair');
		pairTutorial = true;
	} 
	if ($(classIndex).text() == $(classIndexMidRight).text()) {
		$(classIndex).addClass('pair');
		$(classIndexMidRight).addClass('pair');
		pairTutorial = true;
	} 
	if ($(classIndex).text() == $(classIndexBotMid).text()) {
		$(classIndex).addClass('pair');
		$(classIndexBotMid).addClass('pair');
		pairTutorial = true;
	} 
	if (getCurrentLevelNumber() > 10) {
		if ($(classIndex).text() == $(classIndexTopLeft).text()) {
			$(classIndex).addClass('pair');
			$(classIndexTopLeft).addClass('pair');
			pairTutorial = true;
		} 
		if ($(classIndex).text() == $(classIndexTopRight).text()) {
			$(classIndex).addClass('pair');
			$(classIndexTopRight).addClass('pair');
			pairTutorial = true;
		} 
		if ($(classIndex).text() == $(classIndexBotLeft).text()) {
			$(classIndex).addClass('pair');
			$(classIndexBotLeft).addClass('pair');
			pairTutorial = true;
		} 
		if ($(classIndex).text() == $(classIndexBotRight).text()) {
			$(classIndex).addClass('pair');
			$(classIndexBotRight).addClass('pair');
			pairTutorial = true;
		} 
	}
}

function onReady() {
	//movesSlider = document.getElementById('moves-slider');
	movesSlider = $('#moves-slider');
	//alert(movesSlider.html());
	//pauseModal.style.display = "none";
	$('#hamburger-div').html(hamburger);
	var swipeSound = new Audio("./audio/swipe.mp3"); // buffers automatically when created
	var lockSound = new Audio("./audio/lock.m4a"); // buffers automatically when created
	var dingSound = new Audio("./audio/ding.m4a"); // buffers automatically when created
	  	
	storage = window.localStorage;
	
	
	tutorialComplete = storage.getItem('tutorialComplete');
	if(tutorialComplete == null) {
		tutorialComplete = 0;
		storage.setItem('tutorialComplete', tutorialComplete);
	}
	highestLevel = storage.getItem('highestLevel');
	highestVault = storage.getItem('highestVault');
	if(testingLevels) {
		highestLevel = 30;
		highestVault = 3;
	} else if(highestLevel == null) {
		highestLevel = 1;
	}
	if(highestVault == null) {
		highestVault = 1;
	}
	storage.setItem('highestLevel', highestLevel);
	storage.setItem('highestVault', highestVault);

	totalStars = storage.getItem('totalStars');
	if(totalStars == null) {
		totalStars = 0;
		storage.setItem('totalStars', totalStars);
	} else {
		totalStars = parseInt(totalStars, 10);
	}
	
	soundFx = storage.getItem('soundFx');
	if(soundFx == null) {
		soundFx = "true";
		$('#sound').html("<img id=\"\" class=\"pause-img\" src=\"./img/speaker.svg\">Sound On");
		storage.setItem('soundFx', soundFx);
	} else if (soundFx == "true") {
		$('#sound').html("<img id=\"\" class=\"pause-img\" src=\"./img/speaker.svg\">Sound On");
	} else if (soundFx == "false") {
		$('#sound').html("<img id=\"\" class=\"pause-img\" src=\"./img/speaker.svg\">Sound Off");
	}
	
	window.onclick = function(event) {
		if(event.target==genericModal) {
			genericModal.style.display = "none";
		}
		/*if(event.target==pauseModal) {
			pauseModal.style.display = "none";
		}*/
		/*if ( $( '#checkbox' ).prop( "checked" ) && checkOne === 1 ) {
			console.log('hello');
			$('#checkbox').prop('checked', false);
			checkOne = 0;
		} else if ( $( '#checkbox' ).prop( "checked" ) && checkOne < 1 ) {
			checkOne = 1;
		}*/
	}
	
	$(document).on('click touchstart', function (e) {
		if(event.target==genericModal) {
			genericModal.style.display = "none";
		}
	});
	
	currentVaultNumber = 0;    
	//$('.controls-lower').css('display','none');	

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
			}
		}, 1000);
	};
	
	$('body').on('click', '#tutorial', function(e) {
		
		showModal('modal', firstTimeTitle, firstTimeTutorial, 'Okay', 'Skip', 'display-lesson','skipTutorial');
	});

	$('body').on('click', '.leaderboard', function(e) {
    //$('.leaderboard').on('click', function(e) {
    	var data = {
    		leaderboardId: "NLLB1234"
		};
		/*if(!testing) gamecenter.showLeaderboard(successCallback, failureCallback, data);
		
		var successCallback = function (e) {
			//alert("Successfully showed Leaderboard" + e);
		};
	
		var failureCallback = function (e) {
			//alert("Failed to show Leaderboard " + e);
		};*/
    });
    
    $('body').on('click', '#campaign', function(e) {
	    if(tutorialComplete == 0) {
	    	currentLevel = 'level0'
	    	showModal('modal', firstTimeTitle, firstTimeTutorial, 'Okay', 'Skip', 'display-lesson','skipTutorial');
	    	welcomed = true;
	    } else if (tutorialComplete == 1) {
	    	showVaults();
		}
    });
    
    $('body').on('click', '#sound', function(e) {
		if(soundFx == "true") {
			soundFx = "false";
			$('#sound').html("<img id=\"\" class=\"pause-img\" src=\"./img/speaker.svg\">Sound Off");
			storage.setItem('soundFx', soundFx);
		} else if (soundFx == "false") {
			soundFx = "true";
			$('#sound').html("<img id=\"\" class=\"pause-img\" src=\"./img/speaker.svg\">Sound On");
			storage.setItem('soundFx', soundFx);
		}
    });
    
    /*$('body').on('click', '.hamburger', function(e) {
	    //pauseTimer();
    	pauseModal.style.display = "block";
    	$('#levelTitle').html(Math.abs(currentLevel.substr(5)));
	}); */
    
   /* $('body').on('click', '.pause', function(e) {
	    pauseTimer();
    	pauseModal.style.display = "block";
    	$('#levelTitle').html(currentLevel.substr(5));
	}); */
	
	$('body').on('click', '.Okay', function(e) {
		//close_window(this);
		$(".modal").css('display', 'none');
		if(end) {
			//$('#restart').css('width','40px');
			$('#restart').addClass('restart');
			//$('#restart').removeClass('restart');
		}
	}); 
	
	$('body').on('click', '.next-lesson', function(e) {
		$('.modal').css('display', 'none');
		currentLevel = decrementLevel();
		remainingTiles = levels[currentLevel]['tiles'].length;
		addBoard();	
	});
	
	/*$(".pauseClose").on('click', function(e) {
		isPaused = false;
		pauseModal.style.display = "none";
	});*/
	
	$(".tutorialClose").on('click', function(e) {
		howToWinModal.style.display = "none";
	});
	
	$('body').on('click', '.vaultOpenClose', function(e) {
		$('.modal').css('display', 'none');
		$('.slider').slick('slickGoTo', (highestVault-1));
	});
	
	 $('body').on('click', '.gameCompleteClose', function(e) {
		$(".modal").css('display', 'none');
	});
	
    $('body').on('click', '.GameOverClose', function(e) {
    	$(".modal").css('display', 'none');
    	$(".gameOverModal").css('display', 'none');	
		if (movesSlider.html() != "") {
			movesSlider[0].noUiSlider.destroy();	
		}	
    	
    	if (getCurrentLevelNumber() === -4 ) {    	
			tutorialComplete = 1;
			backToVaultFlag = true;
			storage.setItem('tutorialComplete', tutorialComplete);
			$('.control-container').css('display','none');	
			$('.game-container').css('display','none');	
			$('.controls-lower').css('display','none');	
			$('#starCounter').css('display','none');
			$('.super-container').css('display','none');
			$('.moves-legend-container').css('display','none');	
			$('.level-number').css('display','none');
			showVaults();
			$('.title').show();
			$('.slider').slick('slickGoTo', (currentVaultNumber));
		}
		
		if (getCurrentLevelNumber() === 30 ) {
			if(totalStars === 90) {
				gameCompleteHeader = "AMAZING YOU'RE A NUMBER LOCKS LEGEND!";
				gameCompleteText = "<p>You've collected ALL the keys!</p><p>Now you've had a taste for Number Locks, look out for our new release with even harder levels and multi-player games</p>";
			}
			showModal('modal', gameCompleteHeader, gameCompleteText, 'Okay', null, 'gameCompleteClose', null);
		}
    	if(continueFlag) {
    		continueFlag = false;
			$('.control-container').css('display','none');	
			$('.game-container').css('display','none');	
			$('.controls-lower').css('display','none');	
			$('#starCounter').css('display','none');
			$('.super-container').css('display','none');
			$('.moves-legend-container').css('display','none');	
			$('.level-number').css('display','none');
			$('#hamburger-div').css('display', 'none');	
			$('#levelsDiv').css('display','block');
			$('.title').show();
			showModal('modal', "New Vault Open!", "GREAT JOB!<br />You've collected enough keys to open the next vault", 'Okay', null, 'vaultOpenClose', null);
			//$('.slider').slick('slickGoTo', (highestVault-1));
    	} else if (backToVaultFlag == true) {
    		backToVaultFlag = false;
    		//currentLevel = incrementLevel();
			$('.control-container').css('display','none');	
			$('.game-container').css('display','none');	
			$('.controls-lower').css('display','none');
			$('#starCounter').css('display','none');	
			$('.super-container').css('display','none');
			$('.moves-legend-container').css('display','none');	
			$('.level-number').css('display','none');
			//$('.vaults').css('display','block');
			$('#levelsDiv').css('display','block');
			$('.title').show();
			$('.slider').slick('slickGoTo', (currentVaultNumber));
    	}
    	else {
			currentLevel = incrementLevel();

			var data = {
				score: total,
				leaderboardId: "NLLB1234"
			};
			/*if(!testing) gamecenter.submitScore(successCallback, failureCallback, data);
		
			var successCallback = function (e) {
				//alert("Successfully submitted score" + e);
			};
	
			var failureCallback = function (e) {
				//alert("Failed to submit score " + e);
			};
		
			// check and show it at end of a game level
			showInterstitial();*/
			remainingTiles = levels[currentLevel]['tiles'].length;
			addBoard();	
		}
	});
    
    /*$('body').on('click', '#levelSelect', function(e) {
    	e.preventDefault();
		//pauseModal.style.display = "none";
		$('#checkbox').prop('checked', false);
		checkOne = 0;
		$('.control-container').css('display','none');	
		$('.game-container').css('display','none');	
		$('.controls-lower').css('display','none');	
		$('.super-container').css('display','none');
		$('.moves-legend-container').css('display','none');	
		$('.level-number').css('display','none');
		$('.levels').css('display','block');
		$('.title').show();
    });*/
    
    $('body').on('click', '#home', function(e) {
    	e.preventDefault();
		//pauseModal.style.display = "none";
		if (movesSlider.html() != "") {
			movesSlider[0].noUiSlider.destroy();
		}
		$('#hamburger-div').css('display', 'none');	
		$('#checkbox').prop('checked', false);
		//checkOne = 0;
		$('.control-container').css('display','none');	
		$('.game-container').css('display','none');	
		$('.controls-lower').css('display','none');	
		$('#starCounter').css('display','none');
		$('.super-container').css('display','none');
		$('.moves-legend-container').css('display','none');	
		$('#totalDiv').css('display','none');
		$('.level-number').css('display','none');
		$('#challenge').css('display','block');	
		$('.heading').css('display','block');	
		$('.title').css('display','block');	
    });
    
    $('body').on('click', '#vaultSelect', function(e) {
    	e.preventDefault();
		//pauseModal.style.display = "none";
		if (movesSlider.html() != "") {
			movesSlider[0].noUiSlider.destroy();
		}
		$('#checkbox').prop('checked', false);
		//checkOne = 0;
		$('.control-container').css('display','none');	
		$('.game-container').css('display','none');	
		$('.controls-lower').css('display','none');	
		$('#starCounter').css('display','none');
		$('.super-container').css('display','none');
		$('.moves-legend-container').css('display','none');	
		$('.level-number').css('display','none');
    	showVaults();
		$('.slider').slick('slickGoTo', (currentVaultNumber), true);
	});
	
	$('body').on('click', '#resetGame', function(e) {
    	window.localStorage.clear();
    	location.reload();
    });
    
    $('body').on('click', '#unlockAll', function(e) {
    	//window.localStorage.clear();
    	testingLevels = true;
    	onReady();
    	//location.reload();
    });
    
	$('.game-explanation').html(gameExplanation);
	
	$('body').on('click', '#level-1, #level1, #level2, #level3, #level4, #level5, #level6, #level7, #level8, #level9, #level10, #level11, #level12, #level13, #level14, #level15, #level16, #level17, #level18, #level19, #level20, #level21, #level22, #level23, #level24, #level25, #level26, #level27, #level28, #level29, #level30, #level31, #level32, #level33, #level34, #level35, #level36, #level37, #level38, #level39, #level40', function(e) {
		e.preventDefault();
		
		currentLevel = $(this).attr('id');
		var levelNumber = getCurrentLevelNumber();
		switch(true) {
			case levelNumber < 1:
				currentVaultNumber = 0;
				break;
			case levelNumber > 1 && levelNumber <= 10:
				currentVaultNumber = 0;
				break;
			case levelNumber > 10 && levelNumber <= 20 :
				currentVaultNumber = 1;
				break;
			case levelNumber > 21 :
				currentVaultNumber = 2;
				break;
			default:
				currentVaultNumber = 0;
				break;
		}
		if (getCurrentLevelNumber() <= highestLevel) {
			//$('.current-level').html("LEVEL:"+parseInt(currentLevel.substr(5),10));
			remainingTiles = levels[currentLevel]['tiles'].length;
			if (getCurrentLevelNumber() > 0 ) {
				addBoard();	
				$('.title').hide();
			} else {
				addBoard();
				$('.title').hide();
			}
		} else {
			if(soundFx == "true") {
				lockSound.play();
			}
		}
	});
	
	$('body').on('click', '#vault1, #vault2, #vault3, #vault4, #vault5, #vault6', function(e) {
		currentVault = $(this).attr('id');
		currentVaultNumber = parseInt(currentVault.substr(5),10);
	});
	
	/*$('body').on('click', '#return', function(e) {
		e.preventDefault();
		isPaused = false;
		pauseModal.style.display = "none";
	});*/
	
	$('body').on('click', '#restart, #retry', function(e) {
		$('#gameOverModal').css('display','none');
		if (movesSlider.html() != "") {
			movesSlider[0].noUiSlider.destroy();	
			$('#starCounter').css('display','block');
			noUiSlider.create(movesSlider[0], sliderOptions);
			movesSlider[0].setAttribute('disabled', true);
		}	
		$('#restart').removeClass('restart');
		//$('#pauseModal').css('display','none');
		$('#checkbox').prop('checked', false);
		//checkOne = 0;
		e.preventDefault();
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
		//$('#move-num').html(movesUp);		
		if(getCurrentLevelNumber() > 0) {
			var tempStarsCounter = "";
			for (z=0; z<3; z++ ) {
				tempStarsCounter += "<img class=\"star\" src=\"./img/key.svg\">";
			}
			$('#starCounter').html(tempStarsCounter);
		} else {
			$('#starCounter').html("");
		}
		//Check if there are any adjacent numbers
		/*for(a=1; a<=size; a++) {
			for (b=1; b<=size; b++) {
				checkSurrounds(a,b);
			}
		}*/
		isPaused = false;
		//startTimer();
	});     
	
      //Enable swiping...
		var hammertime = $('.tile-container').hammer({prevent_default: true, domEvents:true});
		$('.tile-container').data("hammer").get('swipe').set({ direction: Hammer.DIRECTION_ALL, threshold: 0, velocity: 0.1 });
		hammertime.on("swipeleft swiperight swipeup swipedown", ".tile-movable", function(ev) {
			var classIndex = $.grep($(this).attr('class').split(' '), function(v, i) {
				return v.indexOf("tile-position") === 0;
			}).join();
			if(getCurrentLevelNumber() > 10) {
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
		//console.log("x: "+x + " y:" + y);
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
			newClassIndex = 'tile-position-'+x+'-'+y;
				if ($('.'+newClassIndex).text()) {				
					if(soundFx == "true") {
						swipeSound.play();
					}
					moves--;
					movesUp++;
					if (getCurrentLevelNumber() > 0 || getCurrentLevelNumber() === -4){
						movesSlider[0].noUiSlider.set(movesUp);
					}
					starsUpdate = calculateStars(movesUp);
					if(starsUpdate < 3 && starsUpdate > 1) {
						$('#starCounter').html("<img class=\"star\" src=\"./img/key.svg\"><img class=\"star\" src=\"./img/key.svg\"><img class=\"star\" src=\"./img/keyoff.svg\">");
						//$('#starCounter').html('2 STARS');
					} else if (starsUpdate < 2) {
						$('#starCounter').html("<img class=\"star\" src=\"./img/key.svg\"><img class=\"star\" src=\"./img/keyoff.svg\"><img class=\"star\" src=\"./img/keyoff.svg\">");
						//$('#starCounter').html('1 STAR');
					}
					newValue = Math.abs((parseInt($(this).text(),10) - parseInt($('.'+newClassIndex).text(),10)));
					$('.'+newClassIndex).remove();
					$(this).removeClass(classIndex);
					$(this).addClass(newClassIndex);
					$(this).addClass('tile-merged');
					$('.tile-container').append("<div class=\"tile "+classIndex+" tile-tick tile-complete\"></div>");
					//Check if there are any adjacent numbers
					for(a=1; a<=size; a++) {
						for (b=1; b<=size; b++) {
							clearSurrounds(a,b);
						}
					}
					
					if(newValue !=0){
						$(this).text(newValue);					
						//checkSurrounds(x,y);
						remainingTiles--;
					} else {
						$('.'+newClassIndex).remove();
						$('.tile-container').append("<div class=\"tile "+newClassIndex+" tile-tick tile-complete\"></div>");
						remainingTiles--;
						remainingTiles--;
					}
					if(getCurrentLevelNumber() >= 11) {
						end=false;
						for(e=1; e<=size; e++) {
							for (f=1; f<=size; f++) {
								checkGameOverDiagonal(e,f);
							}
						}
					} else {
						end=false;
						for(e=1; e<=size; e++) {
							for (f=1; f<=size; f++) {
								checkGameOver(e,f);
							}
						}
					}
					for(c=1; c<=size; c++) {
						for (d=1; d<=size; d++) {
							checkSurrounds(c,d);
						}
					}
					if($('.tile-position-1-1').hasClass('tile-complete')) {
						pairTutorial = false;
					}
					if(pairTutorial && getCurrentLevelNumber() == -2 && !pairTutorialShown) {
						showModal('modal', "LESSON 2.2: <span style=\"color:#03dbd6\">GREEN TILES</span>", "Hint: <span style=\"color:#03dbd6\">green tiles</span>, clear both tiles with 1 move. <p><br />Careful: It's not <i>always</i> the right move</p>", 'Okay', null, 'Okay', null);
						pairTutorialShown = true;
						pairTutorial = false;
					}
					//Incorrect Move
					if(end) {
						showModal('modal', '<p><span style=\"color:#cc324b\">INCORRECT MOVE</span>', 'Looks like you have blocked a tile and can\'t complete the level.</p><p>Hit the retry <img class=\"pause-img\" src=\"./img/restart.svg\"/> button</p>', 'Okay', null, 'Okay', null);
					}
					//$('#move-num').html(movesUp);
				}
				if(remainingTiles === 0) {
					$('#moves').html(movesUp);
					if (getCurrentLevelNumber() === -4) {
						$('#levelNum').html('4');
						$('#levelName').html('LESSON');
					} else {
						$('#levelNum').html(getCurrentLevelNumber());
						$('#levelName').html('LEVEL');
					}
					var stars = storage.getItem(currentLevel);
					starsUpdate = calculateStars(movesUp);
					if (starsUpdate > stars && getCurrentLevelNumber() > 0) {
						totalStars = totalStars + (starsUpdate - stars);
						storage.setItem('totalStars', totalStars);
						$('#totalStars').html(totalStars);
						storage.setItem(currentLevel, starsUpdate);
						updateLevelDiv(getCurrentLevelNumber(), starsUpdate);
						//update stars in the levels div
					}
					var displayStars = "";
					for (i=0; i<3; i++) {
						if(starsUpdate > i) {
							displayStars += "<img class = \"star on\" src=\"./img/key.svg\" />";
						} else {
							displayStars += "<img class = \"star\" src=\"./img/keyoff.svg\" />";
						}
					}
					if(getCurrentLevelNumber() > 0 || getCurrentLevelNumber() === -4) {
						$('#starsCollected').html("Keys Collected: &nbsp;" + displayStars);
					} else {
						$('#starsCollected').html("");
					}
					highestLevel = storage.getItem('highestLevel');
					highestVault = storage.getItem('highestVault');
					if(getCurrentLevelNumber() >= highestLevel || highestLevel === null) {
						highestLevel = getCurrentLevelNumber();	
							
						highestLevel++;
						storage.setItem('highestLevel', highestLevel);
						//var levToUpdate = currentLevel+1;
						$('#level' + highestLevel).attr("src", "./img/padlocknewopen.svg");
						$('#' + highestLevel + 'stars').children().attr("src", "./img/keyoff.svg");
						$('#levelHeader' + highestLevel).css("color", "inherit");
						var currentHighestLevel = highestLevel;
						
						/*if(totalStars>=3 && highestVault < 1) {	
							highestVault = 1;
							storage.setItem('highestVault', highestVault);
							$('#vault' + highestVault + 'img').attr("src", "./img/icons/SafeLargeOpen.svg");
							$('#vault' + highestVault + 'overlay').attr("src", "./img/icons/"+highestVault+"Open.svg");
							$('#vault' + highestVault).find('.status').html('Unlocked: 3');
							$('#vault' + highestVault).find('.status').css('inherit');
							$('#vault' + highestVault).find('.star').attr('src', './img/icons/Key.svg');
							currentVaultNumber++;
							if (currentHighestLevel <= 4) {
								continueFlag = true;
								unlockPreviousLevels(currentHighestLevel, 4);
							}
						}*/ 
						if(totalStars>=21 && highestVault < 2) {	
							highestVault = 2;
							storage.setItem('highestVault', highestVault);
							$('#vault' + highestVault + 'img').attr("src", "./img/safelargeopen.svg");
							$('#vault' + highestVault + 'overlay').attr("src", "./img/"+highestVault+"Open.svg");
							$('#vault' + highestVault).find('.status').html('Unlocked: 21');
							$('#vault' + highestVault).find('.status').css('color', 'inherit');
							//$('#vault' + highestVault).find('.status');
							currentVaultNumber++;
							if (currentHighestLevel < 11) {
								continueFlag = true;
								unlockPreviousLevels(currentHighestLevel, 11);
							}
						}
						if(totalStars>=44 && highestVault < 3) {	
							highestVault = 3;
							storage.setItem('highestVault', highestVault);
							$('#vault' + highestVault + 'img').attr("src", "./img/safelargeopen.svg");
							$('#vault' + highestVault + 'overlay').attr("src", "./img/"+highestVault+"Open.svg");
							$('#vault' + highestVault).find('.status').html('Unlocked: 50');
							$('#vault' + highestVault).find('.status').css('color', 'inherit');
							currentVaultNumber++;
							if (currentHighestLevel < 21) {
								continueFlag = true;
								unlockPreviousLevels(currentHighestLevel, 21);
							}
						}
					} else if(getCurrentLevelNumber() === 10 || getCurrentLevelNumber() === 20 || getCurrentLevelNumber() === 30) {
							backToVaultFlag = true;
					}
					abc = getCurrentLevelNumber();
					if(getCurrentLevelNumber()>0) {
						gameOverModal.style.display = "block";
						//showModal('modal', 'Level '+getCurrentLevelNumber()+' complete', 'stuff', 'Okay', 'Retry', 'GameOverClose', 'restart');
					} else if (getCurrentLevelNumber() == -4) {
						gameOverModal.style.display = "block";
						//showModal('modal', 'TUTORIAL COMPLETE', 'Ready to play?', 'Okay', null, 'display-lesson', null);	
					} else {
						//Modal to move onto next tutorial
						showModal('modal', congratsTitle, congratsText, 'Okay', 'Skip', 'display-lesson', 'skiptutorial');
						//tutorialOverModal.style.display = "block";
					}
					(function() {
						var elements = document.querySelectorAll("#starsCollected img");
	
						for (var i = 0; i < elements.length; i++) {
							 load(elements[i], i);   
						}
	
						function load(elem, i) {
							setTimeout(function() {
								if(soundFx == "true" && elem.classList.contains("on")) {
									dingSound.play();
								}
								elem.classList.add("load");
							},1200 * i);
						}
					}());
				}
			}
		});
    }