import bazarBhaiApi from "../config/axios";

export async function getRelatedProducts(params) {
    const res = await bazarBhaiApi.get("/api/products", {
        params
    })
    return res.data.products
}