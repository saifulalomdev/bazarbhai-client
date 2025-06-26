import useCartStore from "../../../store/useCartStore";
import OrderSummaryRow from "./OrderSummaryRow";

export default function OrderSummery({ deliveryCost = 0 , paymentMethod}) {
    const productsTotalCost = useCartStore(state => state.totalPrice)

    return (
        <div className="p-4 flex-1 border rounded">
            <h1 className="heading">অর্ডার সারসংক্ষেপ</h1>
            <OrderSummaryRow text="পেমেন্ট অপশন --" value={paymentMethod} />
            <OrderSummaryRow text="সর্বমোট পণ্য --" value={`${productsTotalCost} ৳`} />
            <OrderSummaryRow text="অগ্রিম পেমেন্ট (শুধু ডেলিভারি ফি) --" value={`${deliveryCost} ৳`} />
            <OrderSummaryRow text="ক্যাশ অন ডেলিভারি  --" value={`${productsTotalCost} ৳`} />
        </div>
    )
}
