import axios from "axios";

const API = {
    getUsd() {
        return axios.get('https://api.exchangerate.host/latest?base=UAH&symbols=USD').then(response => response)
    },
    getEur() {
        return axios.get('https://api.exchangerate.host/latest?base=UAH&symbols=EUR').then(response => response)
    },
    getPln() {
        return axios.get('https://api.exchangerate.host/latest?base=UAH&symbols=PLN').then(response => response)
    }
}
export default API