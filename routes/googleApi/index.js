const router = require("express").Router();
const GoogleApiRoutes = require("./GoogleApi");

// Book routes
router.use("/findbooks", GoogleApiRoutes);

module.exports = router;
