(function (global) {
"use strict";

// use or create the namespace
global.petri = {
	version: "0.0.1"
};

console.log("Starting petri.js v" + petri.version);


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
petri.medium = function medium(type, options) {
	var medium = {
		type: type,
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
petri.sprinkle = function fill(medium, dish, qty) {

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









