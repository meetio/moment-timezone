"use strict";

var helpers = require("../../helpers/helpers");

exports["Antarctica/Mawson"] = {
	"1954" : helpers.makeTestYear("Antarctica/Mawson", [
		["1954-02-12T23:59:59Z", "23:59:59", "-00", 0],
		["1954-02-13T00:00:00Z", "06:00:00", "+06", -360]
	]),

	"2009" : helpers.makeTestYear("Antarctica/Mawson", [
		["2009-10-17T19:59:59Z", "01:59:59", "+06", -360],
		["2009-10-17T20:00:00Z", "01:00:00", "+05", -300]
	])
};