import './TodoList.scss';
import SingleTodoItem from '../../components/SingleTodoItem/SingleTodoItem'
import { useState } from 'react'
import { BsPlusCircleFill } from "react-icons/bs";
import { FaHandPointer } from "react-icons/fa"

const TodoList = () =>{

    const [taskList, setTaskList] = useState([]);
    const [newTask, setNewTask] = useState("");

  //removes every task
  const resetTasks =() =>{
    setTaskList([]);
  }

    //adds a task
    const addTask = () =>{
        newTask.length == 0 ? alert("Please enter a todo") : setTaskList([...taskList, {task: newTask, key: taskList.length}])
        setNewTask("");
    }

    //deletes a task
    const deleteTask = (id) =>{
      setTaskList(taskList.filter((task) => task.key != id))
    }

    //stores value from the input bar
    const handleChange = event =>{
        setNewTask(event.target.value)
    }

    //creates the list of tasks
    const mappedList = taskList.map(item => {
      return (
          <SingleTodoItem 
          key={item.key} 
          id={item.key}
          text={item.task} 
          deleteHandler={deleteTask}
          />
      )
  })

  return (

    <>

    <div className="bar">
        <input className="bar__input"type="text" onChange={handleChange} value={newTask} placeholder="Add your task here..."></input>
        <div onClick={addTask}>
          <BsPlusCircleFill/>
        </div>  
    </div>

    <div className="list">

      {taskList.length>0 &&
        <div>
          {mappedList}
        </div>}

      {taskList.length == 0 &&
        <div className="">
          Nothing to see here yet... Add a task in the fields above! <FaHandPointer/>
        </div>}
    
    </div>
    </>
  );
}

export default TodoList;