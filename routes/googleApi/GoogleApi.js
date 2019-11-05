const router = require("express").Router();
const GoogleApiController = require("../../controllers/GoogleApiController");

router.route("/").get(GoogleApiController.findgooglebooks);

module.exports = router;
