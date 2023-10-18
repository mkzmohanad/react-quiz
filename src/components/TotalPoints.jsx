import { useContext } from "react";
import { ProvideContext } from "../App";
import styles from "./TotalPoints.module.css";

function TotalPoints() {
    const {points} = useContext(ProvideContext)
    return <h3 className= {styles.points}>{points} / 280</h3>
}
export default TotalPoints;