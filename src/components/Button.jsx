import { useContext } from "react";
import styles from "./Button.module.css";
import {ProvideContext} from "../App";

function Button({children , onClick}) {
    const {hasAnswered} = useContext(ProvideContext);

    return <button className = {`${styles.button} ${!hasAnswered ? styles.blockButton : ""}`} onClick = {onClick}>{children}</button>
}
export default Button;