const express = require("express");
const router = express.Router();

router.post("/create", require("../controllers/projects/createProject"));

router.delete("/delete/:id", require("../controllers/projects/deleteProject"));

router.post("/", require("../controllers/projects/get/getProjects"));

router.get(
  "/get/subprojects/:timerId",
  require("../controllers/projects/get/getSubProjects")
);

router.post(
  "/set/status",
  require("../controllers/projects/change/setProjectStatus")
);

router.post(
  "/set/name",
  require("../controllers/projects/change/setProjectName")
);

router.post(
  "/set/description",
  require("../controllers/projects/change/setProjectDescription")
);
router.post(
  "/set/substatus",
  require("../controllers/projects/change/setSubProjectStatus")
);

router.post(
  "/set/subname",
  require("../controllers/projects/change/setSubProjectName")
);

router.post(
  "/set/subdescription",
  require("../controllers/projects/change/setSubProjectDescription")
);

router.post(
  "/add/timers",
  require("../controllers/projects/add/addTimersToProject")
);

router.post(
  "/add/subproject",
  require("../controllers/projects/add/addSubPojectToProject")
);

router.delete(
  "/remove/subproject/:subProjectId",
  require("../controllers/projects/remove/removeSubProject")
);

module.exports = router;
