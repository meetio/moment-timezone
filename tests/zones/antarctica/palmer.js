"use strict";

var helpers = require("../../helpers/helpers");

exports["Antarctica/Palmer"] = {
	"1964" : helpers.makeTestYear("Antarctica/Palmer", [
		["1964-12-31T23:59:59Z", "23:59:59", "-00", 0]
	]),

	"1965" : helpers.makeTestYear("Antarctica/Palmer", [
		["1965-01-01T00:00:00Z", "21:00:00", "ARST", 180],
		["1965-03-01T02:59:59Z", "23:59:59", "ARST", 180],
		["1965-03-01T03:00:00Z", "23:00:00", "ART", 240],
		["1965-10-15T03:59:59Z", "23:59:59", "ART", 240],
		["1965-10-15T04:00:00Z", "01:00:00", "ARST", 180]
	]),

	"1966" : helpers.makeTestYear("Antarctica/Palmer", [
		["1966-03-01T02:59:59Z", "23:59:59", "ARST", 180],
		["1966-03-01T03:00:00Z", "23:00:00", "ART", 240],
		["1966-10-15T03:59:59Z", "23:59:59", "ART", 240],
		["1966-10-15T04:00:00Z", "01:00:00", "ARST", 180]
	]),

	"1967" : helpers.makeTestYear("Antarctica/Palmer", [
		["1967-04-02T02:59:59Z", "23:59:59", "ARST", 180],
		["1967-04-02T03:00:00Z", "23:00:00", "ART", 240],
		["1967-10-01T03:59:59Z", "23:59:59", "ART", 240],
		["1967-10-01T04:00:00Z", "01:00:00", "ARST", 180]
	]),

	"1968" : helpers.makeTestYear("Antarctica/Palmer", [
		["1968-04-07T02:59:59Z", "23:59:59", "ARST", 180],
		["1968-04-07T03:00:00Z", "23:00:00", "ART", 240],
		["1968-10-06T03:59:59Z", "23:59:59", "ART", 240],
		["1968-10-06T04:00:00Z", "01:00:00", "ARST", 180]
	]),

	"1969" : helpers.makeTestYear("Antarctica/Palmer", [
		["1969-04-06T02:59:59Z", "23:59:59", "ARST", 180],
		["1969-04-06T03:00:00Z", "23:00:00", "ART", 240],
		["1969-10-05T03:59:59Z", "23:59:59", "ART", 240],
		["1969-10-05T04:00:00Z", "01:00:00", "ART", 180]
	]),

	"1974" : helpers.makeTestYear("Antarctica/Palmer", [
		["1974-01-23T02:59:59Z", "23:59:59", "ART", 180],
		["1974-01-23T03:00:00Z", "01:00:00", "ARST", 120],
		["1974-05-01T01:59:59Z", "23:59:59", "ARST", 120],
		["1974-05-01T02:00:00Z", "23:00:00", "ART", 180]
	]),

	"1982" : helpers.makeTestYear("Antarctica/Palmer", [
		["1982-05-01T02:59:59Z", "23:59:59", "ART", 180],
		["1982-05-01T03:00:00Z", "23:00:00", "CLT", 240],
		["1982-10-10T03:59:59Z", "23:59:59", "CLT", 240],
		["1982-10-10T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"1983" : helpers.makeTestYear("Antarctica/Palmer", [
		["1983-03-13T02:59:59Z", "23:59:59", "CLST", 180],
		["1983-03-13T03:00:00Z", "23:00:00", "CLT", 240],
		["1983-10-09T03:59:59Z", "23:59:59", "CLT", 240],
		["1983-10-09T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"1984" : helpers.makeTestYear("Antarctica/Palmer", [
		["1984-03-11T02:59:59Z", "23:59:59", "CLST", 180],
		["1984-03-11T03:00:00Z", "23:00:00", "CLT", 240],
		["1984-10-14T03:59:59Z", "23:59:59", "CLT", 240],
		["1984-10-14T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"1985" : helpers.makeTestYear("Antarctica/Palmer", [
		["1985-03-10T02:59:59Z", "23:59:59", "CLST", 180],
		["1985-03-10T03:00:00Z", "23:00:00", "CLT", 240],
		["1985-10-13T03:59:59Z", "23:59:59", "CLT", 240],
		["1985-10-13T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"1986" : helpers.makeTestYear("Antarctica/Palmer", [
		["1986-03-09T02:59:59Z", "23:59:59", "CLST", 180],
		["1986-03-09T03:00:00Z", "23:00:00", "CLT", 240],
		["1986-10-12T03:59:59Z", "23:59:59", "CLT", 240],
		["1986-10-12T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"1987" : helpers.makeTestYear("Antarctica/Palmer", [
		["1987-04-12T02:59:59Z", "23:59:59", "CLST", 180],
		["1987-04-12T03:00:00Z", "23:00:00", "CLT", 240],
		["1987-10-11T03:59:59Z", "23:59:59", "CLT", 240],
		["1987-10-11T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"1988" : helpers.makeTestYear("Antarctica/Palmer", [
		["1988-03-13T02:59:59Z", "23:59:59", "CLST", 180],
		["1988-03-13T03:00:00Z", "23:00:00", "CLT", 240],
		["1988-10-09T03:59:59Z", "23:59:59", "CLT", 240],
		["1988-10-09T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"1989" : helpers.makeTestYear("Antarctica/Palmer", [
		["1989-03-12T02:59:59Z", "23:59:59", "CLST", 180],
		["1989-03-12T03:00:00Z", "23:00:00", "CLT", 240],
		["1989-10-15T03:59:59Z", "23:59:59", "CLT", 240],
		["1989-10-15T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"1990" : helpers.makeTestYear("Antarctica/Palmer", [
		["1990-03-11T02:59:59Z", "23:59:59", "CLST", 180],
		["1990-03-11T03:00:00Z", "23:00:00", "CLT", 240],
		["1990-09-16T03:59:59Z", "23:59:59", "CLT", 240],
		["1990-09-16T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"1991" : helpers.makeTestYear("Antarctica/Palmer", [
		["1991-03-10T02:59:59Z", "23:59:59", "CLST", 180],
		["1991-03-10T03:00:00Z", "23:00:00", "CLT", 240],
		["1991-10-13T03:59:59Z", "23:59:59", "CLT", 240],
		["1991-10-13T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"1992" : helpers.makeTestYear("Antarctica/Palmer", [
		["1992-03-15T02:59:59Z", "23:59:59", "CLST", 180],
		["1992-03-15T03:00:00Z", "23:00:00", "CLT", 240],
		["1992-10-11T03:59:59Z", "23:59:59", "CLT", 240],
		["1992-10-11T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"1993" : helpers.makeTestYear("Antarctica/Palmer", [
		["1993-03-14T02:59:59Z", "23:59:59", "CLST", 180],
		["1993-03-14T03:00:00Z", "23:00:00", "CLT", 240],
		["1993-10-10T03:59:59Z", "23:59:59", "CLT", 240],
		["1993-10-10T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"1994" : helpers.makeTestYear("Antarctica/Palmer", [
		["1994-03-13T02:59:59Z", "23:59:59", "CLST", 180],
		["1994-03-13T03:00:00Z", "23:00:00", "CLT", 240],
		["1994-10-09T03:59:59Z", "23:59:59", "CLT", 240],
		["1994-10-09T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"1995" : helpers.makeTestYear("Antarctica/Palmer", [
		["1995-03-12T02:59:59Z", "23:59:59", "CLST", 180],
		["1995-03-12T03:00:00Z", "23:00:00", "CLT", 240],
		["1995-10-15T03:59:59Z", "23:59:59", "CLT", 240],
		["1995-10-15T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"1996" : helpers.makeTestYear("Antarctica/Palmer", [
		["1996-03-10T02:59:59Z", "23:59:59", "CLST", 180],
		["1996-03-10T03:00:00Z", "23:00:00", "CLT", 240],
		["1996-10-13T03:59:59Z", "23:59:59", "CLT", 240],
		["1996-10-13T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"1997" : helpers.makeTestYear("Antarctica/Palmer", [
		["1997-03-30T02:59:59Z", "23:59:59", "CLST", 180],
		["1997-03-30T03:00:00Z", "23:00:00", "CLT", 240],
		["1997-10-12T03:59:59Z", "23:59:59", "CLT", 240],
		["1997-10-12T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"1998" : helpers.makeTestYear("Antarctica/Palmer", [
		["1998-03-15T02:59:59Z", "23:59:59", "CLST", 180],
		["1998-03-15T03:00:00Z", "23:00:00", "CLT", 240],
		["1998-09-27T03:59:59Z", "23:59:59", "CLT", 240],
		["1998-09-27T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"1999" : helpers.makeTestYear("Antarctica/Palmer", [
		["1999-04-04T02:59:59Z", "23:59:59", "CLST", 180],
		["1999-04-04T03:00:00Z", "23:00:00", "CLT", 240],
		["1999-10-10T03:59:59Z", "23:59:59", "CLT", 240],
		["1999-10-10T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2000" : helpers.makeTestYear("Antarctica/Palmer", [
		["2000-03-12T02:59:59Z", "23:59:59", "CLST", 180],
		["2000-03-12T03:00:00Z", "23:00:00", "CLT", 240],
		["2000-10-15T03:59:59Z", "23:59:59", "CLT", 240],
		["2000-10-15T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2001" : helpers.makeTestYear("Antarctica/Palmer", [
		["2001-03-11T02:59:59Z", "23:59:59", "CLST", 180],
		["2001-03-11T03:00:00Z", "23:00:00", "CLT", 240],
		["2001-10-14T03:59:59Z", "23:59:59", "CLT", 240],
		["2001-10-14T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2002" : helpers.makeTestYear("Antarctica/Palmer", [
		["2002-03-10T02:59:59Z", "23:59:59", "CLST", 180],
		["2002-03-10T03:00:00Z", "23:00:00", "CLT", 240],
		["2002-10-13T03:59:59Z", "23:59:59", "CLT", 240],
		["2002-10-13T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2003" : helpers.makeTestYear("Antarctica/Palmer", [
		["2003-03-09T02:59:59Z", "23:59:59", "CLST", 180],
		["2003-03-09T03:00:00Z", "23:00:00", "CLT", 240],
		["2003-10-12T03:59:59Z", "23:59:59", "CLT", 240],
		["2003-10-12T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2004" : helpers.makeTestYear("Antarctica/Palmer", [
		["2004-03-14T02:59:59Z", "23:59:59", "CLST", 180],
		["2004-03-14T03:00:00Z", "23:00:00", "CLT", 240],
		["2004-10-10T03:59:59Z", "23:59:59", "CLT", 240],
		["2004-10-10T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2005" : helpers.makeTestYear("Antarctica/Palmer", [
		["2005-03-13T02:59:59Z", "23:59:59", "CLST", 180],
		["2005-03-13T03:00:00Z", "23:00:00", "CLT", 240],
		["2005-10-09T03:59:59Z", "23:59:59", "CLT", 240],
		["2005-10-09T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2006" : helpers.makeTestYear("Antarctica/Palmer", [
		["2006-03-12T02:59:59Z", "23:59:59", "CLST", 180],
		["2006-03-12T03:00:00Z", "23:00:00", "CLT", 240],
		["2006-10-15T03:59:59Z", "23:59:59", "CLT", 240],
		["2006-10-15T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2007" : helpers.makeTestYear("Antarctica/Palmer", [
		["2007-03-11T02:59:59Z", "23:59:59", "CLST", 180],
		["2007-03-11T03:00:00Z", "23:00:00", "CLT", 240],
		["2007-10-14T03:59:59Z", "23:59:59", "CLT", 240],
		["2007-10-14T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2008" : helpers.makeTestYear("Antarctica/Palmer", [
		["2008-03-30T02:59:59Z", "23:59:59", "CLST", 180],
		["2008-03-30T03:00:00Z", "23:00:00", "CLT", 240],
		["2008-10-12T03:59:59Z", "23:59:59", "CLT", 240],
		["2008-10-12T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2009" : helpers.makeTestYear("Antarctica/Palmer", [
		["2009-03-15T02:59:59Z", "23:59:59", "CLST", 180],
		["2009-03-15T03:00:00Z", "23:00:00", "CLT", 240],
		["2009-10-11T03:59:59Z", "23:59:59", "CLT", 240],
		["2009-10-11T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2010" : helpers.makeTestYear("Antarctica/Palmer", [
		["2010-04-04T02:59:59Z", "23:59:59", "CLST", 180],
		["2010-04-04T03:00:00Z", "23:00:00", "CLT", 240],
		["2010-10-10T03:59:59Z", "23:59:59", "CLT", 240],
		["2010-10-10T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2011" : helpers.makeTestYear("Antarctica/Palmer", [
		["2011-05-08T02:59:59Z", "23:59:59", "CLST", 180],
		["2011-05-08T03:00:00Z", "23:00:00", "CLT", 240],
		["2011-08-21T03:59:59Z", "23:59:59", "CLT", 240],
		["2011-08-21T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2012" : helpers.makeTestYear("Antarctica/Palmer", [
		["2012-04-29T02:59:59Z", "23:59:59", "CLST", 180],
		["2012-04-29T03:00:00Z", "23:00:00", "CLT", 240],
		["2012-09-02T03:59:59Z", "23:59:59", "CLT", 240],
		["2012-09-02T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2013" : helpers.makeTestYear("Antarctica/Palmer", [
		["2013-04-28T02:59:59Z", "23:59:59", "CLST", 180],
		["2013-04-28T03:00:00Z", "23:00:00", "CLT", 240],
		["2013-09-08T03:59:59Z", "23:59:59", "CLT", 240],
		["2013-09-08T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2014" : helpers.makeTestYear("Antarctica/Palmer", [
		["2014-04-27T02:59:59Z", "23:59:59", "CLST", 180],
		["2014-04-27T03:00:00Z", "23:00:00", "CLT", 240],
		["2014-09-07T03:59:59Z", "23:59:59", "CLT", 240],
		["2014-09-07T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2016" : helpers.makeTestYear("Antarctica/Palmer", [
		["2016-05-15T02:59:59Z", "23:59:59", "CLST", 180],
		["2016-05-15T03:00:00Z", "23:00:00", "CLT", 240],
		["2016-08-14T03:59:59Z", "23:59:59", "CLT", 240],
		["2016-08-14T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2017" : helpers.makeTestYear("Antarctica/Palmer", [
		["2017-05-14T02:59:59Z", "23:59:59", "CLST", 180],
		["2017-05-14T03:00:00Z", "23:00:00", "CLT", 240],
		["2017-08-13T03:59:59Z", "23:59:59", "CLT", 240],
		["2017-08-13T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2018" : helpers.makeTestYear("Antarctica/Palmer", [
		["2018-05-13T02:59:59Z", "23:59:59", "CLST", 180],
		["2018-05-13T03:00:00Z", "23:00:00", "CLT", 240],
		["2018-08-12T03:59:59Z", "23:59:59", "CLT", 240],
		["2018-08-12T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2019" : helpers.makeTestYear("Antarctica/Palmer", [
		["2019-05-12T02:59:59Z", "23:59:59", "CLST", 180],
		["2019-05-12T03:00:00Z", "23:00:00", "CLT", 240],
		["2019-08-11T03:59:59Z", "23:59:59", "CLT", 240],
		["2019-08-11T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2020" : helpers.makeTestYear("Antarctica/Palmer", [
		["2020-05-10T02:59:59Z", "23:59:59", "CLST", 180],
		["2020-05-10T03:00:00Z", "23:00:00", "CLT", 240],
		["2020-08-09T03:59:59Z", "23:59:59", "CLT", 240],
		["2020-08-09T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2021" : helpers.makeTestYear("Antarctica/Palmer", [
		["2021-05-09T02:59:59Z", "23:59:59", "CLST", 180],
		["2021-05-09T03:00:00Z", "23:00:00", "CLT", 240],
		["2021-08-15T03:59:59Z", "23:59:59", "CLT", 240],
		["2021-08-15T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2022" : helpers.makeTestYear("Antarctica/Palmer", [
		["2022-05-15T02:59:59Z", "23:59:59", "CLST", 180],
		["2022-05-15T03:00:00Z", "23:00:00", "CLT", 240],
		["2022-08-14T03:59:59Z", "23:59:59", "CLT", 240],
		["2022-08-14T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2023" : helpers.makeTestYear("Antarctica/Palmer", [
		["2023-05-14T02:59:59Z", "23:59:59", "CLST", 180],
		["2023-05-14T03:00:00Z", "23:00:00", "CLT", 240],
		["2023-08-13T03:59:59Z", "23:59:59", "CLT", 240],
		["2023-08-13T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2024" : helpers.makeTestYear("Antarctica/Palmer", [
		["2024-05-12T02:59:59Z", "23:59:59", "CLST", 180],
		["2024-05-12T03:00:00Z", "23:00:00", "CLT", 240],
		["2024-08-11T03:59:59Z", "23:59:59", "CLT", 240],
		["2024-08-11T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2025" : helpers.makeTestYear("Antarctica/Palmer", [
		["2025-05-11T02:59:59Z", "23:59:59", "CLST", 180],
		["2025-05-11T03:00:00Z", "23:00:00", "CLT", 240],
		["2025-08-10T03:59:59Z", "23:59:59", "CLT", 240],
		["2025-08-10T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2026" : helpers.makeTestYear("Antarctica/Palmer", [
		["2026-05-10T02:59:59Z", "23:59:59", "CLST", 180],
		["2026-05-10T03:00:00Z", "23:00:00", "CLT", 240],
		["2026-08-09T03:59:59Z", "23:59:59", "CLT", 240],
		["2026-08-09T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2027" : helpers.makeTestYear("Antarctica/Palmer", [
		["2027-05-09T02:59:59Z", "23:59:59", "CLST", 180],
		["2027-05-09T03:00:00Z", "23:00:00", "CLT", 240],
		["2027-08-15T03:59:59Z", "23:59:59", "CLT", 240],
		["2027-08-15T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2028" : helpers.makeTestYear("Antarctica/Palmer", [
		["2028-05-14T02:59:59Z", "23:59:59", "CLST", 180],
		["2028-05-14T03:00:00Z", "23:00:00", "CLT", 240],
		["2028-08-13T03:59:59Z", "23:59:59", "CLT", 240],
		["2028-08-13T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2029" : helpers.makeTestYear("Antarctica/Palmer", [
		["2029-05-13T02:59:59Z", "23:59:59", "CLST", 180],
		["2029-05-13T03:00:00Z", "23:00:00", "CLT", 240],
		["2029-08-12T03:59:59Z", "23:59:59", "CLT", 240],
		["2029-08-12T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2030" : helpers.makeTestYear("Antarctica/Palmer", [
		["2030-05-12T02:59:59Z", "23:59:59", "CLST", 180],
		["2030-05-12T03:00:00Z", "23:00:00", "CLT", 240],
		["2030-08-11T03:59:59Z", "23:59:59", "CLT", 240],
		["2030-08-11T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2031" : helpers.makeTestYear("Antarctica/Palmer", [
		["2031-05-11T02:59:59Z", "23:59:59", "CLST", 180],
		["2031-05-11T03:00:00Z", "23:00:00", "CLT", 240],
		["2031-08-10T03:59:59Z", "23:59:59", "CLT", 240],
		["2031-08-10T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2032" : helpers.makeTestYear("Antarctica/Palmer", [
		["2032-05-09T02:59:59Z", "23:59:59", "CLST", 180],
		["2032-05-09T03:00:00Z", "23:00:00", "CLT", 240],
		["2032-08-15T03:59:59Z", "23:59:59", "CLT", 240],
		["2032-08-15T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2033" : helpers.makeTestYear("Antarctica/Palmer", [
		["2033-05-15T02:59:59Z", "23:59:59", "CLST", 180],
		["2033-05-15T03:00:00Z", "23:00:00", "CLT", 240],
		["2033-08-14T03:59:59Z", "23:59:59", "CLT", 240],
		["2033-08-14T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2034" : helpers.makeTestYear("Antarctica/Palmer", [
		["2034-05-14T02:59:59Z", "23:59:59", "CLST", 180],
		["2034-05-14T03:00:00Z", "23:00:00", "CLT", 240],
		["2034-08-13T03:59:59Z", "23:59:59", "CLT", 240],
		["2034-08-13T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2035" : helpers.makeTestYear("Antarctica/Palmer", [
		["2035-05-13T02:59:59Z", "23:59:59", "CLST", 180],
		["2035-05-13T03:00:00Z", "23:00:00", "CLT", 240],
		["2035-08-12T03:59:59Z", "23:59:59", "CLT", 240],
		["2035-08-12T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2036" : helpers.makeTestYear("Antarctica/Palmer", [
		["2036-05-11T02:59:59Z", "23:59:59", "CLST", 180],
		["2036-05-11T03:00:00Z", "23:00:00", "CLT", 240],
		["2036-08-10T03:59:59Z", "23:59:59", "CLT", 240],
		["2036-08-10T04:00:00Z", "01:00:00", "CLST", 180]
	]),

	"2037" : helpers.makeTestYear("Antarctica/Palmer", [
		["2037-05-10T02:59:59Z", "23:59:59", "CLST", 180],
		["2037-05-10T03:00:00Z", "23:00:00", "CLT", 240],
		["2037-08-09T03:59:59Z", "23:59:59", "CLT", 240],
		["2037-08-09T04:00:00Z", "01:00:00", "CLST", 180]
	])
};