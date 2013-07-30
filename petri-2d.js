(function (petrijs) {
"use strict";


function distance(point1, point2) {
	return Math.sqrt( Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2) );
}

function angle(point1, point2) {
	var angle = Math.atan2(point1.x - point2.x, point1.y - point2.y) * (180 / Math.PI);
	if(angle < 0) angle = Math.abs(angle);
	else angle = 360 - angle;
	return angle;
}

function polar2coord(dist, angle) {
	return {
		x: dist * Math.cos(angle),
		y: dist * Math.sin(angle)
	}
}

function randomPolarCoord(size) {
	var r = 0;
	var R = size;
	var _r = Math.random() * (R * R - r * r) + r * r;
	_r = Math.sqrt(_r);
	var theta = Math.random() * 2 * Math.PI;
	return {
		x: _r * Math.cos(theta),
		y: _r * Math.sin(theta)
	}
}

petrijs.measure = {
	distance: distance,
	angle: angle,
	polar2coord: polar2coord,
	randomPolarCoord: randomPolarCoord
}


})(petrijs);
