import React, { memo } from "react";
import BoardCell from "./BoardCell";

const BoardRow = memo(({rowData, rowIndex, dispatch}) => {
    return (
        <tr>
            {Array(rowData.length).fill().map((td, i)=>{
                return <BoardCell key={i} dispatch={dispatch}></BoardCell>
            })}
        </tr>
    )
});

export default BoardRow;