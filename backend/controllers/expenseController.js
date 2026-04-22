import Expense from "../models/Expense.js";

export const addExpense = async (req, res) => {
  try {
    const expense = await Expense.create({
      ...req.body,
      user: req.user.id,
    });

    res.json(expense);
  } catch {
    res.status(500).json({ msg: "Add error" });
  }
};

export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id });
    res.json(expenses);
  } catch {
    res.status(500).json({ msg: "Fetch error" });
  }
};