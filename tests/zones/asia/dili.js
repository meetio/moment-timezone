"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Dili"] = {
	"1911" : helpers.makeTestYear("Asia/Dili", [
		["1911-12-31T15:37:39Z", "23:59:59", "LMT", -30140 / 60],
		["1911-12-31T15:37:40Z", "23:37:40", "TLT", -480]
	]),

	"1942" : helpers.makeTestYear("Asia/Dili", [
		["1942-02-21T14:59:59Z", "22:59:59", "TLT", -480],
		["1942-02-21T15:00:00Z", "00:00:00", "JST", -540]
	]),

	"1945" : helpers.makeTestYear("Asia/Dili", [
		["1945-09-22T14:59:59Z", "23:59:59", "JST", -540],
		["1945-09-22T15:00:00Z", "00:00:00", "TLT", -540]
	]),

	"1976" : helpers.makeTestYear("Asia/Dili", [
		["1976-05-02T14:59:59Z", "23:59:59", "TLT", -540],
		["1976-05-02T15:00:00Z", "23:00:00", "WITA", -480]
	]),

	"2000" : helpers.makeTestYear("Asia/Dili", [
		["2000-09-16T15:59:59Z", "23:59:59", "WITA", -480],
		["2000-09-16T16:00:00Z", "01:00:00", "TLT", -540]
	])
};