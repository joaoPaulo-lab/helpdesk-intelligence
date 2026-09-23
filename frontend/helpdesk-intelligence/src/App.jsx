import * as apiService from './services/api.mjs';

import React, { useEffect } from 'react';

import './App.css';

import Table from './components/Table';

import TBody from './components/TBody';

import ApiStatus from './components/ApiStatus';
import AvgTimeCard from './components/AvgTimeCard';
import PriorityTickets from './components/PriorityTickets';
import CategoryTickets from './components/CategoryTickets';
import StatusTickets from './components/StatusTickets';





// let ticketsRequest = await apiService.tickets();



// let quantidadeCategoria = await apiService.quantidadeCategoria()

// let quantidadeStatus = await apiService.quantidadeStatus()


export default function App(){

    const [tickets, setTickets] = React.useState(false);

    useEffect(()=>{
        //Por implementar logica dos tickets
        // async function getTickets(){
        //     apiService.tickets().then(resultado =>{
        //       
        //         if( resultado != "sucesso") setTickets(criaSpanError(resultado.data))

        //         else setTickets(resultado)

        //     })
        // }
        
        // getTickets();

    },[])
    

    return (
    <main>
        <header>
            <h1>Helpdesk Intelligence</h1>
        </header>

        <section>
            Overview s
            <p>
                <ApiStatus />
            </p>

            <article>

                <div className="cards-header">

                    <h2>cards de metricas</h2>

                </div>
                <div className="cards">

                    <AvgTimeCard />

                    <PriorityTickets />

                    <CategoryTickets />

                    <StatusTickets />
                   

                </div>

            </article> 


            <article>

                
            <div className="tickets">
                {/* Por implementar */}
                {/* {!tickets && "Carregando..."}

                { tickets.status === "sucesso" ? <Table tickets={tickets.data.tickets} /> : tickets} */}
            </div>

            </article>
        </section>
    </main>
    )
}



