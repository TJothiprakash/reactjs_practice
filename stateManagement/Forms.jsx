import React,{useState} from 'react'

const MyForm = ()=> {


 const [name, setName]= useState("");
 const [email, setEmail]= useState("");
  const [phone, setPhone]= useState("");
  return (
     <>
     
<form>
    <input type = "text " placeholder ="name" value ={name} onChange={e => setName(e.target.value)}/>
<input type = "text " placeholder ="email" value ={email} onChange={e => setEmail(e.target.value)}/>
<input type = "text " placeholder ="phone"  value ={phone} onChange={e => setPhone(e.target.value)}/>

<p>
  Name: {name}, <br/>Email: {email},<br/> Phone: {phone}
</p>



</form>


     </>

  )
}

export default MyForm;