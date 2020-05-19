import React, { createContext, useReducer } from 'react'
import { saveUsuario, deleteUsuario } from '../storage/UsuarioAsyncStorage'
import Snackbar from 'react-native-snackbar'

//estado inicial del contexto
const initialState = {
    user: {
        nombre: '',
        apellido: '',
        email: '',
        password: ''
    },
    activo: false
}

//Funcion redutora con dos estados, el estado inicial y el payload
//El payload recupera la informacion de las acciones, de los tres caso siguientes
const usuarioReducer = (state = initialState, payload) => {
    switch (payload.type) {
        //Usuario en sesion
        case 'sign-in':
            console.log('Bienvenido a la app')
            return { ...state, usuario: payload.data, activo: true }
        //Usuario al iniciar sesion
        case 'sign':
            saveUsuario(payload.data).then((msg) => {
                console.log('Usuario guardado')
            })
            Snackbar.show({
                title: 'Inicio de sesion exitoso',
                duration: Snackbar.LENGTH_LONG
            })
            return { ...state, usuario: payload.data, activo: true }
        //Usuario sale de sesion    
        case 'sign-out':
            deleteUsuario().then((msg) => {
                console.log(msg)
            })
            Snackbar.show({
                title: 'Sesion cerrada',
                duration: Snackbar.LENGTH_LONG
            })

            return { ...state, usuario: payload.data, activo: false }

        default:
            return state
    }
}

//Se crea el contexto con un estado inicial
const UsuarioContext = createContext(initialState)

//Se crea el usuario proveedor
function UsuarioProvider(props) {
    const [login, loginAction] = useReducer(usuarioReducer, initialState)

    return (
        <UsuarioContext.Provider value={[login, loginAction]}>
            {props.children}
        </UsuarioContext.Provider>
    )
}

export { UsuarioContext, UsuarioProvider }


