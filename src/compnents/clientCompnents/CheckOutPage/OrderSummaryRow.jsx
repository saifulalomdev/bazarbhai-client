
export default function OrderSummaryRow({ text, value, className = "border-b" }) {
  return (
    <div className={`flex justify-between items-center border-b border-gray-300 ${className}`}>
      <span>{text}</span>
      <span className="font-bold">
        {value}
      </span>
    </div>
  )
}
