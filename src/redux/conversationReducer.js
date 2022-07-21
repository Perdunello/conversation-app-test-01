import {takeEvery, call, put} from 'redux-saga/effects'
import API from "../api/api";

const SET_USD = 'SET_USD'
const SET_EUR = 'SET_EUR'
const SET_PLN = 'SET_PLN'
const GET_CURRENCIES_REQUEST = 'GET_CURRENCIES_REQUEST'
const SET_FETCHED_DATA = 'SET_FETCHED_DATA'
const SET_REJECTED = 'SET_REJECTED'
const initialState = {
    usd: null,
    eur: null,
    pln: null,
    fetchedData: false,
    isRejected: false,
}

const conversationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USD:
            return {
                ...state,
                usd: action.payload
            }
        case SET_EUR:
            return {
                ...state,
                eur: action.payload
            }
        case SET_PLN:
            return {
                ...state,
                pln: action.payload
            }
        case SET_REJECTED:
            return {
                ...state,
                isRejected: true
            }
        case SET_FETCHED_DATA:
            return {...state, fetchedData: true}
        default:
            return state
    }
}
const setUsd = (payload) => {
    return {type: SET_USD, payload}
}
const setEur = (payload) => {
    return {type: SET_EUR, payload}
}
const setPln = (payload) => {
    return {type: SET_PLN, payload}
}

export const getCurrenciesRequest = () => {
    return {type: GET_CURRENCIES_REQUEST}
}
const setFetchedData = () => {
    return {type: SET_FETCHED_DATA}
}
export const setRejected = () => {
    return {type: SET_REJECTED}
}

function* getCurrencies() {
    const usd = yield call(API.getUsd)
    if (usd.status === 200) {
        yield put(setUsd(usd.data.rates.USD))
        const eur = yield call(API.getEur)
        if (eur.status === 200) {
            yield put(setEur(eur.data.rates.EUR))
            const pln = yield call(API.getPln)
            if (pln.status === 200) {
                yield put(setPln(pln.data.rates.PLN))
            } else {
                yield put(setRejected())
            }
        } else {
            yield put(setRejected())
        }
    } else {
        yield put(setRejected())
    }
    yield put(setFetchedData())
}


export function* conversationWatcher() {
    yield takeEvery(GET_CURRENCIES_REQUEST, getCurrencies)
}

export default conversationReducer