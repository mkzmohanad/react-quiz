import { useContext } from "react";
import { ProvideContext } from "../App";
import Button from "./Button";
import styles from "./EndScreen.module.css"

function EndScreen() {
    const {points , dispatch} = useContext(ProvideContext)

    function restart() {
        dispatch({type : "restart"});
    }
    return <div className = {styles.end}>
        <h1 className = {styles.heading}>Congratulations🎉🎉</h1>
        <h4 className = {styles.points}>Your Total Points {points} / 280</h4>
        <Button onClick = {restart}>Restart</Button>
    </div>
}
export default EndScreen;