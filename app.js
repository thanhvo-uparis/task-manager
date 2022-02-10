const express = require("express");
const app = express();

const port = 8080;

app.get("/tasks", (request, response) => {
    response.send("Task manager");
})

app.listen(port, console.log(`Server is running at port ${port}`));


