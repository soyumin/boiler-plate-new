const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose"); //몽구스를 이용해 몽고db와 앱을 연결
mongoose.connect(
  "mongodb+srv://soyumin:asdf1234@boiler-plate-new-l8fp5.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  } //에러 방지하기위한..
).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
