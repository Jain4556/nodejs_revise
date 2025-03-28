const express = require("express");
const router = express.Router();
const Menu = require("./../models/MenuItem");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newData = new Menu(data);
    const savedDetails = await newData.save();

    console.log("data saved");
    res.status(200).json(savedDetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Menu.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:taste", async (req, res) => {
  try {
    const taste = req.params.taste;
    if (taste == "sweet" || taste == "spicy") {
      const response = await Menu.find({ work: taste });
      res.status(200).json(response)
      console.log("data fetched");
    } else {
      res.status(404).json({ error: "Invalid worktype" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});


module.exports = router;
