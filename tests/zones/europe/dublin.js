"use strict";

var helpers = require("../../helpers/helpers");

exports["Europe/Dublin"] = {
	"1916" : helpers.makeTestYear("Europe/Dublin", [
		["1916-05-21T02:25:20Z", "01:59:59", "DMT", 1521 / 60],
		["1916-05-21T02:25:21Z", "03:00:00", "IST", -2079 / 60],
		["1916-10-01T02:25:20Z", "02:59:59", "IST", -2079 / 60],
		["1916-10-01T02:25:21Z", "02:25:21", "GMT", 0]
	]),

	"1917" : helpers.makeTestYear("Europe/Dublin", [
		["1917-04-08T01:59:59Z", "01:59:59", "GMT", 0],
		["1917-04-08T02:00:00Z", "03:00:00", "BST", -60],
		["1917-09-17T01:59:59Z", "02:59:59", "BST", -60],
		["1917-09-17T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1918" : helpers.makeTestYear("Europe/Dublin", [
		["1918-03-24T01:59:59Z", "01:59:59", "GMT", 0],
		["1918-03-24T02:00:00Z", "03:00:00", "BST", -60],
		["1918-09-30T01:59:59Z", "02:59:59", "BST", -60],
		["1918-09-30T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1919" : helpers.makeTestYear("Europe/Dublin", [
		["1919-03-30T01:59:59Z", "01:59:59", "GMT", 0],
		["1919-03-30T02:00:00Z", "03:00:00", "BST", -60],
		["1919-09-29T01:59:59Z", "02:59:59", "BST", -60],
		["1919-09-29T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1920" : helpers.makeTestYear("Europe/Dublin", [
		["1920-03-28T01:59:59Z", "01:59:59", "GMT", 0],
		["1920-03-28T02:00:00Z", "03:00:00", "BST", -60],
		["1920-10-25T01:59:59Z", "02:59:59", "BST", -60],
		["1920-10-25T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1921" : helpers.makeTestYear("Europe/Dublin", [
		["1921-04-03T01:59:59Z", "01:59:59", "GMT", 0],
		["1921-04-03T02:00:00Z", "03:00:00", "BST", -60],
		["1921-10-03T01:59:59Z", "02:59:59", "BST", -60],
		["1921-10-03T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1922" : helpers.makeTestYear("Europe/Dublin", [
		["1922-03-26T01:59:59Z", "01:59:59", "GMT", 0],
		["1922-03-26T02:00:00Z", "03:00:00", "IST", -60],
		["1922-10-08T01:59:59Z", "02:59:59", "IST", -60],
		["1922-10-08T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1923" : helpers.makeTestYear("Europe/Dublin", [
		["1923-04-22T01:59:59Z", "01:59:59", "GMT", 0],
		["1923-04-22T02:00:00Z", "03:00:00", "IST", -60],
		["1923-09-16T01:59:59Z", "02:59:59", "IST", -60],
		["1923-09-16T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1924" : helpers.makeTestYear("Europe/Dublin", [
		["1924-04-13T01:59:59Z", "01:59:59", "GMT", 0],
		["1924-04-13T02:00:00Z", "03:00:00", "IST", -60],
		["1924-09-21T01:59:59Z", "02:59:59", "IST", -60],
		["1924-09-21T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1925" : helpers.makeTestYear("Europe/Dublin", [
		["1925-04-19T01:59:59Z", "01:59:59", "GMT", 0],
		["1925-04-19T02:00:00Z", "03:00:00", "IST", -60],
		["1925-10-04T01:59:59Z", "02:59:59", "IST", -60],
		["1925-10-04T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1926" : helpers.makeTestYear("Europe/Dublin", [
		["1926-04-18T01:59:59Z", "01:59:59", "GMT", 0],
		["1926-04-18T02:00:00Z", "03:00:00", "IST", -60],
		["1926-10-03T01:59:59Z", "02:59:59", "IST", -60],
		["1926-10-03T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1927" : helpers.makeTestYear("Europe/Dublin", [
		["1927-04-10T01:59:59Z", "01:59:59", "GMT", 0],
		["1927-04-10T02:00:00Z", "03:00:00", "IST", -60],
		["1927-10-02T01:59:59Z", "02:59:59", "IST", -60],
		["1927-10-02T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1928" : helpers.makeTestYear("Europe/Dublin", [
		["1928-04-22T01:59:59Z", "01:59:59", "GMT", 0],
		["1928-04-22T02:00:00Z", "03:00:00", "IST", -60],
		["1928-10-07T01:59:59Z", "02:59:59", "IST", -60],
		["1928-10-07T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1929" : helpers.makeTestYear("Europe/Dublin", [
		["1929-04-21T01:59:59Z", "01:59:59", "GMT", 0],
		["1929-04-21T02:00:00Z", "03:00:00", "IST", -60],
		["1929-10-06T01:59:59Z", "02:59:59", "IST", -60],
		["1929-10-06T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1930" : helpers.makeTestYear("Europe/Dublin", [
		["1930-04-13T01:59:59Z", "01:59:59", "GMT", 0],
		["1930-04-13T02:00:00Z", "03:00:00", "IST", -60],
		["1930-10-05T01:59:59Z", "02:59:59", "IST", -60],
		["1930-10-05T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1931" : helpers.makeTestYear("Europe/Dublin", [
		["1931-04-19T01:59:59Z", "01:59:59", "GMT", 0],
		["1931-04-19T02:00:00Z", "03:00:00", "IST", -60],
		["1931-10-04T01:59:59Z", "02:59:59", "IST", -60],
		["1931-10-04T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1932" : helpers.makeTestYear("Europe/Dublin", [
		["1932-04-17T01:59:59Z", "01:59:59", "GMT", 0],
		["1932-04-17T02:00:00Z", "03:00:00", "IST", -60],
		["1932-10-02T01:59:59Z", "02:59:59", "IST", -60],
		["1932-10-02T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1933" : helpers.makeTestYear("Europe/Dublin", [
		["1933-04-09T01:59:59Z", "01:59:59", "GMT", 0],
		["1933-04-09T02:00:00Z", "03:00:00", "IST", -60],
		["1933-10-08T01:59:59Z", "02:59:59", "IST", -60],
		["1933-10-08T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1934" : helpers.makeTestYear("Europe/Dublin", [
		["1934-04-22T01:59:59Z", "01:59:59", "GMT", 0],
		["1934-04-22T02:00:00Z", "03:00:00", "IST", -60],
		["1934-10-07T01:59:59Z", "02:59:59", "IST", -60],
		["1934-10-07T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1935" : helpers.makeTestYear("Europe/Dublin", [
		["1935-04-14T01:59:59Z", "01:59:59", "GMT", 0],
		["1935-04-14T02:00:00Z", "03:00:00", "IST", -60],
		["1935-10-06T01:59:59Z", "02:59:59", "IST", -60],
		["1935-10-06T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1936" : helpers.makeTestYear("Europe/Dublin", [
		["1936-04-19T01:59:59Z", "01:59:59", "GMT", 0],
		["1936-04-19T02:00:00Z", "03:00:00", "IST", -60],
		["1936-10-04T01:59:59Z", "02:59:59", "IST", -60],
		["1936-10-04T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1937" : helpers.makeTestYear("Europe/Dublin", [
		["1937-04-18T01:59:59Z", "01:59:59", "GMT", 0],
		["1937-04-18T02:00:00Z", "03:00:00", "IST", -60],
		["1937-10-03T01:59:59Z", "02:59:59", "IST", -60],
		["1937-10-03T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1938" : helpers.makeTestYear("Europe/Dublin", [
		["1938-04-10T01:59:59Z", "01:59:59", "GMT", 0],
		["1938-04-10T02:00:00Z", "03:00:00", "IST", -60],
		["1938-10-02T01:59:59Z", "02:59:59", "IST", -60],
		["1938-10-02T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1939" : helpers.makeTestYear("Europe/Dublin", [
		["1939-04-16T01:59:59Z", "01:59:59", "GMT", 0],
		["1939-04-16T02:00:00Z", "03:00:00", "IST", -60],
		["1939-11-19T01:59:59Z", "02:59:59", "IST", -60],
		["1939-11-19T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1940" : helpers.makeTestYear("Europe/Dublin", [
		["1940-02-25T01:59:59Z", "01:59:59", "GMT", 0],
		["1940-02-25T02:00:00Z", "03:00:00", "IST", -60]
	]),

	"1946" : helpers.makeTestYear("Europe/Dublin", [
		["1946-10-06T00:59:59Z", "01:59:59", "IST", -60],
		["1946-10-06T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"1947" : helpers.makeTestYear("Europe/Dublin", [
		["1947-03-16T01:59:59Z", "01:59:59", "GMT", 0],
		["1947-03-16T02:00:00Z", "03:00:00", "IST", -60],
		["1947-11-02T00:59:59Z", "01:59:59", "IST", -60],
		["1947-11-02T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"1948" : helpers.makeTestYear("Europe/Dublin", [
		["1948-04-18T01:59:59Z", "01:59:59", "GMT", 0],
		["1948-04-18T02:00:00Z", "03:00:00", "IST", -60],
		["1948-10-31T01:59:59Z", "02:59:59", "IST", -60],
		["1948-10-31T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1949" : helpers.makeTestYear("Europe/Dublin", [
		["1949-04-03T01:59:59Z", "01:59:59", "GMT", 0],
		["1949-04-03T02:00:00Z", "03:00:00", "IST", -60],
		["1949-10-30T01:59:59Z", "02:59:59", "IST", -60],
		["1949-10-30T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1950" : helpers.makeTestYear("Europe/Dublin", [
		["1950-04-16T01:59:59Z", "01:59:59", "GMT", 0],
		["1950-04-16T02:00:00Z", "03:00:00", "IST", -60],
		["1950-10-22T01:59:59Z", "02:59:59", "IST", -60],
		["1950-10-22T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1951" : helpers.makeTestYear("Europe/Dublin", [
		["1951-04-15T01:59:59Z", "01:59:59", "GMT", 0],
		["1951-04-15T02:00:00Z", "03:00:00", "IST", -60],
		["1951-10-21T01:59:59Z", "02:59:59", "IST", -60],
		["1951-10-21T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1952" : helpers.makeTestYear("Europe/Dublin", [
		["1952-04-20T01:59:59Z", "01:59:59", "GMT", 0],
		["1952-04-20T02:00:00Z", "03:00:00", "IST", -60],
		["1952-10-26T01:59:59Z", "02:59:59", "IST", -60],
		["1952-10-26T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1953" : helpers.makeTestYear("Europe/Dublin", [
		["1953-04-19T01:59:59Z", "01:59:59", "GMT", 0],
		["1953-04-19T02:00:00Z", "03:00:00", "IST", -60],
		["1953-10-04T01:59:59Z", "02:59:59", "IST", -60],
		["1953-10-04T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1954" : helpers.makeTestYear("Europe/Dublin", [
		["1954-04-11T01:59:59Z", "01:59:59", "GMT", 0],
		["1954-04-11T02:00:00Z", "03:00:00", "IST", -60],
		["1954-10-03T01:59:59Z", "02:59:59", "IST", -60],
		["1954-10-03T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1955" : helpers.makeTestYear("Europe/Dublin", [
		["1955-04-17T01:59:59Z", "01:59:59", "GMT", 0],
		["1955-04-17T02:00:00Z", "03:00:00", "IST", -60],
		["1955-10-02T01:59:59Z", "02:59:59", "IST", -60],
		["1955-10-02T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1956" : helpers.makeTestYear("Europe/Dublin", [
		["1956-04-22T01:59:59Z", "01:59:59", "GMT", 0],
		["1956-04-22T02:00:00Z", "03:00:00", "IST", -60],
		["1956-10-07T01:59:59Z", "02:59:59", "IST", -60],
		["1956-10-07T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1957" : helpers.makeTestYear("Europe/Dublin", [
		["1957-04-14T01:59:59Z", "01:59:59", "GMT", 0],
		["1957-04-14T02:00:00Z", "03:00:00", "IST", -60],
		["1957-10-06T01:59:59Z", "02:59:59", "IST", -60],
		["1957-10-06T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1958" : helpers.makeTestYear("Europe/Dublin", [
		["1958-04-20T01:59:59Z", "01:59:59", "GMT", 0],
		["1958-04-20T02:00:00Z", "03:00:00", "IST", -60],
		["1958-10-05T01:59:59Z", "02:59:59", "IST", -60],
		["1958-10-05T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1959" : helpers.makeTestYear("Europe/Dublin", [
		["1959-04-19T01:59:59Z", "01:59:59", "GMT", 0],
		["1959-04-19T02:00:00Z", "03:00:00", "IST", -60],
		["1959-10-04T01:59:59Z", "02:59:59", "IST", -60],
		["1959-10-04T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1960" : helpers.makeTestYear("Europe/Dublin", [
		["1960-04-10T01:59:59Z", "01:59:59", "GMT", 0],
		["1960-04-10T02:00:00Z", "03:00:00", "IST", -60],
		["1960-10-02T01:59:59Z", "02:59:59", "IST", -60],
		["1960-10-02T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1961" : helpers.makeTestYear("Europe/Dublin", [
		["1961-03-26T01:59:59Z", "01:59:59", "GMT", 0],
		["1961-03-26T02:00:00Z", "03:00:00", "IST", -60],
		["1961-10-29T01:59:59Z", "02:59:59", "IST", -60],
		["1961-10-29T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1962" : helpers.makeTestYear("Europe/Dublin", [
		["1962-03-25T01:59:59Z", "01:59:59", "GMT", 0],
		["1962-03-25T02:00:00Z", "03:00:00", "IST", -60],
		["1962-10-28T01:59:59Z", "02:59:59", "IST", -60],
		["1962-10-28T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1963" : helpers.makeTestYear("Europe/Dublin", [
		["1963-03-31T01:59:59Z", "01:59:59", "GMT", 0],
		["1963-03-31T02:00:00Z", "03:00:00", "IST", -60],
		["1963-10-27T01:59:59Z", "02:59:59", "IST", -60],
		["1963-10-27T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1964" : helpers.makeTestYear("Europe/Dublin", [
		["1964-03-22T01:59:59Z", "01:59:59", "GMT", 0],
		["1964-03-22T02:00:00Z", "03:00:00", "IST", -60],
		["1964-10-25T01:59:59Z", "02:59:59", "IST", -60],
		["1964-10-25T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1965" : helpers.makeTestYear("Europe/Dublin", [
		["1965-03-21T01:59:59Z", "01:59:59", "GMT", 0],
		["1965-03-21T02:00:00Z", "03:00:00", "IST", -60],
		["1965-10-24T01:59:59Z", "02:59:59", "IST", -60],
		["1965-10-24T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1966" : helpers.makeTestYear("Europe/Dublin", [
		["1966-03-20T01:59:59Z", "01:59:59", "GMT", 0],
		["1966-03-20T02:00:00Z", "03:00:00", "IST", -60],
		["1966-10-23T01:59:59Z", "02:59:59", "IST", -60],
		["1966-10-23T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1967" : helpers.makeTestYear("Europe/Dublin", [
		["1967-03-19T01:59:59Z", "01:59:59", "GMT", 0],
		["1967-03-19T02:00:00Z", "03:00:00", "IST", -60],
		["1967-10-29T01:59:59Z", "02:59:59", "IST", -60],
		["1967-10-29T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1968" : helpers.makeTestYear("Europe/Dublin", [
		["1968-02-18T01:59:59Z", "01:59:59", "GMT", 0],
		["1968-02-18T02:00:00Z", "03:00:00", "IST", -60],
		["1968-10-26T22:59:59Z", "23:59:59", "IST", -60],
		["1968-10-26T23:00:00Z", "00:00:00", "IST", -60]
	]),

	"1971" : helpers.makeTestYear("Europe/Dublin", [
		["1971-10-31T01:59:59Z", "02:59:59", "IST", -60],
		["1971-10-31T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1972" : helpers.makeTestYear("Europe/Dublin", [
		["1972-03-19T01:59:59Z", "01:59:59", "GMT", 0],
		["1972-03-19T02:00:00Z", "03:00:00", "IST", -60],
		["1972-10-29T01:59:59Z", "02:59:59", "IST", -60],
		["1972-10-29T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1973" : helpers.makeTestYear("Europe/Dublin", [
		["1973-03-18T01:59:59Z", "01:59:59", "GMT", 0],
		["1973-03-18T02:00:00Z", "03:00:00", "IST", -60],
		["1973-10-28T01:59:59Z", "02:59:59", "IST", -60],
		["1973-10-28T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1974" : helpers.makeTestYear("Europe/Dublin", [
		["1974-03-17T01:59:59Z", "01:59:59", "GMT", 0],
		["1974-03-17T02:00:00Z", "03:00:00", "IST", -60],
		["1974-10-27T01:59:59Z", "02:59:59", "IST", -60],
		["1974-10-27T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1975" : helpers.makeTestYear("Europe/Dublin", [
		["1975-03-16T01:59:59Z", "01:59:59", "GMT", 0],
		["1975-03-16T02:00:00Z", "03:00:00", "IST", -60],
		["1975-10-26T01:59:59Z", "02:59:59", "IST", -60],
		["1975-10-26T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1976" : helpers.makeTestYear("Europe/Dublin", [
		["1976-03-21T01:59:59Z", "01:59:59", "GMT", 0],
		["1976-03-21T02:00:00Z", "03:00:00", "IST", -60],
		["1976-10-24T01:59:59Z", "02:59:59", "IST", -60],
		["1976-10-24T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1977" : helpers.makeTestYear("Europe/Dublin", [
		["1977-03-20T01:59:59Z", "01:59:59", "GMT", 0],
		["1977-03-20T02:00:00Z", "03:00:00", "IST", -60],
		["1977-10-23T01:59:59Z", "02:59:59", "IST", -60],
		["1977-10-23T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1978" : helpers.makeTestYear("Europe/Dublin", [
		["1978-03-19T01:59:59Z", "01:59:59", "GMT", 0],
		["1978-03-19T02:00:00Z", "03:00:00", "IST", -60],
		["1978-10-29T01:59:59Z", "02:59:59", "IST", -60],
		["1978-10-29T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1979" : helpers.makeTestYear("Europe/Dublin", [
		["1979-03-18T01:59:59Z", "01:59:59", "GMT", 0],
		["1979-03-18T02:00:00Z", "03:00:00", "IST", -60],
		["1979-10-28T01:59:59Z", "02:59:59", "IST", -60],
		["1979-10-28T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1980" : helpers.makeTestYear("Europe/Dublin", [
		["1980-03-16T01:59:59Z", "01:59:59", "GMT", 0],
		["1980-03-16T02:00:00Z", "03:00:00", "IST", -60],
		["1980-10-26T01:59:59Z", "02:59:59", "IST", -60],
		["1980-10-26T02:00:00Z", "02:00:00", "GMT", 0]
	]),

	"1981" : helpers.makeTestYear("Europe/Dublin", [
		["1981-03-29T00:59:59Z", "00:59:59", "GMT", 0],
		["1981-03-29T01:00:00Z", "02:00:00", "IST", -60],
		["1981-10-25T00:59:59Z", "01:59:59", "IST", -60],
		["1981-10-25T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"1982" : helpers.makeTestYear("Europe/Dublin", [
		["1982-03-28T00:59:59Z", "00:59:59", "GMT", 0],
		["1982-03-28T01:00:00Z", "02:00:00", "IST", -60],
		["1982-10-24T00:59:59Z", "01:59:59", "IST", -60],
		["1982-10-24T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"1983" : helpers.makeTestYear("Europe/Dublin", [
		["1983-03-27T00:59:59Z", "00:59:59", "GMT", 0],
		["1983-03-27T01:00:00Z", "02:00:00", "IST", -60],
		["1983-10-23T00:59:59Z", "01:59:59", "IST", -60],
		["1983-10-23T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"1984" : helpers.makeTestYear("Europe/Dublin", [
		["1984-03-25T00:59:59Z", "00:59:59", "GMT", 0],
		["1984-03-25T01:00:00Z", "02:00:00", "IST", -60],
		["1984-10-28T00:59:59Z", "01:59:59", "IST", -60],
		["1984-10-28T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"1985" : helpers.makeTestYear("Europe/Dublin", [
		["1985-03-31T00:59:59Z", "00:59:59", "GMT", 0],
		["1985-03-31T01:00:00Z", "02:00:00", "IST", -60],
		["1985-10-27T00:59:59Z", "01:59:59", "IST", -60],
		["1985-10-27T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"1986" : helpers.makeTestYear("Europe/Dublin", [
		["1986-03-30T00:59:59Z", "00:59:59", "GMT", 0],
		["1986-03-30T01:00:00Z", "02:00:00", "IST", -60],
		["1986-10-26T00:59:59Z", "01:59:59", "IST", -60],
		["1986-10-26T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"1987" : helpers.makeTestYear("Europe/Dublin", [
		["1987-03-29T00:59:59Z", "00:59:59", "GMT", 0],
		["1987-03-29T01:00:00Z", "02:00:00", "IST", -60],
		["1987-10-25T00:59:59Z", "01:59:59", "IST", -60],
		["1987-10-25T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"1988" : helpers.makeTestYear("Europe/Dublin", [
		["1988-03-27T00:59:59Z", "00:59:59", "GMT", 0],
		["1988-03-27T01:00:00Z", "02:00:00", "IST", -60],
		["1988-10-23T00:59:59Z", "01:59:59", "IST", -60],
		["1988-10-23T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"1989" : helpers.makeTestYear("Europe/Dublin", [
		["1989-03-26T00:59:59Z", "00:59:59", "GMT", 0],
		["1989-03-26T01:00:00Z", "02:00:00", "IST", -60],
		["1989-10-29T00:59:59Z", "01:59:59", "IST", -60],
		["1989-10-29T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"1990" : helpers.makeTestYear("Europe/Dublin", [
		["1990-03-25T00:59:59Z", "00:59:59", "GMT", 0],
		["1990-03-25T01:00:00Z", "02:00:00", "IST", -60],
		["1990-10-28T00:59:59Z", "01:59:59", "IST", -60],
		["1990-10-28T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"1991" : helpers.makeTestYear("Europe/Dublin", [
		["1991-03-31T00:59:59Z", "00:59:59", "GMT", 0],
		["1991-03-31T01:00:00Z", "02:00:00", "IST", -60],
		["1991-10-27T00:59:59Z", "01:59:59", "IST", -60],
		["1991-10-27T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"1992" : helpers.makeTestYear("Europe/Dublin", [
		["1992-03-29T00:59:59Z", "00:59:59", "GMT", 0],
		["1992-03-29T01:00:00Z", "02:00:00", "IST", -60],
		["1992-10-25T00:59:59Z", "01:59:59", "IST", -60],
		["1992-10-25T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"1993" : helpers.makeTestYear("Europe/Dublin", [
		["1993-03-28T00:59:59Z", "00:59:59", "GMT", 0],
		["1993-03-28T01:00:00Z", "02:00:00", "IST", -60],
		["1993-10-24T00:59:59Z", "01:59:59", "IST", -60],
		["1993-10-24T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"1994" : helpers.makeTestYear("Europe/Dublin", [
		["1994-03-27T00:59:59Z", "00:59:59", "GMT", 0],
		["1994-03-27T01:00:00Z", "02:00:00", "IST", -60],
		["1994-10-23T00:59:59Z", "01:59:59", "IST", -60],
		["1994-10-23T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"1995" : helpers.makeTestYear("Europe/Dublin", [
		["1995-03-26T00:59:59Z", "00:59:59", "GMT", 0],
		["1995-03-26T01:00:00Z", "02:00:00", "IST", -60],
		["1995-10-22T00:59:59Z", "01:59:59", "IST", -60],
		["1995-10-22T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"1996" : helpers.makeTestYear("Europe/Dublin", [
		["1996-03-31T00:59:59Z", "00:59:59", "GMT", 0],
		["1996-03-31T01:00:00Z", "02:00:00", "IST", -60],
		["1996-10-27T00:59:59Z", "01:59:59", "IST", -60],
		["1996-10-27T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"1997" : helpers.makeTestYear("Europe/Dublin", [
		["1997-03-30T00:59:59Z", "00:59:59", "GMT", 0],
		["1997-03-30T01:00:00Z", "02:00:00", "IST", -60],
		["1997-10-26T00:59:59Z", "01:59:59", "IST", -60],
		["1997-10-26T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"1998" : helpers.makeTestYear("Europe/Dublin", [
		["1998-03-29T00:59:59Z", "00:59:59", "GMT", 0],
		["1998-03-29T01:00:00Z", "02:00:00", "IST", -60],
		["1998-10-25T00:59:59Z", "01:59:59", "IST", -60],
		["1998-10-25T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"1999" : helpers.makeTestYear("Europe/Dublin", [
		["1999-03-28T00:59:59Z", "00:59:59", "GMT", 0],
		["1999-03-28T01:00:00Z", "02:00:00", "IST", -60],
		["1999-10-31T00:59:59Z", "01:59:59", "IST", -60],
		["1999-10-31T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2000" : helpers.makeTestYear("Europe/Dublin", [
		["2000-03-26T00:59:59Z", "00:59:59", "GMT", 0],
		["2000-03-26T01:00:00Z", "02:00:00", "IST", -60],
		["2000-10-29T00:59:59Z", "01:59:59", "IST", -60],
		["2000-10-29T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2001" : helpers.makeTestYear("Europe/Dublin", [
		["2001-03-25T00:59:59Z", "00:59:59", "GMT", 0],
		["2001-03-25T01:00:00Z", "02:00:00", "IST", -60],
		["2001-10-28T00:59:59Z", "01:59:59", "IST", -60],
		["2001-10-28T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2002" : helpers.makeTestYear("Europe/Dublin", [
		["2002-03-31T00:59:59Z", "00:59:59", "GMT", 0],
		["2002-03-31T01:00:00Z", "02:00:00", "IST", -60],
		["2002-10-27T00:59:59Z", "01:59:59", "IST", -60],
		["2002-10-27T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2003" : helpers.makeTestYear("Europe/Dublin", [
		["2003-03-30T00:59:59Z", "00:59:59", "GMT", 0],
		["2003-03-30T01:00:00Z", "02:00:00", "IST", -60],
		["2003-10-26T00:59:59Z", "01:59:59", "IST", -60],
		["2003-10-26T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2004" : helpers.makeTestYear("Europe/Dublin", [
		["2004-03-28T00:59:59Z", "00:59:59", "GMT", 0],
		["2004-03-28T01:00:00Z", "02:00:00", "IST", -60],
		["2004-10-31T00:59:59Z", "01:59:59", "IST", -60],
		["2004-10-31T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2005" : helpers.makeTestYear("Europe/Dublin", [
		["2005-03-27T00:59:59Z", "00:59:59", "GMT", 0],
		["2005-03-27T01:00:00Z", "02:00:00", "IST", -60],
		["2005-10-30T00:59:59Z", "01:59:59", "IST", -60],
		["2005-10-30T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2006" : helpers.makeTestYear("Europe/Dublin", [
		["2006-03-26T00:59:59Z", "00:59:59", "GMT", 0],
		["2006-03-26T01:00:00Z", "02:00:00", "IST", -60],
		["2006-10-29T00:59:59Z", "01:59:59", "IST", -60],
		["2006-10-29T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2007" : helpers.makeTestYear("Europe/Dublin", [
		["2007-03-25T00:59:59Z", "00:59:59", "GMT", 0],
		["2007-03-25T01:00:00Z", "02:00:00", "IST", -60],
		["2007-10-28T00:59:59Z", "01:59:59", "IST", -60],
		["2007-10-28T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2008" : helpers.makeTestYear("Europe/Dublin", [
		["2008-03-30T00:59:59Z", "00:59:59", "GMT", 0],
		["2008-03-30T01:00:00Z", "02:00:00", "IST", -60],
		["2008-10-26T00:59:59Z", "01:59:59", "IST", -60],
		["2008-10-26T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2009" : helpers.makeTestYear("Europe/Dublin", [
		["2009-03-29T00:59:59Z", "00:59:59", "GMT", 0],
		["2009-03-29T01:00:00Z", "02:00:00", "IST", -60],
		["2009-10-25T00:59:59Z", "01:59:59", "IST", -60],
		["2009-10-25T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2010" : helpers.makeTestYear("Europe/Dublin", [
		["2010-03-28T00:59:59Z", "00:59:59", "GMT", 0],
		["2010-03-28T01:00:00Z", "02:00:00", "IST", -60],
		["2010-10-31T00:59:59Z", "01:59:59", "IST", -60],
		["2010-10-31T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2011" : helpers.makeTestYear("Europe/Dublin", [
		["2011-03-27T00:59:59Z", "00:59:59", "GMT", 0],
		["2011-03-27T01:00:00Z", "02:00:00", "IST", -60],
		["2011-10-30T00:59:59Z", "01:59:59", "IST", -60],
		["2011-10-30T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2012" : helpers.makeTestYear("Europe/Dublin", [
		["2012-03-25T00:59:59Z", "00:59:59", "GMT", 0],
		["2012-03-25T01:00:00Z", "02:00:00", "IST", -60],
		["2012-10-28T00:59:59Z", "01:59:59", "IST", -60],
		["2012-10-28T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2013" : helpers.makeTestYear("Europe/Dublin", [
		["2013-03-31T00:59:59Z", "00:59:59", "GMT", 0],
		["2013-03-31T01:00:00Z", "02:00:00", "IST", -60],
		["2013-10-27T00:59:59Z", "01:59:59", "IST", -60],
		["2013-10-27T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2014" : helpers.makeTestYear("Europe/Dublin", [
		["2014-03-30T00:59:59Z", "00:59:59", "GMT", 0],
		["2014-03-30T01:00:00Z", "02:00:00", "IST", -60],
		["2014-10-26T00:59:59Z", "01:59:59", "IST", -60],
		["2014-10-26T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2015" : helpers.makeTestYear("Europe/Dublin", [
		["2015-03-29T00:59:59Z", "00:59:59", "GMT", 0],
		["2015-03-29T01:00:00Z", "02:00:00", "IST", -60],
		["2015-10-25T00:59:59Z", "01:59:59", "IST", -60],
		["2015-10-25T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2016" : helpers.makeTestYear("Europe/Dublin", [
		["2016-03-27T00:59:59Z", "00:59:59", "GMT", 0],
		["2016-03-27T01:00:00Z", "02:00:00", "IST", -60],
		["2016-10-30T00:59:59Z", "01:59:59", "IST", -60],
		["2016-10-30T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2017" : helpers.makeTestYear("Europe/Dublin", [
		["2017-03-26T00:59:59Z", "00:59:59", "GMT", 0],
		["2017-03-26T01:00:00Z", "02:00:00", "IST", -60],
		["2017-10-29T00:59:59Z", "01:59:59", "IST", -60],
		["2017-10-29T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2018" : helpers.makeTestYear("Europe/Dublin", [
		["2018-03-25T00:59:59Z", "00:59:59", "GMT", 0],
		["2018-03-25T01:00:00Z", "02:00:00", "IST", -60],
		["2018-10-28T00:59:59Z", "01:59:59", "IST", -60],
		["2018-10-28T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2019" : helpers.makeTestYear("Europe/Dublin", [
		["2019-03-31T00:59:59Z", "00:59:59", "GMT", 0],
		["2019-03-31T01:00:00Z", "02:00:00", "IST", -60],
		["2019-10-27T00:59:59Z", "01:59:59", "IST", -60],
		["2019-10-27T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2020" : helpers.makeTestYear("Europe/Dublin", [
		["2020-03-29T00:59:59Z", "00:59:59", "GMT", 0],
		["2020-03-29T01:00:00Z", "02:00:00", "IST", -60],
		["2020-10-25T00:59:59Z", "01:59:59", "IST", -60],
		["2020-10-25T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2021" : helpers.makeTestYear("Europe/Dublin", [
		["2021-03-28T00:59:59Z", "00:59:59", "GMT", 0],
		["2021-03-28T01:00:00Z", "02:00:00", "IST", -60],
		["2021-10-31T00:59:59Z", "01:59:59", "IST", -60],
		["2021-10-31T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2022" : helpers.makeTestYear("Europe/Dublin", [
		["2022-03-27T00:59:59Z", "00:59:59", "GMT", 0],
		["2022-03-27T01:00:00Z", "02:00:00", "IST", -60],
		["2022-10-30T00:59:59Z", "01:59:59", "IST", -60],
		["2022-10-30T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2023" : helpers.makeTestYear("Europe/Dublin", [
		["2023-03-26T00:59:59Z", "00:59:59", "GMT", 0],
		["2023-03-26T01:00:00Z", "02:00:00", "IST", -60],
		["2023-10-29T00:59:59Z", "01:59:59", "IST", -60],
		["2023-10-29T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2024" : helpers.makeTestYear("Europe/Dublin", [
		["2024-03-31T00:59:59Z", "00:59:59", "GMT", 0],
		["2024-03-31T01:00:00Z", "02:00:00", "IST", -60],
		["2024-10-27T00:59:59Z", "01:59:59", "IST", -60],
		["2024-10-27T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2025" : helpers.makeTestYear("Europe/Dublin", [
		["2025-03-30T00:59:59Z", "00:59:59", "GMT", 0],
		["2025-03-30T01:00:00Z", "02:00:00", "IST", -60],
		["2025-10-26T00:59:59Z", "01:59:59", "IST", -60],
		["2025-10-26T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2026" : helpers.makeTestYear("Europe/Dublin", [
		["2026-03-29T00:59:59Z", "00:59:59", "GMT", 0],
		["2026-03-29T01:00:00Z", "02:00:00", "IST", -60],
		["2026-10-25T00:59:59Z", "01:59:59", "IST", -60],
		["2026-10-25T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2027" : helpers.makeTestYear("Europe/Dublin", [
		["2027-03-28T00:59:59Z", "00:59:59", "GMT", 0],
		["2027-03-28T01:00:00Z", "02:00:00", "IST", -60],
		["2027-10-31T00:59:59Z", "01:59:59", "IST", -60],
		["2027-10-31T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2028" : helpers.makeTestYear("Europe/Dublin", [
		["2028-03-26T00:59:59Z", "00:59:59", "GMT", 0],
		["2028-03-26T01:00:00Z", "02:00:00", "IST", -60],
		["2028-10-29T00:59:59Z", "01:59:59", "IST", -60],
		["2028-10-29T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2029" : helpers.makeTestYear("Europe/Dublin", [
		["2029-03-25T00:59:59Z", "00:59:59", "GMT", 0],
		["2029-03-25T01:00:00Z", "02:00:00", "IST", -60],
		["2029-10-28T00:59:59Z", "01:59:59", "IST", -60],
		["2029-10-28T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2030" : helpers.makeTestYear("Europe/Dublin", [
		["2030-03-31T00:59:59Z", "00:59:59", "GMT", 0],
		["2030-03-31T01:00:00Z", "02:00:00", "IST", -60],
		["2030-10-27T00:59:59Z", "01:59:59", "IST", -60],
		["2030-10-27T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2031" : helpers.makeTestYear("Europe/Dublin", [
		["2031-03-30T00:59:59Z", "00:59:59", "GMT", 0],
		["2031-03-30T01:00:00Z", "02:00:00", "IST", -60],
		["2031-10-26T00:59:59Z", "01:59:59", "IST", -60],
		["2031-10-26T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2032" : helpers.makeTestYear("Europe/Dublin", [
		["2032-03-28T00:59:59Z", "00:59:59", "GMT", 0],
		["2032-03-28T01:00:00Z", "02:00:00", "IST", -60],
		["2032-10-31T00:59:59Z", "01:59:59", "IST", -60],
		["2032-10-31T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2033" : helpers.makeTestYear("Europe/Dublin", [
		["2033-03-27T00:59:59Z", "00:59:59", "GMT", 0],
		["2033-03-27T01:00:00Z", "02:00:00", "IST", -60],
		["2033-10-30T00:59:59Z", "01:59:59", "IST", -60],
		["2033-10-30T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2034" : helpers.makeTestYear("Europe/Dublin", [
		["2034-03-26T00:59:59Z", "00:59:59", "GMT", 0],
		["2034-03-26T01:00:00Z", "02:00:00", "IST", -60],
		["2034-10-29T00:59:59Z", "01:59:59", "IST", -60],
		["2034-10-29T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2035" : helpers.makeTestYear("Europe/Dublin", [
		["2035-03-25T00:59:59Z", "00:59:59", "GMT", 0],
		["2035-03-25T01:00:00Z", "02:00:00", "IST", -60],
		["2035-10-28T00:59:59Z", "01:59:59", "IST", -60],
		["2035-10-28T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2036" : helpers.makeTestYear("Europe/Dublin", [
		["2036-03-30T00:59:59Z", "00:59:59", "GMT", 0],
		["2036-03-30T01:00:00Z", "02:00:00", "IST", -60],
		["2036-10-26T00:59:59Z", "01:59:59", "IST", -60],
		["2036-10-26T01:00:00Z", "01:00:00", "GMT", 0]
	]),

	"2037" : helpers.makeTestYear("Europe/Dublin", [
		["2037-03-29T00:59:59Z", "00:59:59", "GMT", 0],
		["2037-03-29T01:00:00Z", "02:00:00", "IST", -60],
		["2037-10-25T00:59:59Z", "01:59:59", "IST", -60],
		["2037-10-25T01:00:00Z", "01:00:00", "GMT", 0]
	])
};