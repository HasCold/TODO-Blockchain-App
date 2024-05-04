import { useState } from 'react'
import { getTaskById } from '../hooks/getTaskById';
import Navigation from './Navigation';

const ViewTask = () => {
    
    const [task, setTask] = useState([]);
  
    const viewTask = async (e) => {
        e.preventDefault();
        const taskId = document.querySelector("#taskID").value;
        const data = await getTaskById(Number(taskId));
        if(data.success){
            setTask(data.data);
        }else{
            throw new Error();
        }
    }

 return (
    <>
    <Navigation />
    <div style={{color: "white"}}>
        <form onSubmit={viewTask} >
            <label 
            style={{display: "flex", flexDirection: "column"}}            
            >
                ID: <input id='taskID' type="text" />
            </label>
            <button style={{backgroundColor: "black", textAlign: "center", color: "white", width: "100px", borderRadius: "999px"}} type='submit'>View Task</button>
        </form>
    </div>
    </>
  )
}

export default ViewTask