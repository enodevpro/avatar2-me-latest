const express = require("express");

const router = express.Router();

const { getId, addId } = require("../controllers/harvest.controller");

router.post("/", addId);
router.get("/:id", getId);

module.exports = router;
