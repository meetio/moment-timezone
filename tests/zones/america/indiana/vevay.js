"use strict";

var helpers = require("../../../helpers/helpers");

exports["America/Indiana/Vevay"] = {
	"1918" : helpers.makeTestYear("America/Indiana/Vevay", [
		["1918-03-31T07:59:59Z", "01:59:59", "CST", 360],
		["1918-03-31T08:00:00Z", "03:00:00", "CDT", 300],
		["1918-10-27T06:59:59Z", "01:59:59", "CDT", 300],
		["1918-10-27T07:00:00Z", "01:00:00", "CST", 360]
	]),

	"1919" : helpers.makeTestYear("America/Indiana/Vevay", [
		["1919-03-30T07:59:59Z", "01:59:59", "CST", 360],
		["1919-03-30T08:00:00Z", "03:00:00", "CDT", 300],
		["1919-10-26T06:59:59Z", "01:59:59", "CDT", 300],
		["1919-10-26T07:00:00Z", "01:00:00", "CST", 360]
	]),

	"1942" : helpers.makeTestYear("America/Indiana/Vevay", [
		["1942-02-09T07:59:59Z", "01:59:59", "CST", 360],
		["1942-02-09T08:00:00Z", "03:00:00", "CWT", 300]
	]),

	"1945" : helpers.makeTestYear("America/Indiana/Vevay", [
		["1945-08-14T22:59:59Z", "17:59:59", "CWT", 300],
		["1945-08-14T23:00:00Z", "18:00:00", "CPT", 300],
		["1945-09-30T06:59:59Z", "01:59:59", "CPT", 300],
		["1945-09-30T07:00:00Z", "01:00:00", "CST", 360]
	]),

	"1954" : helpers.makeTestYear("America/Indiana/Vevay", [
		["1954-04-25T07:59:59Z", "01:59:59", "CST", 360],
		["1954-04-25T08:00:00Z", "03:00:00", "EST", 300]
	]),

	"1969" : helpers.makeTestYear("America/Indiana/Vevay", [
		["1969-04-27T06:59:59Z", "01:59:59", "EST", 300],
		["1969-04-27T07:00:00Z", "03:00:00", "EDT", 240],
		["1969-10-26T05:59:59Z", "01:59:59", "EDT", 240],
		["1969-10-26T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"1970" : helpers.makeTestYear("America/Indiana/Vevay", [
		["1970-04-26T06:59:59Z", "01:59:59", "EST", 300],
		["1970-04-26T07:00:00Z", "03:00:00", "EDT", 240],
		["1970-10-25T05:59:59Z", "01:59:59", "EDT", 240],
		["1970-10-25T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"1971" : helpers.makeTestYear("America/Indiana/Vevay", [
		["1971-04-25T06:59:59Z", "01:59:59", "EST", 300],
		["1971-04-25T07:00:00Z", "03:00:00", "EDT", 240],
		["1971-10-31T05:59:59Z", "01:59:59", "EDT", 240],
		["1971-10-31T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"1972" : helpers.makeTestYear("America/Indiana/Vevay", [
		["1972-04-30T06:59:59Z", "01:59:59", "EST", 300],
		["1972-04-30T07:00:00Z", "03:00:00", "EDT", 240],
		["1972-10-29T05:59:59Z", "01:59:59", "EDT", 240],
		["1972-10-29T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2006" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2006-04-02T06:59:59Z", "01:59:59", "EST", 300],
		["2006-04-02T07:00:00Z", "03:00:00", "EDT", 240],
		["2006-10-29T05:59:59Z", "01:59:59", "EDT", 240],
		["2006-10-29T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2007" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2007-03-11T06:59:59Z", "01:59:59", "EST", 300],
		["2007-03-11T07:00:00Z", "03:00:00", "EDT", 240],
		["2007-11-04T05:59:59Z", "01:59:59", "EDT", 240],
		["2007-11-04T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2008" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2008-03-09T06:59:59Z", "01:59:59", "EST", 300],
		["2008-03-09T07:00:00Z", "03:00:00", "EDT", 240],
		["2008-11-02T05:59:59Z", "01:59:59", "EDT", 240],
		["2008-11-02T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2009" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2009-03-08T06:59:59Z", "01:59:59", "EST", 300],
		["2009-03-08T07:00:00Z", "03:00:00", "EDT", 240],
		["2009-11-01T05:59:59Z", "01:59:59", "EDT", 240],
		["2009-11-01T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2010" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2010-03-14T06:59:59Z", "01:59:59", "EST", 300],
		["2010-03-14T07:00:00Z", "03:00:00", "EDT", 240],
		["2010-11-07T05:59:59Z", "01:59:59", "EDT", 240],
		["2010-11-07T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2011" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2011-03-13T06:59:59Z", "01:59:59", "EST", 300],
		["2011-03-13T07:00:00Z", "03:00:00", "EDT", 240],
		["2011-11-06T05:59:59Z", "01:59:59", "EDT", 240],
		["2011-11-06T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2012" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2012-03-11T06:59:59Z", "01:59:59", "EST", 300],
		["2012-03-11T07:00:00Z", "03:00:00", "EDT", 240],
		["2012-11-04T05:59:59Z", "01:59:59", "EDT", 240],
		["2012-11-04T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2013" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2013-03-10T06:59:59Z", "01:59:59", "EST", 300],
		["2013-03-10T07:00:00Z", "03:00:00", "EDT", 240],
		["2013-11-03T05:59:59Z", "01:59:59", "EDT", 240],
		["2013-11-03T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2014" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2014-03-09T06:59:59Z", "01:59:59", "EST", 300],
		["2014-03-09T07:00:00Z", "03:00:00", "EDT", 240],
		["2014-11-02T05:59:59Z", "01:59:59", "EDT", 240],
		["2014-11-02T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2015" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2015-03-08T06:59:59Z", "01:59:59", "EST", 300],
		["2015-03-08T07:00:00Z", "03:00:00", "EDT", 240],
		["2015-11-01T05:59:59Z", "01:59:59", "EDT", 240],
		["2015-11-01T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2016" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2016-03-13T06:59:59Z", "01:59:59", "EST", 300],
		["2016-03-13T07:00:00Z", "03:00:00", "EDT", 240],
		["2016-11-06T05:59:59Z", "01:59:59", "EDT", 240],
		["2016-11-06T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2017" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2017-03-12T06:59:59Z", "01:59:59", "EST", 300],
		["2017-03-12T07:00:00Z", "03:00:00", "EDT", 240],
		["2017-11-05T05:59:59Z", "01:59:59", "EDT", 240],
		["2017-11-05T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2018" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2018-03-11T06:59:59Z", "01:59:59", "EST", 300],
		["2018-03-11T07:00:00Z", "03:00:00", "EDT", 240],
		["2018-11-04T05:59:59Z", "01:59:59", "EDT", 240],
		["2018-11-04T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2019" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2019-03-10T06:59:59Z", "01:59:59", "EST", 300],
		["2019-03-10T07:00:00Z", "03:00:00", "EDT", 240],
		["2019-11-03T05:59:59Z", "01:59:59", "EDT", 240],
		["2019-11-03T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2020" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2020-03-08T06:59:59Z", "01:59:59", "EST", 300],
		["2020-03-08T07:00:00Z", "03:00:00", "EDT", 240],
		["2020-11-01T05:59:59Z", "01:59:59", "EDT", 240],
		["2020-11-01T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2021" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2021-03-14T06:59:59Z", "01:59:59", "EST", 300],
		["2021-03-14T07:00:00Z", "03:00:00", "EDT", 240],
		["2021-11-07T05:59:59Z", "01:59:59", "EDT", 240],
		["2021-11-07T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2022" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2022-03-13T06:59:59Z", "01:59:59", "EST", 300],
		["2022-03-13T07:00:00Z", "03:00:00", "EDT", 240],
		["2022-11-06T05:59:59Z", "01:59:59", "EDT", 240],
		["2022-11-06T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2023" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2023-03-12T06:59:59Z", "01:59:59", "EST", 300],
		["2023-03-12T07:00:00Z", "03:00:00", "EDT", 240],
		["2023-11-05T05:59:59Z", "01:59:59", "EDT", 240],
		["2023-11-05T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2024" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2024-03-10T06:59:59Z", "01:59:59", "EST", 300],
		["2024-03-10T07:00:00Z", "03:00:00", "EDT", 240],
		["2024-11-03T05:59:59Z", "01:59:59", "EDT", 240],
		["2024-11-03T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2025" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2025-03-09T06:59:59Z", "01:59:59", "EST", 300],
		["2025-03-09T07:00:00Z", "03:00:00", "EDT", 240],
		["2025-11-02T05:59:59Z", "01:59:59", "EDT", 240],
		["2025-11-02T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2026" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2026-03-08T06:59:59Z", "01:59:59", "EST", 300],
		["2026-03-08T07:00:00Z", "03:00:00", "EDT", 240],
		["2026-11-01T05:59:59Z", "01:59:59", "EDT", 240],
		["2026-11-01T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2027" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2027-03-14T06:59:59Z", "01:59:59", "EST", 300],
		["2027-03-14T07:00:00Z", "03:00:00", "EDT", 240],
		["2027-11-07T05:59:59Z", "01:59:59", "EDT", 240],
		["2027-11-07T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2028" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2028-03-12T06:59:59Z", "01:59:59", "EST", 300],
		["2028-03-12T07:00:00Z", "03:00:00", "EDT", 240],
		["2028-11-05T05:59:59Z", "01:59:59", "EDT", 240],
		["2028-11-05T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2029" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2029-03-11T06:59:59Z", "01:59:59", "EST", 300],
		["2029-03-11T07:00:00Z", "03:00:00", "EDT", 240],
		["2029-11-04T05:59:59Z", "01:59:59", "EDT", 240],
		["2029-11-04T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2030" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2030-03-10T06:59:59Z", "01:59:59", "EST", 300],
		["2030-03-10T07:00:00Z", "03:00:00", "EDT", 240],
		["2030-11-03T05:59:59Z", "01:59:59", "EDT", 240],
		["2030-11-03T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2031" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2031-03-09T06:59:59Z", "01:59:59", "EST", 300],
		["2031-03-09T07:00:00Z", "03:00:00", "EDT", 240],
		["2031-11-02T05:59:59Z", "01:59:59", "EDT", 240],
		["2031-11-02T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2032" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2032-03-14T06:59:59Z", "01:59:59", "EST", 300],
		["2032-03-14T07:00:00Z", "03:00:00", "EDT", 240],
		["2032-11-07T05:59:59Z", "01:59:59", "EDT", 240],
		["2032-11-07T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2033" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2033-03-13T06:59:59Z", "01:59:59", "EST", 300],
		["2033-03-13T07:00:00Z", "03:00:00", "EDT", 240],
		["2033-11-06T05:59:59Z", "01:59:59", "EDT", 240],
		["2033-11-06T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2034" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2034-03-12T06:59:59Z", "01:59:59", "EST", 300],
		["2034-03-12T07:00:00Z", "03:00:00", "EDT", 240],
		["2034-11-05T05:59:59Z", "01:59:59", "EDT", 240],
		["2034-11-05T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2035" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2035-03-11T06:59:59Z", "01:59:59", "EST", 300],
		["2035-03-11T07:00:00Z", "03:00:00", "EDT", 240],
		["2035-11-04T05:59:59Z", "01:59:59", "EDT", 240],
		["2035-11-04T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2036" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2036-03-09T06:59:59Z", "01:59:59", "EST", 300],
		["2036-03-09T07:00:00Z", "03:00:00", "EDT", 240],
		["2036-11-02T05:59:59Z", "01:59:59", "EDT", 240],
		["2036-11-02T06:00:00Z", "01:00:00", "EST", 300]
	]),

	"2037" : helpers.makeTestYear("America/Indiana/Vevay", [
		["2037-03-08T06:59:59Z", "01:59:59", "EST", 300],
		["2037-03-08T07:00:00Z", "03:00:00", "EDT", 240],
		["2037-11-01T05:59:59Z", "01:59:59", "EDT", 240],
		["2037-11-01T06:00:00Z", "01:00:00", "EST", 300]
	])
};