import styles from "./Totals.module.css";
function Totals({children}) {
    return<div className = {styles.totals}>
        {children}
    </div>
}
export default Totals;