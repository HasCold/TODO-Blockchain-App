import { useRef, useState } from "react";
import Navigation from "./Navigation"
import { taskCreated } from "../hooks/createTask";

const CreateTask = ({state}) => {

    let inputRefs = {
        "taskName": useRef(null),
        "taskDate": useRef(null),
    };

    const [inputValues, setInputValues] = useState({
        "taskName": '',
        "taskDate": '',
    })

    const handleInputChange = (refName) => {
        return (e) => {
            const value = e.target.value;
            setInputValues({
                ...inputValues,
            [refName]: value
        })
    }}

    const createTask = async (e) => {
        e.preventDefault();
        const {contract, accounts} = state;
        const data = await taskCreated(inputValues.taskDate);
        console.log("Account :- ", accounts);
        console.log("Contract :- ", contract);

        if(data.success){
          if(contract && inputValues.taskName && inputValues.taskDate){
            const transaction = await contract.creatTask(inputValues.taskName, inputValues.taskDate);
            // This line waits for the transaction to be mined and confirmed on the Ethereum network. 
            await transaction.wait();
            setInputValues({
              taskName: "",
              taskDate: ""
            });
          }
        }else{
          alert("Task cannot be added");
        }
    }

  return (
    <>
    <Navigation />
    <div className="create_task todo_btn">
      <form onSubmit={createTask}>
        <label>
          Name:
          <input id="taskName" type="text" ref={inputRefs.taskName} value={inputValues.taskName} onChange={handleInputChange("taskName")}/>
        </label>
        <label>
          Date:
          <input id="taskDate" ref={inputRefs.taskDate} value={inputValues.taskDate} onChange={handleInputChange("taskDate")}/>
        </label>
        <button type="submit">Create Task</button>
      </form>

      {/* {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>{modalContent}</p>
          </div>
        </div>
      )} */}
    </div>
  </>
  )
}

export default CreateTask