import bazarBhaiApi from "../config/axios";

export async function fetchProducts(params) {

    const response = await bazarBhaiApi.get("/api/products", {
        params: params
    })
    return response.data
}

export async function fetchProductDetails(id) {
    const res = await bazarBhaiApi.get(`/api/products/${id}`)
    return res.data
}