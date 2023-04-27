require('dotenv').config();
const express = require('express');
//const cors = require('cors');

const app = express();
app.use(express.json());
//app.use(cors());
const port = 3000;


const pontoController = require('./controllers/PontoController.js');
const database = require('./database/database.js');
const Ponto = require('./models/ponto.js');


app.get('/pontos', pontoController.getPontos);


app.get('/', pontoController.sincronizar);

app.post('/pontos', pontoController.addPonto);

app.listen(port, ()=>{
    console.log(`App running on port ${port}.`);
});