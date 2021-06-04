const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

mongoose
  .connect(
    "mongodb+srv://HanSeongMin:Rlflsdmlskfro1@@boilerplate.qosdp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () =>
  console.log(
    `Express started on port: '${port}', ` + `Press 'Ctrl + C' terminate...`
  )
);
