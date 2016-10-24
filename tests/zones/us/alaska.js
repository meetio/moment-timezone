"use strict";

var helpers = require("../../helpers/helpers");

exports["US/Alaska"] = {
	"1942" : helpers.makeTestYear("US/Alaska", [
		["1942-02-09T11:59:59Z", "01:59:59", "CAT", 600],
		["1942-02-09T12:00:00Z", "03:00:00", "CAWT", 540]
	]),

	"1945" : helpers.makeTestYear("US/Alaska", [
		["1945-08-14T22:59:59Z", "13:59:59", "CAWT", 540],
		["1945-08-14T23:00:00Z", "14:00:00", "CAPT", 540],
		["1945-09-30T10:59:59Z", "01:59:59", "CAPT", 540],
		["1945-09-30T11:00:00Z", "01:00:00", "CAT", 600]
	]),

	"1967" : helpers.makeTestYear("US/Alaska", [
		["1967-04-01T09:59:59Z", "23:59:59", "CAT", 600],
		["1967-04-01T10:00:00Z", "00:00:00", "AHST", 600]
	]),

	"1969" : helpers.makeTestYear("US/Alaska", [
		["1969-04-27T11:59:59Z", "01:59:59", "AHST", 600],
		["1969-04-27T12:00:00Z", "03:00:00", "AHDT", 540],
		["1969-10-26T10:59:59Z", "01:59:59", "AHDT", 540],
		["1969-10-26T11:00:00Z", "01:00:00", "AHST", 600]
	]),

	"1970" : helpers.makeTestYear("US/Alaska", [
		["1970-04-26T11:59:59Z", "01:59:59", "AHST", 600],
		["1970-04-26T12:00:00Z", "03:00:00", "AHDT", 540],
		["1970-10-25T10:59:59Z", "01:59:59", "AHDT", 540],
		["1970-10-25T11:00:00Z", "01:00:00", "AHST", 600]
	]),

	"1971" : helpers.makeTestYear("US/Alaska", [
		["1971-04-25T11:59:59Z", "01:59:59", "AHST", 600],
		["1971-04-25T12:00:00Z", "03:00:00", "AHDT", 540],
		["1971-10-31T10:59:59Z", "01:59:59", "AHDT", 540],
		["1971-10-31T11:00:00Z", "01:00:00", "AHST", 600]
	]),

	"1972" : helpers.makeTestYear("US/Alaska", [
		["1972-04-30T11:59:59Z", "01:59:59", "AHST", 600],
		["1972-04-30T12:00:00Z", "03:00:00", "AHDT", 540],
		["1972-10-29T10:59:59Z", "01:59:59", "AHDT", 540],
		["1972-10-29T11:00:00Z", "01:00:00", "AHST", 600]
	]),

	"1973" : helpers.makeTestYear("US/Alaska", [
		["1973-04-29T11:59:59Z", "01:59:59", "AHST", 600],
		["1973-04-29T12:00:00Z", "03:00:00", "AHDT", 540],
		["1973-10-28T10:59:59Z", "01:59:59", "AHDT", 540],
		["1973-10-28T11:00:00Z", "01:00:00", "AHST", 600]
	]),

	"1974" : helpers.makeTestYear("US/Alaska", [
		["1974-01-06T11:59:59Z", "01:59:59", "AHST", 600],
		["1974-01-06T12:00:00Z", "03:00:00", "AHDT", 540],
		["1974-10-27T10:59:59Z", "01:59:59", "AHDT", 540],
		["1974-10-27T11:00:00Z", "01:00:00", "AHST", 600]
	]),

	"1975" : helpers.makeTestYear("US/Alaska", [
		["1975-02-23T11:59:59Z", "01:59:59", "AHST", 600],
		["1975-02-23T12:00:00Z", "03:00:00", "AHDT", 540],
		["1975-10-26T10:59:59Z", "01:59:59", "AHDT", 540],
		["1975-10-26T11:00:00Z", "01:00:00", "AHST", 600]
	]),

	"1976" : helpers.makeTestYear("US/Alaska", [
		["1976-04-25T11:59:59Z", "01:59:59", "AHST", 600],
		["1976-04-25T12:00:00Z", "03:00:00", "AHDT", 540],
		["1976-10-31T10:59:59Z", "01:59:59", "AHDT", 540],
		["1976-10-31T11:00:00Z", "01:00:00", "AHST", 600]
	]),

	"1977" : helpers.makeTestYear("US/Alaska", [
		["1977-04-24T11:59:59Z", "01:59:59", "AHST", 600],
		["1977-04-24T12:00:00Z", "03:00:00", "AHDT", 540],
		["1977-10-30T10:59:59Z", "01:59:59", "AHDT", 540],
		["1977-10-30T11:00:00Z", "01:00:00", "AHST", 600]
	]),

	"1978" : helpers.makeTestYear("US/Alaska", [
		["1978-04-30T11:59:59Z", "01:59:59", "AHST", 600],
		["1978-04-30T12:00:00Z", "03:00:00", "AHDT", 540],
		["1978-10-29T10:59:59Z", "01:59:59", "AHDT", 540],
		["1978-10-29T11:00:00Z", "01:00:00", "AHST", 600]
	]),

	"1979" : helpers.makeTestYear("US/Alaska", [
		["1979-04-29T11:59:59Z", "01:59:59", "AHST", 600],
		["1979-04-29T12:00:00Z", "03:00:00", "AHDT", 540],
		["1979-10-28T10:59:59Z", "01:59:59", "AHDT", 540],
		["1979-10-28T11:00:00Z", "01:00:00", "AHST", 600]
	]),

	"1980" : helpers.makeTestYear("US/Alaska", [
		["1980-04-27T11:59:59Z", "01:59:59", "AHST", 600],
		["1980-04-27T12:00:00Z", "03:00:00", "AHDT", 540],
		["1980-10-26T10:59:59Z", "01:59:59", "AHDT", 540],
		["1980-10-26T11:00:00Z", "01:00:00", "AHST", 600]
	]),

	"1981" : helpers.makeTestYear("US/Alaska", [
		["1981-04-26T11:59:59Z", "01:59:59", "AHST", 600],
		["1981-04-26T12:00:00Z", "03:00:00", "AHDT", 540],
		["1981-10-25T10:59:59Z", "01:59:59", "AHDT", 540],
		["1981-10-25T11:00:00Z", "01:00:00", "AHST", 600]
	]),

	"1982" : helpers.makeTestYear("US/Alaska", [
		["1982-04-25T11:59:59Z", "01:59:59", "AHST", 600],
		["1982-04-25T12:00:00Z", "03:00:00", "AHDT", 540],
		["1982-10-31T10:59:59Z", "01:59:59", "AHDT", 540],
		["1982-10-31T11:00:00Z", "01:00:00", "AHST", 600]
	]),

	"1983" : helpers.makeTestYear("US/Alaska", [
		["1983-04-24T11:59:59Z", "01:59:59", "AHST", 600],
		["1983-04-24T12:00:00Z", "03:00:00", "AHDT", 540],
		["1983-10-30T10:59:59Z", "01:59:59", "AHDT", 540],
		["1983-10-30T11:00:00Z", "02:00:00", "YST", 540],
		["1983-11-30T08:59:59Z", "23:59:59", "YST", 540],
		["1983-11-30T09:00:00Z", "00:00:00", "AKST", 540]
	]),

	"1984" : helpers.makeTestYear("US/Alaska", [
		["1984-04-29T10:59:59Z", "01:59:59", "AKST", 540],
		["1984-04-29T11:00:00Z", "03:00:00", "AKDT", 480],
		["1984-10-28T09:59:59Z", "01:59:59", "AKDT", 480],
		["1984-10-28T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"1985" : helpers.makeTestYear("US/Alaska", [
		["1985-04-28T10:59:59Z", "01:59:59", "AKST", 540],
		["1985-04-28T11:00:00Z", "03:00:00", "AKDT", 480],
		["1985-10-27T09:59:59Z", "01:59:59", "AKDT", 480],
		["1985-10-27T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"1986" : helpers.makeTestYear("US/Alaska", [
		["1986-04-27T10:59:59Z", "01:59:59", "AKST", 540],
		["1986-04-27T11:00:00Z", "03:00:00", "AKDT", 480],
		["1986-10-26T09:59:59Z", "01:59:59", "AKDT", 480],
		["1986-10-26T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"1987" : helpers.makeTestYear("US/Alaska", [
		["1987-04-05T10:59:59Z", "01:59:59", "AKST", 540],
		["1987-04-05T11:00:00Z", "03:00:00", "AKDT", 480],
		["1987-10-25T09:59:59Z", "01:59:59", "AKDT", 480],
		["1987-10-25T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"1988" : helpers.makeTestYear("US/Alaska", [
		["1988-04-03T10:59:59Z", "01:59:59", "AKST", 540],
		["1988-04-03T11:00:00Z", "03:00:00", "AKDT", 480],
		["1988-10-30T09:59:59Z", "01:59:59", "AKDT", 480],
		["1988-10-30T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"1989" : helpers.makeTestYear("US/Alaska", [
		["1989-04-02T10:59:59Z", "01:59:59", "AKST", 540],
		["1989-04-02T11:00:00Z", "03:00:00", "AKDT", 480],
		["1989-10-29T09:59:59Z", "01:59:59", "AKDT", 480],
		["1989-10-29T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"1990" : helpers.makeTestYear("US/Alaska", [
		["1990-04-01T10:59:59Z", "01:59:59", "AKST", 540],
		["1990-04-01T11:00:00Z", "03:00:00", "AKDT", 480],
		["1990-10-28T09:59:59Z", "01:59:59", "AKDT", 480],
		["1990-10-28T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"1991" : helpers.makeTestYear("US/Alaska", [
		["1991-04-07T10:59:59Z", "01:59:59", "AKST", 540],
		["1991-04-07T11:00:00Z", "03:00:00", "AKDT", 480],
		["1991-10-27T09:59:59Z", "01:59:59", "AKDT", 480],
		["1991-10-27T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"1992" : helpers.makeTestYear("US/Alaska", [
		["1992-04-05T10:59:59Z", "01:59:59", "AKST", 540],
		["1992-04-05T11:00:00Z", "03:00:00", "AKDT", 480],
		["1992-10-25T09:59:59Z", "01:59:59", "AKDT", 480],
		["1992-10-25T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"1993" : helpers.makeTestYear("US/Alaska", [
		["1993-04-04T10:59:59Z", "01:59:59", "AKST", 540],
		["1993-04-04T11:00:00Z", "03:00:00", "AKDT", 480],
		["1993-10-31T09:59:59Z", "01:59:59", "AKDT", 480],
		["1993-10-31T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"1994" : helpers.makeTestYear("US/Alaska", [
		["1994-04-03T10:59:59Z", "01:59:59", "AKST", 540],
		["1994-04-03T11:00:00Z", "03:00:00", "AKDT", 480],
		["1994-10-30T09:59:59Z", "01:59:59", "AKDT", 480],
		["1994-10-30T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"1995" : helpers.makeTestYear("US/Alaska", [
		["1995-04-02T10:59:59Z", "01:59:59", "AKST", 540],
		["1995-04-02T11:00:00Z", "03:00:00", "AKDT", 480],
		["1995-10-29T09:59:59Z", "01:59:59", "AKDT", 480],
		["1995-10-29T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"1996" : helpers.makeTestYear("US/Alaska", [
		["1996-04-07T10:59:59Z", "01:59:59", "AKST", 540],
		["1996-04-07T11:00:00Z", "03:00:00", "AKDT", 480],
		["1996-10-27T09:59:59Z", "01:59:59", "AKDT", 480],
		["1996-10-27T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"1997" : helpers.makeTestYear("US/Alaska", [
		["1997-04-06T10:59:59Z", "01:59:59", "AKST", 540],
		["1997-04-06T11:00:00Z", "03:00:00", "AKDT", 480],
		["1997-10-26T09:59:59Z", "01:59:59", "AKDT", 480],
		["1997-10-26T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"1998" : helpers.makeTestYear("US/Alaska", [
		["1998-04-05T10:59:59Z", "01:59:59", "AKST", 540],
		["1998-04-05T11:00:00Z", "03:00:00", "AKDT", 480],
		["1998-10-25T09:59:59Z", "01:59:59", "AKDT", 480],
		["1998-10-25T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"1999" : helpers.makeTestYear("US/Alaska", [
		["1999-04-04T10:59:59Z", "01:59:59", "AKST", 540],
		["1999-04-04T11:00:00Z", "03:00:00", "AKDT", 480],
		["1999-10-31T09:59:59Z", "01:59:59", "AKDT", 480],
		["1999-10-31T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2000" : helpers.makeTestYear("US/Alaska", [
		["2000-04-02T10:59:59Z", "01:59:59", "AKST", 540],
		["2000-04-02T11:00:00Z", "03:00:00", "AKDT", 480],
		["2000-10-29T09:59:59Z", "01:59:59", "AKDT", 480],
		["2000-10-29T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2001" : helpers.makeTestYear("US/Alaska", [
		["2001-04-01T10:59:59Z", "01:59:59", "AKST", 540],
		["2001-04-01T11:00:00Z", "03:00:00", "AKDT", 480],
		["2001-10-28T09:59:59Z", "01:59:59", "AKDT", 480],
		["2001-10-28T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2002" : helpers.makeTestYear("US/Alaska", [
		["2002-04-07T10:59:59Z", "01:59:59", "AKST", 540],
		["2002-04-07T11:00:00Z", "03:00:00", "AKDT", 480],
		["2002-10-27T09:59:59Z", "01:59:59", "AKDT", 480],
		["2002-10-27T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2003" : helpers.makeTestYear("US/Alaska", [
		["2003-04-06T10:59:59Z", "01:59:59", "AKST", 540],
		["2003-04-06T11:00:00Z", "03:00:00", "AKDT", 480],
		["2003-10-26T09:59:59Z", "01:59:59", "AKDT", 480],
		["2003-10-26T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2004" : helpers.makeTestYear("US/Alaska", [
		["2004-04-04T10:59:59Z", "01:59:59", "AKST", 540],
		["2004-04-04T11:00:00Z", "03:00:00", "AKDT", 480],
		["2004-10-31T09:59:59Z", "01:59:59", "AKDT", 480],
		["2004-10-31T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2005" : helpers.makeTestYear("US/Alaska", [
		["2005-04-03T10:59:59Z", "01:59:59", "AKST", 540],
		["2005-04-03T11:00:00Z", "03:00:00", "AKDT", 480],
		["2005-10-30T09:59:59Z", "01:59:59", "AKDT", 480],
		["2005-10-30T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2006" : helpers.makeTestYear("US/Alaska", [
		["2006-04-02T10:59:59Z", "01:59:59", "AKST", 540],
		["2006-04-02T11:00:00Z", "03:00:00", "AKDT", 480],
		["2006-10-29T09:59:59Z", "01:59:59", "AKDT", 480],
		["2006-10-29T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2007" : helpers.makeTestYear("US/Alaska", [
		["2007-03-11T10:59:59Z", "01:59:59", "AKST", 540],
		["2007-03-11T11:00:00Z", "03:00:00", "AKDT", 480],
		["2007-11-04T09:59:59Z", "01:59:59", "AKDT", 480],
		["2007-11-04T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2008" : helpers.makeTestYear("US/Alaska", [
		["2008-03-09T10:59:59Z", "01:59:59", "AKST", 540],
		["2008-03-09T11:00:00Z", "03:00:00", "AKDT", 480],
		["2008-11-02T09:59:59Z", "01:59:59", "AKDT", 480],
		["2008-11-02T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2009" : helpers.makeTestYear("US/Alaska", [
		["2009-03-08T10:59:59Z", "01:59:59", "AKST", 540],
		["2009-03-08T11:00:00Z", "03:00:00", "AKDT", 480],
		["2009-11-01T09:59:59Z", "01:59:59", "AKDT", 480],
		["2009-11-01T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2010" : helpers.makeTestYear("US/Alaska", [
		["2010-03-14T10:59:59Z", "01:59:59", "AKST", 540],
		["2010-03-14T11:00:00Z", "03:00:00", "AKDT", 480],
		["2010-11-07T09:59:59Z", "01:59:59", "AKDT", 480],
		["2010-11-07T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2011" : helpers.makeTestYear("US/Alaska", [
		["2011-03-13T10:59:59Z", "01:59:59", "AKST", 540],
		["2011-03-13T11:00:00Z", "03:00:00", "AKDT", 480],
		["2011-11-06T09:59:59Z", "01:59:59", "AKDT", 480],
		["2011-11-06T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2012" : helpers.makeTestYear("US/Alaska", [
		["2012-03-11T10:59:59Z", "01:59:59", "AKST", 540],
		["2012-03-11T11:00:00Z", "03:00:00", "AKDT", 480],
		["2012-11-04T09:59:59Z", "01:59:59", "AKDT", 480],
		["2012-11-04T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2013" : helpers.makeTestYear("US/Alaska", [
		["2013-03-10T10:59:59Z", "01:59:59", "AKST", 540],
		["2013-03-10T11:00:00Z", "03:00:00", "AKDT", 480],
		["2013-11-03T09:59:59Z", "01:59:59", "AKDT", 480],
		["2013-11-03T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2014" : helpers.makeTestYear("US/Alaska", [
		["2014-03-09T10:59:59Z", "01:59:59", "AKST", 540],
		["2014-03-09T11:00:00Z", "03:00:00", "AKDT", 480],
		["2014-11-02T09:59:59Z", "01:59:59", "AKDT", 480],
		["2014-11-02T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2015" : helpers.makeTestYear("US/Alaska", [
		["2015-03-08T10:59:59Z", "01:59:59", "AKST", 540],
		["2015-03-08T11:00:00Z", "03:00:00", "AKDT", 480],
		["2015-11-01T09:59:59Z", "01:59:59", "AKDT", 480],
		["2015-11-01T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2016" : helpers.makeTestYear("US/Alaska", [
		["2016-03-13T10:59:59Z", "01:59:59", "AKST", 540],
		["2016-03-13T11:00:00Z", "03:00:00", "AKDT", 480],
		["2016-11-06T09:59:59Z", "01:59:59", "AKDT", 480],
		["2016-11-06T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2017" : helpers.makeTestYear("US/Alaska", [
		["2017-03-12T10:59:59Z", "01:59:59", "AKST", 540],
		["2017-03-12T11:00:00Z", "03:00:00", "AKDT", 480],
		["2017-11-05T09:59:59Z", "01:59:59", "AKDT", 480],
		["2017-11-05T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2018" : helpers.makeTestYear("US/Alaska", [
		["2018-03-11T10:59:59Z", "01:59:59", "AKST", 540],
		["2018-03-11T11:00:00Z", "03:00:00", "AKDT", 480],
		["2018-11-04T09:59:59Z", "01:59:59", "AKDT", 480],
		["2018-11-04T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2019" : helpers.makeTestYear("US/Alaska", [
		["2019-03-10T10:59:59Z", "01:59:59", "AKST", 540],
		["2019-03-10T11:00:00Z", "03:00:00", "AKDT", 480],
		["2019-11-03T09:59:59Z", "01:59:59", "AKDT", 480],
		["2019-11-03T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2020" : helpers.makeTestYear("US/Alaska", [
		["2020-03-08T10:59:59Z", "01:59:59", "AKST", 540],
		["2020-03-08T11:00:00Z", "03:00:00", "AKDT", 480],
		["2020-11-01T09:59:59Z", "01:59:59", "AKDT", 480],
		["2020-11-01T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2021" : helpers.makeTestYear("US/Alaska", [
		["2021-03-14T10:59:59Z", "01:59:59", "AKST", 540],
		["2021-03-14T11:00:00Z", "03:00:00", "AKDT", 480],
		["2021-11-07T09:59:59Z", "01:59:59", "AKDT", 480],
		["2021-11-07T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2022" : helpers.makeTestYear("US/Alaska", [
		["2022-03-13T10:59:59Z", "01:59:59", "AKST", 540],
		["2022-03-13T11:00:00Z", "03:00:00", "AKDT", 480],
		["2022-11-06T09:59:59Z", "01:59:59", "AKDT", 480],
		["2022-11-06T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2023" : helpers.makeTestYear("US/Alaska", [
		["2023-03-12T10:59:59Z", "01:59:59", "AKST", 540],
		["2023-03-12T11:00:00Z", "03:00:00", "AKDT", 480],
		["2023-11-05T09:59:59Z", "01:59:59", "AKDT", 480],
		["2023-11-05T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2024" : helpers.makeTestYear("US/Alaska", [
		["2024-03-10T10:59:59Z", "01:59:59", "AKST", 540],
		["2024-03-10T11:00:00Z", "03:00:00", "AKDT", 480],
		["2024-11-03T09:59:59Z", "01:59:59", "AKDT", 480],
		["2024-11-03T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2025" : helpers.makeTestYear("US/Alaska", [
		["2025-03-09T10:59:59Z", "01:59:59", "AKST", 540],
		["2025-03-09T11:00:00Z", "03:00:00", "AKDT", 480],
		["2025-11-02T09:59:59Z", "01:59:59", "AKDT", 480],
		["2025-11-02T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2026" : helpers.makeTestYear("US/Alaska", [
		["2026-03-08T10:59:59Z", "01:59:59", "AKST", 540],
		["2026-03-08T11:00:00Z", "03:00:00", "AKDT", 480],
		["2026-11-01T09:59:59Z", "01:59:59", "AKDT", 480],
		["2026-11-01T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2027" : helpers.makeTestYear("US/Alaska", [
		["2027-03-14T10:59:59Z", "01:59:59", "AKST", 540],
		["2027-03-14T11:00:00Z", "03:00:00", "AKDT", 480],
		["2027-11-07T09:59:59Z", "01:59:59", "AKDT", 480],
		["2027-11-07T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2028" : helpers.makeTestYear("US/Alaska", [
		["2028-03-12T10:59:59Z", "01:59:59", "AKST", 540],
		["2028-03-12T11:00:00Z", "03:00:00", "AKDT", 480],
		["2028-11-05T09:59:59Z", "01:59:59", "AKDT", 480],
		["2028-11-05T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2029" : helpers.makeTestYear("US/Alaska", [
		["2029-03-11T10:59:59Z", "01:59:59", "AKST", 540],
		["2029-03-11T11:00:00Z", "03:00:00", "AKDT", 480],
		["2029-11-04T09:59:59Z", "01:59:59", "AKDT", 480],
		["2029-11-04T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2030" : helpers.makeTestYear("US/Alaska", [
		["2030-03-10T10:59:59Z", "01:59:59", "AKST", 540],
		["2030-03-10T11:00:00Z", "03:00:00", "AKDT", 480],
		["2030-11-03T09:59:59Z", "01:59:59", "AKDT", 480],
		["2030-11-03T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2031" : helpers.makeTestYear("US/Alaska", [
		["2031-03-09T10:59:59Z", "01:59:59", "AKST", 540],
		["2031-03-09T11:00:00Z", "03:00:00", "AKDT", 480],
		["2031-11-02T09:59:59Z", "01:59:59", "AKDT", 480],
		["2031-11-02T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2032" : helpers.makeTestYear("US/Alaska", [
		["2032-03-14T10:59:59Z", "01:59:59", "AKST", 540],
		["2032-03-14T11:00:00Z", "03:00:00", "AKDT", 480],
		["2032-11-07T09:59:59Z", "01:59:59", "AKDT", 480],
		["2032-11-07T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2033" : helpers.makeTestYear("US/Alaska", [
		["2033-03-13T10:59:59Z", "01:59:59", "AKST", 540],
		["2033-03-13T11:00:00Z", "03:00:00", "AKDT", 480],
		["2033-11-06T09:59:59Z", "01:59:59", "AKDT", 480],
		["2033-11-06T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2034" : helpers.makeTestYear("US/Alaska", [
		["2034-03-12T10:59:59Z", "01:59:59", "AKST", 540],
		["2034-03-12T11:00:00Z", "03:00:00", "AKDT", 480],
		["2034-11-05T09:59:59Z", "01:59:59", "AKDT", 480],
		["2034-11-05T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2035" : helpers.makeTestYear("US/Alaska", [
		["2035-03-11T10:59:59Z", "01:59:59", "AKST", 540],
		["2035-03-11T11:00:00Z", "03:00:00", "AKDT", 480],
		["2035-11-04T09:59:59Z", "01:59:59", "AKDT", 480],
		["2035-11-04T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2036" : helpers.makeTestYear("US/Alaska", [
		["2036-03-09T10:59:59Z", "01:59:59", "AKST", 540],
		["2036-03-09T11:00:00Z", "03:00:00", "AKDT", 480],
		["2036-11-02T09:59:59Z", "01:59:59", "AKDT", 480],
		["2036-11-02T10:00:00Z", "01:00:00", "AKST", 540]
	]),

	"2037" : helpers.makeTestYear("US/Alaska", [
		["2037-03-08T10:59:59Z", "01:59:59", "AKST", 540],
		["2037-03-08T11:00:00Z", "03:00:00", "AKDT", 480],
		["2037-11-01T09:59:59Z", "01:59:59", "AKDT", 480],
		["2037-11-01T10:00:00Z", "01:00:00", "AKST", 540]
	])
};