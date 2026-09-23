
const url = 'http://localhost:3000/api/'
const dash ='dashboard/'



async function apiCaller(api){
    try {
        // Simular internet lenta
        const sleep = ms => new Promise(resolve=> setTimeout(resolve,ms))

        await sleep(1000);

        let response = await fetch(url + api);

        if (!response.ok) throw new Error(`Status da requisição ${response.status}`)
            
        const result = await response.json();
        
        // console.log(result);

        return {status:"sucesso", data: result}; 
        
    } catch (error) {
        return {status:"error", data:error.message};
    }



}

export function healthCheck(){
    return apiCaller('health');
}

export function tickets(){
    return apiCaller('tickets');
}

export function tempoMedioDeResolucao(){
    return apiCaller(dash + 'average-resolution')
}

export function quantidadeStatus(){
    return apiCaller(dash + 'status-quantity')
}

export function quantidadeCategoria(){
    return apiCaller(dash + 'category-quantity')
}

export function quantidadePrioridade(){
    return apiCaller(dash + 'priority-quantity')
}
