import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
  constructor(namespace = 'auth'){
    this.namespace = namespace;
  }

  async getAccessToken(){
    const tokenStored = await AsyncStorage.getItem(
      `${this.namespace}:token`,
    );
    console.log('💀 ~ file: authStorage.js ~ line 12 ~ AuthStorage ~ getAccessToken ~ tokenStored', tokenStored)

    return tokenStored ? JSON.parse(tokenStored) : [];
  }


  // * STORES AS {authenticate : { accessToken : " ....", __typename:"AuthenticatePayload"}}
  // TODO : CAN BE REFACTORED WHEN NEEDED.
  async setAccessToken(accessToken){
    await AsyncStorage.setItem(
      `${this.namespace}:token`,
      JSON.stringify(accessToken),
    );
  }

  async removeAccessToken(){
    await AsyncStorage.removeItem(`${this.namespace}:token`);
  }

}

export default AuthStorage;