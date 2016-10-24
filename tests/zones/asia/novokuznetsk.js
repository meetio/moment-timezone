"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Novokuznetsk"] = {
	"1924" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1924-04-30T18:11:11Z", "23:59:59", "LMT", -20928 / 60],
		["1924-04-30T18:11:12Z", "00:11:12", "+06", -360]
	]),

	"1930" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1930-06-20T17:59:59Z", "23:59:59", "+06", -360],
		["1930-06-20T18:00:00Z", "01:00:00", "+07", -420]
	]),

	"1981" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1981-03-31T16:59:59Z", "23:59:59", "+07", -420],
		["1981-03-31T17:00:00Z", "01:00:00", "+08", -480],
		["1981-09-30T15:59:59Z", "23:59:59", "+08", -480],
		["1981-09-30T16:00:00Z", "23:00:00", "+07", -420]
	]),

	"1982" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1982-03-31T16:59:59Z", "23:59:59", "+07", -420],
		["1982-03-31T17:00:00Z", "01:00:00", "+08", -480],
		["1982-09-30T15:59:59Z", "23:59:59", "+08", -480],
		["1982-09-30T16:00:00Z", "23:00:00", "+07", -420]
	]),

	"1983" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1983-03-31T16:59:59Z", "23:59:59", "+07", -420],
		["1983-03-31T17:00:00Z", "01:00:00", "+08", -480],
		["1983-09-30T15:59:59Z", "23:59:59", "+08", -480],
		["1983-09-30T16:00:00Z", "23:00:00", "+07", -420]
	]),

	"1984" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1984-03-31T16:59:59Z", "23:59:59", "+07", -420],
		["1984-03-31T17:00:00Z", "01:00:00", "+08", -480],
		["1984-09-29T18:59:59Z", "02:59:59", "+08", -480],
		["1984-09-29T19:00:00Z", "02:00:00", "+07", -420]
	]),

	"1985" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1985-03-30T18:59:59Z", "01:59:59", "+07", -420],
		["1985-03-30T19:00:00Z", "03:00:00", "+08", -480],
		["1985-09-28T18:59:59Z", "02:59:59", "+08", -480],
		["1985-09-28T19:00:00Z", "02:00:00", "+07", -420]
	]),

	"1986" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1986-03-29T18:59:59Z", "01:59:59", "+07", -420],
		["1986-03-29T19:00:00Z", "03:00:00", "+08", -480],
		["1986-09-27T18:59:59Z", "02:59:59", "+08", -480],
		["1986-09-27T19:00:00Z", "02:00:00", "+07", -420]
	]),

	"1987" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1987-03-28T18:59:59Z", "01:59:59", "+07", -420],
		["1987-03-28T19:00:00Z", "03:00:00", "+08", -480],
		["1987-09-26T18:59:59Z", "02:59:59", "+08", -480],
		["1987-09-26T19:00:00Z", "02:00:00", "+07", -420]
	]),

	"1988" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1988-03-26T18:59:59Z", "01:59:59", "+07", -420],
		["1988-03-26T19:00:00Z", "03:00:00", "+08", -480],
		["1988-09-24T18:59:59Z", "02:59:59", "+08", -480],
		["1988-09-24T19:00:00Z", "02:00:00", "+07", -420]
	]),

	"1989" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1989-03-25T18:59:59Z", "01:59:59", "+07", -420],
		["1989-03-25T19:00:00Z", "03:00:00", "+08", -480],
		["1989-09-23T18:59:59Z", "02:59:59", "+08", -480],
		["1989-09-23T19:00:00Z", "02:00:00", "+07", -420]
	]),

	"1990" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1990-03-24T18:59:59Z", "01:59:59", "+07", -420],
		["1990-03-24T19:00:00Z", "03:00:00", "+08", -480],
		["1990-09-29T18:59:59Z", "02:59:59", "+08", -480],
		["1990-09-29T19:00:00Z", "02:00:00", "+07", -420]
	]),

	"1991" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1991-03-30T18:59:59Z", "01:59:59", "+07", -420],
		["1991-03-30T19:00:00Z", "02:00:00", "+07", -420],
		["1991-09-28T19:59:59Z", "02:59:59", "+07", -420],
		["1991-09-28T20:00:00Z", "02:00:00", "+06", -360]
	]),

	"1992" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1992-01-18T19:59:59Z", "01:59:59", "+06", -360],
		["1992-01-18T20:00:00Z", "03:00:00", "+07", -420],
		["1992-03-28T18:59:59Z", "01:59:59", "+07", -420],
		["1992-03-28T19:00:00Z", "03:00:00", "+08", -480],
		["1992-09-26T18:59:59Z", "02:59:59", "+08", -480],
		["1992-09-26T19:00:00Z", "02:00:00", "+07", -420]
	]),

	"1993" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1993-03-27T18:59:59Z", "01:59:59", "+07", -420],
		["1993-03-27T19:00:00Z", "03:00:00", "+08", -480],
		["1993-09-25T18:59:59Z", "02:59:59", "+08", -480],
		["1993-09-25T19:00:00Z", "02:00:00", "+07", -420]
	]),

	"1994" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1994-03-26T18:59:59Z", "01:59:59", "+07", -420],
		["1994-03-26T19:00:00Z", "03:00:00", "+08", -480],
		["1994-09-24T18:59:59Z", "02:59:59", "+08", -480],
		["1994-09-24T19:00:00Z", "02:00:00", "+07", -420]
	]),

	"1995" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1995-03-25T18:59:59Z", "01:59:59", "+07", -420],
		["1995-03-25T19:00:00Z", "03:00:00", "+08", -480],
		["1995-09-23T18:59:59Z", "02:59:59", "+08", -480],
		["1995-09-23T19:00:00Z", "02:00:00", "+07", -420]
	]),

	"1996" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1996-03-30T18:59:59Z", "01:59:59", "+07", -420],
		["1996-03-30T19:00:00Z", "03:00:00", "+08", -480],
		["1996-10-26T18:59:59Z", "02:59:59", "+08", -480],
		["1996-10-26T19:00:00Z", "02:00:00", "+07", -420]
	]),

	"1997" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1997-03-29T18:59:59Z", "01:59:59", "+07", -420],
		["1997-03-29T19:00:00Z", "03:00:00", "+08", -480],
		["1997-10-25T18:59:59Z", "02:59:59", "+08", -480],
		["1997-10-25T19:00:00Z", "02:00:00", "+07", -420]
	]),

	"1998" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1998-03-28T18:59:59Z", "01:59:59", "+07", -420],
		["1998-03-28T19:00:00Z", "03:00:00", "+08", -480],
		["1998-10-24T18:59:59Z", "02:59:59", "+08", -480],
		["1998-10-24T19:00:00Z", "02:00:00", "+07", -420]
	]),

	"1999" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1999-03-27T18:59:59Z", "01:59:59", "+07", -420],
		["1999-03-27T19:00:00Z", "03:00:00", "+08", -480],
		["1999-10-30T18:59:59Z", "02:59:59", "+08", -480],
		["1999-10-30T19:00:00Z", "02:00:00", "+07", -420]
	]),

	"2000" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["2000-03-25T18:59:59Z", "01:59:59", "+07", -420],
		["2000-03-25T19:00:00Z", "03:00:00", "+08", -480],
		["2000-10-28T18:59:59Z", "02:59:59", "+08", -480],
		["2000-10-28T19:00:00Z", "02:00:00", "+07", -420]
	]),

	"2001" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["2001-03-24T18:59:59Z", "01:59:59", "+07", -420],
		["2001-03-24T19:00:00Z", "03:00:00", "+08", -480],
		["2001-10-27T18:59:59Z", "02:59:59", "+08", -480],
		["2001-10-27T19:00:00Z", "02:00:00", "+07", -420]
	]),

	"2002" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["2002-03-30T18:59:59Z", "01:59:59", "+07", -420],
		["2002-03-30T19:00:00Z", "03:00:00", "+08", -480],
		["2002-10-26T18:59:59Z", "02:59:59", "+08", -480],
		["2002-10-26T19:00:00Z", "02:00:00", "+07", -420]
	]),

	"2003" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["2003-03-29T18:59:59Z", "01:59:59", "+07", -420],
		["2003-03-29T19:00:00Z", "03:00:00", "+08", -480],
		["2003-10-25T18:59:59Z", "02:59:59", "+08", -480],
		["2003-10-25T19:00:00Z", "02:00:00", "+07", -420]
	]),

	"2004" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["2004-03-27T18:59:59Z", "01:59:59", "+07", -420],
		["2004-03-27T19:00:00Z", "03:00:00", "+08", -480],
		["2004-10-30T18:59:59Z", "02:59:59", "+08", -480],
		["2004-10-30T19:00:00Z", "02:00:00", "+07", -420]
	]),

	"2005" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["2005-03-26T18:59:59Z", "01:59:59", "+07", -420],
		["2005-03-26T19:00:00Z", "03:00:00", "+08", -480],
		["2005-10-29T18:59:59Z", "02:59:59", "+08", -480],
		["2005-10-29T19:00:00Z", "02:00:00", "+07", -420]
	]),

	"2006" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["2006-03-25T18:59:59Z", "01:59:59", "+07", -420],
		["2006-03-25T19:00:00Z", "03:00:00", "+08", -480],
		["2006-10-28T18:59:59Z", "02:59:59", "+08", -480],
		["2006-10-28T19:00:00Z", "02:00:00", "+07", -420]
	]),

	"2007" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["2007-03-24T18:59:59Z", "01:59:59", "+07", -420],
		["2007-03-24T19:00:00Z", "03:00:00", "+08", -480],
		["2007-10-27T18:59:59Z", "02:59:59", "+08", -480],
		["2007-10-27T19:00:00Z", "02:00:00", "+07", -420]
	]),

	"2008" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["2008-03-29T18:59:59Z", "01:59:59", "+07", -420],
		["2008-03-29T19:00:00Z", "03:00:00", "+08", -480],
		["2008-10-25T18:59:59Z", "02:59:59", "+08", -480],
		["2008-10-25T19:00:00Z", "02:00:00", "+07", -420]
	]),

	"2009" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["2009-03-28T18:59:59Z", "01:59:59", "+07", -420],
		["2009-03-28T19:00:00Z", "03:00:00", "+08", -480],
		["2009-10-24T18:59:59Z", "02:59:59", "+08", -480],
		["2009-10-24T19:00:00Z", "02:00:00", "+07", -420]
	]),

	"2010" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["2010-03-27T18:59:59Z", "01:59:59", "+07", -420],
		["2010-03-27T19:00:00Z", "02:00:00", "+07", -420],
		["2010-10-30T19:59:59Z", "02:59:59", "+07", -420],
		["2010-10-30T20:00:00Z", "02:00:00", "+06", -360]
	]),

	"2011" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["2011-03-26T19:59:59Z", "01:59:59", "+06", -360],
		["2011-03-26T20:00:00Z", "03:00:00", "+07", -420]
	])
};