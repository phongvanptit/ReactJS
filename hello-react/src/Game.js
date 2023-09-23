import { useState } from "react"
import StartGame from "./StartGame"
function Game() {
    let [count, setClickCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <StartGame countStartClick={(value) => setClickCount(value)} />
            {/* <StartGame countStartClick={() => setClickCount(++count)} /> */}
        </div>
    )
} export default Game;