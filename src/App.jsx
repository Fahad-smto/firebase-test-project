
import { useState } from 'react';
import './App.css'
import app from './Firebase/firebase.config'
import { GoogleAuthProvider,getAuth, signInWithPopup, signOut } from "firebase/auth";



const auth =getAuth(app);
const googleProvider = new GoogleAuthProvider();

function App() {

   const [user,setUser] = useState(null);
 
  const handleGoogleSingIn = () =>{
    signInWithPopup(auth,googleProvider)
    .then(result =>{
    const loggedUser = result.user
    console.log(loggedUser);
    setUser(loggedUser);
    })
    .catch(error=>{
      console.log(error)
    })
  }

  const handleSingOut =()=>{
    signOut(auth)
    .then(result=>{
      console.log(result)
      setUser(null);
    })
    .catch(error=>{
      console.log(error)
    })
  }

  return (
    <>
      
      <h1>Firebase + React</h1>
       {  user ?
           <button onClick={handleSingOut}>google Sing Out</button> :
           <button onClick={handleGoogleSingIn}>google Sing In</button> 
       }
      {
        user &&
        <div className='card'>
          <h4>User :{user.displayName}</h4>
          <h4>email :{user.email}</h4>
            <img  src={user.photoURL} alt="" />
        </div>
      }
      
    </>
  )
}

export default App
