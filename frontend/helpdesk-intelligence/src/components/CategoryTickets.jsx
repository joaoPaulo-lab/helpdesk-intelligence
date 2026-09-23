import {useState, useEffect} from 'react'
import {quantidadeCategoria} from '../services/api.mjs'
import ErrorSpan from './ErrorSpan';
import TBody from './TBody';

export default function CategoryTickets(){

    const [quantidadeCategoriaState, setQuantidadeCategoria] = useState(false);

    const [quantidadeCategoriaLoading, setQuantidadeCategoriaLoading] = useState("Carregando...");

    const [requestError, setRequestError] = useState(false);


    useEffect(()=>{
        async function getQuantidadeCategoria (){
        
                quantidadeCategoria().then(resultado =>
                {
                    
                    if (resultado.status != "sucesso") setRequestError(<ErrorSpan error={resultado.data}/> ) 
                    else setQuantidadeCategoria(resultado)

                    setQuantidadeCategoriaLoading("");
                }
            )
        }

        getQuantidadeCategoria();

    },[]);

    return <div className="card">
        <h3>Tickets por categoria</h3>

        <table>
            <thead>
                <tr>
                    <th>
                        Categoria
                    </th>
                    <th>Quantidade</th>
                </tr>
            </thead>
            
            {quantidadeCategoriaState.status ==="sucesso" && <TBody dados={quantidadeCategoriaState.data}  /> }

        </table>
        {quantidadeCategoriaLoading}

        {requestError && requestError}
        
        
    </div>
}