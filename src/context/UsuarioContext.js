import React, { createContext, useReducer } from 'react'
import { saveUsuario, deleteUsuario, getUsuario, getUsuarioFetch } from '../storage/UsuarioAsyncStorage'
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

//Funcion reductora con dos estados, el estado inicial y el payload
//El payload recupera la informacion de las acciones, de los tres casos siguientes
const usuarioReducer = (state = initialState, payload) => {
    switch (payload.type) {
        //Usuario en sesion
        case 'sign-in':
            console.log('Bienvenido a la app')
            return { ...state, usuario: payload.data, activo: true }

        //Usuario al iniciar sesion
        case 'sign':
            getUsuarioFetch(payload.data).then((userAuth) => {
                if(userAuth.auth){
                    saveUsuario(payload.data).then((msg) => {
                        console.log('Usuario guardado localmente')
                    })
                    Snackbar.show({
                        text: 'Inicio de sesion exitoso',
                        duration: Snackbar.LENGTH_LONG
                    })
                    return { ...state, usuario: payload.data, activo: true }
                }else{
                    Snackbar.show({
                        text: 'Inicio de sesion fallido',
                        duration: Snackbar.LENGTH_LONG
                    })
                }
            })
            return state
            
            
        //Usuario sale de sesion    
        case 'sign-out':
            deleteUsuario().then((msg) => {
                console.log(msg)
            })
            Snackbar.show({
                text: 'Sesion cerrada',
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


