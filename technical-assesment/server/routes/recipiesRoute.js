const express = require("express");
const router = express.Router();
const {getrecepie, postrecepie, deleterecepie , updaterecepie }= require("../controller/recipiesController.js")

router.get("/",getrecepie);
router.post("/",postrecepie);
router.delete("/:id",deleterecepie);
router.put("/:id",updaterecepie)
module.exports = router;
