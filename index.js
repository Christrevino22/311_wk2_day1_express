
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 4000 

const { users } = require('./state')

/* BEGIN - create routes here */
//get all the users()
//this returns all the users in postman /users to display ALL USERS!! 
app.get('/users', (req, res) => {
  res.send(users)
})
  //get a single user
app.get('/users/1', (req, res) => {
  res.send(users[0])
})
  //This will POST a user
app.post('/users', (req, res) => {
  //we will need to ADD a NEW USER object to add to the USERS array
  //this is the new user
  let user = {
    "_id": 5,
    "name": "Sampson",
    "occupation": "lawyer",
    "avatar": "http://66.media.tumblr.com/5ea59634756e3d7c162da2ef80655a39/tumblr_nvasf1WvQ61ufbniio1_400.jpg"
  }

  //now we need to push the new user
  users.push(user);
  
  //We will need to return the newly created user
  res.send(user);
})
  //This will update a specific user!
app.put('/users/1', (req, res) => {
  //need to look up a user
  let user = users[0];

  //Change values on the user
  user.name = "Jane";  
  //return the updated user!
  res.send(users)[0]
})
//removes users from the array
app.delete('/users', (req,res) => {
  res.send(users.splice(1,1))
})

/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))