import fs from 'fs'
import csv from 'csv-parser'
// import tickets from './tickets.mjs';



async function leitorCSV() {
    return  await new Promise((resolve,reject)=>{
        
        let tickets = []
        fs.createReadStream('./tickets.csv')
        .pipe(csv({
            separator: ',',
            mapHeaders: ({ header }) => header.trim()
        }))
        .on('data', (row) => {
            tickets.push(row);
        })
        .on('end',()=>resolve(tickets))
        .on('error', reject)
    })
}


function trataLinhas(linhas){

let linhasValidas = []
let linhasInvalidas = []


for (const linha of linhas){
    if(linha.ticket_number && 
        linha.title && 
        linha.status && 
        linha.priority &&
        linha.created_at) {

        let chavesEvalores = Object.entries(linha);
        let linhaTratada ={}

        for (let CE of chavesEvalores){
            linhaTratada[CE[0]] = CE[1].length == 0 ? "NULL" : CE[1]
        }
    
        linhasValidas.push(linhaTratada)

    }
    else{ 
        linhasInvalidas.push(linha);
    }
}




console.log(`Existem ${linhas.length} linhas`)
console.log(`Existem ${linhasValidas.length} linhas VALIDAS`)
console.log(`Existem ${linhasInvalidas.length} linhas INVALIDAS`)

//TODO só retornar se a planilha possuir somente linhas validas

let statusImportacao = ""

if(linhasValidas.length == linhas.length) statusImportacao = "sucesso"
else if (linhasInvalidas.length != 0 && linhasInvalidas.length != linhas.length) statusImportacao = "com erros"
else statusImportacao = "erro"

return {
    status: statusImportacao,
    linhasValidas: linhasValidas,
    linhasInvalidas: linhasInvalidas
}

}


export default async function extrairDadosCSV(){
    
    let tickets = await leitorCSV();
    
    return trataLinhas(tickets);

}



// `   ticket_number TEXT NOT NULL UNIQUE, --OBRIGATORIA

//     title TEXT NOT NULL, OBRIGATÓRIA
//     description TEXT,

//     status TEXT NOT NULL, OBRIGATÓRIA
//     priority TEXT NOT NULL, - OBRIGATÓRIA

//     category TEXT,
//     subcategory TEXT,

//     client TEXT,
//     requester TEXT,

//     assigned_to TEXT,

//     created_at TEXT NOT NULL, OBRIGATÓRIA
//     updated_at TEXT,
//     resolved_at TEXT,

//     resolution TEXT`
