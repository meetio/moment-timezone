"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Moncton"] = {
	"1902" : helpers.makeTestYear("America/Moncton", [
		["1902-06-15T04:59:59Z", "23:59:59", "EST", 300],
		["1902-06-15T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1918" : helpers.makeTestYear("America/Moncton", [
		["1918-04-14T05:59:59Z", "01:59:59", "AST", 240],
		["1918-04-14T06:00:00Z", "03:00:00", "ADT", 180],
		["1918-10-27T04:59:59Z", "01:59:59", "ADT", 180],
		["1918-10-27T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1933" : helpers.makeTestYear("America/Moncton", [
		["1933-06-11T04:59:59Z", "00:59:59", "AST", 240],
		["1933-06-11T05:00:00Z", "02:00:00", "ADT", 180],
		["1933-09-10T03:59:59Z", "00:59:59", "ADT", 180],
		["1933-09-10T04:00:00Z", "00:00:00", "AST", 240]
	]),

	"1934" : helpers.makeTestYear("America/Moncton", [
		["1934-06-10T04:59:59Z", "00:59:59", "AST", 240],
		["1934-06-10T05:00:00Z", "02:00:00", "ADT", 180],
		["1934-09-09T03:59:59Z", "00:59:59", "ADT", 180],
		["1934-09-09T04:00:00Z", "00:00:00", "AST", 240]
	]),

	"1935" : helpers.makeTestYear("America/Moncton", [
		["1935-06-09T04:59:59Z", "00:59:59", "AST", 240],
		["1935-06-09T05:00:00Z", "02:00:00", "ADT", 180],
		["1935-09-08T03:59:59Z", "00:59:59", "ADT", 180],
		["1935-09-08T04:00:00Z", "00:00:00", "AST", 240]
	]),

	"1936" : helpers.makeTestYear("America/Moncton", [
		["1936-06-07T04:59:59Z", "00:59:59", "AST", 240],
		["1936-06-07T05:00:00Z", "02:00:00", "ADT", 180],
		["1936-09-06T03:59:59Z", "00:59:59", "ADT", 180],
		["1936-09-06T04:00:00Z", "00:00:00", "AST", 240]
	]),

	"1937" : helpers.makeTestYear("America/Moncton", [
		["1937-06-06T04:59:59Z", "00:59:59", "AST", 240],
		["1937-06-06T05:00:00Z", "02:00:00", "ADT", 180],
		["1937-09-05T03:59:59Z", "00:59:59", "ADT", 180],
		["1937-09-05T04:00:00Z", "00:00:00", "AST", 240]
	]),

	"1938" : helpers.makeTestYear("America/Moncton", [
		["1938-06-05T04:59:59Z", "00:59:59", "AST", 240],
		["1938-06-05T05:00:00Z", "02:00:00", "ADT", 180],
		["1938-09-04T03:59:59Z", "00:59:59", "ADT", 180],
		["1938-09-04T04:00:00Z", "00:00:00", "AST", 240]
	]),

	"1939" : helpers.makeTestYear("America/Moncton", [
		["1939-05-27T04:59:59Z", "00:59:59", "AST", 240],
		["1939-05-27T05:00:00Z", "02:00:00", "ADT", 180],
		["1939-09-23T03:59:59Z", "00:59:59", "ADT", 180],
		["1939-09-23T04:00:00Z", "00:00:00", "AST", 240]
	]),

	"1940" : helpers.makeTestYear("America/Moncton", [
		["1940-05-19T04:59:59Z", "00:59:59", "AST", 240],
		["1940-05-19T05:00:00Z", "02:00:00", "ADT", 180],
		["1940-09-21T03:59:59Z", "00:59:59", "ADT", 180],
		["1940-09-21T04:00:00Z", "00:00:00", "AST", 240]
	]),

	"1941" : helpers.makeTestYear("America/Moncton", [
		["1941-05-04T04:59:59Z", "00:59:59", "AST", 240],
		["1941-05-04T05:00:00Z", "02:00:00", "ADT", 180],
		["1941-09-27T03:59:59Z", "00:59:59", "ADT", 180],
		["1941-09-27T04:00:00Z", "00:00:00", "AST", 240]
	]),

	"1942" : helpers.makeTestYear("America/Moncton", [
		["1942-02-09T05:59:59Z", "01:59:59", "AST", 240],
		["1942-02-09T06:00:00Z", "03:00:00", "AWT", 180]
	]),

	"1945" : helpers.makeTestYear("America/Moncton", [
		["1945-08-14T22:59:59Z", "19:59:59", "AWT", 180],
		["1945-08-14T23:00:00Z", "20:00:00", "APT", 180],
		["1945-09-30T04:59:59Z", "01:59:59", "APT", 180],
		["1945-09-30T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1946" : helpers.makeTestYear("America/Moncton", [
		["1946-04-28T05:59:59Z", "01:59:59", "AST", 240],
		["1946-04-28T06:00:00Z", "03:00:00", "ADT", 180],
		["1946-09-29T04:59:59Z", "01:59:59", "ADT", 180],
		["1946-09-29T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1947" : helpers.makeTestYear("America/Moncton", [
		["1947-04-27T05:59:59Z", "01:59:59", "AST", 240],
		["1947-04-27T06:00:00Z", "03:00:00", "ADT", 180],
		["1947-09-28T04:59:59Z", "01:59:59", "ADT", 180],
		["1947-09-28T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1948" : helpers.makeTestYear("America/Moncton", [
		["1948-04-25T05:59:59Z", "01:59:59", "AST", 240],
		["1948-04-25T06:00:00Z", "03:00:00", "ADT", 180],
		["1948-09-26T04:59:59Z", "01:59:59", "ADT", 180],
		["1948-09-26T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1949" : helpers.makeTestYear("America/Moncton", [
		["1949-04-24T05:59:59Z", "01:59:59", "AST", 240],
		["1949-04-24T06:00:00Z", "03:00:00", "ADT", 180],
		["1949-09-25T04:59:59Z", "01:59:59", "ADT", 180],
		["1949-09-25T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1950" : helpers.makeTestYear("America/Moncton", [
		["1950-04-30T05:59:59Z", "01:59:59", "AST", 240],
		["1950-04-30T06:00:00Z", "03:00:00", "ADT", 180],
		["1950-09-24T04:59:59Z", "01:59:59", "ADT", 180],
		["1950-09-24T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1951" : helpers.makeTestYear("America/Moncton", [
		["1951-04-29T05:59:59Z", "01:59:59", "AST", 240],
		["1951-04-29T06:00:00Z", "03:00:00", "ADT", 180],
		["1951-09-30T04:59:59Z", "01:59:59", "ADT", 180],
		["1951-09-30T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1952" : helpers.makeTestYear("America/Moncton", [
		["1952-04-27T05:59:59Z", "01:59:59", "AST", 240],
		["1952-04-27T06:00:00Z", "03:00:00", "ADT", 180],
		["1952-09-28T04:59:59Z", "01:59:59", "ADT", 180],
		["1952-09-28T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1953" : helpers.makeTestYear("America/Moncton", [
		["1953-04-26T05:59:59Z", "01:59:59", "AST", 240],
		["1953-04-26T06:00:00Z", "03:00:00", "ADT", 180],
		["1953-09-27T04:59:59Z", "01:59:59", "ADT", 180],
		["1953-09-27T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1954" : helpers.makeTestYear("America/Moncton", [
		["1954-04-25T05:59:59Z", "01:59:59", "AST", 240],
		["1954-04-25T06:00:00Z", "03:00:00", "ADT", 180],
		["1954-09-26T04:59:59Z", "01:59:59", "ADT", 180],
		["1954-09-26T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1955" : helpers.makeTestYear("America/Moncton", [
		["1955-04-24T05:59:59Z", "01:59:59", "AST", 240],
		["1955-04-24T06:00:00Z", "03:00:00", "ADT", 180],
		["1955-09-25T04:59:59Z", "01:59:59", "ADT", 180],
		["1955-09-25T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1956" : helpers.makeTestYear("America/Moncton", [
		["1956-04-29T05:59:59Z", "01:59:59", "AST", 240],
		["1956-04-29T06:00:00Z", "03:00:00", "ADT", 180],
		["1956-09-30T04:59:59Z", "01:59:59", "ADT", 180],
		["1956-09-30T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1957" : helpers.makeTestYear("America/Moncton", [
		["1957-04-28T05:59:59Z", "01:59:59", "AST", 240],
		["1957-04-28T06:00:00Z", "03:00:00", "ADT", 180],
		["1957-10-27T04:59:59Z", "01:59:59", "ADT", 180],
		["1957-10-27T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1958" : helpers.makeTestYear("America/Moncton", [
		["1958-04-27T05:59:59Z", "01:59:59", "AST", 240],
		["1958-04-27T06:00:00Z", "03:00:00", "ADT", 180],
		["1958-10-26T04:59:59Z", "01:59:59", "ADT", 180],
		["1958-10-26T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1959" : helpers.makeTestYear("America/Moncton", [
		["1959-04-26T05:59:59Z", "01:59:59", "AST", 240],
		["1959-04-26T06:00:00Z", "03:00:00", "ADT", 180],
		["1959-10-25T04:59:59Z", "01:59:59", "ADT", 180],
		["1959-10-25T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1960" : helpers.makeTestYear("America/Moncton", [
		["1960-04-24T05:59:59Z", "01:59:59", "AST", 240],
		["1960-04-24T06:00:00Z", "03:00:00", "ADT", 180],
		["1960-10-30T04:59:59Z", "01:59:59", "ADT", 180],
		["1960-10-30T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1961" : helpers.makeTestYear("America/Moncton", [
		["1961-04-30T05:59:59Z", "01:59:59", "AST", 240],
		["1961-04-30T06:00:00Z", "03:00:00", "ADT", 180],
		["1961-10-29T04:59:59Z", "01:59:59", "ADT", 180],
		["1961-10-29T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1962" : helpers.makeTestYear("America/Moncton", [
		["1962-04-29T05:59:59Z", "01:59:59", "AST", 240],
		["1962-04-29T06:00:00Z", "03:00:00", "ADT", 180],
		["1962-10-28T04:59:59Z", "01:59:59", "ADT", 180],
		["1962-10-28T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1963" : helpers.makeTestYear("America/Moncton", [
		["1963-04-28T05:59:59Z", "01:59:59", "AST", 240],
		["1963-04-28T06:00:00Z", "03:00:00", "ADT", 180],
		["1963-10-27T04:59:59Z", "01:59:59", "ADT", 180],
		["1963-10-27T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1964" : helpers.makeTestYear("America/Moncton", [
		["1964-04-26T05:59:59Z", "01:59:59", "AST", 240],
		["1964-04-26T06:00:00Z", "03:00:00", "ADT", 180],
		["1964-10-25T04:59:59Z", "01:59:59", "ADT", 180],
		["1964-10-25T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1965" : helpers.makeTestYear("America/Moncton", [
		["1965-04-25T05:59:59Z", "01:59:59", "AST", 240],
		["1965-04-25T06:00:00Z", "03:00:00", "ADT", 180],
		["1965-10-31T04:59:59Z", "01:59:59", "ADT", 180],
		["1965-10-31T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1966" : helpers.makeTestYear("America/Moncton", [
		["1966-04-24T05:59:59Z", "01:59:59", "AST", 240],
		["1966-04-24T06:00:00Z", "03:00:00", "ADT", 180],
		["1966-10-30T04:59:59Z", "01:59:59", "ADT", 180],
		["1966-10-30T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1967" : helpers.makeTestYear("America/Moncton", [
		["1967-04-30T05:59:59Z", "01:59:59", "AST", 240],
		["1967-04-30T06:00:00Z", "03:00:00", "ADT", 180],
		["1967-10-29T04:59:59Z", "01:59:59", "ADT", 180],
		["1967-10-29T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1968" : helpers.makeTestYear("America/Moncton", [
		["1968-04-28T05:59:59Z", "01:59:59", "AST", 240],
		["1968-04-28T06:00:00Z", "03:00:00", "ADT", 180],
		["1968-10-27T04:59:59Z", "01:59:59", "ADT", 180],
		["1968-10-27T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1969" : helpers.makeTestYear("America/Moncton", [
		["1969-04-27T05:59:59Z", "01:59:59", "AST", 240],
		["1969-04-27T06:00:00Z", "03:00:00", "ADT", 180],
		["1969-10-26T04:59:59Z", "01:59:59", "ADT", 180],
		["1969-10-26T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1970" : helpers.makeTestYear("America/Moncton", [
		["1970-04-26T05:59:59Z", "01:59:59", "AST", 240],
		["1970-04-26T06:00:00Z", "03:00:00", "ADT", 180],
		["1970-10-25T04:59:59Z", "01:59:59", "ADT", 180],
		["1970-10-25T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1971" : helpers.makeTestYear("America/Moncton", [
		["1971-04-25T05:59:59Z", "01:59:59", "AST", 240],
		["1971-04-25T06:00:00Z", "03:00:00", "ADT", 180],
		["1971-10-31T04:59:59Z", "01:59:59", "ADT", 180],
		["1971-10-31T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1972" : helpers.makeTestYear("America/Moncton", [
		["1972-04-30T05:59:59Z", "01:59:59", "AST", 240],
		["1972-04-30T06:00:00Z", "03:00:00", "ADT", 180],
		["1972-10-29T04:59:59Z", "01:59:59", "ADT", 180],
		["1972-10-29T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1974" : helpers.makeTestYear("America/Moncton", [
		["1974-04-28T05:59:59Z", "01:59:59", "AST", 240],
		["1974-04-28T06:00:00Z", "03:00:00", "ADT", 180],
		["1974-10-27T04:59:59Z", "01:59:59", "ADT", 180],
		["1974-10-27T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1975" : helpers.makeTestYear("America/Moncton", [
		["1975-04-27T05:59:59Z", "01:59:59", "AST", 240],
		["1975-04-27T06:00:00Z", "03:00:00", "ADT", 180],
		["1975-10-26T04:59:59Z", "01:59:59", "ADT", 180],
		["1975-10-26T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1976" : helpers.makeTestYear("America/Moncton", [
		["1976-04-25T05:59:59Z", "01:59:59", "AST", 240],
		["1976-04-25T06:00:00Z", "03:00:00", "ADT", 180],
		["1976-10-31T04:59:59Z", "01:59:59", "ADT", 180],
		["1976-10-31T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1977" : helpers.makeTestYear("America/Moncton", [
		["1977-04-24T05:59:59Z", "01:59:59", "AST", 240],
		["1977-04-24T06:00:00Z", "03:00:00", "ADT", 180],
		["1977-10-30T04:59:59Z", "01:59:59", "ADT", 180],
		["1977-10-30T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1978" : helpers.makeTestYear("America/Moncton", [
		["1978-04-30T05:59:59Z", "01:59:59", "AST", 240],
		["1978-04-30T06:00:00Z", "03:00:00", "ADT", 180],
		["1978-10-29T04:59:59Z", "01:59:59", "ADT", 180],
		["1978-10-29T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1979" : helpers.makeTestYear("America/Moncton", [
		["1979-04-29T05:59:59Z", "01:59:59", "AST", 240],
		["1979-04-29T06:00:00Z", "03:00:00", "ADT", 180],
		["1979-10-28T04:59:59Z", "01:59:59", "ADT", 180],
		["1979-10-28T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1980" : helpers.makeTestYear("America/Moncton", [
		["1980-04-27T05:59:59Z", "01:59:59", "AST", 240],
		["1980-04-27T06:00:00Z", "03:00:00", "ADT", 180],
		["1980-10-26T04:59:59Z", "01:59:59", "ADT", 180],
		["1980-10-26T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1981" : helpers.makeTestYear("America/Moncton", [
		["1981-04-26T05:59:59Z", "01:59:59", "AST", 240],
		["1981-04-26T06:00:00Z", "03:00:00", "ADT", 180],
		["1981-10-25T04:59:59Z", "01:59:59", "ADT", 180],
		["1981-10-25T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1982" : helpers.makeTestYear("America/Moncton", [
		["1982-04-25T05:59:59Z", "01:59:59", "AST", 240],
		["1982-04-25T06:00:00Z", "03:00:00", "ADT", 180],
		["1982-10-31T04:59:59Z", "01:59:59", "ADT", 180],
		["1982-10-31T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1983" : helpers.makeTestYear("America/Moncton", [
		["1983-04-24T05:59:59Z", "01:59:59", "AST", 240],
		["1983-04-24T06:00:00Z", "03:00:00", "ADT", 180],
		["1983-10-30T04:59:59Z", "01:59:59", "ADT", 180],
		["1983-10-30T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1984" : helpers.makeTestYear("America/Moncton", [
		["1984-04-29T05:59:59Z", "01:59:59", "AST", 240],
		["1984-04-29T06:00:00Z", "03:00:00", "ADT", 180],
		["1984-10-28T04:59:59Z", "01:59:59", "ADT", 180],
		["1984-10-28T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1985" : helpers.makeTestYear("America/Moncton", [
		["1985-04-28T05:59:59Z", "01:59:59", "AST", 240],
		["1985-04-28T06:00:00Z", "03:00:00", "ADT", 180],
		["1985-10-27T04:59:59Z", "01:59:59", "ADT", 180],
		["1985-10-27T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1986" : helpers.makeTestYear("America/Moncton", [
		["1986-04-27T05:59:59Z", "01:59:59", "AST", 240],
		["1986-04-27T06:00:00Z", "03:00:00", "ADT", 180],
		["1986-10-26T04:59:59Z", "01:59:59", "ADT", 180],
		["1986-10-26T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1987" : helpers.makeTestYear("America/Moncton", [
		["1987-04-05T05:59:59Z", "01:59:59", "AST", 240],
		["1987-04-05T06:00:00Z", "03:00:00", "ADT", 180],
		["1987-10-25T04:59:59Z", "01:59:59", "ADT", 180],
		["1987-10-25T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1988" : helpers.makeTestYear("America/Moncton", [
		["1988-04-03T05:59:59Z", "01:59:59", "AST", 240],
		["1988-04-03T06:00:00Z", "03:00:00", "ADT", 180],
		["1988-10-30T04:59:59Z", "01:59:59", "ADT", 180],
		["1988-10-30T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1989" : helpers.makeTestYear("America/Moncton", [
		["1989-04-02T05:59:59Z", "01:59:59", "AST", 240],
		["1989-04-02T06:00:00Z", "03:00:00", "ADT", 180],
		["1989-10-29T04:59:59Z", "01:59:59", "ADT", 180],
		["1989-10-29T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1990" : helpers.makeTestYear("America/Moncton", [
		["1990-04-01T05:59:59Z", "01:59:59", "AST", 240],
		["1990-04-01T06:00:00Z", "03:00:00", "ADT", 180],
		["1990-10-28T04:59:59Z", "01:59:59", "ADT", 180],
		["1990-10-28T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1991" : helpers.makeTestYear("America/Moncton", [
		["1991-04-07T05:59:59Z", "01:59:59", "AST", 240],
		["1991-04-07T06:00:00Z", "03:00:00", "ADT", 180],
		["1991-10-27T04:59:59Z", "01:59:59", "ADT", 180],
		["1991-10-27T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1992" : helpers.makeTestYear("America/Moncton", [
		["1992-04-05T05:59:59Z", "01:59:59", "AST", 240],
		["1992-04-05T06:00:00Z", "03:00:00", "ADT", 180],
		["1992-10-25T04:59:59Z", "01:59:59", "ADT", 180],
		["1992-10-25T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"1993" : helpers.makeTestYear("America/Moncton", [
		["1993-04-04T04:00:59Z", "00:00:59", "AST", 240],
		["1993-04-04T04:01:00Z", "01:01:00", "ADT", 180],
		["1993-10-31T03:00:59Z", "00:00:59", "ADT", 180],
		["1993-10-31T03:01:00Z", "23:01:00", "AST", 240]
	]),

	"1994" : helpers.makeTestYear("America/Moncton", [
		["1994-04-03T04:00:59Z", "00:00:59", "AST", 240],
		["1994-04-03T04:01:00Z", "01:01:00", "ADT", 180],
		["1994-10-30T03:00:59Z", "00:00:59", "ADT", 180],
		["1994-10-30T03:01:00Z", "23:01:00", "AST", 240]
	]),

	"1995" : helpers.makeTestYear("America/Moncton", [
		["1995-04-02T04:00:59Z", "00:00:59", "AST", 240],
		["1995-04-02T04:01:00Z", "01:01:00", "ADT", 180],
		["1995-10-29T03:00:59Z", "00:00:59", "ADT", 180],
		["1995-10-29T03:01:00Z", "23:01:00", "AST", 240]
	]),

	"1996" : helpers.makeTestYear("America/Moncton", [
		["1996-04-07T04:00:59Z", "00:00:59", "AST", 240],
		["1996-04-07T04:01:00Z", "01:01:00", "ADT", 180],
		["1996-10-27T03:00:59Z", "00:00:59", "ADT", 180],
		["1996-10-27T03:01:00Z", "23:01:00", "AST", 240]
	]),

	"1997" : helpers.makeTestYear("America/Moncton", [
		["1997-04-06T04:00:59Z", "00:00:59", "AST", 240],
		["1997-04-06T04:01:00Z", "01:01:00", "ADT", 180],
		["1997-10-26T03:00:59Z", "00:00:59", "ADT", 180],
		["1997-10-26T03:01:00Z", "23:01:00", "AST", 240]
	]),

	"1998" : helpers.makeTestYear("America/Moncton", [
		["1998-04-05T04:00:59Z", "00:00:59", "AST", 240],
		["1998-04-05T04:01:00Z", "01:01:00", "ADT", 180],
		["1998-10-25T03:00:59Z", "00:00:59", "ADT", 180],
		["1998-10-25T03:01:00Z", "23:01:00", "AST", 240]
	]),

	"1999" : helpers.makeTestYear("America/Moncton", [
		["1999-04-04T04:00:59Z", "00:00:59", "AST", 240],
		["1999-04-04T04:01:00Z", "01:01:00", "ADT", 180],
		["1999-10-31T03:00:59Z", "00:00:59", "ADT", 180],
		["1999-10-31T03:01:00Z", "23:01:00", "AST", 240]
	]),

	"2000" : helpers.makeTestYear("America/Moncton", [
		["2000-04-02T04:00:59Z", "00:00:59", "AST", 240],
		["2000-04-02T04:01:00Z", "01:01:00", "ADT", 180],
		["2000-10-29T03:00:59Z", "00:00:59", "ADT", 180],
		["2000-10-29T03:01:00Z", "23:01:00", "AST", 240]
	]),

	"2001" : helpers.makeTestYear("America/Moncton", [
		["2001-04-01T04:00:59Z", "00:00:59", "AST", 240],
		["2001-04-01T04:01:00Z", "01:01:00", "ADT", 180],
		["2001-10-28T03:00:59Z", "00:00:59", "ADT", 180],
		["2001-10-28T03:01:00Z", "23:01:00", "AST", 240]
	]),

	"2002" : helpers.makeTestYear("America/Moncton", [
		["2002-04-07T04:00:59Z", "00:00:59", "AST", 240],
		["2002-04-07T04:01:00Z", "01:01:00", "ADT", 180],
		["2002-10-27T03:00:59Z", "00:00:59", "ADT", 180],
		["2002-10-27T03:01:00Z", "23:01:00", "AST", 240]
	]),

	"2003" : helpers.makeTestYear("America/Moncton", [
		["2003-04-06T04:00:59Z", "00:00:59", "AST", 240],
		["2003-04-06T04:01:00Z", "01:01:00", "ADT", 180],
		["2003-10-26T03:00:59Z", "00:00:59", "ADT", 180],
		["2003-10-26T03:01:00Z", "23:01:00", "AST", 240]
	]),

	"2004" : helpers.makeTestYear("America/Moncton", [
		["2004-04-04T04:00:59Z", "00:00:59", "AST", 240],
		["2004-04-04T04:01:00Z", "01:01:00", "ADT", 180],
		["2004-10-31T03:00:59Z", "00:00:59", "ADT", 180],
		["2004-10-31T03:01:00Z", "23:01:00", "AST", 240]
	]),

	"2005" : helpers.makeTestYear("America/Moncton", [
		["2005-04-03T04:00:59Z", "00:00:59", "AST", 240],
		["2005-04-03T04:01:00Z", "01:01:00", "ADT", 180],
		["2005-10-30T03:00:59Z", "00:00:59", "ADT", 180],
		["2005-10-30T03:01:00Z", "23:01:00", "AST", 240]
	]),

	"2006" : helpers.makeTestYear("America/Moncton", [
		["2006-04-02T04:00:59Z", "00:00:59", "AST", 240],
		["2006-04-02T04:01:00Z", "01:01:00", "ADT", 180],
		["2006-10-29T03:00:59Z", "00:00:59", "ADT", 180],
		["2006-10-29T03:01:00Z", "23:01:00", "AST", 240]
	]),

	"2007" : helpers.makeTestYear("America/Moncton", [
		["2007-03-11T05:59:59Z", "01:59:59", "AST", 240],
		["2007-03-11T06:00:00Z", "03:00:00", "ADT", 180],
		["2007-11-04T04:59:59Z", "01:59:59", "ADT", 180],
		["2007-11-04T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"2008" : helpers.makeTestYear("America/Moncton", [
		["2008-03-09T05:59:59Z", "01:59:59", "AST", 240],
		["2008-03-09T06:00:00Z", "03:00:00", "ADT", 180],
		["2008-11-02T04:59:59Z", "01:59:59", "ADT", 180],
		["2008-11-02T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"2009" : helpers.makeTestYear("America/Moncton", [
		["2009-03-08T05:59:59Z", "01:59:59", "AST", 240],
		["2009-03-08T06:00:00Z", "03:00:00", "ADT", 180],
		["2009-11-01T04:59:59Z", "01:59:59", "ADT", 180],
		["2009-11-01T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"2010" : helpers.makeTestYear("America/Moncton", [
		["2010-03-14T05:59:59Z", "01:59:59", "AST", 240],
		["2010-03-14T06:00:00Z", "03:00:00", "ADT", 180],
		["2010-11-07T04:59:59Z", "01:59:59", "ADT", 180],
		["2010-11-07T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"2011" : helpers.makeTestYear("America/Moncton", [
		["2011-03-13T05:59:59Z", "01:59:59", "AST", 240],
		["2011-03-13T06:00:00Z", "03:00:00", "ADT", 180],
		["2011-11-06T04:59:59Z", "01:59:59", "ADT", 180],
		["2011-11-06T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"2012" : helpers.makeTestYear("America/Moncton", [
		["2012-03-11T05:59:59Z", "01:59:59", "AST", 240],
		["2012-03-11T06:00:00Z", "03:00:00", "ADT", 180],
		["2012-11-04T04:59:59Z", "01:59:59", "ADT", 180],
		["2012-11-04T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"2013" : helpers.makeTestYear("America/Moncton", [
		["2013-03-10T05:59:59Z", "01:59:59", "AST", 240],
		["2013-03-10T06:00:00Z", "03:00:00", "ADT", 180],
		["2013-11-03T04:59:59Z", "01:59:59", "ADT", 180],
		["2013-11-03T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"2014" : helpers.makeTestYear("America/Moncton", [
		["2014-03-09T05:59:59Z", "01:59:59", "AST", 240],
		["2014-03-09T06:00:00Z", "03:00:00", "ADT", 180],
		["2014-11-02T04:59:59Z", "01:59:59", "ADT", 180],
		["2014-11-02T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"2015" : helpers.makeTestYear("America/Moncton", [
		["2015-03-08T05:59:59Z", "01:59:59", "AST", 240],
		["2015-03-08T06:00:00Z", "03:00:00", "ADT", 180],
		["2015-11-01T04:59:59Z", "01:59:59", "ADT", 180],
		["2015-11-01T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"2016" : helpers.makeTestYear("America/Moncton", [
		["2016-03-13T05:59:59Z", "01:59:59", "AST", 240],
		["2016-03-13T06:00:00Z", "03:00:00", "ADT", 180],
		["2016-11-06T04:59:59Z", "01:59:59", "ADT", 180],
		["2016-11-06T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"2017" : helpers.makeTestYear("America/Moncton", [
		["2017-03-12T05:59:59Z", "01:59:59", "AST", 240],
		["2017-03-12T06:00:00Z", "03:00:00", "ADT", 180],
		["2017-11-05T04:59:59Z", "01:59:59", "ADT", 180],
		["2017-11-05T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"2018" : helpers.makeTestYear("America/Moncton", [
		["2018-03-11T05:59:59Z", "01:59:59", "AST", 240],
		["2018-03-11T06:00:00Z", "03:00:00", "ADT", 180],
		["2018-11-04T04:59:59Z", "01:59:59", "ADT", 180],
		["2018-11-04T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"2019" : helpers.makeTestYear("America/Moncton", [
		["2019-03-10T05:59:59Z", "01:59:59", "AST", 240],
		["2019-03-10T06:00:00Z", "03:00:00", "ADT", 180],
		["2019-11-03T04:59:59Z", "01:59:59", "ADT", 180],
		["2019-11-03T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"2020" : helpers.makeTestYear("America/Moncton", [
		["2020-03-08T05:59:59Z", "01:59:59", "AST", 240],
		["2020-03-08T06:00:00Z", "03:00:00", "ADT", 180],
		["2020-11-01T04:59:59Z", "01:59:59", "ADT", 180],
		["2020-11-01T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"2021" : helpers.makeTestYear("America/Moncton", [
		["2021-03-14T05:59:59Z", "01:59:59", "AST", 240],
		["2021-03-14T06:00:00Z", "03:00:00", "ADT", 180],
		["2021-11-07T04:59:59Z", "01:59:59", "ADT", 180],
		["2021-11-07T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"2022" : helpers.makeTestYear("America/Moncton", [
		["2022-03-13T05:59:59Z", "01:59:59", "AST", 240],
		["2022-03-13T06:00:00Z", "03:00:00", "ADT", 180],
		["2022-11-06T04:59:59Z", "01:59:59", "ADT", 180],
		["2022-11-06T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"2023" : helpers.makeTestYear("America/Moncton", [
		["2023-03-12T05:59:59Z", "01:59:59", "AST", 240],
		["2023-03-12T06:00:00Z", "03:00:00", "ADT", 180],
		["2023-11-05T04:59:59Z", "01:59:59", "ADT", 180],
		["2023-11-05T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"2024" : helpers.makeTestYear("America/Moncton", [
		["2024-03-10T05:59:59Z", "01:59:59", "AST", 240],
		["2024-03-10T06:00:00Z", "03:00:00", "ADT", 180],
		["2024-11-03T04:59:59Z", "01:59:59", "ADT", 180],
		["2024-11-03T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"2025" : helpers.makeTestYear("America/Moncton", [
		["2025-03-09T05:59:59Z", "01:59:59", "AST", 240],
		["2025-03-09T06:00:00Z", "03:00:00", "ADT", 180],
		["2025-11-02T04:59:59Z", "01:59:59", "ADT", 180],
		["2025-11-02T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"2026" : helpers.makeTestYear("America/Moncton", [
		["2026-03-08T05:59:59Z", "01:59:59", "AST", 240],
		["2026-03-08T06:00:00Z", "03:00:00", "ADT", 180],
		["2026-11-01T04:59:59Z", "01:59:59", "ADT", 180],
		["2026-11-01T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"2027" : helpers.makeTestYear("America/Moncton", [
		["2027-03-14T05:59:59Z", "01:59:59", "AST", 240],
		["2027-03-14T06:00:00Z", "03:00:00", "ADT", 180],
		["2027-11-07T04:59:59Z", "01:59:59", "ADT", 180],
		["2027-11-07T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"2028" : helpers.makeTestYear("America/Moncton", [
		["2028-03-12T05:59:59Z", "01:59:59", "AST", 240],
		["2028-03-12T06:00:00Z", "03:00:00", "ADT", 180],
		["2028-11-05T04:59:59Z", "01:59:59", "ADT", 180],
		["2028-11-05T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"2029" : helpers.makeTestYear("America/Moncton", [
		["2029-03-11T05:59:59Z", "01:59:59", "AST", 240],
		["2029-03-11T06:00:00Z", "03:00:00", "ADT", 180],
		["2029-11-04T04:59:59Z", "01:59:59", "ADT", 180],
		["2029-11-04T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"2030" : helpers.makeTestYear("America/Moncton", [
		["2030-03-10T05:59:59Z", "01:59:59", "AST", 240],
		["2030-03-10T06:00:00Z", "03:00:00", "ADT", 180],
		["2030-11-03T04:59:59Z", "01:59:59", "ADT", 180],
		["2030-11-03T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"2031" : helpers.makeTestYear("America/Moncton", [
		["2031-03-09T05:59:59Z", "01:59:59", "AST", 240],
		["2031-03-09T06:00:00Z", "03:00:00", "ADT", 180],
		["2031-11-02T04:59:59Z", "01:59:59", "ADT", 180],
		["2031-11-02T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"2032" : helpers.makeTestYear("America/Moncton", [
		["2032-03-14T05:59:59Z", "01:59:59", "AST", 240],
		["2032-03-14T06:00:00Z", "03:00:00", "ADT", 180],
		["2032-11-07T04:59:59Z", "01:59:59", "ADT", 180],
		["2032-11-07T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"2033" : helpers.makeTestYear("America/Moncton", [
		["2033-03-13T05:59:59Z", "01:59:59", "AST", 240],
		["2033-03-13T06:00:00Z", "03:00:00", "ADT", 180],
		["2033-11-06T04:59:59Z", "01:59:59", "ADT", 180],
		["2033-11-06T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"2034" : helpers.makeTestYear("America/Moncton", [
		["2034-03-12T05:59:59Z", "01:59:59", "AST", 240],
		["2034-03-12T06:00:00Z", "03:00:00", "ADT", 180],
		["2034-11-05T04:59:59Z", "01:59:59", "ADT", 180],
		["2034-11-05T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"2035" : helpers.makeTestYear("America/Moncton", [
		["2035-03-11T05:59:59Z", "01:59:59", "AST", 240],
		["2035-03-11T06:00:00Z", "03:00:00", "ADT", 180],
		["2035-11-04T04:59:59Z", "01:59:59", "ADT", 180],
		["2035-11-04T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"2036" : helpers.makeTestYear("America/Moncton", [
		["2036-03-09T05:59:59Z", "01:59:59", "AST", 240],
		["2036-03-09T06:00:00Z", "03:00:00", "ADT", 180],
		["2036-11-02T04:59:59Z", "01:59:59", "ADT", 180],
		["2036-11-02T05:00:00Z", "01:00:00", "AST", 240]
	]),

	"2037" : helpers.makeTestYear("America/Moncton", [
		["2037-03-08T05:59:59Z", "01:59:59", "AST", 240],
		["2037-03-08T06:00:00Z", "03:00:00", "ADT", 180],
		["2037-11-01T04:59:59Z", "01:59:59", "ADT", 180],
		["2037-11-01T05:00:00Z", "01:00:00", "AST", 240]
	])
};