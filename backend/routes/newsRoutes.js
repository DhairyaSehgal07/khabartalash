import express from "express";
import {
  createNews,
  getSingleNews,
  updateSingleNews,
  getPaginatedNews,
  deleteSingleNews,
} from "../controllers/newsController.js";
import protect from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/", protect, createNews);
router.get("/", getPaginatedNews);
router.get("/:id", getSingleNews);
router.put("/:id", protect, updateSingleNews);
router.delete("/:id", protect, deleteSingleNews);
export default router;
