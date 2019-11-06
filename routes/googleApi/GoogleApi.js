const router = require("express").Router();
const GoogleApiController = require("../../controllers/GoogleApiController");

router.route("/").post(GoogleApiController.findgooglebooks);

module.exports = router;
