require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const errorHandler = require("./handlers/errorHandler");
const router = require("./routers");
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);
app.use(errorHandler);

app.listen(PORT, () => console.log(`SERVER LISTENING AT PORT ${PORT}`));
