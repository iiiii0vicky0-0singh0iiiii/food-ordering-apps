import express from "express";
import { getFoods, addFood } from "../controllers/foodController.js";

const router = express.Router();

router.get("/", getFoods);
router.post("/", addFood);

export default router;
