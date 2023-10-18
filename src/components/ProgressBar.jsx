import { useContext } from "react";
import styles from "./ProgressBar.module.css";
import { ProvideContext } from "../App";

function ProgressBar() {
    const {index , questions} = useContext(ProvideContext)
    return <progress className={styles.progress} value={index} max={questions.length}></progress>
}
export default ProgressBar;