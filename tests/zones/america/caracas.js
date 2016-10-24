"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Caracas"] = {
	"1912" : helpers.makeTestYear("America/Caracas", [
		["1912-02-12T04:27:39Z", "23:59:59", "CMT", 16060 / 60],
		["1912-02-12T04:27:40Z", "23:57:40", "VET", 270]
	]),

	"1965" : helpers.makeTestYear("America/Caracas", [
		["1965-01-01T04:29:59Z", "23:59:59", "VET", 270],
		["1965-01-01T04:30:00Z", "00:30:00", "VET", 240]
	]),

	"2007" : helpers.makeTestYear("America/Caracas", [
		["2007-12-09T06:59:59Z", "02:59:59", "VET", 240],
		["2007-12-09T07:00:00Z", "02:30:00", "VET", 270]
	]),

	"2016" : helpers.makeTestYear("America/Caracas", [
		["2016-05-01T06:59:59Z", "02:29:59", "VET", 270],
		["2016-05-01T07:00:00Z", "03:00:00", "VET", 240]
	])
};