import { useContext } from "react";
import Button from "./Button";
import styles from "./StartScreen.module.css";
import {ProvideContext} from "../App";

function StartScreen() {
    const {dispatch} = useContext(ProvideContext);
    function startQuiz() {
        dispatch({type : "loading"})
    }

    return <div className = {styles.start}>
        <h1 className = {styles.startHeading}>Start Quiz Now! 🔥</h1>
        <Button onClick = {startQuiz}>Start</Button>
    </div>
}
export default StartScreen;