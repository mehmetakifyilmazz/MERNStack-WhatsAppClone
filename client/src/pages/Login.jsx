import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';



const Login = () => {
    const dispatch = useDispatch ();
    const signInGoogleFunc = ()=> {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
  .then((result) => {
     const user= result.user;
 dispatch({type:'LOGIN', payload: user})
    })
}
  return (
    <div className='h-screen bg-gray-50 flex items-center justify-center'>
      <div className='w-1/3 h-2/3 bg-white rounded-lg flex flex-col items-center justify-center gap-1'>
  <img className='w-44' src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Whatsapp-512.png" alt = "" />
  <div className='font-bold text-3xl'>WHATSAPP LOGIN SAYFASI </div>
  <div onClick={signInGoogleFunc}className='border mt-5 px-4 py-2 rounded-lg bg-green-600 text-white cursor-pointer hover:opacity-90'>Google ile Giriş Yap</div>
      </div>
    </div>
  )
}

export default Login
