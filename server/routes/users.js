const express = require("express");
const router = express.Router();

router.get(
  "/register/:userID",
  require("../controllers/users/registerUser.js")
);

module.exports = router;
