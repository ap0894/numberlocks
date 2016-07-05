    $(function() {      
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
    
    function getIndex() {
    
    }