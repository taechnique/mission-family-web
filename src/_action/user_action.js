import axios from 'axios'
import { LOGIN_USER, DUPCHECK_USER,REGISTER_USER } from './types'

const api = axios.create({
    baseURL: 'http://localhost:8364/api/users',
    headers: { "Content-Type": "application/json" }
})

export function dupCheckUser(data){
    const request = api.post('/dupCheck',data,{ timeout: 1000})
        .then(response =>
            response.data
        )
    return{
        type: DUPCHECK_USER,
        payload: request
    }
}

export function loginUser(data){
    const request = api.post('/login',data)
        .then(response => 
            response.data
        )
    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function registerUser(data){
    const request = api.post('/regist',data)
        .then(response => 
            response.data
            )
    return {
        type: REGISTER_USER,
        payload: request
    }
}