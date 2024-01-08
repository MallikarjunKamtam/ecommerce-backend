const subCategoriesService = require("../services/sub_categories");
const express = require("express");
const router = express.Router();

router.get("/sub-categories", async (req, res) => {
  try {
    const sub_categories = await subCategoriesService.getAll();
    res.json(sub_categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
