const http = require("../../../etc/js/http");

(function () {
	"use strict";

	const httpClient = require('../../../etc/js/http');


	module.exports = {
		"getTeamRanking": function () {
			return httpClient.get("/getTeamRanking");
		},
		"getPrediction": function(payload) {
			return httpClient.post("/getPrediction", payload)
		}
	}
}())