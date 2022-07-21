import styles from '../styles/Conversation.module.scss'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Conversation = () => {
    const isRejected = useSelector(state => state.conversation.isRejected)
    if (isRejected) {
        return <div className={styles.error}>
            Something went wrong...
        </div>
    }
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.content}>
                <div className={styles.tabs}>
                    <nav className={styles.tabItems}>
                        <NavLink to={'/tab1'}
                                 className={({isActive}) => (isActive ? [styles.tab, styles.active].join(' ') : [styles.tab])}
                        ><span>USD</span></NavLink>
                        <NavLink to={'/tab2'}
                                 className={({isActive}) => (isActive ? [styles.tab, styles.active].join(' ') : [styles.tab])}><span>EUR</span></NavLink>
                        <NavLink to={'/tab3'}
                                 className={({isActive}) => (isActive ? [styles.tab, styles.active].join(' ') : [styles.tab])}><span>PLN</span></NavLink>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default Conversation