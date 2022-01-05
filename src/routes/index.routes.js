import { Router } from "express";
import {
  renderTasks,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  taskToggleDone,
} from "../controllers/tasks.controller";

const router = Router();

router.get("/", renderTasks);

router.get("/tasks/:id/edit", renderTaskEdit);

router.post("/task/add", createTask);

router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);

router.get("/tasks/:id/toggleDone", taskToggleDone);

export default router;
