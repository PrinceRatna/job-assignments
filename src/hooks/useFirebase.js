import { useState } from "react";
import initializeFirebase from "../component/Login/firebase.init";

initializeFirebase()

const useFirebase=()=>{

    const [user,setUser]=useState({});


return {
    user,
}
}
export default useFirebase;


