import styles from "../components/Header.module.css";

function Header({children}) {
    return <>
        <h1 className = {styles.title}>React Quiz 💥</h1>
        {children}
    </>
}

export default Header;
// windows + . => for the emoji