const express = require('express');
require('express-async-errors');
const routes = require('./routes');
const cors = require('cors');


const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.use(cors({
  origin: '*',
}));

app.use(routes);

app.use((error, request, response, next) => {
  console.log('### ERROR ###');
  console.log(error);
  response.sendStatus(500);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
