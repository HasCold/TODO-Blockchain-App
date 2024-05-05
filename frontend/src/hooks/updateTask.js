import { SERVER_PORT } from "../constants/port";

export const updateTask = async (taskDate) => {
    try {
        const res = await fetch(`${SERVER_PORT}/update-task`, {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({taskDate})
        });
        const data = await res.json();
        return data;

    } catch (error) {
        console.error(error);
    }
}