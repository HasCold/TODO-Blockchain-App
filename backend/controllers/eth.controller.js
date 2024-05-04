const { asyncErrorHandler, errorHandler, apiResponse } = require("../middleware/errorHandler.middleware");
const contract = require ("../contract/eth.contract");

const viewTask = asyncErrorHandler( async (req, res) => {
    try {
        const {taskId} = req.params;
        if(!taskId) return errorHandler(res, 404, "Task Id not found");

        const [numToSerialize, ...other] = await contract.viewTask(taskId);
        const data = [Number(numToSerialize), ...other]

        if(!data) return errorHandler(res, 500, "Data can't be handled successfully")
        apiResponse(res, 200, true, data);

    } catch (error) {
        apiResponse(res, 501, false, error);
        console.error(error.message);
    }
});

const viewAllTask = asyncErrorHandler( async (req, res) => {
    try {
        const allTask = await contract.allTask();
        if(allTask.length < 0) return errorHandler(res, 404, "Task list doesn't exist");

        if(allTask.length > 0){
            const taskList = allTask.map(({id, name, date}, i) => {
                const taskId = Number(id);
                return {taskId, name, date}
            });

            apiResponse(res, 200, true, taskList);
        }

    } catch (error) {
        apiResponse(res, 500, false, error);
        console.error(error.message);   
    }
});


const dateClashTask = async (date) => {
    const task = await contract.allTask();
    const foundTask = task.find(task => task.date === date);
    if(foundTask){
        return foundTask.name;
    }
    return "No Task Found";
}

const createTask = asyncErrorHandler( async (req, res) => {
    try {
        // we donot perform any write operations from server because in this case we have to give our private key access to that server
        const {taskDate} = req.body;
        if(!taskDate) return errorHandler(res, 404, "Please submit the task date");
        const task = await dateClashTask(taskDate);

        if(task !== "No Task Found"){
            apiResponse(res, 409, false, {message: "Date clash : Task cannot be added"});
        }else{
            apiResponse(res, 200, true, {message: "Task can be added"});
        }

    } catch (error) {
        apiResponse(res, 500, false, error);
        console.log(error.message);
    }
})


module.exports={viewTask, viewAllTask, createTask}