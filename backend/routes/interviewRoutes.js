import express from "express";
const router = express.Router();

router.route("/interviews", (req, res) => {
  res.send("this is interviews route");
});

export default router;
