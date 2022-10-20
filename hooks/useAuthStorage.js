import { useContext } from "react";

import AuthStorageContext from "../src/contexts/AuthStorageContext";  

/**
 * 
 * * Custom hook to provide AuthStorageContext.
 * @param  =>useContext(AuthStorageContext)
 */
const useAuthStorage = () => {
  return useContext(AuthStorageContext);
}

export default useAuthStorage;