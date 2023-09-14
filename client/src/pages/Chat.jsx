import React from 'react'

import {MdOutlineLocationSearching} from 'react-icons/md'



const Chat = () => {
  return (
    <div className='w-3/4 chatDetail'>
      <div className='h-16 bg-gray-200 px-4 py-4 flex items-center justify-between'>
             <div className='flex items-center gap-3'>
              <img className='w-10 rounded-full' src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' alt=''/>
             <div>
             <div className='font-bold'></div>
             <div className='text-xs'> </div>
      </div>
    </div>
                <div className='flex items-center gap-3'>
                <MdOutlineLocationSearching size={25} className='cursor-pointer text-gray-700'/>
                <MdOutlineLocationSearching size={25} className='cursor-pointer text-gray-700'/>
                </div>
    </div>

    <div className='h-4/5 overflow-y-auto'>
      
  
            <div>
           
          </div>  

     
      <div>
      
             </div>

    
      

    <div className='fixed bottom-0 w-3/4'>
   
    </div>
    </div>
    
    </div>

  )
}

export default Chat
