"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Ulaanbaatar"] = {
	"1905" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["1905-07-31T16:52:27Z", "23:59:59", "LMT", -25652 / 60],
		["1905-07-31T16:52:28Z", "23:52:28", "ULAT", -420]
	]),

	"1977" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["1977-12-31T16:59:59Z", "23:59:59", "ULAT", -420],
		["1977-12-31T17:00:00Z", "01:00:00", "ULAT", -480]
	]),

	"1983" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["1983-03-31T15:59:59Z", "23:59:59", "ULAT", -480],
		["1983-03-31T16:00:00Z", "01:00:00", "ULAST", -540],
		["1983-09-30T14:59:59Z", "23:59:59", "ULAST", -540],
		["1983-09-30T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"1984" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["1984-03-31T15:59:59Z", "23:59:59", "ULAT", -480],
		["1984-03-31T16:00:00Z", "01:00:00", "ULAST", -540],
		["1984-09-29T14:59:59Z", "23:59:59", "ULAST", -540],
		["1984-09-29T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"1985" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["1985-03-30T15:59:59Z", "23:59:59", "ULAT", -480],
		["1985-03-30T16:00:00Z", "01:00:00", "ULAST", -540],
		["1985-09-28T14:59:59Z", "23:59:59", "ULAST", -540],
		["1985-09-28T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"1986" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["1986-03-29T15:59:59Z", "23:59:59", "ULAT", -480],
		["1986-03-29T16:00:00Z", "01:00:00", "ULAST", -540],
		["1986-09-27T14:59:59Z", "23:59:59", "ULAST", -540],
		["1986-09-27T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"1987" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["1987-03-28T15:59:59Z", "23:59:59", "ULAT", -480],
		["1987-03-28T16:00:00Z", "01:00:00", "ULAST", -540],
		["1987-09-26T14:59:59Z", "23:59:59", "ULAST", -540],
		["1987-09-26T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"1988" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["1988-03-26T15:59:59Z", "23:59:59", "ULAT", -480],
		["1988-03-26T16:00:00Z", "01:00:00", "ULAST", -540],
		["1988-09-24T14:59:59Z", "23:59:59", "ULAST", -540],
		["1988-09-24T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"1989" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["1989-03-25T15:59:59Z", "23:59:59", "ULAT", -480],
		["1989-03-25T16:00:00Z", "01:00:00", "ULAST", -540],
		["1989-09-23T14:59:59Z", "23:59:59", "ULAST", -540],
		["1989-09-23T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"1990" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["1990-03-24T15:59:59Z", "23:59:59", "ULAT", -480],
		["1990-03-24T16:00:00Z", "01:00:00", "ULAST", -540],
		["1990-09-29T14:59:59Z", "23:59:59", "ULAST", -540],
		["1990-09-29T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"1991" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["1991-03-30T15:59:59Z", "23:59:59", "ULAT", -480],
		["1991-03-30T16:00:00Z", "01:00:00", "ULAST", -540],
		["1991-09-28T14:59:59Z", "23:59:59", "ULAST", -540],
		["1991-09-28T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"1992" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["1992-03-28T15:59:59Z", "23:59:59", "ULAT", -480],
		["1992-03-28T16:00:00Z", "01:00:00", "ULAST", -540],
		["1992-09-26T14:59:59Z", "23:59:59", "ULAST", -540],
		["1992-09-26T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"1993" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["1993-03-27T15:59:59Z", "23:59:59", "ULAT", -480],
		["1993-03-27T16:00:00Z", "01:00:00", "ULAST", -540],
		["1993-09-25T14:59:59Z", "23:59:59", "ULAST", -540],
		["1993-09-25T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"1994" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["1994-03-26T15:59:59Z", "23:59:59", "ULAT", -480],
		["1994-03-26T16:00:00Z", "01:00:00", "ULAST", -540],
		["1994-09-24T14:59:59Z", "23:59:59", "ULAST", -540],
		["1994-09-24T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"1995" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["1995-03-25T15:59:59Z", "23:59:59", "ULAT", -480],
		["1995-03-25T16:00:00Z", "01:00:00", "ULAST", -540],
		["1995-09-23T14:59:59Z", "23:59:59", "ULAST", -540],
		["1995-09-23T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"1996" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["1996-03-30T15:59:59Z", "23:59:59", "ULAT", -480],
		["1996-03-30T16:00:00Z", "01:00:00", "ULAST", -540],
		["1996-09-28T14:59:59Z", "23:59:59", "ULAST", -540],
		["1996-09-28T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"1997" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["1997-03-29T15:59:59Z", "23:59:59", "ULAT", -480],
		["1997-03-29T16:00:00Z", "01:00:00", "ULAST", -540],
		["1997-09-27T14:59:59Z", "23:59:59", "ULAST", -540],
		["1997-09-27T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"1998" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["1998-03-28T15:59:59Z", "23:59:59", "ULAT", -480],
		["1998-03-28T16:00:00Z", "01:00:00", "ULAST", -540],
		["1998-09-26T14:59:59Z", "23:59:59", "ULAST", -540],
		["1998-09-26T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"2001" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["2001-04-27T17:59:59Z", "01:59:59", "ULAT", -480],
		["2001-04-27T18:00:00Z", "03:00:00", "ULAST", -540],
		["2001-09-28T16:59:59Z", "01:59:59", "ULAST", -540],
		["2001-09-28T17:00:00Z", "01:00:00", "ULAT", -480]
	]),

	"2002" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["2002-03-29T17:59:59Z", "01:59:59", "ULAT", -480],
		["2002-03-29T18:00:00Z", "03:00:00", "ULAST", -540],
		["2002-09-27T16:59:59Z", "01:59:59", "ULAST", -540],
		["2002-09-27T17:00:00Z", "01:00:00", "ULAT", -480]
	]),

	"2003" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["2003-03-28T17:59:59Z", "01:59:59", "ULAT", -480],
		["2003-03-28T18:00:00Z", "03:00:00", "ULAST", -540],
		["2003-09-26T16:59:59Z", "01:59:59", "ULAST", -540],
		["2003-09-26T17:00:00Z", "01:00:00", "ULAT", -480]
	]),

	"2004" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["2004-03-26T17:59:59Z", "01:59:59", "ULAT", -480],
		["2004-03-26T18:00:00Z", "03:00:00", "ULAST", -540],
		["2004-09-24T16:59:59Z", "01:59:59", "ULAST", -540],
		["2004-09-24T17:00:00Z", "01:00:00", "ULAT", -480]
	]),

	"2005" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["2005-03-25T17:59:59Z", "01:59:59", "ULAT", -480],
		["2005-03-25T18:00:00Z", "03:00:00", "ULAST", -540],
		["2005-09-23T16:59:59Z", "01:59:59", "ULAST", -540],
		["2005-09-23T17:00:00Z", "01:00:00", "ULAT", -480]
	]),

	"2006" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["2006-03-24T17:59:59Z", "01:59:59", "ULAT", -480],
		["2006-03-24T18:00:00Z", "03:00:00", "ULAST", -540],
		["2006-09-29T16:59:59Z", "01:59:59", "ULAST", -540],
		["2006-09-29T17:00:00Z", "01:00:00", "ULAT", -480]
	]),

	"2015" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["2015-03-27T17:59:59Z", "01:59:59", "ULAT", -480],
		["2015-03-27T18:00:00Z", "03:00:00", "ULAST", -540],
		["2015-09-25T14:59:59Z", "23:59:59", "ULAST", -540],
		["2015-09-25T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"2016" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["2016-03-25T17:59:59Z", "01:59:59", "ULAT", -480],
		["2016-03-25T18:00:00Z", "03:00:00", "ULAST", -540],
		["2016-09-23T14:59:59Z", "23:59:59", "ULAST", -540],
		["2016-09-23T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"2017" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["2017-03-24T17:59:59Z", "01:59:59", "ULAT", -480],
		["2017-03-24T18:00:00Z", "03:00:00", "ULAST", -540],
		["2017-09-29T14:59:59Z", "23:59:59", "ULAST", -540],
		["2017-09-29T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"2018" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["2018-03-30T17:59:59Z", "01:59:59", "ULAT", -480],
		["2018-03-30T18:00:00Z", "03:00:00", "ULAST", -540],
		["2018-09-28T14:59:59Z", "23:59:59", "ULAST", -540],
		["2018-09-28T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"2019" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["2019-03-29T17:59:59Z", "01:59:59", "ULAT", -480],
		["2019-03-29T18:00:00Z", "03:00:00", "ULAST", -540],
		["2019-09-27T14:59:59Z", "23:59:59", "ULAST", -540],
		["2019-09-27T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"2020" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["2020-03-27T17:59:59Z", "01:59:59", "ULAT", -480],
		["2020-03-27T18:00:00Z", "03:00:00", "ULAST", -540],
		["2020-09-25T14:59:59Z", "23:59:59", "ULAST", -540],
		["2020-09-25T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"2021" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["2021-03-26T17:59:59Z", "01:59:59", "ULAT", -480],
		["2021-03-26T18:00:00Z", "03:00:00", "ULAST", -540],
		["2021-09-24T14:59:59Z", "23:59:59", "ULAST", -540],
		["2021-09-24T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"2022" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["2022-03-25T17:59:59Z", "01:59:59", "ULAT", -480],
		["2022-03-25T18:00:00Z", "03:00:00", "ULAST", -540],
		["2022-09-23T14:59:59Z", "23:59:59", "ULAST", -540],
		["2022-09-23T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"2023" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["2023-03-24T17:59:59Z", "01:59:59", "ULAT", -480],
		["2023-03-24T18:00:00Z", "03:00:00", "ULAST", -540],
		["2023-09-29T14:59:59Z", "23:59:59", "ULAST", -540],
		["2023-09-29T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"2024" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["2024-03-29T17:59:59Z", "01:59:59", "ULAT", -480],
		["2024-03-29T18:00:00Z", "03:00:00", "ULAST", -540],
		["2024-09-27T14:59:59Z", "23:59:59", "ULAST", -540],
		["2024-09-27T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"2025" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["2025-03-28T17:59:59Z", "01:59:59", "ULAT", -480],
		["2025-03-28T18:00:00Z", "03:00:00", "ULAST", -540],
		["2025-09-26T14:59:59Z", "23:59:59", "ULAST", -540],
		["2025-09-26T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"2026" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["2026-03-27T17:59:59Z", "01:59:59", "ULAT", -480],
		["2026-03-27T18:00:00Z", "03:00:00", "ULAST", -540],
		["2026-09-25T14:59:59Z", "23:59:59", "ULAST", -540],
		["2026-09-25T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"2027" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["2027-03-26T17:59:59Z", "01:59:59", "ULAT", -480],
		["2027-03-26T18:00:00Z", "03:00:00", "ULAST", -540],
		["2027-09-24T14:59:59Z", "23:59:59", "ULAST", -540],
		["2027-09-24T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"2028" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["2028-03-24T17:59:59Z", "01:59:59", "ULAT", -480],
		["2028-03-24T18:00:00Z", "03:00:00", "ULAST", -540],
		["2028-09-29T14:59:59Z", "23:59:59", "ULAST", -540],
		["2028-09-29T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"2029" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["2029-03-30T17:59:59Z", "01:59:59", "ULAT", -480],
		["2029-03-30T18:00:00Z", "03:00:00", "ULAST", -540],
		["2029-09-28T14:59:59Z", "23:59:59", "ULAST", -540],
		["2029-09-28T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"2030" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["2030-03-29T17:59:59Z", "01:59:59", "ULAT", -480],
		["2030-03-29T18:00:00Z", "03:00:00", "ULAST", -540],
		["2030-09-27T14:59:59Z", "23:59:59", "ULAST", -540],
		["2030-09-27T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"2031" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["2031-03-28T17:59:59Z", "01:59:59", "ULAT", -480],
		["2031-03-28T18:00:00Z", "03:00:00", "ULAST", -540],
		["2031-09-26T14:59:59Z", "23:59:59", "ULAST", -540],
		["2031-09-26T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"2032" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["2032-03-26T17:59:59Z", "01:59:59", "ULAT", -480],
		["2032-03-26T18:00:00Z", "03:00:00", "ULAST", -540],
		["2032-09-24T14:59:59Z", "23:59:59", "ULAST", -540],
		["2032-09-24T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"2033" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["2033-03-25T17:59:59Z", "01:59:59", "ULAT", -480],
		["2033-03-25T18:00:00Z", "03:00:00", "ULAST", -540],
		["2033-09-23T14:59:59Z", "23:59:59", "ULAST", -540],
		["2033-09-23T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"2034" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["2034-03-24T17:59:59Z", "01:59:59", "ULAT", -480],
		["2034-03-24T18:00:00Z", "03:00:00", "ULAST", -540],
		["2034-09-29T14:59:59Z", "23:59:59", "ULAST", -540],
		["2034-09-29T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"2035" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["2035-03-30T17:59:59Z", "01:59:59", "ULAT", -480],
		["2035-03-30T18:00:00Z", "03:00:00", "ULAST", -540],
		["2035-09-28T14:59:59Z", "23:59:59", "ULAST", -540],
		["2035-09-28T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"2036" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["2036-03-28T17:59:59Z", "01:59:59", "ULAT", -480],
		["2036-03-28T18:00:00Z", "03:00:00", "ULAST", -540],
		["2036-09-26T14:59:59Z", "23:59:59", "ULAST", -540],
		["2036-09-26T15:00:00Z", "23:00:00", "ULAT", -480]
	]),

	"2037" : helpers.makeTestYear("Asia/Ulaanbaatar", [
		["2037-03-27T17:59:59Z", "01:59:59", "ULAT", -480],
		["2037-03-27T18:00:00Z", "03:00:00", "ULAST", -540],
		["2037-09-25T14:59:59Z", "23:59:59", "ULAST", -540],
		["2037-09-25T15:00:00Z", "23:00:00", "ULAT", -480]
	])
};