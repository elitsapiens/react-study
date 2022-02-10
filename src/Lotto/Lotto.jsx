// Hook는 렌더링 될 때 전체가 재실행되는 점이 있다. 클래스는 render 영역만 재실행된다.
// Hook는 순서가 중요하다. -조건문안에 넣으면 안되고 무조건 최상위에 둔다. 함수나 반복문안에는 왠만해서는 넣지 말 것
// useMemo - 값을 기억한다. 두번째 인자가 바뀔때 값을 다시 기억
// useCallback - 함수를 기억한다.  두번째 인자가 바뀔때 함수를 다시 실행
// useEffect - 내부를 실행한다. 두번째 인자가 바뀌면 다시 실행
// https://youtu.be/IuAcxCce_bY
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Ball from "./Ball";

function getWinNumbers () {
    console.log('getNumbers');
    const candidate = Array(45).fill().map((v,i) => i + 1);
    const suffle = [];
    while(candidate.length > 0){
        let start = Math.floor(Math.random() * candidate.length);
        suffle.push(candidate.splice(start,1)[0]);
    }
    const bonusNumber = suffle[suffle.length - 1];
    const winNumberss = suffle.slice(0,6).sort((p,c) => p - c);
    return [...winNumberss, bonusNumber];
}

const Lotto = () => {
    const lottoNumbers = useMemo(() => getWinNumbers(), []); // 값을 기억한다
    const [winNumbers, setWinNumbers] = useState(lottoNumbers);
    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = useState();
    const [redo, setRedo] = useState(false);
    const timeout = useRef([]);

    // useEffect 패턴
    useEffect(() => {
        // ajax 별도 호출
    },[]); //componetDidMount만 하고 싶은경우

    const mounted = useRef(false);
    useEffect(() => {
        if(!mounted.current) {
            mounted.current = true;
        } else {
            // ajax 호출
        }
    },[/*변경되는값*/]); //componetDidUpdate만 하고 싶은 경우
    // useEffect 패턴
    
    useEffect(() => {
        for (let i = 0; i< winNumbers.length - 1; i++) {
            timeout.current[i] = setTimeout(() => {
                setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]]);
            }, (i+1) * 1000);
        }
        
        timeout.current[6] = setTimeout(() => {
            setBonus(winNumbers[6]);
            setRedo(true);
        }, 7000);
        
        return () => { // componentWillunmount 실행
            timeout.current.forEach((v) => {clearTimeout(v)});
        }
    },[timeout.current]) // 빈배열이면 componentDidMount 와 동일
    // 배열요소가 있으면 componentDidMount 와 componentDidUpdate 둘 다 수행

    // useCallback에서 쓰이는 state 값은 두번째 인자인 배열에 담아야 한다.
    // 자식 컴포넌트에 함수 전달시에는 무조건 useCallback을 써야 한다. - 하지 않으면 자식이 매번 리렌더링이 된다 
    const onRedo = useCallback(() => {
        console.log('onRedo');
        console.log(winNumbers);
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeout.current = [];
    },[winNumbers]); // 두번째 배열값이 바뀌면 해당 함수를 다시 실행한다.

    return (
        <>
            <div>당첨 숫자</div>
            <div id="결과창">
                {winBalls.map((v) => <Ball key={v} number={v} />)}
            </div>
            <div>보너스번호</div>
            {bonus && <Ball number={bonus} />}
            {redo && <button onClick={onRedo}>한번더</button>}
        </>
    ) 

}

export default Lotto;