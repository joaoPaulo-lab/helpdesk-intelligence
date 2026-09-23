import Database from "better-sqlite3";

function initDB (){
    return new Database('./data/helpdesk-intelligence.db',{verbose:console.log})
}

export function selectTickets(filtros) {

     
    let sql = `select * from tickets where 1=1`+
    `${filtros.title ?` AND title like (?)` :'' }`+
    `${filtros.description ?` AND description like (?)` :'' }`+
    ` order by created_at asc;` 

    const db = initDB();

    let filtrosArray =[]
    //Verifica se na variavel filtros existem title e description, se sim adiciona o array
    if(filtros.title) filtrosArray.push(`%${filtros.title}%`)
    if(filtros.description) filtrosArray.push(`%${filtros.description}%`)

    
    //Se o array for maior que 0 chama a função com um desconstrutor no array
    let tickets =  filtrosArray.length > 0 ? db.prepare(sql).all(...filtrosArray) : db.prepare(sql).all();
    
    db.close()

    return {
        quantidade: tickets.length,
        tickets:tickets
    };
}    


export function selectTicketsById(id){
    const db = initDB();

    let ticket = db.prepare('select * from tickets where id = ?').get(id);

    db.close();

    return ticket;
}


export function selectTicketsLikeTitle(title){
    const db = initDB();

    let tickets = db.prepare('select * from tickets where title like (?)')

    tickets = tickets.all(`%${title}%`);

    db.close();

    return tickets;
}
