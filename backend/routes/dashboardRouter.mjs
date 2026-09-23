import express from 'express';

import * as metrics from '../services/metricsService.mjs';

const router = express.Router();

router.get('/priority-quantity',(req,res)=>{
    res.json(metrics.quantidadePorPrioridade());
})

router.get('/category-quantity',(req,res)=>{
    res.json(metrics.quantidadePorCategoria());
})

router.get('/status-quantity',(req,res)=>{
    res.json(metrics.quantidadePorStatus());
})

router.get('/average-resolution',(req,res)=>{
    res.json(metrics.tempoMedioDeResolucao());
})

export default router;