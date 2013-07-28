(function () {
"use strict";


window.onload = function () {

	console.log("Starting petri tests!");

	var testGenome = "a7j3hndJUT9487JYGNKjdywnf8264hdomay283HTDus783";

	petri.init_controls();

	var dish = petri.dish(200);
	window.dish1 = dish;

	//petri.play(dish)



};

// var medium = petri.medium("neutral", {});

// Sprinkle 100 items of neutral feeding medium on the petri dish
// petri.sprinkle(medium, dish1, 100);

// Spawn a new undevelopped specimen
// var specimen = petri.spawn(testGenome);


// todo: Generate brain during development phase for specimen
// todo: Basic instruction to move/propel (convert energy to movement)
// todo: Basic instruction to eat/absorb medium that is in range (spends some energy)
// todo: Add medium at random at interval in dish
// todo: Draw the petri shape
// todo: Draw the medium particles
// todo: Draw the specimens
// todo: Output specimen data and brain dump to console when clicked


// console.log("specimen", specimen);

})();









