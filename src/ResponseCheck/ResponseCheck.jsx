// hook에서는 this의 속성을  ref로 표현한다
// useState 는 값이 변화될때 렌더링이 다시 진행됨
// useRef 는 값이 변화해도 렌더링이 진행되지 않으니 화면이 바뀌지 않지만 값을 담고 있어야 한다면 useRef로 담는다
// ref는 current로 접근한다
// return 내부에서 컴포넌트관련 분기 처리는 삼항연산자나 && 를 이용한다. - 별도의 컴포넌트로 분리를 하는게 깔끔하다.
// return 내부에서 if문나 for문을 사용하려는 경우에는 즉시 실행할수를 사용하여 만들 수 있다.
import React from "react"

const ResponseCheck = () => {

    return (
        <>
        <div></div>
        </>
    )
}

export default ResponseCheck;