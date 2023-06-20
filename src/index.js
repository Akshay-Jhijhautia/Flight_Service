const express = require("express");
const cors = require("cors");
const { ServerConfig } = require("./config");

const apiRoutes = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("Healthy");
});

app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully started the server on port = ${ServerConfig.PORT}`);
});
