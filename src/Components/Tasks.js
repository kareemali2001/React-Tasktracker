import Task from "./Task";

const Tasks = ({ tasks , ondeletetask , togglereminder }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} 
         task={task}
         ondeletetask = {ondeletetask} 
         togglereminder={togglereminder} />
      ))}
    </>
  );
};

export default Tasks;
