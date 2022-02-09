const { useRef } = require('react');
const React = require('react');
const { Component, useState } = React;

const WordRelay = () => {
    const [word, setWord] = useState('루크');
    const [value, setValue] = useState('');
    const [result, setReusult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(word[word.length - 1] === value[0]) {
            setReusult('ok');
            setWord(value);
            setValue('');
        } else {
            setReusult('Fail');
            setValue('');
        }
        inputRef.current.focus();
        
    }

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <label htmlFor="wordInput">글자를 입력하세요.</label>
                <input ref={inputRef} className="wordInputClass" id="wordInput" type="text" value={value} onChange={onChangeInput} />
                <button>클릭!</button>
            </form>
            <div>{result}</div>
        </>
    );
}

module.exports = WordRelay;