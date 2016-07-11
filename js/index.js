var level2 = "<div class=\"tile tile-position-1-1 \">66</div><div class=\"tile tile-position-1-2 \">7</div><div class=\"tile tile-position-1-3 \">36</div><div class=\"tile tile-position-1-4 \">2</div><div class=\"tile tile-position-1-5 \">13</div><div class=\"tile tile-position-2-1 \">21</div><div class=\"tile tile-position-2-2 \">19</div><div class=\"tile tile-position-2-3 \">5</div><div class=\"tile tile-position-2-4 \">58</div><div class=\"tile tile-position-2-5 \">1</div><div class=\"tile tile-position-3-1 \">5</div><div class=\"tile tile-position-3-2 \">9</div><div class=\"tile tile-position-3-3 \">8</div><div class=\"tile tile-position-3-4 \">17</div><div class=\"tile tile-position-3-5 \">3</div><div class=\"tile tile-position-4-1 \">18</div><div class=\"tile tile-position-4-2 \">6</div><div class=\"tile tile-position-4-3 \">45</div><div class=\"tile tile-position-4-4 \">29</div><div class=\"tile tile-position-4-5 \">72</div><div class=\"tile tile-position-5-1 \">12</div><div class=\"tile tile-position-5-2 \">88</div><div class=\"tile tile-position-5-3 \">4</div><div class=\"tile tile-position-5-4 \">22</div><div class=\"tile tile-position-5-5 \">10</div>";

var level1 = "<div class=\"tile tile-position-1-1 \">5</div><div class=\"tile tile-position-1-2 \">7</div><div class=\"tile tile-position-1-3 \">1</div><div class=\"tile tile-position-1-4 \">6</div><div class=\"tile tile-position-2-1 \">9</div><div class=\"tile tile-position-2-2 \">3</div><div class=\"tile tile-position-2-3 \">4</div><div class=\"tile tile-position-2-4 \">1</div><div class=\"tile tile-position-3-1 \">4</div><div class=\"tile tile-position-3-2 \">6</div><div class=\"tile tile-position-3-3 \">3</div><div class=\"tile tile-position-3-4 \">7</div><div class=\"tile tile-position-4-1 \">8</div><div class=\"tile tile-position-4-2 \">5</div><div class=\"tile tile-position-4-3 \">9</div><div class=\"tile tile-position-4-4 \">2</div>";

var grid = "<div class=\"grid-row\"><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div></div> <div class=\"grid-row\"><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div></div><div class=\"grid-row\"><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div></div><div class=\"grid-row\"><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div></div><div class=\"grid-row\"><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div></div></div>";

var gameExplanation = "<strong class=\"important\">How to play </strong> swipe tiles to subtract from each other. End up with 0 to get to next level";

var activeGame;

    $(function() { 
	$('.game-explanation').html(gameExplanation);
	$('.grid-container').html(grid);
	$("#level1").on('click', function(e) {
		e.preventDefault();
		activeGame = "level1";
		$('.score-container').html('0');
		$('.tile-container').html(eval(activeGame));
		addSwipeTo('.tile');
	});
	
	$("#level2").on('click', function(e) {
		e.preventDefault();
		activeGame = "level2";
		$('.score-container').html('0');
		$('.tile-container').html(eval(activeGame));
		addSwipeTo('.tile');
	});
	$('.restart-container').on('click', function(e) {
		e.preventDefault();
		$('.score-container').html('0');
		$('.tile-container').html(eval(activeGame));
		addSwipeTo('.tile');
	});     
      //Enable swiping...
      var addSwipeTo = function(selector) {
      $(selector).swipe("destroy");
      $(selector).swipe( {
        //Generic swipe handler for all directions
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
          //$(this).text("x"); 
          switch (direction) { 
			case 'left':
				var classIndex = $.grep($(this).attr('class').split(' '), function(v, i) {
					return v.indexOf("tile-position") === 0;
				}).join();
				var x = parseInt(classIndex.slice(-3, -2), 10);
				var y = classIndex.slice(-1);
				console.log("x: "+x + " y:" + y);
				if(x>1) {
					x--;
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
							//$(this).addClass(newClassIndex);
							//$(this).addClass('tile-merged');
						} else {
							$('.'+newClassIndex).remove();
							$('.tile-container').append("<div class=\"tile "+newClassIndex+" tile-tick tile-complete\"></div>");
						}
						$('.score-container').html(parseInt($('.score-container').html(), 10)+1);
					}
				}
			break;
			case 'right':
				var classIndex = $.grep($(this).attr('class').split(' '), function(v, i) {
					return v.indexOf("tile-position") === 0;
				}).join();
				var x = parseInt(classIndex.slice(-3, -2), 10);
				var y = classIndex.slice(-1);
				console.log("x: "+x + " y:" + y);
				if(x<5) {
					x++	;
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
							//$(this).addClass(newClassIndex);
							//$(this).addClass('tile-merged');
						} else {
							$('.'+newClassIndex).remove();
							$('.tile-container').append("<div class=\"tile "+newClassIndex+" tile-tick tile-complete\"></div>");
						}
						$('.score-container').html(parseInt($('.score-container').html(), 10)+1);
					}
				}
			break;
			case 'up':  
				var classIndex = $.grep($(this).attr('class').split(' '), function(v, i) {
					return v.indexOf("tile-position") === 0;
				}).join();
				var x = classIndex.slice(-3, -2);
				var y = parseInt(classIndex.slice(-1), 10);
				console.log("x: "+x + " y:" + y);
				if (y>1) {
					y--;
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
							//$(this).addClass(newClassIndex);
							//$(this).addClass('tile-merged');
						} else {
							$('.'+newClassIndex).remove();
							$('.tile-container').append("<div class=\"tile "+newClassIndex+" tile-tick tile-complete\"></div>");
						}
						$('.score-container').html(parseInt($('.score-container').html(), 10)+1);
					}
				}
			break;		
			case 'down': 
				var classIndex = $.grep($(this).attr('class').split(' '), function(v, i) {
					return v.indexOf("tile-position") === 0;
				}).join();
				var x = classIndex.slice(-3, -2);
				var y = parseInt(classIndex.slice(-1), 10);
				console.log("x: "+x + " y:" + y);
				if (y<5) {
					y++;
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
							//$(this).addClass(newClassIndex);
							//$(this).addClass('tile-merged');
						} else {
							$('.'+newClassIndex).remove();
							$('.tile-container').append("<div class=\"tile "+newClassIndex+" tile-tick tile-complete\"></div>");
						}
						$('.score-container').html(parseInt($('.score-container').html(), 10)+1);
					}
				}
			break;
			default:
			} 
        },
         threshold:5
      });
      };
    });