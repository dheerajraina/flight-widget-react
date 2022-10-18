import TableCell from "./TableCell";

const TableRow =({flight})=>{
    console.log(flight.status);

    const words=Object.values(flight);
    // console.log("word = ",words);


    return(
        <tr>
            <td></td>
            {/*{words?.map((word,_index)=>(*/}

                <TableCell key={1} word={flight.departing}/>
                <TableCell key={2} word={flight.destination}/>
                <TableCell key={3} word={flight.flightNumber}/>
                <TableCell key={4} word={flight.gate}/>
                <TableCell key={5} word={flight.status}/>
            {/*))*/}
            {/*}*/}
        </tr>
    );
}

export  default  TableRow;
