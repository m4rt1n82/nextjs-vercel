

import styles from "./StatLayout.module.css"


export const StatLayout = ({ children }) => {
    return (
        <>
        <div className={styles.cardStats}>
            {children}
        </div>
        </>
    )
}
