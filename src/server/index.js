const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

const userRoutes = require("./routes/user");

const port = process.env.PORT || 3001;

var whitelist = ['http://localhost', 'http://localhost:3000']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

const app = express();
app.use(logger('dev'));
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.use("/user", userRoutes);

app.listen(port, function() {
  console.log(`Server is running or port ${port}`);
});

module.exports = app;