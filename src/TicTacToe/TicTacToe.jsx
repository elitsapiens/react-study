// useReducer state를 줄여주는 역할임, redux와 다르게 비동기다
// https://velog.io/@noyo0123/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%98%88%EC%A0%9C-state-%EB%82%B4%EB%B6%80-%EB%B0%B0%EC%97%B4%EC%B2%98%EB%A6%AC-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%B6%94%EA%B0%80%EC%82%AD%EC%A0%9C%EC%88%98%EC%A0%95- 
// state 내부 배열 처리 방법
import React, { useCallback, useEffect, useReducer } from "react"
import Board from "./Board";

// 상수 모음
export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TRUN = 'CHANGE_TRUN';
export const RESET_GAME = 'RESET_GAME';

// useReducer 대한 초기값 데이터
const initialState = {
    winner: '',
    turn: 'O',
    tableData: [
        ['','',''], 
        ['','',''], 
        ['','','']
    ],
    recentCell: [-1, -1]
}

// 리듀서를 구현함
const reducer = (state, action) => {
    const { row, cell } = action;

    switch (action.type) {
        case SET_WINNER:
            return {
                ...state,
                winner: action.winner,
            }
        case CLICK_CELL:
            const tableData = [...state.tableData];
            tableData[row] = [...tableData[row]]; // immer라는 라이브러리로 가독성 해결
            tableData[row][cell] = state.turn;
            return {
                ...state,
                tableData: tableData,
                recentCell: [action.row, action.cell]
            };
            // dispatch({action: 'CHANGE_TURN'});
        case CHANGE_TRUN:
            return {
                ...state,
                turn: state.turn === 'O' ? 'X' : 'O',
            }
        case RESET_GAME:
            console.log('RESET_GAME');
            return {
                ...state,
                turn: 'O',
                tableData: [
                    ['','',''], 
                    ['','',''], 
                    ['','','']
                ],
                recentCell: [-1, -1] 
            }
        default:
            return state;
    }
}

const TicTacToe = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { tableData, turn, winner, recentCell } = state;

    const onClickTable = useCallback(() => {
        dispatch({type: SET_WINNER, winner: 'O'});
    },[]);

    useEffect(() => {
        const [row, cell] = recentCell;

        if (row < 0) {
            return;
        }
        
        // 틱택토 로직
        let win = false;
        
        if (tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn) {
            win = true;
        }
        if (tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn) {
            win = true;
        }
        if (tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn) {
            win = true;
        }
        if (tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn) {
            win = true;
        }

        if (win) { //승리시
            dispatch({type: SET_WINNER, winner: turn});
            dispatch({type: RESET_GAME});
        } else {
            let all = true; // all이 true면 무승부라는 뜻
            tableData.forEach((row) => { // 무승부 검사
                row.forEach((cell) => {
                    if(!cell) {
                        all = false;
                    }
                })
            })

            if(all) {
                dispatch({ type: SET_WINNER, winner: null});
                dispatch({ type: RESET_GAME });
            } else {
                dispatch({ type: CHANGE_TRUN });
            }
        }
    },[recentCell]);

    return(
        <>
            <Board tableData={tableData} dispatch={dispatch}></Board>
            {winner && <div>{winner}가 승리했습니다.</div>}
        </>
    );
}

export default TicTacToe;