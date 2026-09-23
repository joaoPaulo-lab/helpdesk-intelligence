import {useState, useEffect} from 'react';

import {quantidadeStatus} from '../services/api.mjs';

import ErrorSpan from './ErrorSpan';
import TBody from './TBody';


export default function StatusTickets(){
    const [quantidadeStatusState, setQuantidadeStatus] = useState(false);

    const [quantidadeStatusLoading, setQuantidadeStatusLoading] = useState("Carregando...");

    const [requestError, setRequestError] = useState(false);


    useEffect(()=>{

        async function getQuantidadeStatus() {
        quantidadeStatus().then(resultado=>{

                if (resultado.status != "sucesso") setRequestError(<ErrorSpan error={resultado.data}/>)
                else setQuantidadeStatus(resultado)

                setQuantidadeStatusLoading("");
            })
        }

        getQuantidadeStatus();
    },[])


    return  <div className="card">
        <h3>Tickets por Status</h3>

        <table>

            <thead>
                <tr>
                    <th>
                        Status
                    </th>
                    <th>Quantidade</th>
                </tr>
            </thead>
            
            {quantidadeStatusState.status ==="sucesso" && <TBody dados={quantidadeStatusState.data} /> }

        </table>

        {quantidadeStatusLoading && quantidadeStatusLoading}
        {requestError && requestError}
    
    </div>
}