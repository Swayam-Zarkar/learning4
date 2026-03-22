import React, { useEffect, useState } from 'react'
import {Heart} from 'lucide-react'
import { Trash } from 'lucide-react';
const Card = (props) => {


function news(props) {
  const newValue = like === "true" ? "false" : "true";

  setlike(newValue);
  localStorage.setItem(props.elem.id, newValue);
}
const [like, setlike] = useState('');
  useEffect(() => {
  const stored = localStorage.getItem(props.elem.id);
  if (stored) setlike(stored);
}, []);


  return (
    <div>
        <a href={props.elem.url} target='_blank'>
       <div className='h-40 w-full overflow-hidden rounded-xl bg-white'>
      <img className='h-full w-full object-cover ' src={props.elem.download_url}/>
   
    </div>
     </a>
    
     <div className='flex  justify-between'> 
    <h2 className='font-bold text-lg'>{props.elem.author}</h2>
   
   <Heart onClick={()=>{
    news(props);
   }} className={` cursor-pointer transition ${
       like ==='true' ? "fill-red-500 text-red-500" : "fill-none text-gray-500"
      }`} size={25} color="#db0000" />

      
    </div>
    
    
    </div>
  )
}

export default Card