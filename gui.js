/* 
 * Web Graphical User Interface for Petri.js
 * 
 * This script is executed as PaperScript using Paper.js
 */

var undef = void 0;
petri.zoom = 1;


var backgroundLayer = new Layer();
var background = new Raster('background');
background.position = view.center;
// background.scale(1.5);

var dish = dish1;

var dishLayer = new Layer();
// dishLayer.matrix.translateX = view.center.x;
// dishLayer.matrix.translateY = view.center.y;


var fakeLayer = new Layer();
// project.activeLayer = dishLayer;
// console.log("dishLayer", dishLayer);

var mediumGroup = new Group();
var dishGroup = new Group();


dishLayer.insertChild(0, mediumGroup);
dishLayer.insertChild(0, dishGroup);

// Create the cirular shape of the dish
var dishShape = new Path.Circle(new Point(0, 0), dish.size);
dishShape.fillColor = '#600';
dishGroup.insertChild(0, dishShape);


dishLayer.matrix.translate(view.center);





var loaded = false;
background.on('load', function() {
	loaded = true;
	onBackgroundLoad();
});
function onBackgroundLoad(event) {
	if (!loaded) return;

	// Transform the raster so that it fills the bounding rectangle
	// of the view:
	background.fitBounds(view.bounds, true);

}

petri.updateView = function () {
	updateZoom();
	drawMediumEntities();
}


var mediumShapes = {};

/**
 * Draw the list of medium entities on a dish
 */
function drawMediumEntities() {
	var medium;
	var shape;
	var mediumSize;
	for (var m in dish.medium) {
		if (dish.medium.hasOwnProperty(m)) {
			medium = dish.medium[m];
			shape = mediumShapes[medium.guid];
			if (shape) {
				// todo: only update the shape
			} else {
				mediumSize = Math.floor(medium.charge / 4);
				shape = new Path.Circle(new Point(Math.floor(medium.x), Math.floor(medium.y)), mediumSize);
				shape.fillColor = '#fff';
				mediumGroup.insertChild(0, shape);
				mediumShapes[medium.guid] = shape
			}
		}
	}
}

petri.on(function() {
	drawMediumEntities();
});

function resizeLayer(factor, baseValue) {
	// Whenever the window is resized, recenter the path:
	// var layer =  project.activeLayer;
	if (baseValue !== undef) petri.zoom = baseValue;
	petri.zoom = petri.zoom * factor;
	updateZoom();
}

function updateZoom() {
	console.log("Zoom factor:", petri.zoom);

	var layer = dishLayer;
	var zoom = petri.zoom;

	if (zoom <= 1 && zoom >= -1) {
		zoom = 1;
	} else if (zoom < -1) {
		zoom = -(1/zoom);
	};

	TweenMax.to(layer.matrix, 0.3, {
		scaleX: zoom,
		scaleY: zoom,
		translateX: view.center.x,
		translateY: view.center.y
	});
}

function onFrame(event) {
	view.draw();
};


function onKeyUp(event) {
	if (event.key === "=" || event.key === "+" ) {
		resizeLayer(1.5);
	}
	if (event.key === "0") {
		resizeLayer(1, 1);
	}
	if (event.key === "-" || event.key === "_" ) {
		resizeLayer(0.66);
	}

	if (event.key === "space" || event.key === "_" ) {
	}
}


