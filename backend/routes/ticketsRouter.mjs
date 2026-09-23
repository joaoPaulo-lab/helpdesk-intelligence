import express from "express";
import {selectTickets,selectTicketsById, selectTicketsLikeTitle} from "../tickets.mjs";

const router = express.Router();


router.get('/:id',(req,res)=>{

    const id = req.params.id;

    //Se voltar como undefined enviar 404 ticket não encontrado.
    
    let resultado = selectTicketsById(id)

    if(!resultado) res.status(404).send({erro:"Ticket não encontrado, verifique se o ID existe."})

    res.json(resultado);
});

router.get('/',(req,res)=>{

    let filtros = req.query;

    try {

        let resultado = selectTickets(filtros)
        res.status(200).json(resultado);
        
    } catch (error) {
        res.status(404).json({mensagem: "Bad request, verifique a requisição", error:error})
        
    }
        

});


export default router;
/*
- [X] Criar `routes/tickets.mjs`.
- [X] Separar as rotas da configuração principal do servidor.
- [X] Criar uma rota para listar tickets.
- [X] Criar uma rota para consultar um ticket por ID.
- [ ] Adicionar pesquisa por texto.
- [ ] Adicionar filtros básicos.
- [ ] Adicionar ordenação.
- [ ] Adicionar paginação.
- [ ] Tratar IDs inexistentes.
- [ ] Devolver respostas de erro consistentes.
- [ ] Testar os endpoints com Postman ou ferramenta semelhante.
*/