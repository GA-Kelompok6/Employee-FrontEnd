import axios from "axios";

const profileupdate = (userId, token) =>{
  const linkAPIProfile = `https://arcane-badlands-64583.herokuapp.com/users/${userId}`
  
  if (window.performance) {
    if (performance.navigation.type == 1) {
        
        axios.get(linkAPIProfile,{
              headers: {
                'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTViZGNiZWUyYmY2YjAwMTZmODdjNDMiLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE2MzM0MjA1MzF9.MuEiB411vxhZyxQFSB9q8vS3Rr2zvVJjq3Y8-5LYEhs'
              }
       }).then(res =>{
         console.log(res.data)
       })

    } else {
      alert( "This page is not reloaded");
    }
  }


}


export default profileupdate;