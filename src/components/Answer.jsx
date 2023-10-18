import { createContext, useContext, useState } from "react";
import styles from "./answer.module.css"
import { ProvideContext } from "../App";

export const ProviderHasAnswered = createContext();

function Answer({option , question}) {
    const { dispatch , hasAnswered } = useContext(ProvideContext);
    const [selectedAnswer , setSelectedAnswer] = useState("");
    
    function selectAnswer() {
        if (hasAnswered) return null;
        setSelectedAnswer(option);
        if (question.options[question.correctOption] ===  option) {
            dispatch({type : "answering" , payload : question.points});
        }
        else {
            dispatch({type : "answering" , payload : 0});
        }
    }

    return <button className={`${styles.answer}
     ${selectedAnswer === option ?
        hasAnswered ?
        question.options[question.correctOption] ===  option ? styles.correctAnswer : styles.wrongAnswer
        : "" 
        : ""}
     ${hasAnswered ? styles.hasAnswered : ""}
     ${hasAnswered ? question.options[question.correctOption] ===  option && styles.correctAnswer : ""}`}
    onClick = {() => selectAnswer()}>{option}</button>
}
export default Answer;