import React from "react";
import styled from "styled-components";
import BoardRow from "./BoardRow";

const StyledTable = styled.table`
    border-collapse: collapse;
`;

const Board = ({tableData, dispatch}) => {
    
    return (
        <StyledTable>
            <tbody>
                {Array(tableData.length).fill().map((tr, i)=>{
                    return <BoardRow key={i} rowIndex={i} rowData={tableData[i]} dispatch={dispatch} ></BoardRow>
                })}
            </tbody>
        </StyledTable>
    )
};

export default Board;