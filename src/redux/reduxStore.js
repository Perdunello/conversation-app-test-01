import {applyMiddleware, combineReducers, createStore} from "redux";
import conversationReducer, {conversationWatcher} from "./conversationReducer";
import createSagaMiddleware from 'redux-saga'

const reducers = combineReducers({
    conversation: conversationReducer
})
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(conversationWatcher)
export default store