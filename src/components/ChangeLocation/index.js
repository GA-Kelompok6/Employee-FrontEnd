import React from 'react'
import ChangeLocation from './ChangeLocation'
import Navbar from '../navsidebar';


export default function ChangeOffice() {

   const Location = details => {
      alert("HI")
      console.log(details)
   }

   return (
      <div>
         {/* <Navbar /> */}
         <ChangeLocation ChangeOffice={Location} />
      </div>
   )
}
