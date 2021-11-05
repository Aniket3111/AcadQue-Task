import './App.css';
import React,{useState} from 'react'
import logo from "./images/logo.jpg"
import axios from "axios";
import Questionbox from './Questionbox';
import Spinner from './Spinner';


function App(){ 

  const [question,setquestion] = useState("");
  const [loading, setLoading] = useState()
  const [result,setresult] = useState([])
  const[api,setapi] = useState("")

  function handleChange(event){
    const question = event.target.value;
    setquestion(question)


  }
  function handleSubmit(event){
    event.preventDefault();
    setLoading(true);
    
    axios.get("https://hidden-ridge-05396.herokuapp.com/search?searchTerm="+question)
    .then(data=>{
      setresult(data.data)
      setLoading(false);
    })
    

  }
  return (
    <div className="main">
      <div className="head">
      <img src="./images/logo.jpg" alt="img"></img>
      <h1>AcadQue</h1>
      </div>
      
      <form onSubmit={handleSubmit} >
      <h1>Search a Question</h1>
        <div className="form-group">
          
        <input type="text" className="input-control" onChange={handleChange} placeholder="Enter your questions here" autocomplete="off"></input> 
        </div>
        <button type="submit" className="btn btn-dark">Submit</button>
      </form>
      <div className="movie-container ">
      {loading && <Spinner/>}
      { result.map((element)=>
      {
      return <div className="col md-3" key={element.id}>
      <Questionbox  questionText={element.questionText}  queImgUrl={element.queImgUrl} 
                askedBy={element.askedBy} category={element.category}
                paidAmt={element.paidAmt} ansBy={element.ansBy} />

    </div>
      })}
      </div>
</div>
    
  )
}

export default App;
