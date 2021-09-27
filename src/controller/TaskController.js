const Task = require("../models/Task");

const list = async (req, res) => {
    const tasks = await Task.find();
    return res.status(200).send(tasks)
}

const store = async (req, res) => {
    const { title } = req.body;

    if(await Task.findOne({ title })) {
        return res.status(400).send({ error: 'Task already exists'})
    }

    const task = await Task.create(req.body);

    return res.status(201).json(task)
}

module.exports = {
    list,
    store
}