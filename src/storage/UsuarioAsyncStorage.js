import AsyncStorage from '@react-native-community/async-storage';

//Key para recuperar el String que se guarda
const USUARIO_KEY = '@usuario:key';

//Se recibe un usuario en JSON y se tranforma a String
async function saveUsuario(usuario) {
  try {
    await AsyncStorage.setItem(USUARIO_KEY, JSON.stringify(usuario));
    return JSON.stringify(usuario);
  } catch (error) {
    console.log('error al guardar: ' + error.message);
    return 'Error de sintaxis';
  }
}

async function getUsuario() {
  try {
    const item = await AsyncStorage.getItem(USUARIO_KEY);
    return JSON.parse(item);
  } catch (error) {
    console.log('Error al recuperar:' + error.message);
    return null;
  }
}

async function deleteUsuario() {
  try {
    await AsyncStorage.removeItem(USUARIO_KEY);
    const item = await AsyncStorage.getItem(USUARIO_KEY);
    return item == null ? 'usuario removido' : 'usuario no removido';
  } catch (error) {
    console.log('Error al eliminar' + error.message);
    return 'Error de sintaxis';
  }
}

export {saveUsuario, getUsuario, deleteUsuario};
