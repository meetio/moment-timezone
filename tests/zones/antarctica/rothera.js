"use strict";

var helpers = require("../../helpers/helpers");

exports["Antarctica/Rothera"] = {
	"1976" : helpers.makeTestYear("Antarctica/Rothera", [
		["1976-11-30T23:59:59Z", "23:59:59", "-00", 0],
		["1976-12-01T00:00:00Z", "21:00:00", "-03", 180]
	])
};