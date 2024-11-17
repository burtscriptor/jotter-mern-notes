const express =  require("express");
const router = express.Router();
const noteController = require("../../controllers/api/notes");

router.get("/notes", noteController.index);
router.post("/add", noteController.create);

module.exports = router;