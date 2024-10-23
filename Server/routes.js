const router = require("express").Router();

const authController = require("./src/controllers/authController");
const userController = require("./src/controllers/userController");
const projectController = require("./src/controllers/projectController");
const hoursController = require("./src/controllers/hoursController");
const invitesController = require("./src/controllers/invitesController");
const reportsController = require("./src/controllers/reportsController");

router.use("/", authController);
router.use("/hours", hoursController);
router.use("/users", userController);
router.use("/projects", projectController);
router.use("/invites", invitesController);
router.use("/reports", reportsController);

module.exports = router;
