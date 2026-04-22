import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";
import ExpenseCard from "../components/ExpenseCard";

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "",
  });

  const fetchExpenses = async () => {
    const res = await API.get("/expenses");
    setExpenses(res.data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async () => {
    await API.post("/expense", form);
    fetchExpenses();
  };

  return (
    <>
      <Navbar />

      <div className="p-6 bg-gray-100 min-h-screen">
        {/* Add Expense */}
        <div className="bg-white p-4 rounded shadow mb-6">
          <h2 className="font-bold mb-2">Add Expense</h2>

          <div className="grid grid-cols-3 gap-3">
            <input
              placeholder="Title"
              className="border p-2 rounded"
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <input
              placeholder="Amount"
              className="border p-2 rounded"
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
            />
            <input
              placeholder="Category"
              className="border p-2 rounded"
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            />
          </div>

          <button
            onClick={addExpense}
            className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Expense
          </button>
        </div>

        {/* Expense List */}
        <div className="grid gap-3">
          {expenses.map((exp) => (
            <ExpenseCard key={exp._id} expense={exp} />
          ))}
        </div>
      </div>
    </>
  );
}