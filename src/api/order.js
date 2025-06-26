import bazarBhaiApi from "../config/axios"

export async function placeOrder(order) {
    const res = await bazarBhaiApi.post("/api/orders/", order)
    return res.data
}

export async function fetchOrderDetails(orderId) {
    const res = await bazarBhaiApi.get(`/api/orders/${orderId}`)
    return res.data
}

export async function fetchOrders(page) {
    const res = await bazarBhaiApi.get(`/api/orders`, {
        params: { page }
    })
    return res.data
}