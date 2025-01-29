// .
// const express = require('express');
// const bodyparser = require('body-parser');
// const cors = require('cors');
// const mysql = require('mysql2');

// const app = express();

// app.use(cors());
// app.use(bodyparser.json());
// .


// database connection
// .
// const db = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'aman',
//     database:'user_database',
//     port:3306
// });
// .
// check database connection
// .
// db.connect(err=>{
//     if(err) {console.log(err,'dberr');}
//     console.log('database connected ...');
// })
// .

// get all data:-
// .
// app.get('/user',(req,res)=>{
//     console.log('get users');
// })
// .
// app.get('/user',(req,res)=>{

//     let qr = 'select * from users';

//     db.query(qr,(err,result)=>{
        
//         if(err)
//         {
//             console.log(err,'errs');
//         }

//         if(result.length>0)
//         {
//             res,send({
//                 message:'all user data',
//                 data:result
//             });
//         }
//     });
// });


// get single data:-
// app.get('/user/:id',(req,res)=>{

//     let gID = req.params.id;

//     let qr = 'select*from users where id = ${gID}';

//     db.query(qr,(err,result)=>{

//         if(err){console.log(err);}

//         if(result.length>0)
//         {
//             res.send({
//                 message:'get single data',
//                 data:result
//             });
//         }
//         else
//         {
//             res.send({
//                 message:'data not found';
//             });
//         }



//     })


// });


// create data

// app.post('/user',(req,res)=>{

//     console.log(req,body,'createdata');
//     let No =req.body.no;
//     let fullName =req.body.fullname;
//     let eMail =req.body.email;
//     let mb =req.body.mobile;


//     let qr = 'inser into users(No,fullname,email,mobile)values('${id}','${fullName}','${eMail}','${mb}')';
    
//     console.log(qr,'qr')
//     db.query(qr,(err,result)=>{

//         if(err){console.log(err);}
//         console.log(result,'result')
//         if(result.length>0)
//         {
//             res.send({
//                 message:'data inserted'
//             });
//         }else
//         {
//             res.send({
//                 message:'wrong...'
//             });
//         }
//     });

// });





const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// SQL Database Connection
const db = mysql.createConnection({
  host: 'localhost',   // Your database host
  port:3306,
  user: 'root',        // Your MySQL username
  password: 'aman',        // Your MySQL password
  database: 'testdb',  // Your database name
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to MySQL database.');
  }
});

// API to Insert Data
app.post('/add-data', (req, res) => {
  const { name, email,mobile, pin_code, budget } = req.body; // Example: Receiving name and email
  if (!name || !email || !mobile || !pin_code || !budget) {
    return res.status(400).send('Name,mobile and email are required.');
  }

  const sql = 'INSERT INTO users (name, email, mobile, pin_code, budget) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [name, email, mobile, pin_code, budget], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Failed to insert data.');
    }
    res.status(200).send({ message: 'Data added successfully!', id: result.insertId });
  });
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



























// app.listen(3000,()=>{
//     console.log('server running');
// });

// nodemon index.js