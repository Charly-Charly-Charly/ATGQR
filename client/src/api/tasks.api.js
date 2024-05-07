import axios from "axios";


export const getEventRequest = async (id_event) =>
  await axios.get(`http://localhost:3000/event/${id_event}`);

export const getEventsRequest = async () =>
  await axios.get("http://localhost:3000/event");

export const getQRRequest = async (id_qr) =>
  await axios.get(`http://localhost:3000/qr/${id_qr}`);

export const getQRsRequest = async () =>
  await axios.get("http://localhost:3000/qr");

export const getQRsEventRequest = async () =>
  await axios.get(`http://localhost:3000/QRevent/${ID_evento}`);

export const getTasksRequest = async () =>
  await axios.get("http://localhost:3000/tasks");
  
export const createEventRequest = async (Event) =>
await axios.post("http://localhost:3000/event", Event);

export const createTaskRequest = async (url) =>
  await axios.post("http://localhost:3000/logs", url);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`http://localhost:3000/tasks/${id}`);

export const getTaskRequest = async (id) =>
  await axios.get(`http://localhost:3000/tasks/${id}`);

export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`http://localhost:3000/tasks/${id}`, newFields);

export const Validate = async (id_qr, estado, validateat) => {
  const data = { estado, validateat };
  await axios.put(`http://localhost:3000/qr/${id_qr}`, data);
};

export const toggleTaskDoneRequest = async (id_qr, estado) => {
  try {
    const response = await axios.put(`http://localhost:3000/qr/${id_qr}`, {
      estado
    });
    return response.data;
  } catch (error) {
    console.error(`Error toggling task done: ${error.message}`);
    throw error; // rethrow the error to propagate it to the caller
  }
};
 