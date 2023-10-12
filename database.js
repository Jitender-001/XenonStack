const signInForm = document.getElementById('sign-in-form');
const signInButton = document.getElementById('submit');
// signInButton.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log("Hello world");
//     document.write("Add this texxt");
// })
signInButton.addEventListener('click', function (event) {
    console.log("button clicked");
    event.preventDefault(); // Prevent the default form submission
    // document.write("write the button")
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // document.write("write the button")
    // const { createPool } = require('mysql');
    // const pool = createPool({
    //     host: "localhost",
    //     user: "root",
    //     passoword: "",
    //     database: "user",
    //     connectionLimit: 10
    // })
    // document.write("write the button")
    // pool.query(`select * from user1`, (err, result, fields) => {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     // document.write(result);
    //     return console.log(result);
    // })
    // document.write("write the button")
    // document.write("write the button")
    var mysql = require('mysql');
    document.write("write the button")
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "user"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "select * from project_table";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    console.log("1 record inserted");
  });
});


});