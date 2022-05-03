import './App.css';
import { useState,useEffect} from 'react';

function App() {

const [inputValue, setInputValue] = useState({"name":"","age":"","race":""})
const [submitValue, setSubmitValue] = useState([])


const handleChange = (e) => {
  setInputValue({...inputValue,[e.target.name]: e.target.value})
}
 
useEffect(()=>{
  localStorage.setItem('inputValue',JSON.stringify(inputValue));
  // localStorage.setItem("inputValue",inputValue)
  localStorage.setItem('submitValue',JSON.stringify(submitValue))
  console.log(submitValue)
},[submitValue])

const handleSubmit = (e) =>{
  e.preventDefault()
  const submit = inputValue
  localStorage.setItem("submit",JSON.stringify(submit))
  setSubmitValue([...submitValue,inputValue])
};

const handleRemove = (e) =>{
  e.preventDefault();
  localStorage.removeItem('inputValue');
  localStorage.removeItem('submitValue')
}
  return (
    <div className="App">
      <form >
        <label>Name</label>
        <input type="text" name="name" value={inputValue.name}
        onChange={handleChange}/><br/>
        <label for="dropdown">Race</label>
        <select name="race" onChange={handleChange }>
          <option></option>
          <option value="black" >Black</option>
          <option value="white" >white</option>
          <option value="coloured" >coloured</option>
          <option value="indian" >indian</option>
          <option value="chinese" >chinese</option>
        </select><br/>
        <label>Age</label>
        <input type="number" name="age" value={inputValue.age}
        onChange={handleChange}/><br/>
        <button onClick={handleSubmit}>Submit</button>
      </form>
<div className='card'>
<ul>{submitValue.map((values,index)=>{
  return(
  <div key={index}>
    <p>{values.name}</p>
    <p>{values.race}</p>
    <p>{values.age}</p>
    <button onClick={handleRemove}>Delete</button>
  </div>
)})}</ul>
</div>


    </div>
  );
}

export default App;
