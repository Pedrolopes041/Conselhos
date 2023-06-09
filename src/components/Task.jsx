import { useState, useEffect } from "react";
import axios from "axios";

import "./Task.scss"

const Task = () => {

  const [task, setTask] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get("https://api.adviceslip.com/advice");
      setTask(data.slip);
    } catch (_error) {}
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container">
      <div className="task-container">
        <headline>Advice of the day :</headline>
        <div className="last-task">
          <p>{task.advice}</p>
        </div>
      </div>
    </div>
  );

};

export default Task;
