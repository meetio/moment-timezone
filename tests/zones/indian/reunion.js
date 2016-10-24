"use strict";

var helpers = require("../../helpers/helpers");

exports["Indian/Reunion"] = {
	"1911" : helpers.makeTestYear("Indian/Reunion", [
		["1911-05-31T20:18:07Z", "23:59:59", "LMT", -13312 / 60],
		["1911-05-31T20:18:08Z", "00:18:08", "RET", -240]
	])
};