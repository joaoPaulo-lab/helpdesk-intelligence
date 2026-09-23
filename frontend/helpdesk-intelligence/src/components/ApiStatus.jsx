import {useState, useEffect} from 'react';
import {healthCheck} from '../services/api.mjs'
import ErrorSpan from './ErrorSpan';
export default function(){

    const [apiStatus, setApiStatus] = useState("");
    const [apiStatusLoading, setApiStatusLoading] = useState("Carregando...");
    
    useEffect(()=>{

        async function checkApiHealth(){

            healthCheck().then(resultado=>{

                if(resultado.status !="sucesso") setApiStatus(<ErrorSpan error={resultado.data}/>)
                else setApiStatus(<>APIS IS GIGA HEALTHY</>)
                setApiStatusLoading("");

            })
        }
        checkApiHealth();

    },[])

    return <>
    {apiStatusLoading}
    <span>{apiStatus}</span>
    </>

}