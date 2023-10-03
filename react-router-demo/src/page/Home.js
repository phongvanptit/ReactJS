import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function Home() {
    const [count, setCount] = useState(0);
    const [calculator, setCaculator] = useState(0);
    useEffect(() => setCaculator(count > 0 ? calculator + 2 : calculator), [count]);
    console.log("render....")
    const languageContext = useContext(LanguageContext)
    return <div>
        {languageContext === "en" ? <p>This is home page</p> : <p>Đây là trang chủ</p>}
        <p>Button click {count} time, calculator = {calculator} </p>
        <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
} export default Home;