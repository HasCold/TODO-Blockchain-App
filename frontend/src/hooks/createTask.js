import { SERVER_PORT } from "../constants/port"

export const taskCreated = async (taskDate) => {
    try {
        const res = await fetch(`${SERVER_PORT}/create-task`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({taskDate})
        });
        const data = await res.json();
        return data;

    } catch (error) {
        console.error(error);
    }
}