// useReducer state를 줄여주는 역할임, redux와 다르게 비동기다
import React, { useCallback, useEffect, useReducer } from "react"
import Board from "./Board";

// 상수 모음
export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TRUN = 'CHANGE_TRUN';
export const RESET_GAME = 'RESET_GAME';

const initialState = {
    winner: '',
    turn: 'O',
    tableData: [
        ['','',''], 
        ['','',''], 
        ['','','']
    ],
    recentCell: '' 
}

// 리듀서를 구현함
const reducer = (state, action) => {
    switch (action.type) {
        case SET_WINNER:

        case CLICK_CELL:
            console.log(state);
        case CHANGE_TRUN:

        case RESET_GAME:

        default:
            return state;
    }
}

const TicTacToe = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { tableData, turn, winner, recentCell } = state;

    const onClickTable = useCallback(() => {
        dispatch({type: SET_WINNER, winner: 'O'});
    });

    useEffect(() => {
        // const [row, cell] = recentCell;

        // if (row < 0) {
        //     return;
        // }
        // let win = false;
        // if (tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn) {
        //     win = true;
        // }
        // if (tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn) {
        //     win = true;
        // }
        // if (tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn) {
        //     win = true;
        // }
        // if (tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn) {
        //     win = true;
        // }

        // if (win) {

        // } else {

        // }
    },[])

    return(
        <>
            <Board onClickTable={onClickTable} tableData={tableData} dispatch={dispatch}></Board>
        </>
    );
}

export default TicTacToe;