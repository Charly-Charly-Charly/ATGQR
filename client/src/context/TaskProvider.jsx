import { createContext, useContext, useState } from "react";
import {
  getTasksRequest,
  getEventRequest, 
  getEventsRequest,
  createEventRequest,
  deleteTaskRequest,
  createTaskRequest,
  getQRRequest,
  getQRsRequest,
  getQRsEventRequest,
  getTaskRequest,
  updateTaskRequest,
  toggleTaskDoneRequest,
} from "../api/tasks.api";
import { TaskContext } from "./TaskContext";

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTasks must be used within a TaskContextProvider");
  }
  return context;
};

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [events, setEvents] = useState([]);

  async function loadTasks() {
    const response = await getTasksRequest();
    setTasks(response.data);
  }
  

  async function loadEvents() {
    const response = await getEventsRequest();
    setTasks(response.data);
  }
  async function LoadQRs() {
    const response = await getQRsRequest();
    setTasks(response.data);
  }

  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const createTask = async (task) => {
    try {
      await createTaskRequest(task);
      // setTasks([...tasks, response.data]);
    } catch (error) {
      console.error(error);
    }
  };
  const createEvent = async (Event) => {
    try {
      await createEventRequest(Event);
      // setTasks([...tasks, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const getTask = async (id) => {
    try {
      const response = await getTaskRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  const getEvent = async (id) => {
    try {
      const response = await getEventRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async (id, newFields) => {
    try { 
      const response = await updateTaskRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
/////////////////////////////////

const toggleTaskDone = async (id_qr) => {
  try {
    const taskIndex = tasks.findIndex((task) => task.id_qr === id_qr);
    if (taskIndex!== -1) {
      const taskFound = tasks[taskIndex];
      await toggleTaskDoneRequest(id_qr, taskFound.estado === 0? true : false);
      setTasks([
       ...tasks.slice(0, taskIndex),
        {...taskFound, estado:!taskFound.estado },
       ...tasks.slice(taskIndex + 1),
      ]);
    } else {
      console.error(`Task with id_qr ${id_qr} not found`);
    }
  } catch (error) {
    console.error(error);
  }
};
/////////////////////

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loadTasks,
        loadEvents,
        deleteTask,
        getEvent,
        createEvent,
        createTask,
        getTask,
        updateTask,
        toggleTaskDone,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
