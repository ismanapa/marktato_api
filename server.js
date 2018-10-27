const express = require('express');
const bodyParser = require('body-parser');
const graphqlServer = require('./app/infraestructure/graphql');
const Connection = require('./app/infraestructure/dataContext/connection');

const dbConn = new Connection(process.env.mongodb);
dbConn.connect();

const app = express();

const helloworldController = require('./app/controllers/helloWorldController');

app.use('/api/helloworld', helloworldController);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

graphqlServer.applyMiddleware({ app });

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running', process.env.PORT || 3000);
});
