var level1 = "<div class=\"tile tile-position-1-1 tile-new\">66</div><div class=\"tile tile-position-1-2 tile-new\">7</div><div class=\"tile tile-position-1-3 tile-new\">36</div><div class=\"tile tile-position-1-4 tile-new\">2</div><div class=\"tile tile-position-1-5 tile-new\">13</div><div class=\"tile tile-position-2-1 tile-new\">21</div><div class=\"tile tile-position-2-2 tile-new\">19</div><div class=\"tile tile-position-2-3 tile-new\">5</div><div class=\"tile tile-position-2-4 tile-new\">58</div><div class=\"tile tile-position-2-5 tile-new\">1</div><div class=\"tile tile-position-3-1 tile-new\">5</div><div class=\"tile tile-position-3-2 tile-new\">9</div><div class=\"tile tile-position-3-3 tile-new\">8</div><div class=\"tile tile-position-3-4 tile-new\">17</div><div class=\"tile tile-position-3-5 tile-new\">3</div><div class=\"tile tile-position-4-1 tile-new\">18</div><div class=\"tile tile-position-4-2 tile-new\">6</div><div class=\"tile tile-position-4-3 tile-new\">45</div><div class=\"tile tile-position-4-4 tile-new\">29</div><div class=\"tile tile-position-4-5 tile-new\">72</div><div class=\"tile tile-position-5-1 tile-new\">12</div><div class=\"tile tile-position-5-2 tile-new\">88</div><div class=\"tile tile-position-5-3 tile-new\">4</div><div class=\"tile tile-position-5-4 tile-new\">22</div><div class=\"tile tile-position-5-5 tile-new\">10</div>";

var level2 = "<div class=\"tile tile-position-1-1 tile-new\">5</div><div class=\"tile tile-position-1-2 tile-new\">7</div><div class=\"tile tile-position-1-3 tile-new\">1</div><div class=\"tile tile-position-1-4 tile-new\">6</div><div class=\"tile tile-position-2-1 tile-new\">9</div><div class=\"tile tile-position-2-2 tile-new\">3</div><div class=\"tile tile-position-2-3 tile-new\">4</div><div class=\"tile tile-position-2-4 tile-new\">1</div><div class=\"tile tile-position-3-1 tile-new\">4</div><div class=\"tile tile-position-3-2 tile-new\">6</div><div class=\"tile tile-position-3-3 tile-new\">3</div><div class=\"tile tile-position-3-4 tile-new\">7</div><div class=\"tile tile-position-4-1 tile-new\">8</div><div class=\"tile tile-position-4-2 tile-new\">5</div><div class=\"tile tile-position-4-3 tile-new\">9</div><div class=\"tile tile-position-4-4 tile-new\">2</div>";

var grid = "<div class=\"grid-row\"><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div></div> <div class=\"grid-row\"><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div></div><div class=\"grid-row\"><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div></div><div class=\"grid-row\"><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div></div><div class=\"grid-row\"><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div><div class=\"grid-cell\"></div></div></div>";

var gameExplanation = "<strong class=\"important\">How to play </strong> swipe tiles to subtract from each other. End up with 0 to get to next level";

    $(function() { 
	$('.game-explanation').html(gameExplanation);
	$('.grid-container').html(grid);
	$("#level1").on('click', function() {
		$('.tile-container').html(level1);
	});
	
	$("#level2").on('click', function() {
		$('.tile-container').html(level2);
	});
	$('.restart-container').on('click', function() {
		location.reload();
	});     
      //Enable swiping...
      $(".tile").swipe( {
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
						$('.tile-container').append("<div class=\"tile "+classIndex+" tile-tick tile-complete\"></div>");
						$(this).removeClass(classIndex);
						//$('.'+classIndex).css('box-shadow','');
						$('.'+classIndex).removeClass('tile-new');
						$(this).addClass(newClassIndex);
						$(this).addClass('tile-merged');
						$(this).text(newValue);
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
						$('.tile-container').append("<div class=\"tile "+classIndex+" tile-tick tile-complete\"></div>");
						$(this).removeClass(classIndex);
						$('.'+classIndex).removeClass('tile-new');
						$(this).addClass(newClassIndex);
						$(this).addClass('tile-merged');
						$(this).text(newValue);
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
						$('.tile-container').append("<div class=\"tile "+classIndex+" tile-tick tile-complete\"></div>");
						$(this).removeClass(classIndex);
						$('.'+classIndex).removeClass('tile-new');
						$(this).addClass(newClassIndex);
						$(this).addClass('tile-merged');
						$(this).text(newValue);
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
						$('.tile-container').append("<div class=\"tile "+classIndex+" tile-tick tile-complete\"></div>");
						$(this).removeClass(classIndex);
						$('.'+classIndex).removeClass('tile-new');
						$(this).addClass(newClassIndex);
						$(this).addClass('tile-merged');
						$(this).text(newValue);
						$('.score-container').html(parseInt($('.score-container').html(), 10)+1);
					}
				}
			break;
			default:
			} 
        },
         threshold:5
      });
    });