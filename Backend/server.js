const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": process.env.privateKey } }
    );
    return res.status(r.status).json(r.data);

  } catch (e) {
    return (e);
  }
});

app.listen(3001);
