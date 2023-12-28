const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const response = await axios.put("https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "e81aad02-bb7e-4c26-95af-19ad701b4d86" } }
    )

    return res.status(response.status).json(response.data);
  } catch (error) {
    console.log(error)
    return res.status(error.response.status).json(error.response.data);
  }
});

app.listen(5000);