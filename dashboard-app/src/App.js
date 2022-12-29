import './App.css';
import {useState} from "react"
const _=require('lodash')

function App() {
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [allData,setAllData]=useState([])
  const [searchItem,setSearchItem]=useState("")
  const [searchData,setSearchData]=useState([])

  const Addelement=()=>{
    let newArr=[...allData]
    newArr.push({"firstName":firstName,"lastName":lastName,"email":email,"password":password})
    setAllData(newArr)
    console.log(newArr)
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
  }
  const SearchElement=()=>{
    if (searchItem.length>3){

    }
     
  }

  return (
    <div>
      <input type="text" placeholder='Firstname'value={firstName} onChange={(vlu)=>{
        setFirstName(vlu.target.value)
      }}/><br/>
      <input type="text" placeholder='Lastname'value={lastName} onChange={(vlu)=>{
        setLastName(vlu.target.value)
      }}/>
      <input type="email" placeholder='Email' value={email} onChange={(vlu)=>{
        setEmail(vlu.target.value)
      }}/>
      <input type="password" placeholder='Password' value={password} onChange={(vlu)=>{
        setPassword(vlu.target.value)
      }}/>
      <button onClick={Addelement}>Submit</button>
      <input type="text" placeholder='Search...' value={searchItem} onChange={(vlu)=>{
        setSearchItem(vlu.target.value)
      }}/>
      <button onClick={SearchElement}>Search</button>
    </div>
  );
}

export default App;
