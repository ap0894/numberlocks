var gameExplanation = "<strong class=\"important\">How to play </strong> swipe tiles to subtract from each other. End up with 0 to get to next level";

var levelsDiv = "<table><tbody><tr><tr><td>Level 1</td><td>Level 2</td><td>Level 3</td><td>Level 4</td><td>Level 5</td></tr><tr><td><img id=\"level1\" src=\"./img/levelLocked.png\" /></td><td><img id=\"level2\" src=\"./img/levelLocked.png\" /></td><td><img id=\"level3\" src=\"./img/levelLocked.png\" /></td><td><img id=\"level4\" src=\"./img/levelLocked.png\" /></td><td><img id=\"level5\" src=\"./img/levelLocked.png\" /></td></tr></tr><tr><tr><td>Level 6</td><td>Level 7</td><td>Level 8</td><td>Level 9</td><td>Level 10</td></tr><tr><td><img id=\"level6\" src=\"./img/levelLocked.png\" /></td><td><img id=\"level7\" src=\"./img/levelLocked.png\" /></td><td><img id=\"level8\" src=\"./img/levelLocked.png\" /></td><td><img id=\"level9\" src=\"./img/levelLocked.png\" /></td><td><img id=\"level10\" src=\"./img/levelLocked.png\" /></td></tr></tr></tbody></table>";

var currentLevel;
var remainingTiles;
var completeBonus = 500;
var remainderBonus = 1000;
var moves = 0;
var testing = true;
var total = 0;

if (testing) {
	AdMob = false;
	onReady();
}
else if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', onDeviceReady, false);
} else {
    onReady();
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

	prepInterstitial();	
	$('.lines-container').html('');
	$('.vertical-lines-container').html('');
	moves = 0;
	$('.levels').css('display','none');
	var size;
	if(levels[currentLevel].length<4) {
		size = levels[currentLevel].length; 
		$('.grid-container').html(createLine(size));
		$('.tile-container').html(generateStraightLevel(size));
		var width = (12*(size+1))+(size*46);
		var superWidth = width + 25;
		width = width.toString() + 'px';
		superWidth = superWidth.toString() + 'px';
		var height = (46) + (12*2);
		height = (height+25).toString() + 'px';
		$('.game-container').css('width',width);
		$('.game-container').css('height',height);
		$('.super-container').css('padding-bottom','10px');
		$('.super-container').css('width',superWidth);
		$('.super-container').css('box-shadow','0 3px 6px #000000');
	} else {
		size = Math.sqrt(levels[currentLevel].length); 
		$('.grid-container').html(createGrid(size));
		$('.tile-container').html(generateLevel(size));
		$('.lines-container').html(createLines(size));
		$('.vertical-lines-container').html(createVerticalLines(size));
		var dimension = (12*(size+1))+(size*46);
		var height = dimension + 25;
		$('.vertical-line').css('height',dimension-70);
		$('.horizontal-line').css('width',dimension-66);
		dimension = dimension.toString() + 'px';
		height = height.toString() + 'px';
		$('.game-container').css('width',dimension);
		$('.game-container').css('height',height);
		$('.super-container').css('padding-bottom','10px');
		$('.super-container').css('width',height);
	}
	$('.control-container').css('display','block');	
	$('.game-container').css('display','block');
	$('.super-container').css('display','block');	
	$('.moves-label span').html(moves);
}

function generateLevel(size) {
	var output = "";
	for (i=0; i<levels[currentLevel].length; i++) {
		output += "<div class=\"tile tile-movable tile-position-" + (Math.floor(i/size)+1)+ "-" + ((i%size)+1) + "\">" + levels[currentLevel][i] + "</div>";
	}
	return output;
}

function generateStraightLevel(size) {
	var output = "";
	for (i=0; i<levels[currentLevel].length; i++) {
		output += "<div class=\"tile tile-movable tile-position-" + ((i%size)+1) + "-" + (Math.floor(i/size)+1) + "\">" + levels[currentLevel][i] + "</div>";
	}
	return output;
}

function calculateTotal() {
	total = remainderBonus + completeBonus + (((levels[currentLevel].length-1)-moves) * 75);
	//return total;
}

function incrementLevel() {
	var newNum = parseInt(currentLevel.substr(5),10)+1;
	return "level"+newNum;
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
	
	if ($(classIndex).text() == $(classIndexTopLeft).text()) {
		$(classIndex).addClass('pair');
		$(classIndexTopLeft).addClass('pair');
	} else if ($(classIndex).text() == $(classIndexTopMid).text()) {
		$(classIndex).addClass('pair');
		$(classIndexTopMid).addClass('pair');
	} else if ($(classIndex).text() == $(classIndexTopRight).text()) {
		$(classIndex).addClass('pair');
		$(classIndexTopRight).addClass('pair');
	} else if ($(classIndex).text() == $(classIndexMidLeft).text()) {
		$(classIndex).addClass('pair');
		$(classIndexMidLeft).addClass('pair');
	} else if ($(classIndex).text() == $(classIndexMidRight).text()) {
		$(classIndex).addClass('pair');
		$(classIndexMidRight).addClass('pair');
	} else if ($(classIndex).text() == $(classIndexBotLeft).text()) {
		$(classIndex).addClass('pair');
		$(classIndexBotLeft).addClass('pair');
	} else if ($(classIndex).text() == $(classIndexBotMid).text()) {
		$(classIndex).addClass('pair');
		$(classIndexBotMid).addClass('pair');
	} else if ($(classIndex).text() == $(classIndexBotRight).text()) {
		$(classIndex).addClass('pair');
		$(classIndexBotRight).addClass('pair');
	}
	//alert($(classIndexTopLeft).text()+','+$(classIndexTopMid).text()+','+$(classIndexTopRight).text()+','+$(classIndexMidLeft).text()+','+$(classIndex).text()+','+$(classIndexMidRight).text()+','+$(classIndexBotLeft).text()+','+$(classIndexBotMid).text()+','+$(classIndexBotRight).text());
}

