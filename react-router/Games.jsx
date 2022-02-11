import React from "react";
import { BrowserRouter, HashRouter, Route, Link, Routes } from "react-router-dom";
import NumberBaseball from '../src/NumberBaseball/NumberBaseball';
import TicTacTo from '../src/TicTacToe/TicTacToe';
import Lotto from '../src/Lotto/Lotto';

const Games = () => {
    return (
        <BrowserRouter>
            <div>
                <Link to="/number-baseball">숫자야구</Link>
                <Link to="/tic-tac-toe">틱택토</Link>
                <Link to="/lotto-generator">로또생성기</Link>
            </div>
            <div>
                <Routes>
                    <Route path="/number-baseball" element={<NumberBaseball />} />
                    <Route path="/tic-tac-toe" element={<TicTacTo/>} />
                    <Route path="/lotto-generator" element={<Lotto/>} />
                </Routes>  
            </div>
        </BrowserRouter>
    );
}

export default Games;