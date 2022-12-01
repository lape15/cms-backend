//server.js
import app from "./app";
require("dotenv").config();
const port = process.env.NODE_DOCKER_PORT; //Line 3
app.listen(port, () => {
  console.log(`Server running on port ${port}`, process.env.NODE_DOCKER_PORT);
});
