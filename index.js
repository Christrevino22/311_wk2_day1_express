
const express = require('express')
const bodyParser = require('body-parser')
const users = require('./routers/users')
const app = express()
const port = process.env.PORT || 4000 

app.use(bodyParser.json())

app.use(users);

// const { users } = require('./state')

// /* BEGIN - create routes here */
// //get all the users()
// //this returns all the users in postman /users to display ALL USERS!! 
// app.get('/users', (req, res) => {
//   res.send(users)
// })





//   //get a single user
// app.get('/users/:userId', (req, res) => {
//   //I'm not too sure what this logs or what it's called
//   // console.log(req.params);
//   //obviously need a user id varible 
//   //need to read up more on this subject of parse int
//   //but baiscally without parse Int it will return a string not a NUMBER;
//   let userId = parseInt(req.params.userId);
//   //using the find method to locate and make sure the ID's MATCH
//   let user = users.find(user => user._id === userId);

//   res.send(user);



// })




//   //This will POST a user
// app.post('/users', (req, res) => {
//   //gotta console.log req.body to display everything in the body
//   // console.log(req.body);
//   //create a user simply by displaying body of that user
//   let user = req.body;
//   //this should naturally increment the id on its own to keep users from having the same ID
//   user._id = users.length + 1;

//   //we will need to ADD a NEW USER object to add to the USERS array
//   //now we need to push the new user
//   users.push(user);

  


//   //We will need to return the newly created user
//   res.send(users);
// })





//   //This will update a specific user!
// app.put('/users/:userId', (req, res) => {
  
//   let userId = (parseInt(req.params.userId) - 1);
//   let payload = req.body;
  
//   //need to look up a user
//   // this will find user by its ID thus it looking up the user
//   let user = users.find(user => user._id === userId);

//   //Change values on the user
//   Object.keys(payload).map(key => {
//     user[key] = payload[key];
//   });
//   //return the updated user!
//   res.send(users)
// })





// //removes users from the array
// app.delete('/users/:userId', (req,res) => {
//   let userId = parseInt(req.params.userId);
//   let user = users.find(user => user._id === userId);
//   user.isActive = false;


//   res.send('Deleted!!')
// })

// /* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))