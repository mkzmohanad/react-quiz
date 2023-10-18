import Answer from "./Answer";
import styles from "./QuizArea.module.css";

function QuizArea({question}) {
    return <div className={styles.quizArea}>
        <h2 className = {styles.questionTitle}>{question.question}</h2>
        <div className = {styles.answers}>
            {question.options.map((option) => <Answer option = {option} question = {question} key = {option}/>)}
        </div>
    </div>
}
export default QuizArea;