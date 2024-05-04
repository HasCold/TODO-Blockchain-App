import { useEffect, useState } from 'react'
import { allTask } from '../hooks/getAllTask';
import Navigation from './Navigation';

const ViewAllTask = () => {
  
  const [taskList, setTaskList] = useState([]);
  
  const fetechAllTask = async () => {
    const data = await allTask();
    console.log(data);
    if(data.success){
        setTaskList(data.data);
    }
  } 

  useEffect(() => {
    fetechAllTask();

  }, []);

  return (
    <div>
    <Navigation />

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