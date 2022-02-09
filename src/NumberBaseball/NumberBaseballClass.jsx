import React from "react";
import Try from "./TryClass";

function getNumbers () {
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for(let i=0; i<4; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

class NumberBaseballClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '',
            value: '',
            answer: getNumbers(),
            tries: [] //react에서 push사용하면 안됨 (불변셩에 위배됨) - 리액트가 변경된 것을 갑지하지 못한다.
        };

        this.onSubmitForm = this.onSubmitForm.bind(this);
    }
    
    // arrow function을 사용하지 않을 경우는 constructor에서 bind 처리를 해야 함
    onSubmitForm (e) {
        e.preventDefault();
        if(this.state.value === this.state.answer.join('')) {
            this.setState({
                tries: [...this.state.tries, {try: this.state.value, result: '홈런'}],
                result: '홈런'
            })
        } else {
            const answerArray = this.state.value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;

            if(this.state.tries.length >= 9) {
                this.setState({
                    result: `10번 넘게 틀려서 실패 답은 ${answer.join('')} `
                })
            }
            
        }
    }

    onChangeInput = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return(
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {this.state.tries.map((v, index)=> {
                        <Try value={v} index={index}/>
                    })}
                </ul>
            </>
        )
    }
}

export default NumberBaseballClass;