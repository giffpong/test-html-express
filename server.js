const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.PORT || 3000);
