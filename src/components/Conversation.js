import styles from '../styles/Conversation.module.scss'
import {NavLink} from "react-router-dom";

const Conversation = () => {
    return (
        <div className={styles.mainWrapper}>
            <nav className={styles.tabItems}>
                <NavLink to={'/tab1'}
                         className={({isActive}) => (isActive ? [styles.tab, styles.active].join(' ') : [styles.tab])}><span>USD</span>
                </NavLink>
                <NavLink to={'/tab2'}
                         className={({isActive}) => (isActive ? [styles.tab, styles.active].join(' ') : [styles.tab])}><span>EUR</span>
                </NavLink>
                <NavLink to={'/tab3'}
                         className={({isActive}) => (isActive ? [styles.tab, styles.active].join(' ') : [styles.tab])}><span>PLN</span>
                </NavLink>
            </nav>
        </div>
    )
}
export default Conversation