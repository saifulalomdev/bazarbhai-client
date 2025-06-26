import bazarBhaiApi from "../config/axios";

export async function getLandingPageData() {
   const res = await bazarBhaiApi.get("/api/landing-page")
   return res?.data
}

