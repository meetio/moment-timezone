"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Kralendijk"] = {
	"1912" : helpers.makeTestYear("America/Kralendijk", [
		["1912-02-12T04:35:46Z", "23:59:59", "LMT", 16547 / 60],
		["1912-02-12T04:35:47Z", "00:05:47", "ANT", 270]
	]),

	"1965" : helpers.makeTestYear("America/Kralendijk", [
		["1965-01-01T04:29:59Z", "23:59:59", "ANT", 270],
		["1965-01-01T04:30:00Z", "00:30:00", "AST", 240]
	])
};