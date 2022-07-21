import './App.css';
import {useEffect} from "react";
import Conversation from "./components/Conversation";
import {useDispatch, useSelector} from "react-redux";
import {getCurrenciesRequest} from "./redux/conversationReducer";
import Preloader from "./components/common/Preloader";
import {Route, Routes} from "react-router-dom";
import styles from "./styles/Conversation.module.scss";
import Tab from "./components/common/Tab";

function App() {
    const dispatch = useDispatch()
    const fetchedData = useSelector(state => state.conversation.fetchedData)
    const usd = useSelector(state => state.conversation.usd)
    const eur = useSelector(state => state.conversation.eur)
    const pln = useSelector(state => state.conversation.pln)
    useEffect(() => {
        dispatch(getCurrenciesRequest())
    }, [dispatch])
    if (!fetchedData) {
        return <div className='loading'><Preloader/></div>
    }
    return (
        <div className="App">
            <Conversation/>
            <Routes>
                <Route path={'/tab1'} className={styles.tab} element={<Tab currency={usd}/>}/>
                <Route path={'/tab2'} className={styles.tab} element={<Tab currency={eur}/>}/>
                <Route path={'/tab3'} className={styles.tab} element={<Tab currency={pln}/>}/>
            </Routes>
        </div>
    );
}

export default App;
