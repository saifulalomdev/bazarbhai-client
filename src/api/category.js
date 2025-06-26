import bazarBhaiApi from "../config/axios"

export async function getParentsCategories() {
    const { data } = await bazarBhaiApi.get("/api/categories")
    return data
}

// get child categories
export async function getChildCategories(id) {
    const { data } = await bazarBhaiApi.get(`/api/categories/child-categories?parent=${id}`)
    return data
}