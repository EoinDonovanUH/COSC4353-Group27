const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");

// router.get("^/$|/profile(.html)?", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "views", "profile.html"));
// });

router
  .route("/:id?")
  // HTTP method                    // CRUD operation
  .get(profileController.getProfile) // read
  .post(profileController.fillProfile) // create
  .patch(profileController.changeProfile) // update
  .delete(profileController.deleteProfile); // delete

module.exports = router;
