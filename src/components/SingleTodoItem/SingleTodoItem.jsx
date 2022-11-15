import './SingleTodoItem.scss';
import {useState} from 'react'
import { FaTrashAlt } from "react-icons/fa";

const SingleTodoItem = ({id, text, deleteHandler}) =>{
  const [checked, setChecked] = useState(false);

  //switches state of checkbox
  const handleCheck = () =>{
   checked ? setChecked(false) : setChecked(true);
  }

  return (
    <div className="task">

      <div className="task__first-section">
        <input type="checkbox" onChange={handleCheck}/>
        <span className={checked ? "task__check" : "task__uncheck"}> {text}</span>
      </div>
      
      <div className="task__second-section">
        <div onClick={() => {deleteHandler(id)}}><FaTrashAlt />
      </div>
    
    </div>

    </div>
  );
}

export default SingleTodoItem;