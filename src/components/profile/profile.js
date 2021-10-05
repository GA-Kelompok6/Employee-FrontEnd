import axios from "axios";

const profileupdate = (userId, token) =>{
  const linkAPIProfile = `https://arcane-badlands-64583.herokuapp.com/users/${userId}`
  
        
        axios.get(linkAPIProfile,{
              headers: {
                'Authorization': 'Bearer ' + token
              }
       }).then(res =>{
         console.log(res.data)
       })




}


export default profileupdate;