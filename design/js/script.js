$(document).ready(function() {
	
	
//header effect


	$(function () {	
		var scene = document.getElementById('showstopping');
		var parallax = new Parallax(showstopping);
	});
		
	
//gallery mix
	
	$(function () {	
	
	  		$('#thosefaces').mixItUp({
			load: {
			sort: 'random'
			},
			animation: {
			enable: false
			}
				});
	
	});	
	
	
//scrolling

	$(function () {	
	var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

	// build scenes
	new ScrollMagic.Scene({triggerElement: "#parallax1"})
					.setTween("#parallax1 > div", {y: "150%", ease: Linear.easeNone})
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#parallax2"})
					.setTween("#parallax2 > div", {y: "105%", ease: Linear.easeNone})
					.addTo(controller);
					
	new ScrollMagic.Scene({triggerElement: "#parallax3"})
					.setTween("#parallax3 > div", {y: "10%", ease: Linear.easeNone})
					.addTo(controller);		
	});
	
//responsive


	
}); //end!