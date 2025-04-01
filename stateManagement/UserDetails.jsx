import React,{useState} from 'react'


const UserDetails = ()=>{

const [userData, setUserData] = React.useState({
  name:"null",
  email :"null"
  , phone:0

});

function updateUserData(){
  setUserData({...userData,
   email : "jothiprakash888@gmail.com",
   phone : 9585578792,
   name:"Jothiprakash T "});
}


  return (
  <>
  <p> Name : {userData.name}</p>

<p>  Email : {userData.email}</p>
<p>Phone : {userData.phone}</p>
<button onClick={updateUserData}> updateUserData</button>

  </>  
  )
}


export default UserDetails;