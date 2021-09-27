const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const routes = require("./routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes)

const port = process.env.PORT || 3333;


app.listen(port, () => console.log("server is running..."))