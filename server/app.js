const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
  allowedHeaders: [
    "Content-Type",
    "origin",
    "x-requested-with",
    "content-type",
  ],
};

app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/users", require("./routes/users"));
app.use("/api/timers", require("./routes/timers"));
app.use("/api/projects", require("./routes/projects"));

module.exports = app;
