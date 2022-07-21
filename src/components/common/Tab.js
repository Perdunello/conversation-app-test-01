import styles from '../../styles/Tab.module.scss'
import {useEffect, useRef, useState} from "react";

const Tab = ({currency}) => {
    const [currencyValue, setCurrencyValue] = useState(currency)
    const ref = useRef()
    useEffect(() => {
        setCurrencyValue(Math.round(ref.current.value * currency * 10000) / 10000)
    }, [currency])
    const count = () => {
        setCurrencyValue(Math.round(ref.current.value * currency * 10000) / 10000)
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setCurrencyValue(Math.round(ref.current.value * currency * 10000) / 10000)
        }
    }
    return <div className={styles.mainWrapper}>
        <div className={styles.inputWrapper}>
            <input className={styles.input} defaultValue='1' ref={ref} type="number" onKeyDown={handleKeyDown}/>
        </div>
        {Math.round(currencyValue * 10000) / 10000}
        <div>
            <button onClick={count}>Press</button>
        </div>
    </div>
}
export default Tab