import styles from '../stylesheets/css modules/toolbar.module.css'

export default function Toolbar() {

    return (
        <div className={styles.toolbar}>
            <div className={styles.toolbox}>
                <h2> Files </h2>
                <h2> Colors </h2>
                <h2> Pen </h2>
                <h2> Online </h2>
                <h2> Chat </h2>
            </div>
        </div>
    )
}