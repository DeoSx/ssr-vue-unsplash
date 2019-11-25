const { Router } = require("express");
const Favorite = require("../models/favorite.model");
const router = Router();

router.post("/favorite/", async (req, res) => {
  try {
    const favorite = new Favorite({
      photo: req.body
    });
    await favorite.save();
    res.status(201).json(favorite);
  } catch (e) {
    res.status(500).json(e);
  }
});
router.get("/favorite/list", async (req, res) => {
  try {
    const favorite = await Favorite.find();
    res.json(favorite);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.delete("/favorite/:id", async (req, res) => {
  try {
    const favorite = await Favorite.deleteOne({ _id: req.params.id });
    res.json(favorite);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
