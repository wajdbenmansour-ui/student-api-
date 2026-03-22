const express = require("express");

const app = express();
app.use(express.json());

let students = [];

app.get("/students", (req, res) => {
    res.json(students);
});

app.post("/students", (req, res) => {
    const student = req.body;
    students.push(student);
    res.status(201).json(student);
});

app.delete("/students/:id", (req, res) => {
    students.splice(req.params.id, 1);
    res.sendStatus(204);
});

module.exports = app;