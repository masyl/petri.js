/* 
 * Web Graphical User Interface for Petri.js
 * 
 * This script is executed as PaperScript using Paper.js
 */

var undef = void 0;
var zoom = 1;


var backgroundLayer = new Layer();
var background = new Raster('background');
background.position = view.center;
// background.scale(1.5);

var dish = dish1;

var dishLayer = new Layer();

var dishShape = new Path.Circle(new Point(0, 0), dish.size);
dishShape.fillColor = '#600';

project.activeLayer.matrix.translate(view.center);//new Point(-100, -100);




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


function resizeLayer(factor, baseValue) {
	// Whenever the window is resized, recenter the path:
	// var layer =  project.activeLayer;

	if (baseValue !== undef) zoom = baseValue;

	zoom = zoom * factor;
	var layer = project.activeLayer;
	console.log("Zoom factor:", zoom);

	// layer.matrix.reset();
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