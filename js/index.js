var gameExplanation = "<strong class=\"important\">How to play </strong> swipe tiles to subtract from each other. End up with 0 to get to next level";

var currentLevel;

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

function addBoard() {
	$('.levels').css('display','none');
	$('.control-container').css('display','block');	
	$('.game-container').css('display','block');
	$('.score-container span').html('0');
	
	var size = Math.sqrt(levels[currentLevel].length); 
	
	//$('.tile-container').html(eval(currentLevel));
	$('.tile-container').html(generateLevel(size));
	
	 //parseInt(currentLevel.slice(-1),10)+1;
	$('.grid-container').html(createGrid(size));
	var dimension = (12*(size+1))+(size*46);
	dimension = dimension.toString() + 'px';
	$('.game-container').css('width',dimension);
	$('.game-container').css('height',dimension);
}

function generateLevel(size) {
	var output = "";
	for (i=0; i<levels[currentLevel].length; i++) {
		output += "<div class=\"tile tile-position-" + (Math.floor(i/size)+1)+ "-" + ((i%size)+1) + "\">" + levels[currentLevel][i] + "</div>";
	}
	return output;
}

    $(function() { 
    
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
		addBoard();	
		addSwipeTo('.tile');
	});
	
	$('.restart-container').on('click', function(e) {
		e.preventDefault();
		$('.score-container span').html('0');
		var size = Math.sqrt(levels[currentLevel].length);
		$('.tile-container').html(generateLevel(size));
		addSwipeTo('.tile');
	});     
      //Enable swiping...
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
					} else {
						$('.'+newClassIndex).remove();
						$('.tile-container').append("<div class=\"tile "+newClassIndex+" tile-tick tile-complete\"></div>");
					}
					$('.score-container span').html(parseInt($('.score-container span').html(), 10)+1);
				}
			}
        },
         threshold:5
      });
      };
    });