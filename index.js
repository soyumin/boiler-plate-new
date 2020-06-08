const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const { User } = require("./models/User");
const config = require("./config/key");

//bodyParser가 분석해서 server에 가져옴 urlencoded , json 으로 되어있는 파일을 분석함
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require("mongoose") //몽구스를 이용해 몽고db와 앱을 연결
mongoose
  .connect(
    config.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    } 
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));
  //에러 방지하기위한..

app.get("/", (req, res) => res.send("Hello World! 뿡"));

app.post("/register", (req, res) => {
  // 회원가입할떄 필요한 정보들을 client에서 가져오면
  //그것들을 데이터베이스에 넣어준다
  const user = new User(req.body);

  user.save((err, userInfo) => {
    // 정보들이 user모델에 저장됨
    if (err) return res.json({ success: false, err }); //저장할때 에러가 있으면
    return res.status(200).json({
      success: true
    }); //회원가입에 성공했을경우
  });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
