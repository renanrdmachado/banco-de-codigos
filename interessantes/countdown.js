var jsCountdown = function(date,expired_message){
	var deadline = new Date(date).getTime(); 
	var x = setInterval(function() { 
	var now = new Date().getTime(); 
	var t = deadline - now; 
	var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
	var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
	var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
	var seconds = Math.floor((t % (1000 * 60)) / 1000); 
	return days + "d "  
	+ hours + "h " + minutes + "m " + seconds + "s "; 
	    if (t < 0) { 
	        clearInterval(x); 
	        return expired; 
	    } 
	}, 1000); 
}

// Use
// jsCountdown('Apr 27, 2019 00:00:00',"It's Over");
