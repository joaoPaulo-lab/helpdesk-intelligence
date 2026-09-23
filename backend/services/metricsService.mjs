import Database from 'better-sqlite3'

function initDB (){
    return new Database('./data/helpdesk-intelligence.db',{verbose:console.log})
}

// - [X] Criar `services/metricsService.mjs`.
// - [x] Definir quais métricas entram no MVP.
// - [x] Criar queries SQL para cada métrica.
// - [X] Calcular contagens por estado. 
// - [x] Calcular contagens por categoria.
// - [x] Calcular contagens por prioridade.
// - [x] Calcular o tempo médio de resolução, se existirem datas suficientes.
// - [X] Criar `routes/dashboard.mjs`.
// - [X] Criar o endpoint `GET /api/dashboard`.
// - [X] Testar os resultados com dados de exemplo.

function executarNaDB(sql){
    const db = initDB();

    const result = db.prepare(sql).all()

    db.close();
    
    return result;
}

export function tempoMedioDeResolucao(){
    

    let sql = `select
    avg (
    (julianday(resolved_at) - julianday(created_at)) * 24
    ) as media_horas
    from tickets
    where resolved_at is not null;`


    
    const db2 = initDB();
    let result = db2.prepare(sql).get();
    db2.close();

    return result;
}


export function quantidadePorPrioridade(){
    

    let sql = `select priority, count(*) as quantidade  from tickets
    group by priority;`

    return executarNaDB(sql);
}

export function quantidadePorCategoria(){

    let sql = `select category, count(*) as quantidade  from tickets
    group by category;`

    return executarNaDB(sql);
}
 
export function quantidadePorStatus(){

    
    let sql = `select status, count(*) as quantidade from tickets
    group by status;`
    
    
    return executarNaDB(sql);
}