const express = require('express');

const app = express();

var host = 'db'
var port = '5432'

var pgp = require('pg-promise')(/* options */)
var db = pgp(`postgres://myuser:examplepw@${host}:${port}/database`)

// tests connection and returns Postgres server version,
// if successful; or else rejects with connection error:
async function testConnection() {
  const c = await db.connect(); // try to connect
  c.done(); // success, release connection
  return c.client.serverVersion; // return server version
}

app.get('/insert', async (req, res) => {
  await db.none('CREATE TABLE tbl_test(first_name varchar(255), last_name varchar(255), age varchar(255))')
  await db.none('INSERT INTO tbl_test(first_name, last_name, age) VALUES(${name.first}, $<name.last>, $/age/)', {
    name: {first: 'John', last: 'Dow'},
    age: 30
  });

  res.send("DONE")
})

app.get('/', async (req, res) => {
  // let ver = await testConnection()
  // console.log(ver)

  
  // db.one('SELECT 1 FROM tbl_test AS value')
  // .then(function (data) {
  //   res.send('Hello World!!!')
  //   console.log('DATA:', data.value)
  // })
  // .catch(function (error) {
  //   res.send('AAAAAAAAAAAAAAAAAAAAH!')
  //   console.log('ERROR:', error)
  // })

})

app.get('/user/:name', async (request, response) => {
  const name = request.params.name;

  let data = await db.any('SELECT * FROM tbl_test WHERE first_name = $1', name)
  console.log(data)
  response.send(data);
})

app.get('/user/:id', async (request, response) => {
  const id = request.params.id;
  // ... delete user with given id

  response.send('User removed');
})

app.listen(8080, () => console.log('Server is up and running'));