// // figlet 모듈을 요구한다
// var figlet = require("figlet");

// figlet("I did it!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });


// 터미널에서 실행(node jocoding.js) 후에 커서가 다음줄에서 대기하고 있으면, 실행 중!
// localhost:3000 으로 들어가면 "Hello World" 라고 적혀있음
const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/dog', function (req, res) {
    res.send('<h1>강아지 : 멍멍</h1>')
  })

app.get('/cat', function (req, res) {
res.send('고양이 : 야옹야옹')
})

app.get('/test_dog', function (req, res) {
    res.json({'sound' : '멍멍'})
})

app.get('/test_cat', function (req, res) {
    res.json({'sound' : '야옹야옹'})
})


// 변수값으로 주기(라우팅을 수동으로 주는 것이 아님)
// get 방식 => 주소를 이용
// 예> http://youtube/침착맨 & http://youtube/우왁굳

// 콜론을 이용
app.get('/user/c/:id', function (req, res) {
    // localhost:3000/user/soojin -> 이라고 입력하면 터미널에 { id : 'soojin' } 이라고 출력 됨
    // localhost:3000/user/jsjs -> 이라고 입력하면 터미널에 { id : 'jsjs' } 라고 출력 됨
    
    // #1. 방법
    const p = req.params;
    console.log(p)

    // #2. 방법
    // const { id } = req.params
    // console.log(id);
    
    res.json({'userID' : p.id})
})

// 쿼리를 이용(키:밸류)
// 예> http://google.com/search?q=asdasd -> q라는 변수에 asdasd 값을 넣겠다.
// localhost:3000/user/q/aaa?name=soojin&age=22&k=kiiki
// 위에처럼 주소를 입력했더니, 터미널에 { name: 'soojin', age:'22', k:'kiiki' } 이 출력 됨
app.get('/user/q/:id', function (req, res) {
    const q = req.query
    console.log(q)

    // q.name을 하게 되면 name의 변수에 입력한 값을 출력할 수 있음 => 위에 결과에 따르면 soojin이 됨
    console.log(q.name)

    res.json({'userID' : q.name})
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})