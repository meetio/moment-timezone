"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Macau"] = {
	"1911" : helpers.makeTestYear("Asia/Macau", [
		["1911-12-31T16:25:39Z", "23:59:59", "LMT", -27260 / 60],
		["1911-12-31T16:25:40Z", "00:25:40", "MOT", -480]
	]),

	"1961" : helpers.makeTestYear("Asia/Macau", [
		["1961-03-18T19:29:59Z", "03:29:59", "MOT", -480],
		["1961-03-18T19:30:00Z", "04:30:00", "MOST", -540],
		["1961-11-04T18:29:59Z", "03:29:59", "MOST", -540],
		["1961-11-04T18:30:00Z", "02:30:00", "MOT", -480]
	]),

	"1962" : helpers.makeTestYear("Asia/Macau", [
		["1962-03-17T19:29:59Z", "03:29:59", "MOT", -480],
		["1962-03-17T19:30:00Z", "04:30:00", "MOST", -540],
		["1962-11-03T18:29:59Z", "03:29:59", "MOST", -540],
		["1962-11-03T18:30:00Z", "02:30:00", "MOT", -480]
	]),

	"1963" : helpers.makeTestYear("Asia/Macau", [
		["1963-03-16T15:59:59Z", "23:59:59", "MOT", -480],
		["1963-03-16T16:00:00Z", "01:00:00", "MOST", -540],
		["1963-11-02T18:29:59Z", "03:29:59", "MOST", -540],
		["1963-11-02T18:30:00Z", "02:30:00", "MOT", -480]
	]),

	"1964" : helpers.makeTestYear("Asia/Macau", [
		["1964-03-21T19:29:59Z", "03:29:59", "MOT", -480],
		["1964-03-21T19:30:00Z", "04:30:00", "MOST", -540],
		["1964-10-31T18:29:59Z", "03:29:59", "MOST", -540],
		["1964-10-31T18:30:00Z", "02:30:00", "MOT", -480]
	]),

	"1965" : helpers.makeTestYear("Asia/Macau", [
		["1965-03-20T15:59:59Z", "23:59:59", "MOT", -480],
		["1965-03-20T16:00:00Z", "01:00:00", "MOST", -540],
		["1965-10-30T14:59:59Z", "23:59:59", "MOST", -540],
		["1965-10-30T15:00:00Z", "23:00:00", "MOT", -480]
	]),

	"1966" : helpers.makeTestYear("Asia/Macau", [
		["1966-04-16T19:29:59Z", "03:29:59", "MOT", -480],
		["1966-04-16T19:30:00Z", "04:30:00", "MOST", -540],
		["1966-10-15T18:29:59Z", "03:29:59", "MOST", -540],
		["1966-10-15T18:30:00Z", "02:30:00", "MOT", -480]
	]),

	"1967" : helpers.makeTestYear("Asia/Macau", [
		["1967-04-15T19:29:59Z", "03:29:59", "MOT", -480],
		["1967-04-15T19:30:00Z", "04:30:00", "MOST", -540],
		["1967-10-21T18:29:59Z", "03:29:59", "MOST", -540],
		["1967-10-21T18:30:00Z", "02:30:00", "MOT", -480]
	]),

	"1968" : helpers.makeTestYear("Asia/Macau", [
		["1968-04-20T19:29:59Z", "03:29:59", "MOT", -480],
		["1968-04-20T19:30:00Z", "04:30:00", "MOST", -540],
		["1968-10-19T18:29:59Z", "03:29:59", "MOST", -540],
		["1968-10-19T18:30:00Z", "02:30:00", "MOT", -480]
	]),

	"1969" : helpers.makeTestYear("Asia/Macau", [
		["1969-04-19T19:29:59Z", "03:29:59", "MOT", -480],
		["1969-04-19T19:30:00Z", "04:30:00", "MOST", -540],
		["1969-10-18T18:29:59Z", "03:29:59", "MOST", -540],
		["1969-10-18T18:30:00Z", "02:30:00", "MOT", -480]
	]),

	"1970" : helpers.makeTestYear("Asia/Macau", [
		["1970-04-18T19:29:59Z", "03:29:59", "MOT", -480],
		["1970-04-18T19:30:00Z", "04:30:00", "MOST", -540],
		["1970-10-17T18:29:59Z", "03:29:59", "MOST", -540],
		["1970-10-17T18:30:00Z", "02:30:00", "MOT", -480]
	]),

	"1971" : helpers.makeTestYear("Asia/Macau", [
		["1971-04-17T19:29:59Z", "03:29:59", "MOT", -480],
		["1971-04-17T19:30:00Z", "04:30:00", "MOST", -540],
		["1971-10-16T18:29:59Z", "03:29:59", "MOST", -540],
		["1971-10-16T18:30:00Z", "02:30:00", "MOT", -480]
	]),

	"1972" : helpers.makeTestYear("Asia/Macau", [
		["1972-04-15T15:59:59Z", "23:59:59", "MOT", -480],
		["1972-04-15T16:00:00Z", "01:00:00", "MOST", -540],
		["1972-10-14T14:59:59Z", "23:59:59", "MOST", -540],
		["1972-10-14T15:00:00Z", "23:00:00", "MOT", -480]
	]),

	"1973" : helpers.makeTestYear("Asia/Macau", [
		["1973-04-14T15:59:59Z", "23:59:59", "MOT", -480],
		["1973-04-14T16:00:00Z", "01:00:00", "MOST", -540],
		["1973-10-20T14:59:59Z", "23:59:59", "MOST", -540],
		["1973-10-20T15:00:00Z", "23:00:00", "MOT", -480]
	]),

	"1974" : helpers.makeTestYear("Asia/Macau", [
		["1974-04-20T15:59:59Z", "23:59:59", "MOT", -480],
		["1974-04-20T16:00:00Z", "01:00:00", "MOST", -540],
		["1974-10-19T18:29:59Z", "03:29:59", "MOST", -540],
		["1974-10-19T18:30:00Z", "02:30:00", "MOT", -480]
	]),

	"1975" : helpers.makeTestYear("Asia/Macau", [
		["1975-04-19T19:29:59Z", "03:29:59", "MOT", -480],
		["1975-04-19T19:30:00Z", "04:30:00", "MOST", -540],
		["1975-10-18T18:29:59Z", "03:29:59", "MOST", -540],
		["1975-10-18T18:30:00Z", "02:30:00", "MOT", -480]
	]),

	"1976" : helpers.makeTestYear("Asia/Macau", [
		["1976-04-17T19:29:59Z", "03:29:59", "MOT", -480],
		["1976-04-17T19:30:00Z", "04:30:00", "MOST", -540],
		["1976-10-16T18:29:59Z", "03:29:59", "MOST", -540],
		["1976-10-16T18:30:00Z", "02:30:00", "MOT", -480]
	]),

	"1977" : helpers.makeTestYear("Asia/Macau", [
		["1977-04-16T19:29:59Z", "03:29:59", "MOT", -480],
		["1977-04-16T19:30:00Z", "04:30:00", "MOST", -540],
		["1977-10-15T18:29:59Z", "03:29:59", "MOST", -540],
		["1977-10-15T18:30:00Z", "02:30:00", "MOT", -480]
	]),

	"1978" : helpers.makeTestYear("Asia/Macau", [
		["1978-04-15T15:59:59Z", "23:59:59", "MOT", -480],
		["1978-04-15T16:00:00Z", "01:00:00", "MOST", -540],
		["1978-10-14T14:59:59Z", "23:59:59", "MOST", -540],
		["1978-10-14T15:00:00Z", "23:00:00", "MOT", -480]
	]),

	"1979" : helpers.makeTestYear("Asia/Macau", [
		["1979-04-14T15:59:59Z", "23:59:59", "MOT", -480],
		["1979-04-14T16:00:00Z", "01:00:00", "MOST", -540],
		["1979-10-20T14:59:59Z", "23:59:59", "MOST", -540],
		["1979-10-20T15:00:00Z", "23:00:00", "MOT", -480]
	]),

	"1980" : helpers.makeTestYear("Asia/Macau", [
		["1980-04-19T15:59:59Z", "23:59:59", "MOT", -480],
		["1980-04-19T16:00:00Z", "01:00:00", "MOST", -540],
		["1980-10-18T14:59:59Z", "23:59:59", "MOST", -540],
		["1980-10-18T15:00:00Z", "23:00:00", "MOT", -480]
	]),

	"1999" : helpers.makeTestYear("Asia/Macau", [
		["1999-12-19T15:59:59Z", "23:59:59", "MOT", -480],
		["1999-12-19T16:00:00Z", "00:00:00", "CST", -480]
	])
};