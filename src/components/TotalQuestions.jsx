import { useContext } from "react";
import {ProvideContext} from "../App"
import styles from "./TotalQuestions.module.css" 

function TotalQuestions() {
    const {index,questions} = useContext(ProvideContext);
    return <h3 className={styles.numOfQuestions}>Questions {index + 1}/{questions.length} </h3>
}
export default TotalQuestions;