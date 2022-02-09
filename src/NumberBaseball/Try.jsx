import React, {memo} from "react";

// memo => class 에서 PureComponent 역할을 대체한다.
const Try = memo(({tryInfo}) => {
    
    

    return(
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    );
});

export default Try;