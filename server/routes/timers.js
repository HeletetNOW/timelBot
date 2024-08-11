const express = require("express");
const router = express.Router();

//Create timer
router.post("/add", require("../controllers/timers/createTimer.js"));

//Get timers
router.delete("/delete/:id", require("../controllers/timers/deleteTimer.js"));

//Get timers
router.post("/", require("../controllers/timers/getTimers.js"));

//Start timer
router.post(
  "/control/start/:id",
  require("../controllers/timers/control/startTimer.js")
);

//End timer
router.post(
  "/control/end/:id",
  require("../controllers/timers/control/endTimer.js")
);

//Set timer name
router.post(
  "/set/name",
  require("../controllers/timers/change/setTimerName.js")
);

//Set timer sumTime
router.post("/set/sum", require("../controllers/timers/change/setSumTime.js"));

//Add project
router.post(
  "/add/subproject",
  require("../controllers/timers/add/addSubProjectToTimer.js")
);

router.post(
  "/remove/subproject",
  require("../controllers/timers/remove/removeSubProjectFromTimer.js")
);

module.exports = router;
