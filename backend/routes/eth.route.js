const express = require ("express");
const {viewTask, viewAllTask, createTask, updateTask, deleteTask} = require ("../controllers/eth.controller");

const router = express.Router();

router.get("/view-task/:taskId", viewTask);
router.get("/view-all-task", viewAllTask);
router.post("/create-task", createTask);
router.put("/update-task", updateTask);
router.delete("/delete-task/:taskId", deleteTask);

module.exports= router;