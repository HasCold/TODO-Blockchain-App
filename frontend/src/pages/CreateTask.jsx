import { useRef, useState } from "react";
import Navigation from "./Navigation"

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
    }
    }

    const createTask = async (e) => {
        e.preventDefault();
        const {contract, accounts} = state;
        
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
          <input id="taskDate" type="date" ref={inputRefs.taskDate} value={inputValues.taskName} onChange={handleInputChange("taskDate")}/>
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