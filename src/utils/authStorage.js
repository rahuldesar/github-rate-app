import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
  constructor(namespace = 'auth'){
    this.namespace = namespace;
  }

  async getAccessToken(){
    const tokenStored = await AsyncStorage.getItem(
      `${this.namespace}:token`,
    );

    return tokenStored ? JSON.parse(tokenStored) : [];
  }


  // * STORES only variable from accessToken : "......." of
  // * {authenticate : { accessToken : " ....", __typename:"AuthenticatePayload"}}

  // DONE : REFACTORED.
  async setAccessToken(accessToken){
    await AsyncStorage.setItem(
      `${this.namespace}:token`,
      JSON.stringify(accessToken),
    );
  }

  async removeAccessToken(){
    await AsyncStorage.removeItem(`${this.namespace}:token`);
  }

  async showAsyncStorage () { 
    console.log(AsyncStorage);
  }

}

export default AuthStorage;