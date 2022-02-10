import React, { useCallback } from "react";
import styled from "styled-components";
import { CLICK_CELL } from "./TicTacToe";


const StyledTd = styled.td`
    border: 1px solid black;
    width: 40px;
    height: 40px;
    text-align: center;
`;

const BoardCell = ({rowIndex, cellIndex, dispatch, cellData}) => {
    const cellClick = useCallback(() => {
        if(cellData) {
            return;
        }

        dispatch({type: CLICK_CELL, row: rowIndex, cell: cellIndex});
    },[cellData]);

    return (
        <StyledTd onClick={cellClick}>{cellData}</StyledTd>
    )
}

export default BoardCell;