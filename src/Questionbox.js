import React from "react";
import "./Questionbox.css"

const Questionbox=(props)=>{
    let  {questionText,queImgUrl,askedBy,category,paidAmt,ansBy} = props;
      return(
  <div class="question">
   <img src={queImgUrl} class="card-img-top" alt="..."/>
    <div className=" text-center">
    <h4>{questionText}</h4>
    </div>
    <div className="category">
      <h5>Category: {category}</h5>
      <span>Paid Amount: {paidAmt}</span>
      <span>Answered By: {ansBy}</span>
      </div>
      <p className="card-text"><small className="text-muted">Asked By: {askedBy}</small></p>
      </div>
      )
  }
  
  export default Questionbox;