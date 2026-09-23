export default function Table({tickets}) {

    return <table>
                    <thead>
                        <tr>

                            <th>
                                Id
                            </th>
                            <th>
                                Ticket
                            </th>
                            <th>
                                Titulo
                            </th>
                            <th>
                                Categoria
                            </th>
                            <th>
                                Descrição
                            </th>
                            <th>
                                Prioridade
                            </th>
                            <th>
                                Status
                            </th>
                            <th>
                                Abertura
                            </th>
                            <th>
                                Resolução
                            </th>
                            <th>
                                Resolução Desc
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tickets.map(
                                ticket =>                                      
                                    <tr key={ticket.id}>
                                        
                                        <td>{ticket.id}</td>
                                        <td>{ticket.ticket_number}</td>
                                        <td>{ticket.title}</td>
                                        <td>{ticket.category}</td>
                                        <td>{ticket.description}</td>
                                        <td>{ticket.priority}</td>
                                        <td>{ticket.status}</td>
                                        <td>{ticket.created_at}</td>
                                        <td>{ticket.resolved_at}</td>
                                        <td>{ticket.status}</td>
                                        <td>{ticket.resolution}</td>

                                    </tr>

                            )
                        }
                    </tbody>
                </table>

}