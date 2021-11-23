import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import History from './HistoryComponent';
import Row from 'react-bootstrap/Row';
import './Keypad.css';


function Keypad() {
    const [timeStampArray,setTimeStampArray]=useState([]);
    function onClickChange(e){
        let timeStamp=  new Date();
        let formattedTime = timeStamp.getDate()+'-'+timeStamp.getMonth()+'-'+timeStamp.getFullYear()+' '+timeStamp.toLocaleTimeString();
        let propObject = {timeStamp: formattedTime,label:e.target.innerText};
        setTimeStampArray(timeStampArray =>[...timeStampArray, propObject]);
        window.localStorage.setItem('keypad', JSON.stringify(timeStampArray));
    }
  return (
    <div className="keypad">
        
        <Container className="keypad-container">
        <h2>Keypad</h2>
        <Row>
        <button onClick={onClickChange}> 1</button>
        <button onClick={onClickChange}> 2</button>
        <button onClick={onClickChange}> 3</button>
        </Row>
        <Row>
        <button onClick={onClickChange}> 4</button>
        <button onClick={onClickChange}> 5</button>
        <button onClick={onClickChange}> 6</button>
        </Row>
        <Row>
        <button onClick={onClickChange}> 7</button>
        <button onClick={onClickChange}> 8</button>
        <button onClick={onClickChange}> 9</button>
        </Row>
    </Container>
    {timeStampArray && 
    <History timeStamp={timeStampArray} />}
    </div>
  );
}

export default Keypad;
