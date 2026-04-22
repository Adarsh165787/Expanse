import express from "express";
import auth from "../middleware/authMiddleware.js";
import {
  addExpense,
  getExpenses,
} from "../controllers/expenseController.js";

const router = express.Router();

router.post("/expense", auth, addExpense);
router.get("/expenses", auth, getExpenses);

export default router;