import {useState, useEffect} from 'react';
import ErrorSpan from './ErrorSpan';
import {tickets} from '../services/api.mjs'

export default function Table() {
    
    const [ticketsState, setTicketsState] = useState(false);
    const [ticketsLoading, setTicketsLoading] = useState("Carregando...");
    const [requestError, setRequestError] = useState(false);

    useEffect(()=>{
    
        async function getTickets(){



            tickets().then(resultado =>{
              
                if( resultado.status != "sucesso") setRequestError(<ErrorSpan error={resultado.data}/>);
    
                else setTicketsState(resultado)
                
                console.log(resultado);
                setTicketsLoading("")

            })
        }
        
        getTickets();
    
    },[])

    return <>
    <table>
        <thead>
            <tr>

                <th>
                    Id
                </th>
                <th>
                    Ticket
                </th>
                <th>
                    Titulo
                </th>
                <th>
                    Categoria
                </th>
                <th>
                    Descrição
                </th>
                <th>
                    Prioridade
                </th>
                <th>
                    Status
                </th>
                <th>
                    Abertura
                </th>
                <th>
                    Resolução
                </th>
                <th>
                    Resolução Desc
                </th>
            </tr>
        </thead>
        <tbody>
        {   ticketsState && ticketsState.data.tickets.map(
            ticket =>                                      
            <tr key={ticket.id}>
                                        
                    <td>{ticket.id}</td>
                    <td>{ticket.ticket_number}</td>
                    <td>{ticket.title}</td>
                    <td>{ticket.category}</td>
                    <td>{ticket.description}</td>
                    <td>{ticket.priority}</td>
                    <td>{ticket.status}</td>
                    <td>{ticket.created_at}</td>
                    <td>{ticket.resolved_at}</td>
                    <td>{ticket.status}</td>
                    <td>{ticket.resolution}</td>

                </tr>

            )
        }
        </tbody>
    </table>
    {ticketsLoading && ticketsLoading}
    {requestError && requestError}
</>

}