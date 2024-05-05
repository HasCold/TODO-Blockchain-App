import { getDeletedTaskInfo } from '../hooks/getDeletedTask';
import Navigation from './Navigation'

const DeleteTask = ({state}) => {

  const {contract} = state;

  const onDeleteTask = async (e) => {
    e.preventDefault();
    const deleteTaskID = document.querySelector("#delete-task").value;
    const parseDeleteTaskId = Number(deleteTaskID);

    if(typeof parseDeleteTaskId === "number"){
      const dataInfo = await getDeletedTaskInfo(parseDeleteTaskId);

      if(dataInfo.success){
        const transaction = await contract.deleteTask(parseDeleteTaskId);
        await transaction.wait();
      }else{
        alert("Prority Task Cannot Be Deleted !"); 
      }  
    }
  }

  return (
    <>
    <Navigation />
    <div className="create_task todo_btn" style={{height: "100vh"}}>       

    <form onSubmit={onDeleteTask} >
      <label htmlFor='delete-task' >
        Task ID:
      <input type="text" id='delete-task' />
      </label>

      <button type='submit'>Delete Task</button>
    </form>
    </div>
    </>
  )
}

export default DeleteTask