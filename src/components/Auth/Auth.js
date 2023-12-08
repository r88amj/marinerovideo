import React, { useState, useEffect } from "react";
import { app, auth } from "../../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function Auth() {
  const [authUser, setAuthUser] = useState("");

  useEffect(() => {
    const listenAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
        listenAuth();
    }
  },[]);

  const userSignOut = () =>{
    signOut(auth).then(() => {
        console.log('Se ha cerrado la sesión')
    }).catch(error => console.log(error))
  }

  return <div>
    
  </div>;
}

export default Auth;
