import Header from "./Components/Header";
import './index.css';
import { useState } from "react"
import AddTask from "./Components/AddTask";

import Tasks from "./Components/Tasks";
function App() {
  const [showaddtasks,setshowaddtasks]= useState(false)

  const [tasks,settasks] = useState( [
    {
        id:1,
        text: ' doctor appointment',
        day: ' feb 5th',
        remider:'true',
    
    },
    {
        id:2,
        text: ' meeting ',
        day: ' feb 6th',
        remider:'true',
    
    },
    {
        id:3,
        text: ' shopping',
        day: ' feb 7th',
        reminder:'false',
    
    },
])


///emsa7 eltask
const deletetask = (id) => {
 settasks(tasks.filter((task)=> task.id !== id ))
}

///reminder 
const togglereminder = (id) =>
  {
    settasks(tasks.map((task)=> task.id ===id ? {...task,reminder:!task.reminder}: task))
  }
const addTask = (task) => {
  const id = Math.floor(Math.random()*1000 )+1
  const NewTask = {id,...task}
  settasks([...tasks,NewTask])
}
 


  return (
    <div className="container">
    <Header onAdd={()=> setshowaddtasks(!showaddtasks)} showadd={showaddtasks} /> 
     {showaddtasks && < AddTask onAdd={addTask}/>}
   {tasks.length  > 0 ?
    <Tasks tasks ={tasks} ondeletetask={deletetask} togglereminder= {togglereminder} /> : 'No tasks today'
}
    </div>
  );
}

export default App;
