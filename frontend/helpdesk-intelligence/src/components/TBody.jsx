export default function TBody({dados}){
    console.log({dados})

    return  <tbody>
                                
        {
            dados.map(objeto => 
                {
                const chavesValores = Object.entries(objeto)

              
                
                return <tr key={chavesValores[0][1]}>
                    <td >{chavesValores[0][1]}</td> 
                    <td >{chavesValores[1][1]}</td>
                </tr>
                }
            )
        }
    </tbody>
}