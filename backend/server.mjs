import express from 'express'
import extrairDadosCSV from './csvImporter.mjs'
import insertTickets from './insert-tickets.mjs';

import ticketsRouter from './routes/ticketsRouter.mjs'
import dashboardRouter from './routes/dashboardRouter.mjs'

import cors from 'cors'

const app = express();

app.use(cors());

app.use('/api/tickets',ticketsRouter);

app.use('/api/dashboard',dashboardRouter);

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/api/health',(req,res)=>{
    res.json({apiStatus:"healthy"});
});

app.get('/api/import', async (req,res)=>{
    console.log("fui chamado")
    let dados =  await extrairDadosCSV();
    
    res.json(insertTickets(dados.linhasValidas));
});

app.listen(3000,()=>{
    console.log("Escutando na porta 3000")
});