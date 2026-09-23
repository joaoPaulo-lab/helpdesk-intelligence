import Database from "better-sqlite3";

const db = new Database('./data/helpdesk-intelligence.db', );


export default function insertTickets(tickets){

    const trans = db.transaction(tickets =>{

        const query = db.prepare(`INSERT INTO tickets (
            ticket_number,
            title,
            description,
            status,
            priority,
            category,
            subcategory,
            client,
            requester,
            assigned_to,
            created_at,
            updated_at,
            resolved_at,
            resolution)
            VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
        )

        for(const ticket of tickets){
            query.run(
                ticket.ticket_number,
                ticket.title,
                ticket.description,
                ticket.status,
                ticket.priority,
                ticket.category,
                ticket.subcategory,
                ticket.client,
                ticket.requester,
                ticket.assigned_to,
                ticket.created_at,
                ticket.updated_at,
                ticket.resolved_at,
                ticket.resolution
            )   
        }
    })
    
    let statusImportacaoDB = ""
    try {
        trans(tickets);
        statusImportacaoDB =  `${tickets.length} exportados com sucesso`
    } catch (error) {
        statusImportacaoDB = "Erro durante a exportação, valide o arquivo"
    } 
    db.close()
    return statusImportacaoDB;
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
