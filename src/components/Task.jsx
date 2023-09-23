import { useState, useEffect } from "react";
import axios from "axios";
import * as React from "react";
import Button from "@mui/material/Button";

import "./Task.scss";

const Task = () => {
  const [task, setTask] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}`);
      setTask(data.slip);
    } catch (_error) {}
  };

  return (
    <div className="container">
      <div className="task-container">
        <headline>Advice of the day :</headline>
        <div className="last-task">
          <p>{task.advice}</p>
          <Button onClick={fetchTasks} variant="contained">
            Advice
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Task;
