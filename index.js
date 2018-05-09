//this requires in the express module
const express = require('express');
require('./services/passport');

//this creates the app
const app = express();
//calls the authRoutes file by using app
//require('./routes/authRoutes')(app);

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
