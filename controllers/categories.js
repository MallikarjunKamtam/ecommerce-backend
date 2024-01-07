const express = require("express");
const router = express.Router();
const categoriesService = require("../services/categories");

router.get("/categories", async (req, res) => {
  try {
    const categories = await categoriesService.getAll();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
