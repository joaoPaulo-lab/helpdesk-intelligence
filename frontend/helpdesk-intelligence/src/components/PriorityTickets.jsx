import {useState, useEffect} from 'react'
import ErrorSpan from './ErrorSpan'
import TBody from './TBody'
import {quantidadePrioridade} from '../services/api.mjs'


export default function PriorityTickets(){

    const [quantidadePrioridadeState, setQuantidadePrioridadeState] = useState(false);
    const [quantidadePrioridadeLoading, setQuantidadePrioridadeLoading] = useState("Carregando...");
    const [requestError, setRequestError] = useState(false);

    useEffect(()=>{

        async function getQuantidadePrioridade() {

            quantidadePrioridade().then(resultado =>{ 
    
                if (resultado.status !="sucesso") {
                    setRequestError(<ErrorSpan error={resultado.data}/>)
                    
                }
                else setQuantidadePrioridadeState(resultado);

                setQuantidadePrioridadeLoading("");

            })

        }

        getQuantidadePrioridade();

    }, [])



    return <div className="card">

        <h3>Tickets por prioridade</h3>
        <table>
            <thead>
                <tr>
                    <th>
                        Prioridade
                    </th>
                    <th>Quantidade</th>
                </tr>
            </thead>
            
            {quantidadePrioridadeState.status ==="sucesso" && <TBody dados={quantidadePrioridadeState.data} />}

        </table>

        {quantidadePrioridadeLoading}

        {requestError && requestError}
        

        
    </div>
}