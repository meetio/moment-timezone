"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Johnston"] = {
	"1933" : helpers.makeTestYear("Pacific/Johnston", [
		["1933-04-30T12:29:59Z", "01:59:59", "HST", 630],
		["1933-04-30T12:30:00Z", "03:00:00", "HDT", 570],
		["1933-05-21T21:29:59Z", "11:59:59", "HDT", 570],
		["1933-05-21T21:30:00Z", "11:00:00", "HST", 630]
	]),

	"1942" : helpers.makeTestYear("Pacific/Johnston", [
		["1942-02-09T12:29:59Z", "01:59:59", "HST", 630],
		["1942-02-09T12:30:00Z", "03:00:00", "HDT", 570]
	]),

	"1945" : helpers.makeTestYear("Pacific/Johnston", [
		["1945-09-30T11:29:59Z", "01:59:59", "HDT", 570],
		["1945-09-30T11:30:00Z", "01:00:00", "HST", 630]
	]),

	"1947" : helpers.makeTestYear("Pacific/Johnston", [
		["1947-06-08T12:29:59Z", "01:59:59", "HST", 630],
		["1947-06-08T12:30:00Z", "02:30:00", "HST", 600]
	])
};