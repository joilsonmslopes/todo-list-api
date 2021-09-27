const express = require("express");
const router = express.Router();
const TaskController = require("./controller/TaskController");

router
    .get("/", TaskController.list)
    .post("/add-task", TaskController.store)

module.exports = router;