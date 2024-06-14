import React,  {useState} from 'react'
import './inputForm.css'







function Input() {

  const data ={

    title:'',
    openingText:'',
    release:''
  }
  const [inputData,setinputData] =useState(data)
  const [FinalData,setFinalData] =useState([])
  
  
  const changehandler =(e)=>{
     const{name,value} = e.target
     setinputData((prev)=>({
      
        ...prev,[name]:value,

  

     }))

     console.log(name,value)


  }
  const additem=()=>{
      setFinalData((prev)=> [...prev,inputData])
  }
  console.log(FinalData)
  
  return (
    <div className='container'>
  
    <label htmlFor ='title'>Title</label>
    <input  onChange={changehandler} 
    id ='title' 
    name='title' 
    value ={inputData.title}
    placeholder='enter title here'>
    </input>


    <label htmlFor ='OpeningText'>Opening Text</label>
    <input 
    onChange={changehandler} 
    type='text'
    className='op-text' 
    id ='openingText'  
    name='openingText' 
    value ={inputData.openingText} 
    placeholder='enter OpeningText here'></input>

    <label htmlFor ='release_date'>Release date</label>
    <input 
     onChange={changehandler} type ='date'
    id ='release'
    name='release' 
    value ={inputData.release} 
    
    
    ></input>

    <button onClick={additem}>Add Movie</button>

    </div>
  )
}

export default Input