function onReady() {
    $('.levels').html(levelsDiv);
    $('.levels').css('display','none');
    $('.leaderboard').on('click', function(e) {
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
    
    $(".pause").on('click', function(e) {
    	pauseModal.style.display = "block";
	});    
	
	$(".pauseClose").on('click', function(e) {
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
		remainingTiles = levels[currentLevel].length;
		addBoard();	
		//addSwipeTo('.tile');
	});
    
    $("#levelSelect").on('click', function(e) {
    	e.preventDefault();
		pauseModal.style.display = "none";
		$('.control-container').css('display','none');	
		$('.game-container').css('display','none');	
		$('.super-container').css('display','none');
		$('.levels').css('display','block');
		$('.title').show();
    });
    
    $("#vaultSelect").on('click', function(e) {
    	e.preventDefault();
		pauseModal.style.display = "none";
		$('.control-container').css('display','none');	
		$('.game-container').css('display','none');	
		$('.super-container').css('display','none');
		$('.vaults').css('display','block');
		$('.title').show();
    });
    
	$('.game-explanation').html(gameExplanation);
	
	$('.levels').on('click', '#level1, #level2, #level3, #level4, #level5, #level6, #level7, #level8, #level9, #level10', function(e) {
		e.preventDefault();
		currentLevel = $(this).attr('id');
		$('.current-level').html("Level:"+parseInt(currentLevel.substr(5),10));
		remainingTiles = levels[currentLevel].length;
		addBoard();	
		$('.title').hide();
		//addSwipeTo('.tile');
	});
	
	$("#vault1, #vault2, #vault3, #vault4, #vault5").on('click', function(e) {
		$('.vaults').hide();
		$('.levels').css('display','block');
	});
	
	$('#restart').on('click', function(e) {
		e.preventDefault();
		pauseModal.style.display = "none";
		var size;
		if(levels[currentLevel].length<4) {
			size = levels[currentLevel].length;
			$('.tile-container').html(generateStraightLevel(size));
		} else {
			size = Math.sqrt(levels[currentLevel].length);
			$('.tile-container').html(generateLevel(size));
		}
		remainingTiles = levels[currentLevel].length;
		//addSwipeTo('.tile');
		moves=0;
		$('.moves-label span').html(moves);
	});     
	
		//var remainingTiles = levels[currentLevel].length;
      //Enable swiping...
		var hammertime = $('.tile-container').hammer({prevent_default: true, domEvents:true});
		$('.tile-container').data("hammer").get('swipe').set({ direction: Hammer.DIRECTION_ALL, threshold: 0, velocity: 0.1 });
		hammertime.on("swipeleft swiperight swipeup swipedown", ".tile-movable", function(ev) {
			var classIndex = $.grep($(this).attr('class').split(' '), function(v, i) {
				return v.indexOf("tile-position") === 0;
			}).join();
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
			moves++;			
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
					$('.moves-label span').html(moves);
				}
				if(remainingTiles === 0) {
					calculateTotal();
					gameOverModal.style.display = "block";
					$('#complete').html(completeBonus);
					$('#remainder').html(remainderBonus);
					$('#moves').html(((levels[currentLevel].length-1)-moves) * 75);
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
					currentLevel = incrementLevel();
				}
			}
		});
		
      /*var addSwipeTo = function(selector) {
      $(selector).swipe("destroy");
      $(selector).swipe( {
        //Generic swipe handler for all directions
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        
        var classIndex = $.grep($(this).attr('class').split(' '), function(v, i) {
			return v.indexOf("tile-position") === 0;
		}).join();
				
		var x = parseInt(classIndex.slice(-3, -2), 10);
		var y = classIndex.slice(-1);
		var move = false;
		console.log("x: "+x + " y:" + y);
        
          switch (direction) { 
			case 'left':
				if(x>1) {
					x--;
					move = true;
				}
			break;
			case 'right':
				if(x<5) {
					x++	;
					move = true;
				}
			break;
			case 'up':  
				if (y>1) {
					y--;
					move = true;
				}
			break;		
			case 'down': 
				if (y<5) {
					y++;
					move = true;
				}
			break;
			default:
			} 
			if(move) {
			moves++;			
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
						remainingTiles--;
					} else {
						$('.'+newClassIndex).remove();
						$('.tile-container').append("<div class=\"tile "+newClassIndex+" tile-tick tile-complete\"></div>");
						remainingTiles--;
						remainingTiles--;
					}
					$('.moves-container span').html(moves);
				}
				if(remainingTiles === 0) {
					var total = calculateTotal();
					gameOverModal.style.display = "block";
					$('#complete').html(completeBonus);
					$('#remainder').html(remainderBonus);
					$('#moves').html(((levels[currentLevel].length-1)-moves) * 75);
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
					currentLevel = incrementLevel();
				}
			}
        },
         threshold:5
      });
      };*/
    }