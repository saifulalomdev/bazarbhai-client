import { useState } from "react";
import { Navigate } from "react-router-dom"
import OrderListItem from "../compnents/clientCompnents/OrderList/OrderListItem";
import Paginatore from "../compnents/clientCompnents/OrderList/Paginatore";
import Loader from "../compnents/globalComponents/Loader";
import { useOrders } from "../hooks/useOrder";

export default function OrderList() {

  const [page, setPage] = useState(1)
  const { error, isLoading, data } = useOrders(page)

  if (isLoading) return <Loader />
  if (error) throw new Error(error)

  if (!localStorage.getItem("token")) return <Navigate to="/" />

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-xl font-bold">অর্ডার লিস্ট</h1>

      {/* ======== render data ========= */}
      {data?.orders?.length > 0 ? data?.orders?.map(order => (
        <OrderListItem key={order?._id} order={order} />
      )) : <span className="block text-center mt-5">আপনি কোন অর্ডার করেননি। </span>}

      {!isLoading &&
        data?.orders?.length > 0 &&
        <Paginatore
          hasMore={data?.hasMore}
          setPage={setPage}
          page={page}
        />}
    </div>
  );
}
