const express = require("express");

const router = express.Router();

const {
  addId,
  active,
  deActive,
  getCurrentUser,
} = require("../controllers/user.controller");

router.post("/add-id", addId);
router.post("/active", active);
router.post("/de-active", deActive);
router.get("/", getCurrentUser);

module.exports = router;
