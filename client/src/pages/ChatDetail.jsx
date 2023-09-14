import React from 'react'
import {MdOutlineLocationSearching} from 'react-icons/md'
import { useState, useEffect } from 'react';
import InputEmoji, { async } from "react-input-emoji";
import { useParams } from 'react-router-dom';
import * as api from '../api/index'
import moment from 'moment'
import { useSelector } from 'react-redux';
import Pusher from 'pusher-js'

const ChatDetail = () => {

  const [text, setText] = useState("");
  const [personName, setPersonName] = useState(null)
  const [messages, setMessages] = useState([])
  const {user} =(useSelector(state => state.user))

  console.log (user, "user");

  const handleOnEnter = async(text) => {
    const messageContent = {
         name: user?. displayName,
          message: text,
          timestamp: new Date(),
          uid: user?.uid,
          roomId: "65007839fe368234aee27496"
    }
     const {data} = await api.createMessageApi(messageContent)
  }

  const {id} = useParams();
  console.log(id,"id")

  
 useEffect(()=> {

  const pusher = new Pusher('65007839fe368234aee27496', {
      cluster: 'eu'
    });
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      setMessages(prev => [...prev, data])
    });
} ,[] ) 


  useEffect (()=>{

    if(id){
           const detailFunc = async() => {
                   const {data} = await api.detailRoomApi(id)
                   setPersonName(data)
           }

           const detailMessageFunc = async () => {
            const {data} = await api.detailMessageApi(id)
            setMessages(data)
            
           }
           detailMessageFunc()
           detailFunc()
    }
  },[id])

  //console.log("personName", personName)

  return (
    <div className='w-3/4 chatDetail'>
      <div className='h-16 bg-gray-200 px-4 py-4 flex items-center justify-between'>
             <div className='flex items-center gap-3'>
              <img className='w-10 rounded-full' src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' alt=''/>
             <div>
             <div className='font-bold'>{personName?.name}</div>
             <div className='text-xs'>{moment(personName?.createdAt).format("MMM Do YY")} </div>
      </div>
    </div>
                <div className='flex items-center gap-3'>
                <MdOutlineLocationSearching size={25} className='cursor-pointer text-gray-700'/>
                <MdOutlineLocationSearching size={25} className='cursor-pointer text-gray-700'/>
                </div>
    </div>

    <div className='h-4/5 overflow-y-auto'>
      {
        messages?.map((message,i)=> (

            message?.name === user.displayName ?
            <div className='w-[400px] bg-green-300 rounded-md p-2 m-2 ml-auto'>
            <div>{message?.message}</div>
            <div className='text-xs flex items-center justify-end'>      {moment(message?.createdAt).format("MMM Do YY")}</div>
          </div>  :
      <div className='w-[400px] bg-white rounded-md p-2 m-2 '>
      <div>{message?.message}</div>
      <div className='text-xs flex items-center justify-end'>      {moment(message?.createdAt).format("MMM Do YY")} </div>
             </div>

        ) )
      }

    <div className='fixed bottom-0 w-3/4'>
    <InputEmoji
      value={text}
      onChange={setText}
      cleanOnEnter
      onEnter={handleOnEnter}
      placeholder=""
    />
    </div>
    </div>
    
    </div>

  )
}

export default ChatDetail
