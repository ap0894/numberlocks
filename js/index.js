var level1Tutorial = "Swipe tiles to subtract the numbers and convert every tile to a tick";
var level2Tutorial = "Subtract in either direction (there are no negatives)";
var level3Tutorial = "Swipe horizontally or vertically";
var level14Tutorial = "You can now swipe diagonally";

var gameExplanation = "<strong class=\"important\">How to play </strong> swipe tiles to subtract from each other. End up with 0 to get to next level";

//var controls = "<img id=\"restart\" class=\"pause-img\" src=\"./img/icons/Restart.svg\" /><img id=\"vaultSelect\" class=\"pause-img\" src=\"./img/icons/SafeSmall.svg\" /><img class=\"pause-img leaderboard\" src=\"./img/icons/Trophy.svg\" />";

var controls = "<img id=\"restart\" class=\"pause-img\" src=\"./img/icons/Restart.svg\" /><img id=\"vaultSelect\" class=\"pause-img\" src=\"./img/icons/SafeSmall.svg\" /><img class=\"pause-img hamburger\" src=\"./img/icons/Hamburger.svg\" />";

//var levelsDiv = "<div style=\"text-align:right;\"><img class=\"star\" src=\"./img/icons/StarOn.svg\"/> Total: <span id=\"totalStars\"></span></div><div class=\"slider\"><div id=\"vault1\"><span>Tutorial</span><img id=\"vault1img\" style=\"position: relative; top: 0; left: 0;\" class=\"vault-img\" src=\"./img/icons/SafeLargeOpen.svg\"></img></div><div id=\"vault2\"><span>Subtract</span><img id=\"vault2img\" style=\"position: relative; top: 0; left: 0;\" class=\"vault-img\" src=\"./img/icons/SafeLargeClosedGrey.svg\"></img></div><div id=\"vault3\"><span>Diagonal</span><img id=\"vault3img\" style=\"position: relative; top: 0; left: 0;\" class=\"vault-img\" src=\"./img/icons/SafeLargeClosedGrey.svg\"></img></div><div id=\"vault4\"><span>4x4</span><img id=\"vault4img\" style=\"position: relative; top: 0; left: 0;\" class=\"vault-img\" src=\"./img/icons/SafeLargeClosedGrey.svg\"></img></div></div><hr></hr><div class=\"levelsTest\"><div><table><tbody><tr><td>Level 1</td><td>Level 2</td><td>Level 3</td></tr><tr class=\"level-img-row\"><td><img id=\"level1\" src=\"./img/icons/PadlockOpenTickNoShadow.svg\"></td><td><img id=\"level2\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level3\" src=\"./img/icons/PadlockGrey.svg\"></td></tr><tr class=\"star-row\"><td id=\"1stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"2stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"3stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td></tr></tbody></table></div><div><table><tbody></tbody></table><table><tbody><tr><td>Level 4</td><td>Level 5</td><td>Level 6</td><td>Level 7</td><td>Level 8</td></tr><tr class=\"level-img-row\"><td><img id=\"level4\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level5\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level6\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level7\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level8\" src=\"./img/icons/PadlockGrey.svg\"></td></tr><tr class=\"star-row\"><td id=\"4stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"5stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"6stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"7stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"8stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td></tr><tr><td>Level 9</td><td>Level 10</td><td>Level 11</td><td>Level 12</td><td>Level 13</td></tr><tr class=\"level-img-row\"><td><img id=\"level9\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level10\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level11\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level12\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level13\" src=\"./img/icons/PadlockGrey.svg\"></td></tr><tr class=\"star-row\"><td id=\"9stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"10stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"11stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"12stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"13stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td></tr></tbody></table></div><div><table><tbody></tbody></table><table><tbody><tr><td>Level 14</td><td>Level 15</td><td>Level 16</td><td>Level 17</td><td>Level 18</td></tr><tr class=\"level-img-row\"><td><img id=\"level14\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level15\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level16\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level16\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level18\" src=\"./img/icons/PadlockGrey.svg\"></td></tr><tr class=\"star-row\"><td id=\"14stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"15stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"16stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"17stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"18stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td></tr><tr><td>Level 19</td><td>Level 20</td><td>Level 21</td><td>Level 22</td><td>Level 23</td></tr><tr class=\"level-img-row\"><td><img id=\"level19\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level20\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level21\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level22\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level23\" src=\"./img/icons/PadlockGrey.svg\"></td></tr><tr class=\"star-row\"><td id=\"19stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"20stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"21stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"22stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"23stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td></tr></tbody></table></div><div><table><tbody></tbody></table><table><tbody><tr><td>Level 24</td><td>Level 25</td><td>Level 26</td><td>Level 27</td><td>Level 28</td></tr><tr class=\"level-img-row\"><td><img id=\"level24\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level25\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level26\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level27\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level28\" src=\"./img/icons/PadlockGrey.svg\"></td></tr><tr class=\"star-row\"><td id=\"24stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"25stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"26stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"27stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"28stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td></tr><tr><td>Level 29</td><td>Level 30</td><td>Level 31</td><td>Level 32</td><td>Level 33</td></tr><tr class=\"level-img-row\"><td><img id=\"level29\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level30\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level31\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level32\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level22\" src=\"./img/icons/PadlockGrey.svg\"></td></tr><tr class=\"star-row\"><td id=\"29stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"30stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"31stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"32stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"33stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td></tr></tbody></table></div></div>";	

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
var one;
var two;
var three;
var starsUpdate;
var AdMob = false;

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

