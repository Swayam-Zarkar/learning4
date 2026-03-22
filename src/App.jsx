import React, { useEffect } from 'react'
import axios from 'axios'
import { Bookmark } from 'lucide-react'
import Card from './components/Card'
import { useState } from 'react'
const App = () => {

const [UserData, setUserData] = useState([]);
const [index, setindex] = useState(1);

  const  getData =async()=>{
    const response=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    
    setUserData(response.data);
    
    
   
  }

useEffect(function(){
  getData()
},[index])

let printuserdata=<h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>loading..</h3>;
if(UserData.length>1){
  printuserdata=UserData.map(function(elem,idx){
    if(localStorage.getItem(`${elem.id}`)===null){
      localStorage.setItem(`${elem.id}`,'false');
    }
    return <div key={idx}>
     <Card elem={elem} UserData={UserData} setUserData={setUserData}/>
    </div>
  })
}

  return (
    <div className='h-screen bg-black p-4 overflow-auto text-white' >
      
      <div className='flex h-[80%] flex-wrap gap-4 p-2'>
        {printuserdata}
      </div>

      <div className='flex justify-center items-center p-4 gap-4'>
        <button style={{opacity: index==1 ?0.5:1}}
        onClick={()=>{
          if(index>1){

          setindex(index-1);
          setUserData([]);
        }
        }} className='bg-amber-400 cursor-pointer active:scale-95  text-black rounded px-4 py-2 font-semibold'>prev</button>


          <h3>Page {index}</h3>

        <button onClick={()=>{
          setUserData([]);
          setindex(index+1);
        }} className='bg-amber-400 cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'>next</button>
      </div>

      </div>
  )
}

export default App