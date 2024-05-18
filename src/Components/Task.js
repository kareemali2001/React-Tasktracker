import {FaTimes} from 'react-icons/fa'
const Task = ({task , ondeletetask, togglereminder}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' :' '}`} onDoubleClick={()=> togglereminder(task.id)}>

        <h3>{task.text} <FaTimes style={{color: 'red', cursor: ' pointer'} } onClick={() => ondeletetask (task.id)}/>
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task