$('.signin')
	.on('click', function(e) { 
			$('.modal').fadeIn(200, function(e){
				$('.close').on('click', function(e){
					$('.modal').fadeOut(200, function(e){})
				})
			});
		});