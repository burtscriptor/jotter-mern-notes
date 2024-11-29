const express =  require("express");
const router = express.Router();
const noteController = require("../../controllers/api/notes");

router.get("/:userId", noteController.index);
router.post("/add", noteController.create);

module.exports = router;