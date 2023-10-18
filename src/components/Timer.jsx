import { useEffect, useContext } from "react";
import styles from "./Timer.module.css";
import {ProvideContext} from "../App";

function Timer() {
    const {dispatch , timer , index} = useContext(ProvideContext);

    useEffect(function(){
        const interval = setInterval(() => dispatch({type : "time"}) , 1000);
        if (timer === 0 && index < 14) dispatch({type : "nextQuestion"});
        if (timer === 0 && index === 14) dispatch({type : "end"});
        return() => clearInterval(interval)
    },[dispatch , timer , index]);

    return <div className = {styles.timer}>
        {timer} s
    </div>
}
export default Timer;