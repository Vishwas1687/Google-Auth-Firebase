import React, { useEffect } from 'react';
import {auth,provider} from './config'
import {signInWithPopup} from 'firebase/auth'
import Home from './Home'
const login = () => {
    const [values,setValues]=useState('')
  const handleClick=()=>{
    signInWithPopup(auth,provider).then((data)=>{
        setValues(data.user.email)
        localStorage.setItem("email",data.user.email)
    })
  }

  useEffect(()=>{
    setValues(localStorage.getItem("email"))
  },[])
  return (
    <>
    {values?<Home/>:
    (
    <div>
      <button onClick={handleClick}>Sign In with Google</button>
    </div>)}
    </>
  );
}

export default login;
