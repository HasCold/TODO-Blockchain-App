import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Wallet from "./pages/Wallet";
import CreateTask from "./pages/CreateTask";
import ViewTask from "./pages/ViewTask";
import UpdateTask from "./pages/UpdateTask";
import DeleteTask from "./pages/DeleteTask";
import ViewAllTask from "./pages/ViewAllTask";
import { useState } from "react";
import "./App.css";

const App = () => {

  const [state,setState] = useState({web3:null,contract:null,accounts:null})

  const saveState = ({web3, contract, accounts}) => {
    setState({web3, contract, accounts});
  }

  const router = createBrowserRouter([
    {path:'/',element:<Wallet saveState={saveState} />},
    {path:'/view-all-tasks',element:<ViewAllTask />},
    {path:'/create-task',element:<CreateTask state={state} />},
    {path:'/view-task',element:<ViewTask/>},
    {path:'/update-task',element:<UpdateTask state={state} />},
    {path:'/delete-task',element:<DeleteTask state={state} />}
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App