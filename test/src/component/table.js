import React from 'react';
import '../css/index.css';

function Table(props){
    const contents = props.tableContents;
    const table = contents.map((content, index)=>
        <TableRow key ={index} row={content}/>
    );
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                    {table}
                </tbody>
            </table>
        </div>
    );
}

function TableRow(props){
    const cellItems = props.row.map((item,index) =>
        <th key={index}>
            {item}
        </th>
    );
    return (
        <tr>{cellItems}</tr>
    );
}
export default Table;
