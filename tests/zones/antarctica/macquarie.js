"use strict";

var helpers = require("../../helpers/helpers");

exports["Antarctica/Macquarie"] = {
	"1916" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1916-09-30T15:59:59Z", "01:59:59", "AEST", -600],
		["1916-09-30T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1917" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1917-03-24T14:59:59Z", "01:59:59", "AEDT", -660],
		["1917-03-24T15:00:00Z", "01:00:00", "AEST", -600]
	]),

	"1919" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1919-03-31T13:59:59Z", "23:59:59", "AEST", -600],
		["1919-03-31T14:00:00Z", "14:00:00", "-00", 0]
	]),

	"1948" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1948-03-24T23:59:59Z", "23:59:59", "-00", 0],
		["1948-03-25T00:00:00Z", "10:00:00", "AEST", -600]
	]),

	"1967" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1967-09-30T15:59:59Z", "01:59:59", "AEST", -600],
		["1967-09-30T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1968" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1968-03-30T15:59:59Z", "02:59:59", "AEDT", -660],
		["1968-03-30T16:00:00Z", "02:00:00", "AEST", -600],
		["1968-10-26T15:59:59Z", "01:59:59", "AEST", -600],
		["1968-10-26T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1969" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1969-03-08T15:59:59Z", "02:59:59", "AEDT", -660],
		["1969-03-08T16:00:00Z", "02:00:00", "AEST", -600],
		["1969-10-25T15:59:59Z", "01:59:59", "AEST", -600],
		["1969-10-25T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1970" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1970-03-07T15:59:59Z", "02:59:59", "AEDT", -660],
		["1970-03-07T16:00:00Z", "02:00:00", "AEST", -600],
		["1970-10-24T15:59:59Z", "01:59:59", "AEST", -600],
		["1970-10-24T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1971" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1971-03-13T15:59:59Z", "02:59:59", "AEDT", -660],
		["1971-03-13T16:00:00Z", "02:00:00", "AEST", -600],
		["1971-10-30T15:59:59Z", "01:59:59", "AEST", -600],
		["1971-10-30T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1972" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1972-02-26T15:59:59Z", "02:59:59", "AEDT", -660],
		["1972-02-26T16:00:00Z", "02:00:00", "AEST", -600],
		["1972-10-28T15:59:59Z", "01:59:59", "AEST", -600],
		["1972-10-28T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1973" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1973-03-03T15:59:59Z", "02:59:59", "AEDT", -660],
		["1973-03-03T16:00:00Z", "02:00:00", "AEST", -600],
		["1973-10-27T15:59:59Z", "01:59:59", "AEST", -600],
		["1973-10-27T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1974" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1974-03-02T15:59:59Z", "02:59:59", "AEDT", -660],
		["1974-03-02T16:00:00Z", "02:00:00", "AEST", -600],
		["1974-10-26T15:59:59Z", "01:59:59", "AEST", -600],
		["1974-10-26T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1975" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1975-03-01T15:59:59Z", "02:59:59", "AEDT", -660],
		["1975-03-01T16:00:00Z", "02:00:00", "AEST", -600],
		["1975-10-25T15:59:59Z", "01:59:59", "AEST", -600],
		["1975-10-25T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1976" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1976-03-06T15:59:59Z", "02:59:59", "AEDT", -660],
		["1976-03-06T16:00:00Z", "02:00:00", "AEST", -600],
		["1976-10-30T15:59:59Z", "01:59:59", "AEST", -600],
		["1976-10-30T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1977" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1977-03-05T15:59:59Z", "02:59:59", "AEDT", -660],
		["1977-03-05T16:00:00Z", "02:00:00", "AEST", -600],
		["1977-10-29T15:59:59Z", "01:59:59", "AEST", -600],
		["1977-10-29T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1978" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1978-03-04T15:59:59Z", "02:59:59", "AEDT", -660],
		["1978-03-04T16:00:00Z", "02:00:00", "AEST", -600],
		["1978-10-28T15:59:59Z", "01:59:59", "AEST", -600],
		["1978-10-28T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1979" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1979-03-03T15:59:59Z", "02:59:59", "AEDT", -660],
		["1979-03-03T16:00:00Z", "02:00:00", "AEST", -600],
		["1979-10-27T15:59:59Z", "01:59:59", "AEST", -600],
		["1979-10-27T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1980" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1980-03-01T15:59:59Z", "02:59:59", "AEDT", -660],
		["1980-03-01T16:00:00Z", "02:00:00", "AEST", -600],
		["1980-10-25T15:59:59Z", "01:59:59", "AEST", -600],
		["1980-10-25T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1981" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1981-02-28T15:59:59Z", "02:59:59", "AEDT", -660],
		["1981-02-28T16:00:00Z", "02:00:00", "AEST", -600],
		["1981-10-24T15:59:59Z", "01:59:59", "AEST", -600],
		["1981-10-24T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1982" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1982-03-27T15:59:59Z", "02:59:59", "AEDT", -660],
		["1982-03-27T16:00:00Z", "02:00:00", "AEST", -600],
		["1982-10-30T15:59:59Z", "01:59:59", "AEST", -600],
		["1982-10-30T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1983" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1983-03-26T15:59:59Z", "02:59:59", "AEDT", -660],
		["1983-03-26T16:00:00Z", "02:00:00", "AEST", -600],
		["1983-10-29T15:59:59Z", "01:59:59", "AEST", -600],
		["1983-10-29T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1984" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1984-03-03T15:59:59Z", "02:59:59", "AEDT", -660],
		["1984-03-03T16:00:00Z", "02:00:00", "AEST", -600],
		["1984-10-27T15:59:59Z", "01:59:59", "AEST", -600],
		["1984-10-27T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1985" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1985-03-02T15:59:59Z", "02:59:59", "AEDT", -660],
		["1985-03-02T16:00:00Z", "02:00:00", "AEST", -600],
		["1985-10-26T15:59:59Z", "01:59:59", "AEST", -600],
		["1985-10-26T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1986" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1986-03-01T15:59:59Z", "02:59:59", "AEDT", -660],
		["1986-03-01T16:00:00Z", "02:00:00", "AEST", -600],
		["1986-10-18T15:59:59Z", "01:59:59", "AEST", -600],
		["1986-10-18T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1987" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1987-03-14T15:59:59Z", "02:59:59", "AEDT", -660],
		["1987-03-14T16:00:00Z", "02:00:00", "AEST", -600],
		["1987-10-24T15:59:59Z", "01:59:59", "AEST", -600],
		["1987-10-24T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1988" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1988-03-19T15:59:59Z", "02:59:59", "AEDT", -660],
		["1988-03-19T16:00:00Z", "02:00:00", "AEST", -600],
		["1988-10-29T15:59:59Z", "01:59:59", "AEST", -600],
		["1988-10-29T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1989" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1989-03-18T15:59:59Z", "02:59:59", "AEDT", -660],
		["1989-03-18T16:00:00Z", "02:00:00", "AEST", -600],
		["1989-10-28T15:59:59Z", "01:59:59", "AEST", -600],
		["1989-10-28T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1990" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1990-03-17T15:59:59Z", "02:59:59", "AEDT", -660],
		["1990-03-17T16:00:00Z", "02:00:00", "AEST", -600],
		["1990-10-27T15:59:59Z", "01:59:59", "AEST", -600],
		["1990-10-27T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1991" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1991-03-30T15:59:59Z", "02:59:59", "AEDT", -660],
		["1991-03-30T16:00:00Z", "02:00:00", "AEST", -600],
		["1991-10-05T15:59:59Z", "01:59:59", "AEST", -600],
		["1991-10-05T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1992" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1992-03-28T15:59:59Z", "02:59:59", "AEDT", -660],
		["1992-03-28T16:00:00Z", "02:00:00", "AEST", -600],
		["1992-10-03T15:59:59Z", "01:59:59", "AEST", -600],
		["1992-10-03T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1993" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1993-03-27T15:59:59Z", "02:59:59", "AEDT", -660],
		["1993-03-27T16:00:00Z", "02:00:00", "AEST", -600],
		["1993-10-02T15:59:59Z", "01:59:59", "AEST", -600],
		["1993-10-02T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1994" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1994-03-26T15:59:59Z", "02:59:59", "AEDT", -660],
		["1994-03-26T16:00:00Z", "02:00:00", "AEST", -600],
		["1994-10-01T15:59:59Z", "01:59:59", "AEST", -600],
		["1994-10-01T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1995" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1995-03-25T15:59:59Z", "02:59:59", "AEDT", -660],
		["1995-03-25T16:00:00Z", "02:00:00", "AEST", -600],
		["1995-09-30T15:59:59Z", "01:59:59", "AEST", -600],
		["1995-09-30T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1996" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1996-03-30T15:59:59Z", "02:59:59", "AEDT", -660],
		["1996-03-30T16:00:00Z", "02:00:00", "AEST", -600],
		["1996-10-05T15:59:59Z", "01:59:59", "AEST", -600],
		["1996-10-05T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1997" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1997-03-29T15:59:59Z", "02:59:59", "AEDT", -660],
		["1997-03-29T16:00:00Z", "02:00:00", "AEST", -600],
		["1997-10-04T15:59:59Z", "01:59:59", "AEST", -600],
		["1997-10-04T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1998" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1998-03-28T15:59:59Z", "02:59:59", "AEDT", -660],
		["1998-03-28T16:00:00Z", "02:00:00", "AEST", -600],
		["1998-10-03T15:59:59Z", "01:59:59", "AEST", -600],
		["1998-10-03T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"1999" : helpers.makeTestYear("Antarctica/Macquarie", [
		["1999-03-27T15:59:59Z", "02:59:59", "AEDT", -660],
		["1999-03-27T16:00:00Z", "02:00:00", "AEST", -600],
		["1999-10-02T15:59:59Z", "01:59:59", "AEST", -600],
		["1999-10-02T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"2000" : helpers.makeTestYear("Antarctica/Macquarie", [
		["2000-03-25T15:59:59Z", "02:59:59", "AEDT", -660],
		["2000-03-25T16:00:00Z", "02:00:00", "AEST", -600],
		["2000-08-26T15:59:59Z", "01:59:59", "AEST", -600],
		["2000-08-26T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"2001" : helpers.makeTestYear("Antarctica/Macquarie", [
		["2001-03-24T15:59:59Z", "02:59:59", "AEDT", -660],
		["2001-03-24T16:00:00Z", "02:00:00", "AEST", -600],
		["2001-10-06T15:59:59Z", "01:59:59", "AEST", -600],
		["2001-10-06T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"2002" : helpers.makeTestYear("Antarctica/Macquarie", [
		["2002-03-30T15:59:59Z", "02:59:59", "AEDT", -660],
		["2002-03-30T16:00:00Z", "02:00:00", "AEST", -600],
		["2002-10-05T15:59:59Z", "01:59:59", "AEST", -600],
		["2002-10-05T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"2003" : helpers.makeTestYear("Antarctica/Macquarie", [
		["2003-03-29T15:59:59Z", "02:59:59", "AEDT", -660],
		["2003-03-29T16:00:00Z", "02:00:00", "AEST", -600],
		["2003-10-04T15:59:59Z", "01:59:59", "AEST", -600],
		["2003-10-04T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"2004" : helpers.makeTestYear("Antarctica/Macquarie", [
		["2004-03-27T15:59:59Z", "02:59:59", "AEDT", -660],
		["2004-03-27T16:00:00Z", "02:00:00", "AEST", -600],
		["2004-10-02T15:59:59Z", "01:59:59", "AEST", -600],
		["2004-10-02T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"2005" : helpers.makeTestYear("Antarctica/Macquarie", [
		["2005-03-26T15:59:59Z", "02:59:59", "AEDT", -660],
		["2005-03-26T16:00:00Z", "02:00:00", "AEST", -600],
		["2005-10-01T15:59:59Z", "01:59:59", "AEST", -600],
		["2005-10-01T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"2006" : helpers.makeTestYear("Antarctica/Macquarie", [
		["2006-04-01T15:59:59Z", "02:59:59", "AEDT", -660],
		["2006-04-01T16:00:00Z", "02:00:00", "AEST", -600],
		["2006-09-30T15:59:59Z", "01:59:59", "AEST", -600],
		["2006-09-30T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"2007" : helpers.makeTestYear("Antarctica/Macquarie", [
		["2007-03-24T15:59:59Z", "02:59:59", "AEDT", -660],
		["2007-03-24T16:00:00Z", "02:00:00", "AEST", -600],
		["2007-10-06T15:59:59Z", "01:59:59", "AEST", -600],
		["2007-10-06T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"2008" : helpers.makeTestYear("Antarctica/Macquarie", [
		["2008-04-05T15:59:59Z", "02:59:59", "AEDT", -660],
		["2008-04-05T16:00:00Z", "02:00:00", "AEST", -600],
		["2008-10-04T15:59:59Z", "01:59:59", "AEST", -600],
		["2008-10-04T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"2009" : helpers.makeTestYear("Antarctica/Macquarie", [
		["2009-04-04T15:59:59Z", "02:59:59", "AEDT", -660],
		["2009-04-04T16:00:00Z", "02:00:00", "AEST", -600],
		["2009-10-03T15:59:59Z", "01:59:59", "AEST", -600],
		["2009-10-03T16:00:00Z", "03:00:00", "AEDT", -660]
	]),

	"2010" : helpers.makeTestYear("Antarctica/Macquarie", [
		["2010-04-03T15:59:59Z", "02:59:59", "AEDT", -660],
		["2010-04-03T16:00:00Z", "03:00:00", "MIST", -660]
	])
};