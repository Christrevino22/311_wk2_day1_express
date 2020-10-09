
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const { users } = require('./state')

/* BEGIN - create routes here */
//get all the usesrs
app.get('/users', function (req, res) {
  res.send(users)
})
//get a single user
app.get('users', function (req, res) {
  res.send(users)
})

app.post('/users', (req, res) => {
  let user = {
    "_id": 5,
    "name": "Sampson",
    "occupation": "lawyer",
    "avatar": "http://66.media.tumblr.com/5ea59634756e3d7c162da2ef80655a39/tumblr_nvasf1WvQ61ufbniio1_400.jpg" 
  }
})

/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))