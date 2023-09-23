import { useState } from "react";
function StartGame(props) {
    let [count, setClickCount] = useState(0);
    return (
        <button onClick={() => {
            setClickCount(++count);
            props.countStartClick(count);
        }}>Start</button>
    )
} export default StartGame;