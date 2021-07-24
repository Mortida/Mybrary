const express = require('express');
const router = express.Router(); // Create router

router.get('/', (req, res) => {
	res.render('index');
});
module.exports = router;
