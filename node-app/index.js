const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

var host = 'db'
var port = '5432'

var pgp = require('pg-promise')(/* options */)
var db = pgp(`postgres://myuser:examplepw@${host}:${port}/database`)

app.post('/', async (req, res) => {

  await db.none('INSERT INTO tbl_test(first_name, last_name, age) VALUES(${name.first}, $<name.last>, $/age/)', {
    name: {first: req.body.firstName, last: req.body.lastName},
    age: req.body.age
  });

  res.sendFile(path.join(__dirname+'/index.html'))
})

app.get('/', async (req, res) => {
  await db.none('CREATE TABLE IF NOT EXISTS tbl_test(first_name varchar(255), last_name varchar(255), age varchar(255))')
  res.sendFile(path.join(__dirname+'/index.html'))
})

app.get('/users', async (request, response) => {
  let data = await db.any('SELECT * FROM tbl_test')
  response.json(data);
})

app.get('/list', async (request, response) => {
  response.sendFile(path.join(__dirname+'/list.html'))
})

app.listen(8080, () => console.log('Server is up and running'));