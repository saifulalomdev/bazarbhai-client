import OrderSummaryRow from "../CheckOutPage/OrderSummaryRow"


export default function OrderOverview({ order }) {
  const {
    name = "null",
    phoneNumber = "null",
    secondPhoneNumber = "null",
    fullAddress = "null",
    area = "null",
    village = "null"
  } = order?.shippingAddress;

  const customer = order?.customer;
  const paymentMethod = order?.paymentMethod
  const {
    _id = "null",
    createdAt = "null",
    orderStatus = "null",
    prePayment = "null",
    deliveryFees = "null",
    deliveryType = "null",
    totalCost = "null",
    cashOnDelivery = "null"
  } = order;


  return (
    <div className="border-gray-300 mb-2 text-slate-700  w-full">
      <OrderSummaryRow text="অর্ডার আইডি" value={_id} />
      <OrderSummaryRow text="সময়" value={createdAt} />
      <OrderSummaryRow text="অর্ডার স্টেইট" value={orderStatus} />
      <OrderSummaryRow text="ডেলিভারি ফি" value={`${deliveryFees} ৳`} />
      <OrderSummaryRow text="ডেলিভারি ধরন" value={deliveryType} />
      <OrderSummaryRow text="সর্বমোট" value={`${totalCost} ৳`} />
      <OrderSummaryRow text="পূর্বে পরিশোধিত" value={`${prePayment} ৳`} />
      <OrderSummaryRow text="ক্যাশ অন ডেলিভারি" value={`${cashOnDelivery} ৳`} />
      <OrderSummaryRow text="পরিশোধের মাধ্যম" value={`${paymentMethod} `} />

      <h1 className="text-xl mt-5 font-bold mb-2">শিপিং অ্যাড্রেস</h1>
      <OrderSummaryRow text="নাম" value={name} />
      <OrderSummaryRow text="ফোন নাম্বার" value={phoneNumber} />
      <OrderSummaryRow text="ইমার্জেন্সি ফোন নাম্বার " value={secondPhoneNumber} />
      <OrderSummaryRow text="এরিয়া" value={area} />
      <OrderSummaryRow text="গ্রাম" value={village} />
      <OrderSummaryRow text="পূর্ন ঠিকানা " value={fullAddress} />
    </div>
  )
}
