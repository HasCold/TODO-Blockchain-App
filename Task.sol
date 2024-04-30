// SPDX-License-Identifier: MIT
pragma solidity >= 0.5.0 < 0.9.0;

contract TODO {
    
    struct Task{
        uint id;  // Initial value of id is 0
        string name;  //  " "
        string date;  // " "
    }   

    address owner;
    Task task;
    mapping(uint => Task) tasks;   // Lists of all tasks
    uint taskId = 1;

    modifier checkId(uint id){
        require(id != 0 && id < taskId, "Invalid Id");
        _;
    }

    modifier checkOwner(){
        require(owner == msg.sender, "Invalid Owner");
        _;
    }

    constructor(){
        owner = msg.sender;
    }

    function creatTask(string calldata _taskName,string calldata _date) public {
        tasks[taskId] = Task(taskId, _taskName, _date);
        taskId++;
    }

    function updateTask(uint _taskId, string calldata _taskName, string calldata _date) checkId(_taskId) public {
        tasks[_taskId] = Task(_taskId, _taskName, _date);
    }

    function allTask() public view returns (Task[] memory) {
        Task[] memory taskList = new Task[](taskId - 1);  // In Solidity, you cannot directly return the entire mapping in a function. This is because Solidity does not support returning complex data types like mappings directly. We can only return one element from mapping in the function.

        for (uint i = 0; i < taskId-1; i++){  
            taskList[i] = tasks[i+1];  // To work with mappings, you typically need to access individual elements or iterate through them within your smart contract functions. If you need to retrieve all the values stored in a mapping, one common approach is to use an array or another data structure to store the keys and then retrieve the corresponding values using those keys.
        }

        return taskList;
    }

    function viewTask(uint _taskId) checkId(_taskId) public view returns(Task memory){
        return tasks[_taskId];
    }

    // 2, blockchain, 2/12/22
    // 0, " ", " " 
    function deleteTask(uint _taskId) checkId(_taskId) public {
        delete tasks[_taskId];  // solidity give us the method of delete property through which we can set the value to the initial state
    }
}   

// Contract Address :-
// 0x6abAFbf7BeE7D9c702B557474942120473688ED0