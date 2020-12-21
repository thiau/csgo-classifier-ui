(function () {
	"use strict";

	const express = require("express");
	const app = express();
	const port = process.env.PORT || 3001;
	const engines = require("consolidate");
	const { HLTV } = require('hltv');
	let cors = require('cors');

	app.use(cors())

	app.engine("html", engines.ejs);
	app.set("view engine", "ejs");
	app.set("views", __dirname + "/client");
	app.use(express.static(__dirname + "/client"));

	// @TODO: Training API


	app.get("/", function (req, res) {
		return res.status(200).render("./main_module/index.html");
	});

	app.get("/getTeamRanking", function (req, res) {
		HLTV.getTeamRanking().then(data => {
			return res.send(data);
		}).catch(err => {
			return res.status(400).send(err);
		})
	});

	app.post("/predict", function (req, res) {

	});


	app.listen(port, function () {
		process.stdout.write(["Server running on port:", port].join(" "));
	});
}())