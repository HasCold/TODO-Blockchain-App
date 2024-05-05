const contract = require("../contract/eth.contract");

const isSpecialTask = async (taskId) => {
    const tasks = await contract.allTask();
    const parseTaskId = Number(taskId);

    const foundTask= tasks.find(task => {
        const parseBigInt = Number(task[0]); 
        return parseBigInt === parseTaskId
    });
    const priorityValue = foundTask[1].trim().split(" ")[0];

    if(priorityValue === "priority"){
        return true;
    }
    return false;
}

module.exports= isSpecialTask;