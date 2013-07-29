
petrijs.Petri.prototype.init_controls = function () {


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

	var viewFolder = gui.addFolder("View");
	controls.zoom = viewFolder.add(petri, 'zoom', -5, 5).step(0.25);
	controls.speed = viewFolder.add(petri, 'speed', 0, 100);

	var playbackFolder = gui.addFolder("Playback");
	controls.play = playbackFolder.add(petri, 'play');

	controls.zoom.onChange(function(value) {
		petri.updateView();
	});

	viewFolder.open();
	playbackFolder.open()

	gui.remember(petri);

}




  