function setStarVaules(currentLevel) {
	
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
		two = parseInt(two[1],10);
	} else {
		two = parseInt(levels[currentLevel]['two'], 10);
	}

	one = levels[currentLevel]['one'];
	if(one.includes('-')) {
		one = one.split('-'); 
		one = parseInt(one[1],10);
	} else {
		one = parseInt(levels[currentLevel]['one'], 10);
	}
}

function calculateStars(movesUp) {	
	if (movesUp <= three ) {
		return 3;
	} else if (movesUp > three && movesUp <= two) {
		return 2;
	} else if (movesUp > two && movesUp <= one) {
		return 1;
	} else {
		return 0;
	}
}

/*function createVaultDiv() {
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
}*/

function createLevelDiv (x,y) {
	var div = "<div><table><tbody>";
	
	switch(x) {
		case 1:
			tempExpl = "<div><span class=\"explanation\">Learn How To Play</span></div><br/>";
			break;
		case 4:
			tempExpl = "<div><span class=\"explanation\">Subtract the numbers to eliminate all tiles</span></div><br/>";
			break;
		case 14:
			tempExpl = "<div><span class=\"explanation\">Subtract diagonally as well as horizontally & vertically</span></div><br/>";
			break;
		case 24:
			tempExpl = "<div><span class=\"explanation\">Complete the 4 by 4 boards</span></div><br/>";
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
				tempImg += "<td><img id=\"level"+i+"\" src=\"./img/icons/PadlockOpenTickNoShadow.svg\"></td>";
			} else {		
				tempHeader += "<td id=\"levelHeader"+i+"\" style=\"color: #BFBFBF;\">Level "+i+"</td>";
				tempImg += "<td><img id=\"level"+i+"\" src=\"./img/icons/PadlockGrey.svg\"></td>";
			}
			tempStars = "<td id=\""+i+"stars\">";
			numStars = 0;
			numStars = storage.getItem('level'+i);
			for (j=0; j<3; j++) {
				if(i>2) {
					if(numStars > x) {
						tempStars += "<img class = \"star\" src=\"./img/icons/StarOn.svg\" />";
					} else {
						if (i > highestLevel ) {
							tempStars += "<img class = \"star\" src=\"./img/icons/StarOffGrey.svg\" />";
						}	
						else {
							tempStars += "<img class = \"star\" src=\"./img/icons/StarOff.svg\" />";
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
				tempImg1 += "<td><img id=\"level"+i+"\" src=\"./img/icons/PadlockOpenTickNoShadow.svg\"></td>";
			} else {
				tempHeader1 += "<td id=\"levelHeader"+i+"\" style=\"color: #BFBFBF;\">Level "+i+"</td>";
				tempImg1 += "<td><img id=\"level"+i+"\" src=\"./img/icons/PadlockGrey.svg\"></td>";
			}
			if ((i+5) <= highestLevel ) {
				tempHeader2 += "<td id=\"levelHeader"+(i+5)+"\">Level "+(i+5)+"</td>";
				tempImg2 += "<td><img id=\"level"+(i+5)+"\" src=\"./img/icons/PadlockOpenTickNoShadow.svg\"></td>";
			} else {
				tempHeader2 += "<td id=\"levelHeader"+(i+5)+"\" style=\"color: #BFBFBF;\">Level "+(i+5)+"</td>";
				tempImg2 += "<td><img id=\"level"+(i+5)+"\" src=\"./img/icons/PadlockGrey.svg\"></td>";
			}
			tempStars1 = "<td id=\""+i+"stars\">";
			tempStars2 = "<td id=\""+(i+5)+"stars\">";
			numStars1 = 0;
			numStars2 = 0;
			numStars1 = storage.getItem('level'+i);
			numStars2 = storage.getItem('level'+(i+5));
			for (j=0; j<3; j++) {
				if(numStars1 > j) {
					tempStars1 += "<img class = \"star\" src=\"./img/icons/StarOn.svg\" />";
				} else {
					if (i > highestLevel) {
						tempStars1 += "<img class = \"star\" src=\"./img/icons/StarOffGrey.svg\" />";
					} else {
						tempStars1 += "<img class = \"star\" src=\"./img/icons/StarOff.svg\" />";
					}
				}
				if(numStars2 > j) {
					tempStars2 += "<img class = \"star\" src=\"./img/icons/StarOn.svg\" />";
				} else {
					if (i > highestLevel) {
						tempStars2 += "<img class = \"star\" src=\"./img/icons/StarOffGrey.svg\" />";
					} else {
						tempStars2 += "<img class = \"star\" src=\"./img/icons/StarOff.svg\" />";
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
	$('#totalDiv').html("<img class=\"star\" src=\"./img/icons/StarOn.svg\"/> Total: <span id=\"totalStars\"></span>");
	
	//var tester = "<button id=\"tester\" type=\"button\">Click Me!</button>";
	
	//var slider = "<div class=\"slider\"><div id=\"vault1\"><span>Tutorial</span><img id=\"vault1img\" style=\"position: relative; top: 0; left: 0;\" class=\"vault-img\" src=\"./img/icons/SafeLargeOpen.svg\"></img></div><div id=\"vault2\"><span>Subtract</span><img id=\"vault2img\" style=\"position: relative; top: 0; left: 0;\" class=\"vault-img\" src=\"./img/icons/SafeLargeClosedGrey.svg\"></img></div><div id=\"vault3\"><span>Diagonal</span><img id=\"vault3img\" style=\"position: relative; top: 0; left: 0;\" class=\"vault-img\" src=\"./img/icons/SafeLargeClosedGrey.svg\"></img></div><div id=\"vault4\"><span>4x4</span><img id=\"vault4img\" style=\"position: relative; top: 0; left: 0;\" class=\"vault-img\" src=\"./img/icons/SafeLargeClosedGrey.svg\"></img></div></div>";
	
	var slider = "<div class=\"slider\">";
	for (i=1; i<=4; i++) {
		tempDiv = "<div id=\"vault"+i+"\">"
		switch(i) {
			case 1:
				tempSpan = "<span>Tutorial</span>";
				tempStatus = "<span class=\"status\"></span>";
				break;
			case 2:
				tempSpan = "<span>Subtract</span>";
				if(i<=highestVault) {
					tempStatus = "<span style=\"color:#27aae0 !important\" class=\"status\">Unlocked: 3</span><img class=\"star\" src=\"./img/icons/StarOn.svg\">";
				} else {
					tempStatus = "<span style=\"color:#BFBFBF \" class=\"status\">Locked: 3</span><img class=\"star\" src=\"./img/icons/StarOn.svg\">";
				}
				break;
			case 3:
				tempSpan = "<span>Diagonal</span>";
				if(i<=highestVault) {
					tempStatus = "<span style=\"color:#27aae0 !important\" class=\"status\">Unlocked: 24</span><img class=\"star\" src=\"./img/icons/StarOn.svg\">";
				} else {
					tempStatus = "<span style=\"color:#BFBFBF \" class=\"status\">Locked: 24</span><img class=\"star\" src=\"./img/icons/StarOn.svg\">";
				}
				break;
			case 4:
				tempSpan = "<span>4x4</span>";
				if(i<=highestVault) {
					tempStatus = "<span style=\"color:#27aae0 !important\" class=\"status\">Unlocked: 40</span><img class=\"star\" src=\"./img/icons/StarOn.svg\">";
				} else {
					tempStatus = "<span style=\"color:#BFBFBF \" class=\"status\">Locked: 40</span><img class=\"star\" src=\"./img/icons/StarOn.svg\">";
				}
				break;
		}
		if(i<=highestVault) {
			tempImg = "<img id=\"vault"+i+"img\" style=\"position: relative; top: 0; left: 0;\" class=\"vault-img\" src=\"./img/icons/SafeLargeOpen.svg\"></img><img id=\"vault"+i+"overlay\" src=\"./img/icons/"+i+"Open.svg\" style=\"width: 24px; position: relative; bottom: 38px; left: 44%;\"/>";
		} else {
			tempImg = "<img id=\"vault"+i+"img\" style=\"position: relative; top: 0; left: 0;\" class=\"vault-img\" src=\"./img/icons/SafeLargeClosedGrey.svg\"></img><img id=\"vault"+i+"overlay\" src=\"./img/icons/"+i+"Lock.svg\" style=\"width: 24px; position: relative; bottom: 38px; left: 44%; \"/>";
		}
		tempDiv = tempDiv + tempSpan + tempImg + tempStatus;
		slider += tempDiv + "</div>";
	}
	slider += "</div>";
	
	var hr = "<hr></hr>";
	var levels = "<div class=\"levelsTest\">"
	
	var levels1to3 = createLevelDiv(1,3);
	var levels4to13 = createLevelDiv(4,13);
	var levels14to23 = createLevelDiv(14,23);
	var levels24to33 = createLevelDiv(24,33);
	
	levels = levels + levels1to3 + levels4to13 + levels14to23 + levels24to33;
	
	//"<div><table><tbody></tbody></table><table><tbody><tr><td>Level 24</td><td>Level 25</td><td>Level 26</td><td>Level 27</td><td>Level 28</td></tr><tr class=\"level-img-row\"><td><img id=\"level24\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level25\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level26\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level27\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level28\" src=\"./img/icons/PadlockGrey.svg\"></td></tr><tr class=\"star-row\"><td id=\"24stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"25stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"26stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"27stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"28stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td></tr><tr><td>Level 29</td><td>Level 30</td><td>Level 31</td><td>Level 32</td><td>Level 33</td></tr><tr class=\"level-img-row\"><td><img id=\"level29\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level30\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level31\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level32\" src=\"./img/icons/PadlockGrey.svg\"></td><td><img id=\"level22\" src=\"./img/icons/PadlockGrey.svg\"></td></tr><tr class=\"star-row\"><td id=\"29stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"30stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"31stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"32stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td><td id=\"33stars\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"></td></tr></tbody></table></div></div>";
	return slider + hr + levels;

}

/*function createLevelDiv(vault) {
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
	
	//tempLevelDiv += tempLevelDiv + vaultIcon + firstLabelRow + firstIconRow + firstStarRow + secondLabelRow + secondIconRow + secondStarRow + "</tbody></table>";
	tempLevelDiv += tempLevelDiv + firstLabelRow + firstIconRow + firstStarRow + secondLabelRow + secondIconRow + secondStarRow + "</tbody></table>";
	return tempLevelDiv;
}*/

function unlockPreviousLevels(from, to) {

	for (i=(from+1); i<=to; i++) {		
		$('#level' + i).attr("src", "./img/icons/PadlockOpenTickNoShadow.svg");
		$('#' + i + 'stars').children().attr("src", "./img/icons/StarOff.svg");
		$('#levelHeader' + i).css("color", "black");
	}
	highestLevel = to;
	storage.setItem('highestLevel', highestLevel);
	return true;
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

	var movesLegend = "<table><tbody><tr><td>Moves</td><td>"+levels[currentLevel]['three']+"</td><td>"+levels[currentLevel]['two']+"</td><td>"+levels[currentLevel]['one']+"</td></tr><tr><td>Stars</td><td><img class = \"star\" src=\"./img/icons/StarOn.svg\" /><img class = \"star\" src=\"./img/icons/StarOn.svg\" /><img class = \"star\" src=\"./img/icons/StarOn.svg\" /></td><td><img class = \"star\" src=\"./img/icons/StarOn.svg\" /><img class = \"star\" src=\"./img/icons/StarOn.svg\" /><img class = \"star\" src=\"./img/icons/StarOff.svg\" /></td><td><img class = \"star\" src=\"./img/icons/StarOn.svg\" /><img class = \"star\" src=\"./img/icons/StarOff.svg\" /><img class = \"star\" src=\"./img/icons/StarOff.svg\" /></td></tr></tbody></table>";
	prepInterstitial();	
	$('.lines-container').html('');
	$('.vertical-lines-container').html('');
	$('.diagonal-left-lines-container').html('');
	$('.diagonal-right-lines-container').html('');
	//$('.levels').css('display','none');
	$('#levelsDiv').css('display','none');
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
		if(getCurrentLevelNumber() > 13) {
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
	$('.level-number').html("Level "+ getCurrentLevelNumber());
	$('.level-number').css('display','block');
	$('.controls-lower').css('display','block');
	if(getCurrentLevelNumber() > 2) {
		$('.moves-legend-container').html(movesLegend);
		$('.moves-legend-container').css('display','block');	
	}
	$('.super-container').css('display','block');
	if(currentLevel === "level1" ) {
		$('.tutorial-container').html("<img class=\"object animate\" src=\"./img/icons/HandPointerBlack.svg\"/>");
		$('#tutorialText').html(level1Tutorial);
		$('#tutorialTitle').html("<u>How To Win</u>");
		$('.tutorial-modal').css('height', '75px');
		howToWinModal.style.display = "block";
		$('.object').css('left');
		$('.object').addClass('horizTranslate');
	} else if(currentLevel === "level2" ) {
		$('.tutorial-container').html("<img class=\"object2 animate\" src=\"./img/icons/HandPointerBlack.svg\"/>");
		$('#tutorialText').html(level2Tutorial);
		$('#tutorialTitle').html("");
		howToWinModal.style.display = "block";
		$('.object2').css('left');
		$('.object2').addClass('horizTranslate2');
	} else if(currentLevel === "level3" ) {
		$('.tutorial-container').html("<img class=\"object3 animate\" src=\"./img/icons/HandPointerBlack.svg\"/>");
		$('#tutorialText').html(level3Tutorial);
		$('#tutorialTitle').html("");
		howToWinModal.style.display = "block";
		$('.object3').css('bottom');
		$('.object3').addClass('horizTranslate3');
		$('.tutorial').css('padding-top', '290px');
	} else if(currentLevel === "level14" ) {
		$('.tutorial-container').html("<img class=\"object4 animate\" src=\"./img/icons/HandPointerBlack.svg\"/>");
		$('#tutorialText').html(level14Tutorial);
		$('#tutorialTitle').html("");
		howToWinModal.style.display = "block";
		$('.object4').css('bottom');
		$('.object4').addClass('horizTranslate4');
		$('.tutorial').css('padding-top', '290px');
	}
	else {
		$('.tutorial-container').html("");
	}
	//$('#pie-container').html(pie);
	
	movesUp = 0;
	starsUpdate = 3;
	moves = levels[currentLevel]['tiles'].length-1;
	$('#move-num').html(movesUp);
	isPaused = false;
	if(getCurrentLevelNumber() > 2) {
		var tempStarsCounter = "";
		for (z=0; z<3; z++ ) {
			tempStarsCounter += "<img class=\"star\" src=\"./img/icons/StarOn.svg\">";
		}
		$('#starCounter').html(tempStarsCounter);
	}
	//startTimer();
	setStarVaules(currentLevel);
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
	if (getCurrentLevelNumber() > 13) {
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
	var swipeSound = new Audio("./audio/swipe.mp3"); // buffers automatically when created
	var lockSound = new Audio("./audio/lock.m4a"); // buffers automatically when created
	
	//$('#levelsDiv').show();
  	
	storage = window.localStorage;
	highestLevel = storage.getItem('highestLevel');
	highestVault = storage.getItem('highestVault');
	if(testingLevels) {
		highestLevel = 33;
		highestVault = 4;
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
	
	window.onclick = function(event) {
		if(event.target==howToWinModal) {
			howToWinModal.style.display = "none";
		}
	}
	
	//$('.vaults').html(createVaultDiv());
	currentVaultNumber = 1;
	
    //$('.levels').css('display','none');
	//levelDiv = createLevelDiv(1);
	//$('.levels').html(levelDiv);	
	//$('.levels').css('display','block');
    
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
	
	/*$('body').on('click', '#tester', function(e) {
		//alert('hello');
		$('.slider').slick('slickGoTo', '3');
	});*/

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
    	$('#challenge').css('display', 'none');	
    	$('#levelsDiv').html(createMainDiv());
		$('#totalDiv').css('display','block');
		$('#totalStars').html(totalStars);
    	$('.heading').hide();
    	$('#levelsDiv').show();
    	
    	$('.slider').slick({
			centerMode: true,
			centerPadding: '70px',
			focusOnSelect: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			asNavFor: '.levelsTest',
			index: 2,
			dots: true,
			infinite: true
			//focusOnSelect: true,
			//slidesToScroll: 3,
		});
	
		$('.levelsTest').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.slider'
		});
    });
    
    $('body').on('click', '.hamburger', function(e) {
	    //pauseTimer();
    	pauseModal.style.display = "block";
    	$('#levelTitle').html(currentLevel.substr(5));
	}); 
    
    $('body').on('click', '.pause', function(e) {
	    pauseTimer();
    	pauseModal.style.display = "block";
    	$('#levelTitle').html(currentLevel.substr(5));
	});  
	
	$(".pauseClose").on('click', function(e) {
		isPaused = false;
		pauseModal.style.display = "none";
	});
	
	$(".tutorialClose").on('click', function(e) {
		howToWinModal.style.display = "none";
	});
	
	$(".vaultOpenClose").on('click', function(e) {
		vaultOpenModal.style.display = "none";
		$('.slider').slick('slickGoTo', (highestVault-1));
	});
	
    $(".GameOverClose").on('click', function(e) {
    	
		gameOverModal.style.display = "none";
    	if(continueFlag) {
    		continueFlag = false;
    		//alert('need to open new vault');	
			//e.preventDefault();
			//$('.levels').hide();
			$('.control-container').css('display','none');	
			$('.game-container').css('display','none');	
			$('.controls-lower').css('display','none');	
			$('.super-container').css('display','none');
			$('.moves-legend-container').css('display','none');	
			$('.level-number').css('display','none');
			//$('.vaults').css('display','block');
			$('#levelsDiv').css('display','block');
			$('.title').show();
			vaultOpenModal.style.display = "block";
			//$('.slider').slick('slickGoTo', (highestVault-1));
    	} else {
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
			//addSwipeTo('.tile');
		}
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
		$('.level-number').css('display','none');
		$('.levels').css('display','block');
		$('.title').show();
    });
    
    $('body').on('click', '#home', function(e) {
    	e.preventDefault();
		pauseModal.style.display = "none";
		$('.control-container').css('display','none');	
		$('.game-container').css('display','none');	
		$('.controls-lower').css('display','none');	
		$('.super-container').css('display','none');
		$('.moves-legend-container').css('display','none');	
		$('#totalDiv').css('display','none');
		$('.level-number').css('display','none');
		$('#challenge').css('display','block');	
    });
    
    $('body').on('click', '#vaultSelect', function(e) {
    	e.preventDefault();
		pauseModal.style.display = "none";
		//$('.levels').hide();
		$('.control-container').css('display','none');	
		$('.game-container').css('display','none');	
		$('.controls-lower').css('display','none');	
		$('.super-container').css('display','none');
		$('.moves-legend-container').css('display','none');	
		$('.level-number').css('display','none');
		//$('.vaults').css('display','block');
		$('#levelsDiv').css('display','block');
		$('.title').show();
	});
	
	$('body').on('click', '#resetGame', function(e) {
    	window.localStorage.clear();
    	location.reload();
    });
    
    $('body').on('click', '#unlockAll', function(e) {
    	//window.localStorage.clear();
    	//alert('hello');
    	testingLevels = true;
    	onReady();
    	//location.reload();
    });
    
	$('.game-explanation').html(gameExplanation);
	
	$('body').on('click', '#level1, #level2, #level3, #level4, #level5, #level6, #level7, #level8, #level9, #level10, #level11, #level12, #level13, #level14, #level15, #level16, #level17, #level18, #level19, #level20, #level21, #level22, #level23, #level24, #level25, #level26, #level27, #level28, #level29, #level30, #level31, #level32, #level33, #level34, #level35, #level36, #level37, #level38, #level39, #level40', function(e) {
		e.preventDefault();
		
		currentLevel = $(this).attr('id');
		var levelNumber = getCurrentLevelNumber();
		switch(true) {
			case levelNumber < 4:
				currentVaultNumber = 1;
				break;
			case levelNumber > 3 && levelNumber < 14:
				currentVaultNumber = 2;
				break;
			case levelNumber > 13 && levelNumber < 24 :
				currentVaultNumber = 3;
				break;
			case levelNumber > 23 :
				currentVaultNumber = 4;
				break;
			default:
				currentVaultNumber = 1;
				break;
		}
		if (getCurrentLevelNumber() <= highestLevel) {
			$('.current-level').html("Level:"+parseInt(currentLevel.substr(5),10));
			remainingTiles = levels[currentLevel]['tiles'].length;
			addBoard();	
			$('.title').hide();
		} else {
			lockSound.play();
		}
		//addSwipeTo('.tile');
	});
	
	$('body').on('click', '#vault1, #vault2, #vault3, #vault4, #vault5, #vault6', function(e) {
	//$("#vault1, #vault2, #vault3, #vault4, #vault5, #vault6").on('click', function(e) {
		currentVault = $(this).attr('id');
		currentVaultNumber = parseInt(currentVault.substr(5),10);
		/*if (currentVaultNumber <= highestVault) {
			$('.vaults').hide();
			levelDiv = createLevelDiv(currentVaultNumber);
			$('.levels').html(levelDiv);	
			$('.levels').css('display','block');
		}*/
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
		gameOverModal.style.display = "none";
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
		$('#move-num').html(movesUp);		
		if(getCurrentLevelNumber() > 2) {
			var tempStarsCounter = "";
			for (z=0; z<3; z++ ) {
				tempStarsCounter += "<img class=\"star\" src=\"./img/icons/StarOn.svg\">";
			}
			$('#starCounter').html(tempStarsCounter);
		}
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
			if(getCurrentLevelNumber() > 13) {
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
			newClassIndex = 'tile-position-'+x+'-'+y;
				if ($('.'+newClassIndex).text()) {				
					swipeSound.play();
					moves--;
					movesUp++;
					starsUpdate = calculateStars(movesUp);
					if(starsUpdate < 3 && starsUpdate > 1) {
						//$('#starCounter').html("<img class=\"star\" src=\"./img/icons/StarOn.svg\"><img class=\"star\" src=\"./img/icons/StarOn.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\">");
						$('#starCounter').html('2 STARS');
					} else if (starsUpdate < 2) {
						//$('#starCounter').html("<img class=\"star\" src=\"./img/icons/StarOn.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\"><img class=\"star\" src=\"./img/icons/StarOff.svg\">");
						$('#starCounter').html('1 STAR');
					}
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
					//calculateTotal();
					//$('#complete').html(completeBonus);
					//$('#remainder').html(remainderBonus);
					//$('#moves').html(((levels[currentLevel]['tiles'].length-1)-moves) * 75);
					//$('#total').html(total);
					

					/*$('.count').each(function () {
					  var $this = $(this);
					  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
						  $this.text(Math.ceil(this.Counter));
						}
					  });
					});*/
					
					//$('#moves').html(((levels[currentLevel]['tiles'].length-1)-movesUp));
					$('#moves').html(movesUp);
					$('#levelNum').html(getCurrentLevelNumber());
					var stars = storage.getItem(currentLevel);
					starsUpdate = calculateStars(movesUp);
					if (starsUpdate > stars && getCurrentLevelNumber() > 2) {
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
							displayStars += "<img class = \"star\" src=\"./img/icons/StarOn.svg\" />";
						} else {
							displayStars += "<img class = \"star\" src=\"./img/icons/StarOff.svg\" />";
						}
					}
					if(getCurrentLevelNumber() > 2) {
						$('#starsCollected').html(displayStars);
					}
					highestLevel = storage.getItem('highestLevel');
					highestVault = storage.getItem('highestVault');
					if(getCurrentLevelNumber() >= highestLevel || highestLevel === null) {
						highestLevel = getCurrentLevelNumber();	
							
						highestLevel++;
						storage.setItem('highestLevel', highestLevel);
						//var levToUpdate = currentLevel+1;
						$('#level' + highestLevel).attr("src", "./img/icons/PadlockOpenTickNoShadow.svg");
						$('#' + highestLevel + 'stars').children().attr("src", "./img/icons/StarOff.svg");
						$('#levelHeader' + highestLevel).css("color", "black");
						var currentHighestLevel = highestLevel;
						
						if(totalStars>=3 && highestVault < 2) {	
							highestVault = 2;
							storage.setItem('highestVault', highestVault);
							$('#vault' + highestVault + 'img').attr("src", "./img/icons/SafeLargeOpen.svg");
							$('#vault' + highestVault + 'overlay').attr("src", "./img/icons/"+highestVault+"Open.svg");
							$('#vault' + highestVault).find('.status').html('Unlocked: 3');
							$('#vault' + highestVault).find('.status').css('color', '#27aae0 !important');
							$('#vault' + highestVault).find('.star').attr('src', './img/icons/StarOn.svg');
							currentVaultNumber++;
							if (currentHighestLevel <= 4) {
								//alert('Opening Subtract vault');
								continueFlag = true;
								unlockPreviousLevels(currentHighestLevel, 4);
							}
						} 
						if(totalStars>=24 && highestVault < 3) {	
							highestVault = 3;
							storage.setItem('highestVault', highestVault);
							$('#vault' + highestVault + 'img').attr("src", "./img/icons/SafeLargeOpen.svg");
							$('#vault' + highestVault + 'overlay').attr("src", "./img/icons/"+highestVault+"Open.svg");
							$('#vault' + highestVault).find('.status').html('Unlocked: 24');
							$('#vault' + highestVault).find('.status').css('color', '#27aae0 !important');
							//$('#vault' + highestVault).find('.status');
							currentVaultNumber++;
							if (currentHighestLevel < 14) {
								//alert('Opening Diagonal vault');
								continueFlag = true;
								unlockPreviousLevels(currentHighestLevel, 14);
							}
						}
						if(totalStars>=40 && highestVault < 4) {	
							highestVault = 4;
							storage.setItem('highestVault', highestVault);
							$('#vault' + highestVault + 'img').attr("src", "./img/icons/SafeLargeOpen.svg");
							$('#vault' + highestVault + 'overlay').attr("src", "./img/icons/"+highestVault+"Open.svg");
							$('#vault' + highestVault).find('.status').html('Unlocked: 40');
							$('#vault' + highestVault).find('.status').css('color', '#27aae0 !important');
							currentVaultNumber++;
							if (currentHighestLevel < 24) {
								//alert('Opening 4x4 vault');
								continueFlag = true;
								unlockPreviousLevels(currentHighestLevel, 24);
							}
						}
						
						/*switch(highestLevel) {
							case 3:
								highestVault = 2;
								storage.setItem('highestVault', highestVault);
								$('#vault' + highestVault + 'img').attr("src", "./img/icons/SafeLargeOpen.svg");
								$('#vault' + highestVault + 'overlay').attr("src", "./img/icons/"+highestVault+"Open.svg");
								currentVaultNumber++;
								break;
							case 13:
								highestVault = 3;
								storage.setItem('highestVault', highestVault);
								$('#vault' + highestVault + 'img').attr("src", "./img/icons/SafeLargeOpen.svg");
								$('#vault' + highestVault + 'overlay').attr("src", "./img/icons/"+highestVault+"Open.svg");
								currentVaultNumber++;
								break;
							case 23:
								highestVault = 4;
								storage.setItem('highestVault', highestVault);
								$('#vault' + highestVault + 'img').attr("src", "./img/icons/SafeLargeOpen.svg");
								$('#vault' + highestVault + 'overlay').attr("src", "./img/icons/"+highestVault+"Open.svg");
								currentVaultNumber++;
								break;
							default:
								break;
						} */
					}
					//currentLevel = incrementLevel();
					
					gameOverModal.style.display = "block";
				}
			}
		});
    }