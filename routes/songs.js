const express = require("express");
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const song_controller = require("../controllers/song.controller");

// a simple test url to check that all of our files are communicating correctly.
router.get("/", song_controller.song_list);
router.get("/test", song_controller.test);
router.post("/create", song_controller.create);
router.get("/:id", song_controller.song_details);
router.put("/:id/update", song_controller.song_update);
router.delete("/:id/delete", song_controller.song_delete);

module.exports = router;
