import { SERVER_PORT } from "../constants/port";

export const allTask = async () => {
    try {
        const res = await fetch(`${SERVER_PORT}/view-all-task`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }); 
        const data = await res.json();
        console.log(data.data);
        return data;

    } catch (error) {
        console.error(error.message);
    }
}