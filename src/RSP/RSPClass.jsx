import React from "react";


const rspCoord = {

}

// https://tofusand-dev.tistory.com/19 -- 라이프 사이클 관련 문서
//  React lifeCycle (in case Class)
//  constructor -> render -> ref -> componentDidMount
// (setState, props가 변경될 때) -> shouldComponentUpdate(true) -> render -> componentDidUpdate
// 부모가 나를 없앴을 경우 -> componentWillUnmount ->  소멸 
class RSPClass extends React.Component {
    state = {
        result: '',
        imgCoord: 0,
        score: 0
    };
    
    interval;
    // 컴포넌트가 첫 렌더링 된 후, 
    // 여기서 비둉기 요청을 많이 함
    componentDidMount () {
        const {imgCoord} = this.state;
        this.interval = setInterval(() => {
            if(imgCoord === '0') {

            }
        }, 1000);
    }
    
    // 렌더링 후
    componentDidUpdate () {

    }

    // 컴포넌트가 제거되기 직전
    // 비동기 요청 정리를 많이 함
    componentWillUnmount () {
        clearInterval(this.interval);
    }

    render() {
        return (
            <>
                <h1></h1>
            </>
        )
    }

}

export default RSPClass;