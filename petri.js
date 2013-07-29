(function (global) {
"use strict";

// use or create the namespace
var petri = {
	zoom: 1,
	speed: 10,
	version: "0.0.1"
};

global.petri = petri;


petri.play = function () {
	console.log("play!");
}


console.log("Starting petri.js v" + petri.version);

petri.guid = function () {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	};
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

/**
 * Spawn a new un-developped speciment at a given location
 */
petri.spawn = function spawn(x, y, genome) {
	// todo: add mutation according to rate
	return {
		genome: genome,
		brain: new Array(65),
		brainPointer: [],
		pos: {
			x: x,
			y: y
		}
	}
}

/**
 * Return a new medium element to put in a dish
 */
petri.medium = function medium(options) {
	var medium = {
		x: null,
		y: null,
		guid: petri.guid(),
		charge: options.charge || 16
	}
	return medium;
}

/**
 * Return a new petri dish on which to place specimens
 */
petri.dish = function dish(size) {
	var dish = {
		size: size,
		cycle: 0,
		medium: {}, // medium items sorted by their coordinates
		specimens: {} // Collection of speciments active in the dish
	}
	return dish;
}


/**
 * 
 */
petri.feed = function fill(dish, qty) {
	var newMedium;
	var size = dish.size;

	for (var i = 0; i < qty; i++) {
		// create a new unique medium entity
		newMedium = petri.medium({});

		// position the medium at a random location
		newMedium.x = Math.random() * (size * 2) - size;
		newMedium.y = Math.random() * (size * 2) - size;

		// todo: restrict the possible position of medium to the circumference of the dish

		// add the new medium entity to the dish
		dish.medium[newMedium.guid] = newMedium;
	}
}

petri.develop = function develop(specimen) {
		var state = {
			pointer: 0,
			genome: genome
		};
		// todo: make instruction length a variable
		while ((state.pointer+1) * 4 < specimen.genome.length) {
			var pos = state.pointer * 4;
			state.writerId = specimen.genome[pos];
			state.raw = specimen.genome.substr(pos+1, 3);
			writer = writersIndex[state.writerId];
			writer(code, state);
			state.pointer++;
		}
};


})(this);









