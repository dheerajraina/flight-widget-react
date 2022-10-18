import TableCell from "./TableCell";

const TableRow =({flight})=>{
    console.log(flight.status);

    const words=Object.values(flight);
    // console.log("word = ",words);


    return(
        <tr>
            <td></td>
            {/*{words?.map((word,_index)=>(*/}

                <TableCell key={1} word={flight.departing} index={1}/>
                <TableCell key={2} word={flight.destination} index={2}/>
                <TableCell key={3} word={flight.flightNumber} index={3} />
                <TableCell key={4} word={flight.gate}  index={4}/>
                <TableCell key={5} word={flight.status}  index={4}/>
            {/*))*/}
            {/*}*/}
        </tr>
    );
}

export  default  TableRow;
