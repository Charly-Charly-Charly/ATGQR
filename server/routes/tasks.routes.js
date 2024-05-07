 
import { Router } from "express";
import {
  getTasks,
  getTask,
  createLog,
  getEvents,
  getEvent,
  getqr,
  getqrs,
  createEvent,
  getqrsevent,
  Validate,
  deleteTask,
  updateTask,
  getLogs
} from "../controllers/tasks.controllers.js";

const router = Router();

router.get("/tasks", getTasks);

router.get("/event", getEvents);

router.get("/event/:id_event", getEvent);

router.get("/qr", getqrs);

router.get("/qr/:id_qr", getqr);

router.get("/QRevent/:ID_evento", getqrsevent);

router.get("/logs",getLogs);

// router.get("/tasks/:id", getTask);

router.post("/logs", createLog);

router.post("/event", createEvent);

router.put("/tasks/:id", updateTask);

router.put("/qr/:id_qr", Validate);

router.delete("/tasks/:id", deleteTask);

export default router;
