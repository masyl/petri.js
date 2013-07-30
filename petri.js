(function (global) {
"use strict";


// use or create the namespace
function Petri() {
	this.zoom = 1;
	this.speed = 10;
	this.version = "0.0.2";
}

Petri.prototype = new EventEmitter2({
	wildcard: true, // should the event emitter use wildcards.
	delimiter: '::', // the delimiter used to segment namespaces, defaults to `.`.
	newListener: false, // if you want to emit the newListener event set to true.
	maxListeners: 20, // the max number of listeners that can be assigned to an event, defaults to 10.
});


Petri.prototype.play = function () {
	console.log("play!");
}


//todo: externalise in a different file
Petri.prototype.guid = function () {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	};
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

/**
 * Spawn a new un-developped speciment at a given location
 */
Petri.prototype.spawn = function spawn(x, y, genome) {
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
Petri.prototype.medium = function medium(options) {
	var petri = this;
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
Petri.prototype.dish = function dish(size) {
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
Petri.prototype.feed = function fill(dish, qty) {
	var petri = this;
	var newMedium;
	var size = dish.size;
	var coord;

	var delay = 0;
	for (var i = 0; i < qty; i++) {
		delay = delay + 30;
		setTimeout(function () {
			// create a new unique medium entity
			newMedium = petri.medium({});
			coord = petrijs.measure.randomPolarCoord(size);

			newMedium.x = coord.x;
			newMedium.y = coord.y;

			// todo: restrict the possible position of medium to the circumference of the dish

			// add the new medium entity to the dish
			dish.medium[newMedium.guid] = newMedium;

			petri.emit("newMedium", newMedium);

		}, delay);
	}
}

Petri.prototype.develop = function develop(specimen) {
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


var petrijs = {
	Petri: Petri
};
global.petrijs = petrijs;


})(this);









