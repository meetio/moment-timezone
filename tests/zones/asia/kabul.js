"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Kabul"] = {
	"1944" : helpers.makeTestYear("Asia/Kabul", [
		["1944-12-31T19:59:59Z", "23:59:59", "AFT", -240],
		["1944-12-31T20:00:00Z", "00:30:00", "AFT", -270]
	])
};