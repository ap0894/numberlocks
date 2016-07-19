var gameExplanation = "<strong class=\"important\">How to play </strong> swipe tiles to subtract from each other. End up with 0 to get to next level";

var currentLevel;
var remainingTiles;
var completeBonus = 500;
var remainderBonus = 1000;
var moves = 0;
var testing = true;

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
	AndroidFullScreen.immersiveMode();
	initAds();
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
	moves = 0;
	$('.levels').css('display','none');
	var size;
	if(levels[currentLevel].length<4) {
		size = levels[currentLevel].length; 
		$('.grid-container').html(createLine(size));
		$('.tile-container').html(generateStraightLevel(size));
		var width = (12*(size+1))+(size*46);
		width = width.toString() + 'px';
		var height = (46) + (12*2);
		height = height.toString() + 'px';
		$('.game-container').css('width',width);
		$('.game-container').css('height',height);
	} else {
		size = Math.sqrt(levels[currentLevel].length); 
		$('.grid-container').html(createGrid(size));
		$('.tile-container').html(generateLevel(size));
		var dimension = (12*(size+1))+(size*46);
		dimension = dimension.toString() + 'px';
		$('.game-container').css('width',dimension);
		$('.game-container').css('height',dimension);
	}
	$('.control-container').css('display','block');	
	$('.game-container').css('display','block');
	$('.moves-container span').html(moves);
}

function generateLevel(size) {
	var output = "";
	for (i=0; i<levels[currentLevel].length; i++) {
		output += "<div class=\"tile tile-position-" + (Math.floor(i/size)+1)+ "-" + ((i%size)+1) + "\">" + levels[currentLevel][i] + "</div>";
	}
	return output;
}

function generateStraightLevel(size) {
	var output = "";
	for (i=0; i<levels[currentLevel].length; i++) {
		output += "<div class=\"tile tile-position-" + ((i%size)+1) + "-" + (Math.floor(i/size)+1) + "\">" + levels[currentLevel][i] + "</div>";
	}
	return output;
}

function calculateTotal() {
	var total = remainderBonus + completeBonus + (((levels[currentLevel].length-1)-moves) * 75);
	return total;
}

function incrementLevel() {
	var newNum = parseInt(currentLevel.substr(5),10)+1;
	return "level"+newNum;
}



function onReady() {
    
    $(".close").on('click', function(e) {
    	gameOverModal.style.display = "none";
    	if(AdMob) AdMob.showInterstitial();
		remainingTiles = levels[currentLevel].length;
		addBoard();	
		addSwipeTo('.tile');
	});
    
    $(".level-selector").on('click', function(e) {
    	e.preventDefault();
		$('.control-container').css('display','none');	
		$('.game-container').css('display','none');
		$('.levels').css('display','block');
    });
    
	$('.game-explanation').html(gameExplanation);
	
	$("#level1, #level2, #level3, #level4, #level5, #level6, #level7, #level8, #level9, #level10").on('click', function(e) {
		e.preventDefault();
		currentLevel = $(this).attr('id');
		remainingTiles = levels[currentLevel].length;
		addBoard();	
		addSwipeTo('.tile');
	});
	
	$('.restart-container').on('click', function(e) {
		e.preventDefault();
		var size;
		if(levels[currentLevel].length<4) {
			size = levels[currentLevel].length;
			$('.tile-container').html(generateStraightLevel(size));
		} else {
			size = Math.sqrt(levels[currentLevel].length);
			$('.tile-container').html(generateLevel(size));
		}
		remainingTiles = levels[currentLevel].length;
		addSwipeTo('.tile');
		moves=0;
		$('.moves-container span').html(moves);
	});     
	
		//var remainingTiles = levels[currentLevel].length;
      //Enable swiping...
		var hammertime = $('.tile-container').hammer({prevent_default: true, domEvents:true});
		$('.tile-container').data("hammer").get('swipe').set({ direction: Hammer.DIRECTION_ALL, threshold: 0 });
		hammertime.on("swipeleft swiperight swipeup swipedown", ".tile", function(ev) {
			var classIndex = $.grep($(this).attr('class').split(' '), function(v, i) {
				return v.indexOf("tile-position") === 0;
			}).join();
			var angle = ev.originalEvent.gesture.angle;
			if(angle > -157.5 && angle < -112.5) {
				direction = "upleft"; 
				//UP-LEFT SWIPE...
			} else if(angle > -67.5 && angle < -22.5) {
				direction = "upright"; 
				//UP-RIGHT SWIPE...
			} else if(angle > 22.5 && angle < 67.5) {
				direction = "downright"; 
				//DOWN-RIGHT SWIPE...
			} else if (angle > 112.5 && angle < 157.5) {
				direction = "downleft"; 
				//DOWN-LEFT SWIPE...
			} else {
				direction = ev.type;
			}
    		alert(direction + " " + classIndex); 
		});
		
      var addSwipeTo = function(selector) {
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
      };
    }