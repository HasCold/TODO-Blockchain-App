const contract = require ("../contract/eth.contract");

const dateClashTask = async (date) => {
    const task = await contract.allTask();
    const foundTask = task.find(task => task.date === date);
    if(foundTask){
        return foundTask.name;
    }
    return "No Task Found";
}

module.exports = dateClashTask