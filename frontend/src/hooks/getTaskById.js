import { SERVER_PORT } from "../constants/port";

export const getTaskById = async (taskId) => {
    try {
        const res = await fetch(`${SERVER_PORT}/view-task/${taskId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        return data;

    } catch (error) {
        console.error(error);
    }
}