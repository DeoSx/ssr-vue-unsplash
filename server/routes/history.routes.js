const { Router } = require("express");
const History = require("../models/history.model");
const router = Router();

router.post("/history/create", async (req, res) => {
  try {
    const historyData = new History({
      text: req.body.text,
      date: req.body.date
    });
    await historyData.save();
    res.status(201).json(historyData);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get("/history/list", async (req, res) => {
  try {
    const history = await History.find();
    res.json(history);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.delete("/history/:id", async (req, res) => {
  try {
    const history = await History.deleteOne({ _id: req.params.id });
    res.json(history);
  } catch (e) {
    res.status(500).json(e);
  }
});
module.exports = router;
