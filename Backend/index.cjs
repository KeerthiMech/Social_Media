const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');


const credroute = require('./Route/credentialsroute.cjs');
const homeroute = require('./Route/togglebarroute.cjs');

const app = express();
const port = 3000;
const mongodbURL = "mongodb+srv://rhkeerthimongo:Vasannmongo@cluster0.evcwuds.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
app.use(bodyparser.json());
app.use(express.json());

app.get("/",(req,res) => {
  res.send("Hello World");
});
app.use("/auth",credroute);
app.use('/home',homeroute);
app.listen(port,(req,res) => {
  console.log(`Server is running on port ${port}`);

});
mongoose.connect(mongodbURL)
.then(() => {
  console.log('Connected to MongoDB successfully');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});