import React from "react";
import './Keypad.css';

function History(props) {
    // let iterateArray = [];
    // if
    // iterateArray = JSON.parse(window.localStorage.getItem('keypad'));
    // console.log(iterateArray);
    
  return (
    <div className="keypad-history">
        <h2>History</h2>
    {props.timeStamp.map((timeSt, index) => (
        <div>
        <h2>{timeSt.label}</h2>
        <p>{timeSt.timeStamp}</p>
        </div>
    ))}
    </div>
  );
}

export default History;
