import {useState} from "react";
import TableLetter from "./TableLetter";

const TableCell =({word,index})=>{


    return(
        <td>
            {Array.from(word).map((letter,_index)=>(

                <TableLetter key={index} letter={letter} index={_index}/>

            ))}
        </td>
    );
}

export  default  TableCell