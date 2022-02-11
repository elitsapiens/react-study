import React, { useCallback, memo, useEffect, useRef  } from "react";
import styled from "styled-components";
import { CLICK_CELL } from "./TicTacToe";


const StyledTd = styled.td`
    border: 1px solid black;
    width: 40px;
    height: 40px;
    text-align: center;
`;

const BoardCell = memo(({rowIndex, cellIndex, dispatch, cellData}) => {

    // 최적화를 위한 값 비교 방법
    const ref = useRef([]);
    
    useEffect(() => {
        console.log(rowIndex === ref.current[0], cellIndex === ref.current[1], dispatch === ref.current[2], cellData === ref.current[3])
    }, [rowIndex, cellIndex, dispatch, cellData])
    // 최적화를 위한 값 비교 방법
    const cellClick = useCallback(() => {
        if(cellData) {
            return;
        }

        dispatch({type: CLICK_CELL, row: rowIndex, cell: cellIndex});
    },[cellData]);

    return (
        <StyledTd onClick={cellClick}>{cellData}</StyledTd>
    )
});

export default BoardCell;