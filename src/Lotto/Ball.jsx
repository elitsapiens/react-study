import styled from "styled-components";
import React, { memo } from "react";

const StyledDiv = styled.div`
    display: inline-block;
    border: 1px solid black;
    border-radius: 20px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    text-align: center;
    margin-right: 20px;
`;

const Ball = memo(( {number }) => {

    let background;

    if(number <= 10) {
        background = 'red';
    } else if (number <= 20) {
        background = 'orange';
    } else if (number <= 30) {
        background = 'yellow';
    } else if (number <= 40) {
        background = 'blue';
    } else {
        background = 'green';
    }

    return (
        <StyledDiv style={{ background }}>{number}</StyledDiv>
    );
});

export default Ball;
