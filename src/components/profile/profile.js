import axios from "axios";

const profileupdate = () =>{
  linkAPIProfile = ''

  if (window.performance) {
    if (performance.navigation.type == 1) {
        
        axios.get(linkAPIProfile);

    } else {
      alert( "This page is not reloaded");
    }
  }


}


export default profileupdate;