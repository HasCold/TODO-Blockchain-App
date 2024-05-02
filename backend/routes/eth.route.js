const express = require ("express");
const {viewTask, viewAllTask, createTask} = require ("../controllers/eth.controller");

const router = express.Router();

router.get("/view-task/:taskId", viewTask);
router.get("/view-all-task", viewAllTask);
router.get("/create-task", createTask);

module.exports= router;