import express from "express";

import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is ready and running 🏃 in port ${PORT}`);
});

app.get("/", (request, response) => {
  response.json({ message: "Root Route is ready" });
});

app.post("/messages", (request, response) => {
  const bodyData = request.body;
  console.log(bodyData);

  response.json({
    message: "Message received ✅",
  });
});
