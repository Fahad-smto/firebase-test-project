
import { useState } from 'react';
import './App.css'
import app from './Firebase/firebase.config'
import { GoogleAuthProvider,getAuth, signInWithPopup } from "firebase/auth";



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


  return (
    <>
      
      <h1>Firebase + React</h1>
       <button onClick={handleGoogleSingIn}>google Sing In</button>
      {
        user &&
        <div className='card'>
          <h4>User :{user.displayName}</h4>
          <h4>email :{user.email}</h4>
          <h4>photo :{user.photoURL}</h4>
        </div>
      }
      
    </>
  )
}

export default App
