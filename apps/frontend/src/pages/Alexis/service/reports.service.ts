import api from "../../../libs/api";

export const getAllReports = async () => {
    try {
        const response = await api.get("/reports");
        return response.data
    } catch (e) {
        console.error(e)
    }
}