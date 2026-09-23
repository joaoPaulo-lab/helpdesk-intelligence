import {useState, useEffect} from 'react';
import {tempoMedioDeResolucao} from '../services/api.mjs'
import ErrorSpan from './ErrorSpan'

export default function AvgTimeCard(){

    const [tempoMedioResolucao, setTempoMedioResolucao] = useState(false);
    
    const [tempoMedioResolucaoLoading, setTempoMedioResolucaoLoading] = useState("Carregando...")

    useEffect( ()=>{
        
        async function getTempoMedioResolucao() {
            tempoMedioDeResolucao().then(resultado =>{
                
                if(resultado.status !="sucesso") setTempoMedioResolucao(<ErrorSpan error={resultado.data} />)

                else setTempoMedioResolucao(resultado.data.media_horas)

                setTempoMedioResolucaoLoading("");
            })
                   
        }
        getTempoMedioResolucao();

    },[])


    return <div className="card">
        <h3>Tempo médio de resolução</h3>
        <div className="card-value">
            {tempoMedioResolucaoLoading}
            {tempoMedioResolucao}
        </div>
    </div>
}