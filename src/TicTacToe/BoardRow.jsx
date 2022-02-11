import React, { memo } from "react";
import BoardCell from "./BoardCell";

const BoardRow = memo(({rowData, rowIndex, dispatch}) => {
    return (
        <tr>
            {Array(rowData.length).fill().map((td, i)=>{
                return <BoardCell key={i} rowIndex={rowIndex} cellIndex={i} dispatch={dispatch} cellData={rowData[i]}></BoardCell>
            })}
        </tr>
    )
});

export default BoardRow;