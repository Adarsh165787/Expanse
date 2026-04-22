export default function ExpenseCard({ expense }) {
  return (
    <div className="bg-white p-4 rounded shadow flex justify-between">
      <div>
        <h2 className="font-semibold">{expense.title}</h2>
        <p className="text-sm text-gray-500">{expense.category}</p>
      </div>

      <div className="text-right">
        <p className="font-bold">₹{expense.amount}</p>
        <p className="text-sm text-gray-400">
          {new Date(expense.date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}