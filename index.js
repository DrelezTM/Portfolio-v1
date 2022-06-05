const express = require("express");
const app = express();
const ejs = require("ejs");
const fs = require("fs");
const msg = JSON.parse(fs.readFileSync("./views/database/secreto.json"));
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get("/", async (req, res) => {
	if (!req.query.name && !req.query.message && !req.query.gender) {
		res.render("pages/index");
	} else {
		msg.push({
			"name": req.query.name,
			"gender": req.query.gender,
			"msg": req.query.message
		})
		fs.writeFileSync("./views/database/secreto.json", JSON.stringify(msg));
		res.redirect("/secreto");
	}
});

app.get("/secreto", async (req, res) => {
	if (!req.query.name && !req.query.message && !req.query.gender) {
		res.render("pages/secreto", { msg: msg });
	} else {
		msg.push({
			"name": req.query.name,
			"gender": req.query.gender,
			"msg": req.query.message
		})
		fs.writeFileSync("./views/database/secreto.json", JSON.stringify(msg));
		res.redirect("/secreto");
	}
});

app.get("/settings/css", async (req, res) => {
	res.sendFile("views/style/style.css", {root: __dirname});
});

app.get("/youtube", async (req, res) => {
	res.redirect("https://www.youtube.com/c/DrelezTM");
});

app.get("/instagram", async (req, res) => {
	res.redirect("https://www.instagram.com/DrelezTM");
});

app.get("/discord", async (req, res) => {
	res.redirect("https://dsc.gg/DrelezTM");
});

app.get("/github", async (req, res) => {
	res.redirect("https://github.com/DrelezTM");
});

app.get("/verdantns", async (req, res) => {
	res.redirect("https://www.verdantns.xyz");
});

// Image

app.get("/img/body/landing.png", async (req, res) => {
	res.sendFile("views/img/body/landingpage.png", {root: __dirname});
});

app.get("/img/body/male.png", async (req, res) => {
	res.sendFile("views/img/body/male.png", {root: __dirname});
});

app.get("/img/body/female.png", async (req, res) => {
	res.sendFile("views/img/body/female.png", {root: __dirname});
});

app.get("/img/certificate/python.jpg", async (req, res) => {
	res.sendFile("views/img/certificate/python.jpg", {root: __dirname});
});

app.get("/img/certificate/css.jpg", async (req, res) => {
	res.sendFile("views/img/certificate/css.jpg", {root: __dirname});
});

app.get("/img/certificate/html.jpg", async (req, res) => {
	res.sendFile("views/img/certificate/html.jpg", {root: __dirname});
});

app.get("/img/certificate/javascript.jpg", async (req, res) => {
	res.sendFile("views/img/certificate/javascript.jpg", {root: __dirname});
});

app.get("/img/certificate/php.jpg", async (req, res) => {
	res.sendFile("views/img/certificate/php.jpg", {root: __dirname});
});

app.get("/img/head/dreleztm.png", async (req, res) => {
	res.sendFile("views/img/head/dreleztm.png", {root: __dirname});
});

app.get("*", async (req, res) => {
	res.redirect("/");
});

app.listen(process.env.PORT || 80, () => {
	console.log("[WEB] Website is Already!");
});
