const express = require('express'); //สร้างตัวแปร
const hbs = require('express-handlebars');
const router = require('./routes/index');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path');

//app.get('/',(req,res)=>{  //เรียกใช้ตัวแปร app  ตัวแปร app อ่าน ฟังชั่นคอลแบ็ค  ภายในฟังก์ชั่นคอลแบ็ค มีพารามิเตอร์ 2 ตัว คือ '/' และ req,res 
//  res.send("<h1>My Protfolio</h1>");  //พารามิเตอร์ res ส่ง My Portfolio 

//});

//Template engine setting
app.engine('hbs', hbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');

//router
app.use(router); //ตัวแปร app ใช้ par และ เราเตอร์ 

//Middleware
app.use(express.static(path.join(__dirname, 'public')));


/*app.listen( //เรียกใช้ app ตัวแปร app ฟัง port 3000
    3000,
    () => {
        console.log("Listening to port 3000"); //แสดงใน consolelog  "Listening to port 3000"
    }
);*/

app.listen(
    PORT,
    () => {
        console.log(`Listening to port ${PORT}`);
    }
);