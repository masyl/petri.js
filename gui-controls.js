
petri.init_controls = function () {


	defaults = {
		main: {
			zoom : 1,
			speed: 10
		}
	}

	var gui = new dat.GUI({
		load: defaults,
		preset: 'main'
	});

	var controls = {};

	controls.zoom = gui.add(petri, 'zoom', -5, 5).step(0.25);
	controls.speed = gui.add(petri, 'speed', 0, 100);

	controls.zoom.onChange(function(value) {
		petri.updateView();
	});

	gui.remember(petri);

}




  