import React, { useState } from 'react'

const Contact = () => {
  const[detail, setDetail]=useState({
    fullname:'',
    email:'',
    feedback:''
  })
  const[details,setDetails]=useState([]);
  const doChange=(e)=>{
const {value,name}=e.target;
setDetail((olddata)=>{
  return{
    ...olddata,
    [name]:value
    
  }
 
})
  }
  
  const Submit=(sub)=>{
    sub.preventDefault();
    if(detail.fullname && detail.email && detail.feedback){
      const datas={...detail,id: new Date().getTime().toString()}
      setDetails([...details,datas])
      
      setDetail({fullname:'',email:'',feedback:''});
    }
    else{
      alert("Fill all the data please...");
    }
   
  }
  
  return (
    <>
     <form className="form">
          <h1>Ticket Sewa</h1>
          <h3>Login</h3>
          
          <label  for="name">Name</label><br/>
          <input type="text"  name="fullname" autoComplete='off' value={detail.fullname}  onChange={doChange}  placeholder="name" required/>
          <label for="name">Email</label><br/>
          <input type="email" autoComplete='off' name="email"   value={detail.email} onChange={doChange}  placeholder="e-mail" required/>
          <label for="name">Feedback</label><br/>
          <input className='feed' type="text" autoComplete='off' value={detail.feedback} onChange={doChange}    name="feedback" placeholder="feedback" required/>
          <button onClick={Submit}>Submit</button>
          <p>Already a member?<span class="log"><a href="#">Login</a></span>  </p>
        </form>
        {details.map((preval)=>{
          const{fullname,email,feedback}=preval;
return(
  <div className="details" key={preval.id}>
  
   <h1>Name: {fullname}</h1>
    <h1>Email: {email}</h1>
    <h1>Feedback:{feedback}</h1>
  <h1>Thankyou {fullname} for your feedback and submitting the form.</h1>
</div>
)
        })}

       
    </>
  )
}

export default Contact;
