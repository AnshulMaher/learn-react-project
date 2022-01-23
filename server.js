const path = require('path');
const express = require('express');
const cors = require('cors');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

/* implement cors */
app.use(cors());
app.options('*', cors());

/* body parser, parse data from body into req.body */
app.use(express.json({ limit: '10kb' }));

/* parses incoming requests with urlencoded payloads into req.body */
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

/* serving static files */
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const server = app.listen(port, (error) => {
  if (error) throw error;
  console.log(`listening on port ${port}...`);
});
