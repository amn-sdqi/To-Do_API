function enableCORS(req, res, next) {
	res.setHeader("Access-Control-Allow-Methods", "*,OPTIONS");
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "Content-type");
	next();
}

module.exports = enableCORS;
