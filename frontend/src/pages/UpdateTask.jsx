import { updateTask } from '../hooks/updateTask';
import Navigation from './Navigation'

const UpdateTask = ({state}) => {

  const {contract, accounts} = state;

  const updateToTask = async (e) => {
    e.preventDefault();
    const taskName = document.querySelector("#taskName").value;
    const taskDate = document.querySelector("#taskDate").value;
    const taskID = document.querySelector("#taskID").value;

    const updateInfo = await updateTask(taskDate);
    
    if(updateInfo.success){
       const updateTransact = await contract.updateTask(taskID, taskName, taskDate);
      // This line waits for the transaction to be mined and confirmed on the Ethereum network. 
        await updateTransact.wait();
    }else{
      throw new Error("Task cannot be updated because of date clash !");
    }
  }

  return (
    <>
    <Navigation />
    <div className="update_task todo_btn">
        <form onSubmit={updateToTask}>
          <label>
            ID:
            <input id="taskID" />
          </label>
          <label>
            Name:
            <input id="taskName" />
          </label>
          <label>
            Date:
            <input id="taskDate" />
          </label>
          <button type="submit">Update Task</button>
        </form>
  </div>
    </>
  )
}

export default UpdateTask