import { SERVER_PORT } from "../constants/port"

export const getDeletedTaskInfo = async (taskId) => {
    try {
        const res = await fetch(`${SERVER_PORT}/delete-task/${taskId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        return data;

    } catch (error) {
        console.error(error);
        throw new error.message
    }
}