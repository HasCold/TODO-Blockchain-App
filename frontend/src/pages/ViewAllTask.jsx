import { useEffect, useState } from 'react'
import { allTask } from '../hooks/getAllTask';

const ViewAllTask = () => {
  
  const [taskList, setTaskList] = useState([]);
  
  const fetechAllTask = async () => {
    const data = await allTask();
    if(data.success){
        setTaskList(data.data);
    }
  } 

  useEffect(() => {
    fetechAllTask();

  }, []);

  return (
    <div>
        <div style={{color: "white"}}>
            {taskList.length > 0 && (
                taskList.map((val, i) => (
                    <div key={i}>
                    <p>Msg: {val.name}</p>
                    <time>Date: {val.date}</time>
                    </div>
                ))
            )}
        </div>
    </div>
  )
}

export default ViewAllTask